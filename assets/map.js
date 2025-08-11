// Enhanced team rendering function with world map
function renderTeam() {
  const roles = [
    { key: 'postdocs', selector: '[data-role="postdoc"]' },
    { key: 'phds', selector: '[data-role="phd"]' },
    { key: 'mscs', selector: '[data-role="msc"]' },
    { key: 'alumni', selector: '[data-role="alumni"]' }
  ];

  // Render team members in their sections
  roles.forEach(r => {
    const wrap = document.querySelector(r.selector);
    if (!wrap) return;
    const members = (typeof teamData !== 'undefined' && teamData[r.key]) || [];
    wrap.innerHTML = '';
    members.forEach(m => wrap.appendChild(memberCard(m)));
  });

  // Render world map with pins
  renderWorldMap();
}

function memberCard(member) {
  const card = document.createElement('div');
  card.className = 'bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow';
  
  const links = Object.entries(member.links || {}).map(([type, url]) => {
    const icons = {
      website: 'fas fa-globe',
      github: 'fab fa-github',
      linkedin: 'fab fa-linkedin',
      scholar: 'fas fa-graduation-cap'
    };
    
    return `<a href="${url}" class="text-slate-400 hover:text-indigo-600 transition-colors" target="_blank" rel="noopener">
      <i class="${icons[type]} text-sm"></i>
    </a>`;
  }).join('');

  card.innerHTML = `
    <div class="text-center">
      <div class="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-500">
        <i class="fas fa-user"></i>
      </div>
      <h3 class="font-semibold text-lg mb-1">${member.name}</h3>
      ${member.advisor ? `<p class="text-xs text-slate-500 mb-2">Advisor: ${member.advisor}</p>` : ''}
      ${member.current_position ? `<p class="text-sm text-slate-600 mb-3">${member.current_position}</p>` : ''}
      ${member.research_interests ? `<p class="text-sm text-slate-600 mb-3">${member.research_interests[0]}</p>` : ''}
      <div class="flex justify-center space-x-2">
        ${links}
      </div>
    </div>
  `;
  
  return card;
}

function renderWorldMap() {
  const mapImg = document.getElementById('worldMap');
  const pinsWrap = document.getElementById('pins');
  
  if (!mapImg || !pinsWrap) return;

  // Collect all team members with location data
  const allMembers = [];
  if (typeof teamData !== 'undefined') {
    Object.keys(teamData).forEach(role => {
      if (teamData[role] && Array.isArray(teamData[role])) {
        teamData[role].forEach(member => {
          if (member.location && member.location.coordinates) {
            allMembers.push({
              ...member,
              role: role,
              lat: member.location.coordinates[0],
              lon: member.location.coordinates[1]
            });
          }
        });
      }
    });
  }

  // Geographic projection function (Equirectangular projection)
  function project(lat, lon, width, height) {
    const x = (lon + 180) * (width / 360);
    const y = (90 - lat) * (height / 180);
    return { x, y };
  }

  // Country color mapping for visual grouping
  const countryColors = {
    'Portugal': '#ef4444',
    'Spain': '#f97316', 
    'France': '#3b82f6',
    'Italy': '#22c55e',
    'Germany': '#8b5cf6',
    'Japan': '#f59e0b',
    'South Korea': '#ec4899',
    'Egypt': '#06b6d4',
    'Poland': '#84cc16',
    'India': '#f43f5e',
    'China': '#6366f1'
  };

  function placePins() {
    if (!mapImg || !pinsWrap) return;
    
    pinsWrap.innerHTML = '';
    const rect = pinsWrap.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Group members by location to avoid overlapping pins
    const locationGroups = {};
    allMembers.forEach(member => {
      const key = `${member.lat},${member.lon}`;
      if (!locationGroups[key]) {
        locationGroups[key] = {
          lat: member.lat,
          lon: member.lon,
          country: member.location.country,
          city: member.location.city,
          members: []
        };
      }
      locationGroups[key].members.push(member);
    });

    // Create pins for each unique location
    Object.values(locationGroups).forEach((group, index) => {
      const { x, y } = project(group.lat, group.lon, width, height);
      
      // Ensure pins are within map bounds
      if (x < 0 || x > width || y < 0 || y > height) return;
      
      const pin = document.createElement('div');
      pin.className = 'absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group';
      pin.style.left = `${x}px`;
      pin.style.top = `${y}px`;
      pin.style.zIndex = '10';
      
      const color = countryColors[group.country] || '#64748b';
      const memberCount = group.members.length;
      
      pin.innerHTML = `
        <div class="relative">
          <!-- Pin dot -->
          <div class="w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse hover:animate-none transition-all duration-300 hover:scale-125" 
               style="background-color: ${color}">
          </div>
          
          <!-- Member count badge for multiple members -->
          ${memberCount > 1 ? `
            <div class="absolute -top-2 -right-2 w-5 h-5 bg-slate-900 text-white text-xs rounded-full flex items-center justify-center font-bold">
              ${memberCount}
            </div>
          ` : ''}
          
          <!-- Tooltip -->
          <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            <div class="font-semibold mb-1">${group.city}, ${group.country}</div>
            ${group.members.map(m => `<div class="text-xs">${m.name} (${m.role.slice(0, -1)})</div>`).join('')}
            <!-- Tooltip arrow -->
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      `;
      
      pinsWrap.appendChild(pin);
    });

    // Create legend
    createMapLegend(locationGroups);
  }

  function createMapLegend(locationGroups) {
    // Remove existing legend
    const existingLegend = document.querySelector('.map-legend');
    if (existingLegend) existingLegend.remove();

    // Count members by country
    const countryCounts = {};
    Object.values(locationGroups).forEach(group => {
      countryCounts[group.country] = (countryCounts[group.country] || 0) + group.members.length;
    });

    // Create legend
    const legend = document.createElement('div');
    legend.className = 'map-legend absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-slate-200 shadow-lg max-w-xs';
    legend.innerHTML = `
      <h3 class="font-semibold text-sm mb-3 text-slate-900">Team Origins</h3>
      <div class="space-y-2">
        ${Object.entries(countryCounts).map(([country, count]) => `
          <div class="flex items-center gap-2 text-xs">
            <div class="w-3 h-3 rounded-full border border-white shadow-sm" style="background-color: ${countryColors[country] || '#64748b'}"></div>
            <span class="text-slate-700">${country} (${count})</span>
          </div>
        `).join('')}
      </div>
      <div class="mt-3 pt-2 border-t border-slate-200">
        <div class="text-xs text-slate-500">
          <strong>${Object.keys(countryCounts).length}</strong> countries • 
          <strong>${Object.values(countryCounts).reduce((a, b) => a + b, 0)}</strong> members
        </div>
      </div>
    `;

    pinsWrap.appendChild(legend);
  }

  // Place pins when map image loads
  if (mapImg.complete) {
    setTimeout(placePins, 100); // Small delay to ensure DOM is ready
  } else {
    mapImg.addEventListener('load', () => {
      setTimeout(placePins, 100);
    });
  }

  // Re-place pins on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(placePins, 250);
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof renderTeam === 'function') {
      renderTeam();
    }
  });
} else {
  if (typeof renderTeam === 'function') {
    renderTeam();
  }
}