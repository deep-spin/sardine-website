// Projects data for SARDINE Lab website

const projectsData = {
    current: [
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
            team_members: ["João Santos", "Maria Costa", "Pierre Dubois"],
            keywords: ["structured prediction", "deep learning", "parsing", "machine translation"],
            publications: [
                "Sparse and Structured Neural Machine Translation",
                "Attention Mechanisms for Text Classification",
                "Deep Reinforcement Learning for Structured Prediction"
            ]
        },
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
            team_members: ["Ana Silva", "Elena Rodriguez", "Ahmed Hassan"],
            keywords: ["multilingual NLP", "customer service", "human-AI interaction", "transfer learning"],
            publications: [
                "Cross-lingual Transfer Learning with Structured Representations",
                "Multilingual Sparse Models for Natural Language Understanding",
                "Few-shot Learning for Natural Language Processing Tasks"
            ]
        },
        {
            id: 3,
            name: "SparseNLP",
            title: "Efficient Sparse Models for Natural Language Processing",
            description: "This project investigates sparsity patterns in neural language models to develop more efficient and interpretable NLP systems. We explore structured sparsity, adaptive pruning, and sparse attention mechanisms for large language models.",
            funding: "FCT Research Grant",
            period: "2023-2026",
            status: "current",
            pi: "André Martins",
            team_members: ["Maria Costa", "Yuki Tanaka", "Max Weber"],
            keywords: ["sparse models", "efficiency", "interpretability", "large language models"],
            publications: [
                "Adaptive Sparse Attention for Large Language Models",
                "Efficient Training of Large Language Models with Sparse Gradients"
            ]
        }
    ],
    past: [
        {
            id: 4,
            name: "StructNLP",
            title: "Structured Approaches to Natural Language Processing",
            description: "This foundational project established our research direction in structured prediction for NLP. We developed new methods for incorporating linguistic structure into neural models, with applications to parsing, named entity recognition, and coreference resolution.",
            funding: "FCT Starting Grant",
            period: "2015-2018",
            status: "completed",
            pi: "André Martins",
            team_members: ["Carlos Lima", "Thomas Mueller", "Anna Kowalski"],
            keywords: ["structured prediction", "linguistic structure", "parsing", "neural networks"],
            publications: [
                "Graph Neural Networks for Syntactic Parsing",
                "Transformer Models with Explicit Syntactic Bias",
                "Neural Parsing with Latent Variable Models"
            ]
        },
        {
            id: 5,
            name: "MultiParse",
            title: "Multilingual Parsing for Low-Resource Languages",
            description: "This project focused on developing parsing techniques for low-resource languages through cross-lingual transfer and multilingual training. We created the MultiParse dataset and developed novel transfer learning methods.",
            funding: "EU Horizon 2020",
            period: "2017-2020",
            status: "completed",
            collaborators: ["University of Edinburgh", "University of Amsterdam"],
            pi: "André Martins",
            team_members: ["Isabella Rossi", "Sophie Chen", "Ravi Patel"],
            keywords: ["multilingual parsing", "low-resource languages", "transfer learning", "cross-lingual"],
            publications: [
                "Neural Machine Translation for Low-Resource Languages",
                "Continual Learning in Natural Language Processing",
                "Multimodal Learning with Structured Representations"
            ]
        },
        {
            id: 6,
            name: "AttentionViz",
            title: "Interpretable Attention Mechanisms for NLP",
            description: "This project developed visualization and interpretation techniques for attention mechanisms in neural NLP models. We created tools for understanding what neural models learn and how they make decisions.",
            funding: "Industry Partnership",
            period: "2019-2021",
            status: "completed",
            pi: "André Martins",
            team_members: ["Elena Rodriguez", "Marco Rossi"],
            keywords: ["interpretability", "attention visualization", "neural models", "explainable AI"],
            publications: [
                "Interpretable Machine Translation with Attention Visualization",
                "Efficient Attention Mechanisms for Long Sequences"
            ]
        }
    ]
};

// Function to get current projects
function getCurrentProjects() {
    return projectsData.current;
}

// Function to get past projects
function getPastProjects() {
    return projectsData.past;
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