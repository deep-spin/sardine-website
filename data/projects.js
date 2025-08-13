// Projects data for SARDINE Lab website

const projectsData = {
    current: [
        {
            id: 5,
            name: "DECOLLAGE",
            title: "Deep Cognition Learning for Language Generation",
            description: "Large-scale language models have led to impressive results in many NLP tasks, exhibiting transfer and few-shot learning capabilities. When interacting with such systems, users commonly find them capable of reasoning, planning, and explaining their decisions, often in convincing ways. However, despite the enormous advances in the last years, current deep learning models for NLP are still very limited in fundamental ways and many important ingredients are still missing to achieve a satisfactory level of 'intelligence'. Some of these limitations partly stem from their monolithic architectures, which are good for some perceptual tasks, but unsuitable for tasks requiring higher-level cognition.",
            funding: "ERC Consolidator Grant",
            period: "2023-2028",
            status: "current",
            pi: "André Martins",
            team_members: ["Maria Costa", "Yuki Tanaka", "Max Weber"],
            keywords: ["sparse models", "efficiency", "interpretability", "large language models"],
            publications: [
                "Adaptive Sparse Attention for Large Language Models",
                "Efficient Training of Large Language Models with Sparse Gradients"
            ]
        },
        {
            id: 4,
            name: "UTTER",
            title: "Unified Transcription and Translation",
            description: "Unified Transcription and Translation.",
            funding: "EUROPE HORIZON",
            period: "2022-2025",
            status: "current",
            pi: "André Martins",
            team_members: ["Maria Costa", "Yuki Tanaka", "Max Weber"],
            keywords: ["sparse models", "efficiency", "interpretability", "large language models"],
            publications: [
                "Adaptive Sparse Attention for Large Language Models",
                "Efficient Training of Large Language Models with Sparse Gradients"
            ]
        },
        {
            id: 3,
            name: "EuroHPC",
            title: "Unified Transcription and Translation",
            description: "Unified Transcription and Translation.",
            funding: "EUROPE HORIZON",
            period: "2022-2025",
            status: "current",
            pi: "André Martins",
            team_members: ["Maria Costa", "Yuki Tanaka", "Max Weber"],
            keywords: ["sparse models", "efficiency", "interpretability", "large language models"],
            publications: [
                "Adaptive Sparse Attention for Large Language Models",
                "Efficient Training of Large Language Models with Sparse Gradients"
            ]
        },
    ],
    past: [
        {
            id: 2,
            name: "MAIA",
            title: "Multilingual AI Agent Assistants for Customer Service",
            description: "This collaborative project with Unbabel focuses on developing multilingual AI assistants for customer service applications. We work on cross-lingual transfer learning, multilingual natural language understanding, and human-AI interaction for customer support scenarios.",
            funding: "CMU-Portugal Large-Scale Collaborative Research project",
            period: "2020-2023",
            status: "current",
            website: "https://unbabel.com/research/maia",
            pi: "André Martins",
            collaborators: ["Unbabel", "Carnegie Mellon University"],
            team_members: ["Chryssa Zerva", "Chunchuan Lyu", "António Farinhas", "Patrick Fernandes", "Nuno Guerreiro", "Taisiya Glushkova"],
            keywords: ["multilingual NLP", "customer service", "human-AI interaction", "transfer learning"],
            publications: [
                "Cross-lingual Transfer Learning with Structured Representations",
                "Multilingual Sparse Models for Natural Language Understanding",
                "Few-shot Learning for Natural Language Processing Tasks"
            ]
        },
        {
            id: 1,
            name: "DeepSPIN",
            title: "Deep Structured Prediction in Natural Language Processing",
            description: "This project aims to develop new methods for structured prediction in natural language processing, with a focus on deep learning approaches. We explore novel architectures and training methods for tasks such as syntactic parsing, semantic role labeling, and machine translation.",
            funding: "ERC Starting Grant",
            period: "2018-2023",
            status: "current",
            website: "https://deep-spin.github.io",
            pi: "André Martins",
            team_members: ["Vlad Niculae", "Erick Fonseca", "Ben Peters", "Gonçalo Correia", "Tsvetomila Mihaylova", "Marcos Treviso", "Pedro Martins"],
            keywords: ["structured prediction", "deep learning", "parsing", "machine translation"],
            publications: [
                "Sparse and Structured Neural Machine Translation",
                "Attention Mechanisms for Text Classification",
                "Deep Reinforcement Learning for Structured Prediction"
            ]
        },
    ]
};

// Function to get current projects
function getCurrentProjects(limit = null) {
    if (limit === null)
        return projectsData.current
    return projectsData.current.slice(0, limit);
}


// Function to get past projects
function getPastProjects(limit = null) {
    if (limit === null)
        return projectsData.past
    return projectsData.past.slice(0, limit);
}

// Function to get all projects
function getAllProjects() {
    return [...projectsData.current, ...projectsData.past];
}

// Function to search projects
function searchProjects(query) {
    const searchTerm = query.toLowerCase();
    const allProjects = getAllProjects();
    
    return allProjects.filter(project => 
        project.name.toLowerCase().includes(searchTerm) ||
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );
}

// Function to get projects by status
function getProjectsByStatus(status) {
    if (status === 'current') return projectsData.current;
    if (status === 'past') return projectsData.past;
    return getAllProjects();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projectsData,
        getCurrentProjects,
        getPastProjects,
        getAllProjects,
        searchProjects,
        getProjectsByStatus
    };
}