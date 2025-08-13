// Main JavaScript functionality for SARDINE Lab website

class SardineWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupScrollEffects();
        this.setActiveNavigation();
    }

    // Smooth scrolling for anchor links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }

    // Scroll effects for navigation
    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.classList.add('backdrop-blur-sm', 'bg-white/95');
                } else {
                    header.classList.remove('backdrop-blur-sm', 'bg-white/95');
                }
            }
        });
    }

    // Set active navigation based on current page
    setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.navlink');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || 
                (currentPage === 'index.html' && href === '#about') ||
                (currentPage === '' && href === '#about')) {
                link.classList.add('active');
            }
        });
    }

    // Utility function to format dates
    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Utility function to create filter buttons
    static createFilterButtons(container, filters, activeFilter, onFilterChange) {
        container.innerHTML = '';
        
        filters.forEach(filter => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${filter.value === activeFilter ? 'active' : ''}`;
            btn.textContent = filter.label;
            btn.onclick = () => onFilterChange(filter.value);
            container.appendChild(btn);
        });
    }

    // Utility function to debounce search input
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// News management
class NewsManager {
    constructor(newsData) {
        this.newsData = newsData;
        this.filteredNews = [...newsData];
        this.pagination = null;
    }

    setPagination(paginationManager) {
        this.pagination = paginationManager;
    }

    renderLatestNews(container, limit = 5) {
        const latestNews = this.newsData.slice(0, limit);
        container.innerHTML = '';

        latestNews.forEach(news => {
            const newsItem = document.createElement('article');
            newsItem.className = 'mb-8 pb-6 border-b border-slate-200 last:border-b-0 last:pb-0';
            
            // Type icon mapping
            const typeIcons = {
                'conference': 'fas fa-microphone',
                'publication': 'fas fa-file-alt',
                'award': 'fas fa-trophy',
                'funding': 'fas fa-euro-sign',
                'event': 'fas fa-calendar-alt',
                'team': 'fas fa-users',
                'release': 'fas fa-rocket',
                'service': 'fas fa-handshake'
            };
            
            newsItem.innerHTML = `
                <!-- Header -->
                <header class="mb-4">
                    <div class="flex items-center gap-4 text-sm text-slate-500 mb-2">
                        <time class="flex items-center gap-1">
                            <i class="fas fa-calendar text-xs"></i>
                            ${SardineWebsite.formatDate(news.date)}
                        </time>
                        <span class="flex items-center gap-1">
                            <i class="${typeIcons[news.type] || 'fas fa-info-circle'} text-xs"></i>
                            ${news.type.charAt(0).toUpperCase() + news.type.slice(1)}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 leading-tight hover:text-sardine-blue transition-colors">
                        ${news.title}
                    </h3>
                </header>
                
                <!-- Content -->
                <div class="news-content text-slate-700 prose prose-slate max-w-none">
                    ${news.content}
                </div>
                
                <!-- Footer -->
                <footer class="mt-2 pt-3">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-wrap gap-2">
                            ${news.tags.map(tag => 
                                `<span class="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">#${tag}</span>`
                            ).join('')}
                        </div>
                    </div>
                </footer>
            `;
            container.appendChild(newsItem);
        });
    }

    renderAllNews(container, paginationContainer) {
        if (!this.pagination) {
            console.error('Pagination manager not set for NewsManager');
            return;
        }

        this.pagination.setTotalItems(this.filteredNews.length);
        const { startIndex, endIndex } = this.pagination.getCurrentPageItems();
        const pageNews = this.filteredNews.slice(startIndex, endIndex);

        container.innerHTML = '';

        pageNews.forEach(news => {
            const newsItem = document.createElement('article');
            newsItem.className = 'mb-12 pb-8 border-b border-slate-200 last:border-b-0';
            
            // Type icon mapping
            const typeIcons = {
                'conference': 'fas fa-microphone',
                'publication': 'fas fa-file-alt',
                'award': 'fas fa-trophy',
                'funding': 'fas fa-euro-sign',
                'event': 'fas fa-calendar-alt',
                'team': 'fas fa-users',
                'release': 'fas fa-rocket',
                'service': 'fas fa-handshake'
            };
            
            newsItem.innerHTML = `
                <!-- Header -->
                <header class="mb-6">
                    <div class="flex items-center gap-4 text-sm text-slate-500 mb-2">
                        <time class="flex items-center gap-1">
                            <i class="fas fa-calendar text-xs"></i>
                            ${SardineWebsite.formatDate(news.date)}
                        </time>
                        <span class="flex items-center gap-1">
                            <i class="${typeIcons[news.type] || 'fas fa-info-circle'} text-xs"></i>
                            ${news.type.charAt(0).toUpperCase() + news.type.slice(1)}
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 leading-tight hover:text-sardine-blue transition-colors cursor-pointer">
                        ${news.title}
                    </h3>
                </header>
                
                <!-- Content -->
                <div class="news-content text-slate-700 prose prose-slate max-w-none">
                    ${news.content}
                </div>
                
                <!-- Footer -->
                <footer class="mt-2 pt-4">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-wrap gap-2">
                            ${news.tags.map(tag => 
                                `<span class="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">#${tag}</span>`
                            ).join('')}
                        </div>
                    </div>
                </footer>
            `;
            container.appendChild(newsItem);
        });

        // Render pagination
        this.pagination.render(paginationContainer);
    }

    filterNews(searchTerm) {
        this.filteredNews = this.newsData.filter(news => 
            news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            news.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (this.pagination) {
            this.pagination.currentPage = 1;
        }
    }
}

// Publications management
class PublicationsManager {
    constructor(publicationsData) {
        this.publicationsData = publicationsData;
        this.filteredPublications = [...publicationsData];
        this.sortBy = 'year';
        this.sortOrder = 'desc';
        this.pagination = null;
    }

    setPagination(paginationManager) {
        this.pagination = paginationManager;
    }

    renderRecentPublications(container, limit = 3) {
        const recentPubs = this.publicationsData
            .sort((a, b) => b.year - a.year)
            .slice(0, limit);

        container.innerHTML = '';

        recentPubs.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication-card bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-slate-200';
            
            // Type badge styling
            const typeColors = {
                'conference': 'bg-blue-100 text-blue-800',
                'journal': 'bg-green-100 text-green-800',
                'preprint': 'bg-orange-100 text-orange-800'
            };

            // Generate links
            const links = Object.entries(pub.links || {}).map(([type, url]) => {
                const icons = {
                    'paper': 'fas fa-file',
                    'code': 'fab fa-github',
                    'demo': 'fas fa-play',
                    'bibtex': 'fas fa-quote-right'
                };
                
                return `
                    <a href="${url}" class="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs hover:bg-slate-200 transition-colors" target="_blank" rel="noopener">
                        <i class="${icons[type]} mr-1"></i>
                        ${type.charAt(0).toUpperCase() + type.slice(1)}
                    </a>
                `;
            }).join('');
            
            pubElement.innerHTML = `
                <h3 class="font-semibold text-lg text-slate-900 mb-3">${pub.title}</h3>
                <p class="text-sm text-slate-600 mb-2">${pub.authors}</p>
                <p class="text-sm text-slate-600"><strong>${pub.venue}</strong> • ${pub.year}</p>
                <p class="text-sm text-slate-700 leading-relaxed mb-4 mt-4">${pub.abstract}</p>
                <div class="flex flex-wrap gap-2">
                    ${links}
                </div>
            `;
            container.appendChild(pubElement);
        });
    }

    renderPublications(container, publications) {
        container.innerHTML = '';

        publications.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication-card bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow';
            
            const typeColors = {
                'conference': 'badge-conference',
                'journal': 'badge-journal',
                'preprint': 'badge-preprint'
            };

            const links = Object.entries(pub.links || {}).map(([type, url]) => {
                const icons = {
                    'paper': 'fas fa-file',
                    'code': 'fab fa-github',
                    'demo': 'fas fa-play',
                    'bibtex': 'fas fa-quote-right'
                };
                
                return `
                    <a href="${url}" class="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm hover:bg-slate-200 transition-colors" target="_blank" rel="noopener">
                        <i class="${icons[type]} mr-1"></i>
                        ${type.charAt(0).toUpperCase() + type.slice(1)}
                    </a>
                `;
            }).join('');

            const keywords = pub.keywords.map(keyword => 
                `<span class="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">${keyword}</span>`
            ).join('');

            pubElement.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-slate-900 mb-2">${pub.title}</h3>
                        <p class="text-slate-700 mb-2">${pub.authors}</p>
                        <p class="text-slate-600 mb-2"><strong>${pub.venue}</strong> • ${pub.year}</p>
                    </div>
                    <span class="badge ${typeColors[pub.type]} ml-4">
                        ${pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                    </span>
                </div>
                
                <p class="text-slate-700 mb-4 leading-relaxed">${pub.abstract}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${keywords}
                </div>
                
                <div class="flex flex-wrap gap-2">
                    ${links}
                </div>
            `;
            
            container.appendChild(pubElement);
        });
    }

    renderAllPublications(container, paginationContainer) {
        if (!this.pagination) {
            console.error('Pagination manager not set for PublicationsManager');
            return;
        }

        this.pagination.setTotalItems(this.filteredPublications.length);
        const { startIndex, endIndex } = this.pagination.getCurrentPageItems();
        const pagePublications = this.filteredPublications.slice(startIndex, endIndex);

        this.renderPublications(container, pagePublications);
        this.pagination.render(paginationContainer);
    }

    filterPublications(searchTerm, typeFilter, yearFilter) {
        this.filteredPublications = this.publicationsData.filter(pub => {
            const matchesSearch = searchTerm === '' || 
                pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesType = typeFilter === 'all' || pub.type === typeFilter;
            const matchesYear = yearFilter === 'all' || pub.year.toString() === yearFilter;
            
            return matchesSearch && matchesType && matchesYear;
        });

        this.sortPublications();
        
        if (this.pagination) {
            this.pagination.currentPage = 1;
        }
    }

    sortPublications() {
        this.filteredPublications.sort((a, b) => {
            let valueA = a[this.sortBy];
            let valueB = b[this.sortBy];
            
            if (this.sortBy === 'title' || this.sortBy === 'authors') {
                valueA = valueA.toLowerCase();
                valueB = valueB.toLowerCase();
            }
            
            if (this.sortOrder === 'asc') {
                return valueA > valueB ? 1 : -1;
            } else {
                return valueA < valueB ? 1 : -1;
            }
        });
    }
}

// Initialize website
document.addEventListener('DOMContentLoaded', () => {
    new SardineWebsite();
});