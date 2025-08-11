// News data for SARDINE Lab website
// Add new news items to the top of the array to maintain chronological order

const newsData = [
    {
        id: 1,
        date: '2025-08-01',
        title: 'New Paper Accepted at NeurIPS 2025',
        content: 'Our work on "Adaptive Sparse Attention for Large Language Models" has been accepted at NeurIPS 2025. This research introduces novel techniques for making attention mechanisms more efficient in transformer models, achieving significant computational savings while maintaining performance across various downstream tasks.',
        type: 'publication',
        tags: ['iclr', 'regularization', 'machine-translation']
    },
    {
        id: 2,
        date: '2025-07-15',
        title: 'João Santos Wins Best Student Paper Award',
        content: 'PhD student João Santos received the Best Student Paper Award at ICML 2025 for his work on structured neural machine translation. His research on incorporating latent alignment variables into neural MT systems has shown remarkable improvements in translation quality, particularly for low-resource language pairs. Congratulations João!',
        type: 'award',
        tags: ['icml', 'award', 'machine-translation']
    },
    {
        id: 3,
        date: '2025-07-01',
        title: 'New EU Grant Awarded',
        content: 'SARDINE Lab has been awarded a €2M Horizon Europe grant for research on multilingual AI systems. The project, titled "MultiLingAI: Advancing Multilingual Natural Language Processing through Structured Learning", will run for 4 years and involve collaboration with 6 European institutions including University of Amsterdam, ETH Zurich, and University of Edinburgh.',
        type: 'funding',
        tags: ['eu-grant', 'multilingual', 'collaboration']
    },
    {
        id: 4,
        date: '2025-06-20',
        title: 'Summer Internship Program Opens',
        content: 'Applications are now open for our summer 2026 internship program. We welcome undergraduate and master students interested in NLP research to join our team for 2-3 months. Interns will work on cutting-edge projects in structured prediction, sparse modeling, and multilingual NLP. Application deadline: March 15, 2026.',
        type: 'opportunity',
        tags: ['internship', 'students', 'applications']
    },
    {
        id: 5,
        date: '2025-06-10',
        title: 'André Martins Keynote at ACL 2025',
        content: 'Prof. André Martins will deliver a keynote speech at ACL 2025 on "The Future of Structured Prediction in NLP". The talk will explore how structured prediction methods can enhance the interpretability and robustness of large language models. The conference will be held in Bangkok, Thailand, from July 14-19, 2025.',
        type: 'conference',
        tags: ['acl', 'keynote', 'structured-prediction']
    },
    {
        id: 6,
        date: '2025-05-25',
        title: 'New Lab Members Join SARDINE',
        content: 'We welcome three new team members to SARDINE Lab: Dr. Elena Rodriguez joins as a postdoc researcher specializing in cross-lingual transfer learning, Ahmed Hassan begins his PhD studies focusing on multilingual parsing, and Sara Kim starts her MSc thesis on attention mechanisms for low-resource languages. Welcome to the team!',
        type: 'team',
        tags: ['new-members', 'postdoc', 'phd', 'msc']
    },
    {
        id: 7,
        date: '2025-05-15',
        title: 'SARDINE at EACL 2025',
        content: 'Our lab will present 4 papers at EACL 2025 in Malta. Topics include multilingual parsing with graph neural networks, sparse neural models for efficient inference, cross-lingual transfer learning for syntactic tasks, and structured attention for document understanding. The conference runs from March 17-21, 2025.',
        type: 'conference',
        tags: ['eacl', 'publications', 'multilingual']
    },
    {
        id: 8,
        date: '2025-05-01',
        title: 'Workshop on Structured NLP',
        content: 'SARDINE Lab is organizing a workshop on "Structured Approaches to Natural Language Processing" at IST on June 15, 2025. The workshop will feature invited talks from leading researchers in the field, poster sessions, and hands-on tutorials. Registration is free and open to all researchers. Register at workshop.sardine-lab.org.',
        type: 'event',
        tags: ['workshop', 'structured-nlp', 'ist']
    },
    {
        id: 9,
        date: '2025-04-20',
        title: 'Collaboration with Google Research',
        content: 'We are excited to announce a new collaboration with Google Research on developing more interpretable neural language models. The project will focus on incorporating structured inductive biases into transformer architectures to improve both performance and interpretability. The collaboration officially starts this summer with a joint research visit.',
        type: 'collaboration',
        tags: ['google', 'interpretability', 'transformers']
    },
    {
        id: 10,
        date: '2025-04-10',
        title: 'SARDINE Code Release',
        content: 'We have released the source code for our latest sparse attention implementation on GitHub. The SparseAttention library includes efficient implementations of various sparse attention patterns, pre-trained models for multiple languages, and easy-to-use APIs for researchers. Check it out at github.com/sardine-lab/sparse-attention.',
        type: 'release',
        tags: ['github', 'sparse-attention', 'open-source']
    },
    {
        id: 11,
        date: '2025-03-30',
        title: 'Maria Costa Receives FCT Fellowship',
        content: 'PhD student Maria Costa has been awarded a prestigious FCT doctoral fellowship for her research on sparse neural models. The fellowship will support her work on developing more efficient neural architectures for natural language processing tasks. This is a highly competitive fellowship with only 5% acceptance rate. Congratulations Maria!',
        type: 'award',
        tags: ['fct', 'fellowship', 'sparse-models']
    },
    {
        id: 12,
        date: '2025-03-15',
        title: 'SARDINE Lab Featured in Nature AI',
        content: 'Our recent work on structured prediction has been featured in Nature Machine Intelligence. The article, titled "Bridging Symbolic and Neural Approaches in NLP", discusses the implications of our research for future NLP systems and highlights how structured methods can enhance the robustness and interpretability of neural models.',
        type: 'publication',
        tags: ['nature', 'structured-prediction', 'feature']
    },
    {
        id: 13,
        date: '2025-02-28',
        title: 'SARDINE Lab at AAAI 2025',
        content: 'We presented two papers at AAAI 2025 in Philadelphia. "Graph Neural Networks for Syntactic Parsing" by Pierre Dubois et al. introduced novel architectures for dependency parsing, while "Multilingual Sparse Models for Low-Resource Languages" by Yuki Tanaka et al. demonstrated significant improvements in cross-lingual transfer for resource-scarce languages.',
        type: 'conference',
        tags: ['aaai', 'graph-neural-networks', 'multilingual']
    },
    {
        id: 14,
        date: '2025-02-14',
        title: 'Valentine\'s Day Lab Social',
        content: 'SARDINE Lab celebrated Valentine\'s Day with a special lab social featuring Portuguese pastéis de nata and traditional sardines! It was a great opportunity for team bonding and celebrating our lab\'s namesake fish. We also discussed upcoming research collaborations and shared exciting preliminary results from ongoing projects.',
        type: 'social',
        tags: ['lab-social', 'team-building', 'sardines']
    },
    {
        id: 15,
        date: '2025-01-20',
        title: 'New Collaboration with University of Edinburgh',
        content: 'SARDINE Lab has established a new research collaboration with the University of Edinburgh\'s Institute for Language, Cognition and Computation. The partnership will focus on developing more robust evaluation methods for multilingual NLP systems and will include student exchange programs and joint supervision of PhD students.',
        type: 'collaboration',
        tags: ['edinburgh', 'evaluation', 'multilingual']
    },
    {
        id: 16,
        date: '2025-01-10',
        title: 'Paper Accepted at ICLR 2025',
        content: 'Our paper "Structured Regularization for Neural Machine Translation" has been accepted at ICLR 2025. The work, led by João Santos, introduces novel regularization techniques that incorporate linguistic structure into neural MT training, resulting in more robust and interpretable translation models.',
        type: 'publication',
        tags: ['neurips', 'attention', 'efficiency']
    },
    {
        id: 17,
        date: '2024-12-15',
        title: 'Year-End Lab Retreat',
        content: 'SARDINE Lab held its annual year-end retreat in beautiful Sintra, Portugal. The two-day event included research presentations, brainstorming sessions for 2025 projects, team-building activities, and a visit to the historic Pena Palace. It was a great way to reflect on our achievements in 2024 and plan for an exciting 2025.',
        type: 'event',
        tags: ['retreat', 'sintra', 'team-building']
    },
    {
        id: 18,
        date: '2024-11-30',
        title: 'SARDINE at NeurIPS 2024',
        content: 'SARDINE Lab had a strong presence at NeurIPS 2024 in Vancouver with 3 accepted papers and 2 workshop presentations. Highlights included our work on "Adaptive Sparsity in Transformer Models" and "Cross-lingual Few-shot Learning with Structured Representations". The team also organized a successful social gathering for Portuguese researchers.',
        type: 'conference',
        tags: ['neurips', 'sparsity', 'few-shot-learning']
    },
    {
        id: 19,
        date: '2024-10-25',
        title: 'Guest Lecture Series Begins',
        content: 'SARDINE Lab launched its monthly guest lecture series with a talk by Prof. Regina Barzilay from MIT on "Structured Prediction in Biomedical NLP". The series aims to bring world-class researchers to share their insights with our team and the broader IST community. Next month features Prof. Chris Manning from Stanford.',
        type: 'event',
        tags: ['guest-lecture', 'biomedical-nlp', 'mit']
    },
    {
        id: 20,
        date: '2024-09-15',
        title: 'New Dataset Release: MultiParse',
        content: 'We released MultiParse, a large-scale multilingual parsing dataset covering 25 languages with consistent annotation standards. The dataset includes syntactic trees, semantic roles, and cross-lingual alignments. It\'s now available for download and we encourage the community to use it for multilingual parsing research.',
        type: 'release',
        tags: ['dataset', 'multiparse', 'multilingual-parsing']
    }
];

// Function to get latest news (used by index.html)
function getLatestNews(limit = 5) {
    return newsData.slice(0, limit);
}

// Function to get all news (used by news.html)
function getAllNews() {
    return newsData;
}

// Function to filter news by type
function filterNewsByType(type) {
    if (type === 'all') return newsData;
    return newsData.filter(news => news.type === type);
}

// Function to search news
function searchNews(query) {
    const searchTerm = query.toLowerCase();
    return newsData.filter(news => 
        news.title.toLowerCase().includes(searchTerm) ||
        news.content.toLowerCase().includes(searchTerm) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        newsData,
        getLatestNews,
        getAllNews,
        filterNewsByType,
        searchNews
    };
}