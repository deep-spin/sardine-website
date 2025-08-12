// News data for SARDINE Lab website
// Add new news items to the top of the array to maintain chronological order

const newsData = [
    {
        id: 1,
        date: '2024-11-15',
        title: 'EuroHPC Summit Presentation on Multilingual LLMs',
        content: 'André Martins presented "Open & Multilingual LLMs for Europe" in a discussion panel at EuroHPC Summit in Krakow about the AI Factories. The presentation covered recent successes with CroissantLLM, TowerLLM, EuroLLM, and EuroBERT.',
        type: 'conference',
        tags: ['eurohpc', 'multilingual', 'llm', 'presentation']
    },
    {
        id: 2,
        date: '2024-11-01',
        title: 'EuroLLM Website Launch and Success Story',
        content: 'New EuroLLM website launched! We trained two LLMs from scratch, EuroLLM-1.7B and EuroLLM-9B, using European supercomputing infrastructure (EuroHPC). These models support 35 languages including all 24 EU official languages, with 300k+ downloads. Featured as a EuroHPC success story.',
        type: 'release',
        tags: ['eurollm', 'multilingual', 'open-source', 'eurohpc']
    },
    {
        id: 3,
        date: '2024-10-20',
        title: 'Invited Talks at Cornell Tech, MIT, and EPFL',
        content: 'André Martins gave recent talks at Cornell Tech on "Quality-Aware Generation: Reranking Laws and Insights from Communication Theory", MIT on "Dynamic Sparsity for Machine Learning", and EPFL on "xCOMET, Tower, EuroLLM: Open & Multilingual LLMs for Europe".',
        type: 'conference',
        tags: ['invited-talk', 'mit', 'cornell', 'epfl']
    },
    {
        id: 4,
        date: '2024-12-15',
        title: 'NeurIPS 2024 Tutorial on Dynamic Sparsity',
        content: 'Presented a tutorial at NeurIPS 2024 with Edoardo Ponti on "Dynamic Sparsity in Machine Learning: Routing Information through Neural Pathways". Complete materials including slides and Jupyter notebooks are available.',
        type: 'conference',
        tags: ['neurips', 'tutorial', 'dynamic-sparsity', 'materials']
    },
    {
        id: 5,
        date: '2024-09-01',
        title: 'TowerLLM Release and COLM 2024 Spotlight',
        content: 'Released TowerLLM 7B and 13B: multilingual LLMs for translation-related tasks. The Tower Collection at Hugging Face has 200k+ downloads. Presented as a spotlight paper at COLM 2024.',
        type: 'publication',
        tags: ['tower-llm', 'multilingual', 'translation', 'colm', 'spotlight']
    },
    {
        id: 6,
        date: '2024-08-01',
        title: 'WMT 2024 Shared Task Victory',
        content: 'Participated for the first time in WMT 2024 shared task on General Translation and achieved best results in 8 out of 11 languages! Also won the Biomedical and Chat Translation tasks. This led to Unbabel launching Widn.Ai.',
        type: 'award',
        tags: ['wmt', 'machine-translation', 'shared-task', 'winner']
    },
    {
        id: 7,
        date: '2024-07-15',
        title: 'xCOMET: State-of-the-Art MT Evaluation Model',
        content: 'Built xCOMET, a state-of-the-art interpretable model for MT evaluation and quality estimation. Published in TACL and presented at ACL 2024. Try it out online!',
        type: 'publication',
        tags: ['xcomet', 'evaluation', 'tacl', 'acl', 'interpretable']
    },
    {
        id: 8,
        date: '2024-06-01',
        title: 'AI Boost Large AI Grand Challenge Grant',
        content: 'Won one of 4 Large AI Grand Challenge grants (AI Boost), a highly competitive grant with 2M GPU hours. Using this allocation to train a mixture-of-experts version of Tower.',
        type: 'funding',
        tags: ['ai-boost', 'grant', 'gpu-hours', 'mixture-of-experts']
    },
    {
        id: 9,
        date: '2024-05-01',
        title: '20+ Papers at Top 2024 Conferences',
        content: 'Our team presented 20+ papers in top conferences including NeurIPS, ICLR, ICML, COLM, TACL, EMNLP. We had spotlight/oral papers at ICML, NeurIPS, and COLM, plus several keynote talks.',
        type: 'publication',
        tags: ['conferences', 'publications', 'spotlight', 'keynote']
    },
    {
        id: 10,
        date: '2024-04-01',
        title: 'ACL 2024 Program Co-Chair',
        content: 'André Martins serves as Program Co-Chair of ACL 2024, one of the most prestigious conferences in Natural Language Processing.',
        type: 'service',
        tags: ['acl', 'program-chair', 'service']
    },
    {
        id: 11,
        date: '2024-01-15',
        title: 'ERC Consolidator Grant DECOLLAGE Awarded',
        content: 'André Martins received an ERC (European Research Council) Consolidator Grant on "Deep Cognition Learning for Language Generation (DECOLLAGE)". Now recruiting Post-Doc and PhD Students.',
        type: 'funding',
        tags: ['erc', 'consolidator-grant', 'decollage', 'recruitment']
    },
    {
        id: 12,
        date: '2022-09-15',
        title: 'SEPLN 2022 Keynote',
        content: 'André Martins delivered a keynote talk at the SEPLN 2022 conference, presenting recent advances in structured prediction for NLP.',
        type: 'conference',
        tags: ['sepln', 'keynote', 'structured-prediction']
    },
    {
        id: 13,
        date: '2022-08-01',
        title: 'Mercury Machine Learning Lab Keynote',
        content: 'Gave a keynote at the Mercury Machine Learning Lab (MMLL) seminar series on "From Sparse Modeling to Sparse Communication". Video available online.',
        type: 'conference',
        tags: ['mmll', 'keynote', 'sparse-modeling', 'video']
    },
    {
        id: 14,
        date: '2022-07-01',
        title: 'LxMLS 2022 Back In-Person',
        content: 'Co-organizing LxMLS 2022 (Lisbon Machine Learning School), returning to in-person format after pandemic. Registration details available.',
        type: 'event',
        tags: ['lxmls', 'machine-learning-school', 'in-person', 'organizing']
    },
    {
        id: 15,
        date: '2022-06-01',
        title: 'Multiple 2022 Conference Acceptances',
        content: 'New papers accepted at CLeaR 2022, ICLR 2022, ACL 2022, NAACL 2022, and ICML 2022, showcasing continued research excellence.',
        type: 'publication',
        tags: ['clear', 'iclr', 'acl', 'naacl', 'icml']
    },
    {
        id: 16,
        date: '2022-05-01',
        title: 'TRITON Conference Keynote',
        content: 'André Martins delivered a keynote talk at the TRITON conference, sharing insights on latest research developments.',
        type: 'conference',
        tags: ['triton', 'keynote']
    },
    {
        id: 17,
        date: '2022-04-01',
        title: 'TALN Keynote on DeepSPIN Project',
        content: 'Presented a keynote at TALN conference featuring work from the DeepSPIN project. Presentation slides are available online.',
        type: 'conference',
        tags: ['taln', 'keynote', 'deepspin', 'slides']
    },
    {
        id: 18,
        date: '2021-07-01',
        title: 'LxMLS 2021 Goes Virtual',
        content: 'Co-organizing LxMLS 2021 (Lisbon Machine Learning School) as a fully remote school due to pandemic. Details and registration available.',
        type: 'event',
        tags: ['lxmls', 'virtual', 'remote', 'organizing']
    },
    {
        id: 19,
        date: '2021-06-01',
        title: 'NAACL and ACL 2021 Publications',
        content: 'New papers accepted at NAACL 2021 and ACL 2021, continuing our strong publication record in top-tier conferences.',
        type: 'publication',
        tags: ['naacl', 'acl', 'publications']
    },
    {
        id: 20,
        date: '2021-01-01',
        title: 'ELLIS NLP Program Co-Direction',
        content: 'Co-directing the ELLIS NLP program with Iryna Guleyvich and Ivan Titov, working with an amazing list of fellows and scholars.',
        type: 'service',
        tags: ['ellis', 'nlp-program', 'co-director', 'network']
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