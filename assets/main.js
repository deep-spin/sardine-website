// Main JavaScript functionality for SARDINE Lab website

class SardineWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupScrollEffects();
        this.setActiveNavigation();
    }

    // Mobile menu toggle
    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
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

    // Utility function to create pagination
    static createPagination(container, currentPage, totalPages, onPageChange) {
        container.innerHTML = '';

        // Previous button
        if (currentPage > 1) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'pagination-btn';
            prevBtn.innerHTML = '← Previous';
            prevBtn.onclick = () => onPageChange(currentPage - 1);
            container.appendChild(prevBtn);
        }

        // Page numbers
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);

        if (startPage > 1) {
            const firstBtn = document.createElement('button');
            firstBtn.className = 'pagination-btn';
            firstBtn.textContent = '1';
            firstBtn.onclick = () => onPageChange(1);
            container.appendChild(firstBtn);

            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'pagination-btn';
                ellipsis.textContent = '...';
                ellipsis.style.cursor = 'default';
                container.appendChild(ellipsis);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.onclick = () => onPageChange(i);
            container.appendChild(pageBtn);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'pagination-btn';
                ellipsis.textContent = '...';
                ellipsis.style.cursor = 'default';
                container.appendChild(ellipsis);
            }

            const lastBtn = document.createElement('button');
            lastBtn.className = 'pagination-btn';
            lastBtn.textContent = totalPages;
            lastBtn.onclick = () => onPageChange(totalPages);
            container.appendChild(lastBtn);
        }

        // Next button
        if (currentPage < totalPages) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'pagination-btn';
            nextBtn.innerHTML = 'Next →';
            nextBtn.onclick = () => onPageChange(currentPage + 1);
            container.appendChild(nextBtn);
        }
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
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.filteredNews = [...newsData];
    }

    renderLatestNews(container, limit = 5) {
        const latestNews = this.newsData.slice(0, limit);
        container.innerHTML = '';

        latestNews.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'border-b border-slate-200 last:border-b-0 pb-6 last:pb-0';
            
            newsItem.innerHTML = `
                <div class="flex items-start justify-between mb-2">
                    <h3 class="font-semibold text-lg text-slate-900 pr-4">${news.title}</h3>
                    <span class="text-sm text-slate-500 whitespace-nowrap">${SardineWebsite.formatDate(news.date)}</span>
                </div>
                <p class="text-slate-700 leading-relaxed">${news.content}</p>
                ${news.type === 'publication' ? '<div class="mt-2"><span class="badge badge-publication">Publication</span></div>' : ''}
            `;
            container.appendChild(newsItem);
        });
    }

    renderAllNews(container, paginationContainer) {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageNews = this.filteredNews.slice(startIndex, endIndex);

        container.innerHTML = '';

        pageNews.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            
            newsItem.innerHTML = `
                <div class="flex items-start justify-between mb-3">
                    <h3 class="font-semibold text-xl text-slate-900 pr-4">${news.title}</h3>
                    <span class="text-sm text-slate-500 whitespace-nowrap">${SardineWebsite.formatDate(news.date)}</span>
                </div>
                <p class="text-slate-700 leading-relaxed mb-3">${news.content}</p>
                ${news.type === 'publication' ? '<div><span class="badge badge-publication">Publication</span></div>' : ''}
            `;
            container.appendChild(newsItem);
        });

        // Update pagination
        const totalPages = Math.ceil(this.filteredNews.length / this.itemsPerPage);
        SardineWebsite.createPagination(paginationContainer, this.currentPage, totalPages, (page) => {
            this.currentPage = page;
            this.renderAllNews(container, paginationContainer);
        });
    }

    filterNews(searchTerm) {
        this.filteredNews = this.newsData.filter(news => 
            news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            news.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.currentPage = 1;
    }
}

// Publications management
class PublicationsManager {
    constructor(publicationsData) {
        this.publicationsData = publicationsData;
        this.filteredPublications = [...publicationsData];
        this.sortBy = 'year';
        this.sortOrder = 'desc';
    }

    renderRecentPublications(container, limit = 3) {
        const recentPubs = this.publicationsData
            .sort((a, b) => b.year - a.year)
            .slice(0, limit);

        container.innerHTML = '';

        recentPubs.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication-card bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-slate-200';
            
            pubElement.innerHTML = `
                <h3 class="font-semibold text-lg mb-2 text-slate-900">${pub.title}</h3>
                <p class="text-sm text-slate-600 mb-3">${pub.authors}</p>
                <p class="text-sm text-slate-700 leading-relaxed">${pub.abstract}</p>
            `;
            container.appendChild(pubElement);
        });
    }

    renderAllPublications(container) {
        container.innerHTML = '';

        this.filteredPublications.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication-card bg-white p-6 rounded-lg shadow-sm';
            
            const typeColors = {
                'conference': 'badge-conference',
                'journal': 'badge-journal',
                'preprint': 'badge-preprint'
            };

            const links = Object.entries(pub.links || {}).map(([type, url]) => {
                const icons = {
                    'paper': 'fas fa-file-pdf',
                    'code': 'fab fa-github',
                    'demo': 'fas fa-play',
                    'bibtex': 'fas fa-quote-right'
                };
                
                return `
                    <a href="${url}" class="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm hover:bg-slate-200 transition-colors">
                        <i class="${icons[type]} mr-1"></i>
                        ${type.charAt(0).toUpperCase() + type.slice(1)}
                    </a>
                `;
            }).join('');

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
                
                <div class="flex flex-wrap gap-2">
                    ${links}
                </div>
            `;
            
            container.appendChild(pubElement);
        });
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