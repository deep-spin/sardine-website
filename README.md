# 🐟 SARDINE Lab Website

Welcome to the SARDINE Lab website repository! This is a modern, responsive website built with HTML, CSS (Tailwind), and JavaScript for ease of use and expressivity.


## 🏗️ Architecture Overview

The website follows a clean, modular architecture:

```
sardine-website/
├── 📄 index.html             # Home page
├── 📄 news.html              # News page
├── 📄 publications.html      # Publications page
├── 📄 projects.html          # Projects page
├── 📁 assets/                
│   ├── 🔧 main.js            # Core functionality
│   ├── 🔧 pagination.js      # Pagination utilities
│   ├── 🔧 metadata.js        # Site-wide metadata
│   ├── 🎨 style.css          # Custom CSS styles
│   └── 📁 figs/              # Images and figures
├── 📁 data/                  
│   ├── 📊 countries.js       # Country names and coords
│   ├── 📊 news.js            # News items
│   ├── 📊 photos.js          # Group photos
│   ├── 📊 projects.js        # Projects information
│   ├── 📊 publications.js    # Publications data
│   └── 📊 team.js            # Team members
├── 📁 docs/                  
│   ├── 📁 papers/            # Research papers
│   ├── 📁 slides/            # Presentation slides
│   ├── 📁 bibtex/            # BibTeX files
│   └── 📁 reports/           # Reports and documents
└── 📁 documentation/         # Documentation
```

The data flow of the website goes as follows:
```
📊 Data Files (data/*.js)
    ↓
🔧 Manager Classes (main.js and metadata.js)
    ↓
🎨 Rendering Functions
    ↓
📄 HTML Pages
```


## 🚀 Quick Start

1. **Clone the repository**
2. **Open `index.html`** in a web browser
3. **Make changes** to data files in the `data/` folder
4. **Upload documents** to the `docs/` folder
5. **Commit and push your changes** to github.



## 📚 Documentation

- **[Adding Content](documentation/ADDING_CONTENT.md)** - How to add news, publications, projects, and team members.
- **[Styling Guide](documentation/STYLING.md)** - How to customize the website appearance (for developers).


## 🔧 Common Tasks

### Adding New Content
```javascript
// Add to data/news.js
{
    id: 21,  // Increment from highest existing ID
    date: '2025-01-15',
    title: 'Your News Title',
    content: `Your content with <a href="#">links</a> and <strong>formatting</strong>`,
    type: 'conference',  // or 'award', 'funding', etc.
    tags: ['tag1', 'tag2']
}
```

### Changing Metadata Site Information
- Edit `assets/metadata.js` to update:
 - Lab name and logo
 - Contact information
 - Social media links
 - Research areas

### Uploading Documents
1. Add files to `docs/` folder
2. Reference in content: `<a href="docs/filename.pdf">Document</a>`



## 🎯 Content Types


### News Types
- `conference` - Conference presentations, talks
- `publication` - Paper acceptances, journal articles
- `award` - Awards, recognitions, competition wins
- `funding` - Grants, funding announcements
- `event` - Workshops, schools, organized events
- `team` - New team members, departures
- `release` - Software releases, model releases
- `service` - Editorial, program committee service


### Publication Types
- `conference` - Conference papers
- `journal` - Journal articles
- `preprint` - ArXiv, bioRxiv preprints


### Project Status
- `current` - Ongoing projects
- `past` - Completed projects


## 🚨 Important Notes

- **Higher IDs = Newer content** (makes adding new items easier)
- **Use template literals** (backticks) for HTML content, like \`YOUR <b>CONTENT</b> HERE\`
- **No browser storage** - all state is in-memory
- **Responsive first** - test on mobile devices
- **Rich content supported** - HTML, images, videos, code blocks


## 🆘 Need Help?

1. Check the specific documentation files in `documentation/`
2. Look at existing examples in the data files
3. Test changes in a web browser
4. Validate HTML content in preview


## 🔗 External Dependencies

- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family


---

Made with 🐟 by SARDINE Lab