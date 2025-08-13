# Adding Content Guide

This guide explains how to add and manage content on the SARDINE Lab website.

Everything is just super straightforward.


## 📰 Adding News

### Step 1: Open the News Data File
Edit `data/news.js`

### Step 2: Add Your News Item
Add a new object to the **top** of the `newsData` array:

```javascript
const newsData = [
    {
        id: 36,  // Use next highest ID (increment by 1)
        date: '2025-01-15',  // YYYY-MM-DD format
        title: 'Your News Title Here',
        content: `Your news content with <a href="https://example.com">links</a>, 
                 <strong>bold text</strong>, and <em>italics</em>. You can include:
                 
                 <ul>
                 <li>Bullet points</li>
                 <li>Multiple paragraphs</li>
                 <li>Images and videos</li>
                 </ul>
                 
                 <p>Add images like this:</p>
                 <img src="assets/figs/my-image.jpg" alt="Description" />`,
        type: 'conference',  // See types below
        tags: ['tag1', 'tag2', 'tag3']
    },
    // ... existing news items
];
```

### News Types
- `conference` - Talks, presentations, conference attendance
- `publication` - Paper acceptances, journal publications
- `award` - Awards, competition wins, recognitions
- `funding` - Grants, funding announcements
- `event` - Workshops, schools, organized events
- `team` - New members, departures, promotions
- `release` - Software releases, model releases, datasets
- `service` - Editorial work, program committees

### Tips for News Content
- Use **template literals** (backticks) to avoid quote escaping
- Include relevant **links** to papers, websites, repositories
- Add **images** to make news more engaging
- Use **tags** for better searchability
- Keep **titles concise** but descriptive

---

## 📚 Adding Publications

### Step 1: Open Publications Data
Edit `data/publications.js`

### Step 2: Add Your Publication
```javascript
const publicationsData = [
    {
        id: 'new-publication-2025',  // Unique identifier
        title: 'Your Paper Title: Subtitle If Any',
        authors: 'First Author, Second Author, Third Author',
        venue: 'Conference on Computational Linguistics (ACL)',
        year: 2025,
        type: 'conference',  // 'conference', 'journal', 'preprint'
        abstract: `Brief description of your paper. What problem does it solve? 
                  What are the main contributions? Keep it accessible but informative.`,
        keywords: ['natural-language-processing', 'machine-learning', 'your-topic'],
        links: {
            paper: 'https://aclanthology.org/2025.acl-1.123/',
            code: 'https://github.com/username/repo',
            demo: 'https://huggingface.co/spaces/demo',
            bibtex: 'docs/bibtex/paper-2025.bib'
        }
    },
    // ... existing publications
];
```

### Publication Types
- `conference` - Conference papers (ACL, EMNLP, ICML, etc.)
- `journal` - Journal articles (TACL, JMLR, etc.)
- `preprint` - ArXiv, bioRxiv preprints

### Links You Can Include
- `paper` - Link to published paper
- `code` - GitHub repository
- `demo` - Live demonstration
- `bibtex` - BibTeX file (upload to `docs/bibtex/`)
- `slides` - Presentation slides
- `video` - Presentation video
- `data` - Dataset links

---

## 🔬 Adding Projects

### Step 1: Open Projects Data
Edit `data/projects.js`

### Step 2: Add Your Project
```javascript
const projectsData = [
    {
        id: 'new-project-2025',
        name: 'PROJECT-ACRONYM',
        title: 'Full Project Title',
        description: `Detailed description of the project goals, methodology, 
                     and expected outcomes. What makes this project unique?`,
        status: 'current',  // 'current' or 'past'
        period: '2025-2028',
        funding: 'European Research Council (ERC) Starting Grant',
        pi: 'André Martins',
        team_members: [
            'Team Member 1',
            'Team Member 2'
        ],
        collaborators: [
            'External Collaborator Institution',
            'Another University'
        ],
        keywords: [
            'machine learning',
            'natural language processing',
            'structured prediction'
        ],
        website: 'https://project-website.com',
        publications: [
            'Key Publication 1 (2025)',
            'Key Publication 2 (2024)'
        ]
    },
    // ... existing projects
];
```

### Project Status
- `current` - Ongoing projects (will appear in "Current Projects" tab)
- `past` - Completed projects (will appear in "Past Projects" tab)

---

## 👥 Adding Team Members

### Step 1: Open Team Data
Edit `data/team.js`

### Step 2: Add Team Member to Appropriate Category

```javascript
const teamData = {
    pi: [
        {
            name: 'New PI',
            advisor: 'André Martins',
            research_interests: [
                'Natural Language Processing',
                'Machine Learning',
                'Specific Research Area'
            ],
            location: {
                city: 'Lisbon',
                country: 'Portugal'
            },
            links: {
                website: 'https://personal-website.com',
                github: 'https://github.com/username',
                linkedin: 'https://linkedin.com/in/username',
                scholar: 'https://scholar.google.com/citations?user=ID'
            }
        }
    ],
    postdocs: [
        {
            name: 'New Postdoc Name',
            advisor: 'André Martins',
            research_interests: [
                'Natural Language Processing',
                'Machine Learning',
                'Specific Research Area'
            ],
            location: {
                city: 'Lisbon',
                country: 'Portugal'
            },
            links: {
                website: 'https://personal-website.com',
                github: 'https://github.com/username',
                linkedin: 'https://linkedin.com/in/username',
                scholar: 'https://scholar.google.com/citations?user=ID'
            }
        }
    ],
    phds: [
        {
            name: 'New PhD Student',
            advisor: 'André Martins',
            co_advisor: 'Co-Advisor Name',  // Optional
            research_interests: [
                'Research Area 1',
                'Research Area 2'
            ],
            location: {
                city: 'Lisbon', 
                country: 'Portugal'
            },
            links: {
                website: 'https://website.com',
                github: 'https://github.com/username'
            }
        }
    ],
    mscs: [
        // MSc students
    ],
    alumni: [
        {
            name: 'Former Member',
            degree: 'PhD',  // 'PhD', 'MSc', 'Postdoc'
            graduation_year: '2024',
            current_position: 'Assistant Professor at University X'
        }
    ]
};
```

### Available Link Types
- `website` - Personal website
- `github` - GitHub profile
- `linkedin` - LinkedIn profile
- `scholar` - Google Scholar profile

---

## 📄 Managing Documents

### Step 1: Upload Files
Add files to the `docs/` folder:
```
docs/
├── papers/
│   ├── paper-2025.pdf
│   └── preprint-2024.pdf
├── slides/
│   ├── presentation-acl-2024.pdf
│   └── tutorial-slides.pdf
├── bibtex/
│   ├── paper-2025.bib
│   └── collection.bib
└── reports/
    └── annual-report-2024.pdf
```

### Step 2: Link to Documents
Reference uploaded files in your content:

```javascript
// In news content
content: `Check out our new <a href="docs/papers/paper-2025.pdf">paper</a>!`

// In publication links
links: {
    paper: 'docs/papers/published-version.pdf',
    slides: 'docs/slides/presentation.pdf',
    bibtex: 'docs/bibtex/citation.bib'
}
```

### File Organization Tips
- Use **descriptive filenames**: `eurollm-paper-acl-2024.pdf`
- Organize by **type**: papers, slides, reports, bibtex
- Include **year** in filenames for clarity

---

## 🔧 Testing Your Changes

Just open the `index.html` in your browser and check your changes. Simple. 

---

## 🚨 Common Mistakes to Avoid

### ❌ Don't Do This
```javascript
// Wrong: Using quotes with HTML content
content: "This will break with <a href="link">quotes</a>",

// Wrong: Forgetting commas
{
    id: 10
    title: 'Missing comma above'
}

// Wrong: Wrong date format
date: '15/01/2025',  // Should be '2025-01-15'
```

### ✅ Do This Instead
```javascript
// Correct: Using template literals
content: `This works with <a href="link">quotes</a> and "any content"`,

// Correct: Proper syntax
{
    id: 10,
    title: 'Comma after id'
}

// Correct: ISO date format
date: '2025-01-15',  // yyyy-mm-dd
```

