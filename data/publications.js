// Publications data for SARDINE Lab website
// Add new publications to maintain chronological order (newest first)

const publicationsData = [
    {
        id: 1,
        title: "Adaptive Sparse Attention for Large Language Models",
        authors: "André Martins, João Santos, Maria Costa",
        venue: "NeurIPS 2025",
        year: 2025,
        type: "conference",
        abstract: "We propose a novel adaptive sparse attention mechanism that dynamically selects the most relevant tokens for attention computation, significantly reducing computational complexity while maintaining performance. Our approach learns to identify important token pairs during training and applies structured sparsity patterns that adapt to different input sequences. Experiments on language modeling and downstream tasks show up to 50% reduction in attention computation with minimal performance degradation.",
        keywords: ["attention", "sparse models", "transformers", "efficiency"],
        links: {
            paper: "https://arxiv.org/abs/2025.xxxxx",
            code: "https://github.com/sardine-lab/adaptive-sparse-attention",
            bibtex: "#"
        }
    },
    {
        id: 2,
        title: "Structured Neural Machine Translation with Latent Alignments",
        authors: "João Santos, André Martins, Pierre Dubois",
        venue: "ICML 2025",
        year: 2025,
        type: "conference",
        abstract: "A structured approach to neural machine translation that incorporates latent alignment variables to improve translation quality and interpretability. We introduce a differentiable alignment model that can be trained end-to-end with the translation objective. Our method shows significant improvements on low-resource language pairs and provides interpretable attention patterns that align with linguistic intuitions about cross-lingual correspondences.",
        keywords: ["machine translation", "structured prediction", "alignments", "interpretability"],
        links: {
            paper: "https://arxiv.org/abs/2025.xxxxx",
            code: "https://github.com/sardine-lab/structured-nmt",
            bibtex: "#"
        }
    },
    {
        id: 3,
        title: "Sparse Modeling for Multilingual Natural Language Understanding",
        authors: "Maria Costa, André Martins",
        venue: "Computational Linguistics",
        year: 2025,
        type: "journal",
        abstract: "We investigate sparse modeling techniques for multilingual NLU tasks, showing that structured sparsity can improve cross-lingual transfer while reducing model size. Our approach learns language-specific and language-agnostic parameters, enabling efficient knowledge sharing across languages. We demonstrate state-of-the-art results on multilingual parsing, named entity recognition, and sentiment analysis with models that are 70% smaller than dense baselines.",
        keywords: ["multilingual", "sparse models", "cross-lingual", "efficiency"],
        links: {
            paper: "https://doi.org/10.1162/coli_a_xxxxx",
            bibtex: "#"
        }
    },
    {
        id: 4,
        title: "Attention Mechanisms for Text Classification: A Comparative Study",
        authors: "Yuki Tanaka, Ana Silva, André Martins",
        venue: "EACL 2025",
        year: 2025,
        type: "conference",
        abstract: "A comprehensive comparison of different attention mechanisms for text classification tasks, providing insights into when and why certain approaches work better. We evaluate 12 different attention variants across 8 classification datasets, analyzing their computational efficiency, interpretability, and performance. Our findings reveal that structured attention patterns consistently outperform standard self-attention for document-level tasks.",
        keywords: ["attention", "text classification", "comparative study", "interpretability"],
        links: {
            paper: "https://arxiv.org/abs/2025.xxxxx",
            code: "https://github.com/sardine-lab/attention-comparison",
            bibtex: "#"
        }
    },
    {
        id: 5,
        title: "Deep Reinforcement Learning for Structured Prediction",
        authors: "Marco Rossi, André Martins",
        venue: "arXiv preprint",
        year: 2025,
        type: "preprint",
        abstract: "We explore the use of deep reinforcement learning for structured prediction tasks, proposing a novel training framework that handles complex output spaces. Our approach uses policy gradient methods to directly optimize task-specific metrics, avoiding the limitations of surrogate losses. We demonstrate improvements on parsing, sequence labeling, and machine translation tasks, with particularly strong results on low-resource settings.",
        keywords: ["reinforcement learning", "structured prediction", "deep learning", "policy gradients"],
        links: {
            paper: "https://arxiv.org/abs/2025.xxxxx",
            code: "https://github.com/sardine-lab/rl-structured-prediction",
            bibtex: "#"
        }
    },
    {
        id: 6,
        title: "Cross-lingual Transfer Learning with Structured Representations",
        authors: "Pierre Dubois, João Santos, André Martins",
        venue: "ACL 2024",
        year: 2024,
        type: "conference",
        abstract: "We propose structured representations that facilitate cross-lingual transfer learning, achieving state-of-the-art results on multiple benchmark datasets. Our method learns to disentangle language-specific surface forms from universal syntactic and semantic structures. Experiments on dependency parsing, named entity recognition, and relation extraction show consistent improvements, especially for low-resource languages with limited training data.",
        keywords: ["cross-lingual", "transfer learning", "structured representations", "low-resource"],
        links: {
            paper: "https://aclanthology.org/2024.acl-long.xxx",
            code: "https://github.com/sardine-lab/crosslingual-structures",
            bibtex: "#"
        }
    },
    {
        id: 7,
        title: "Efficient Training of Large Language Models with Sparse Gradients",
        authors: "Ana Silva, André Martins",
        venue: "ICLR 2024",
        year: 2024,
        type: "conference",
        abstract: "A novel training approach that uses sparse gradients to efficiently train large language models, reducing memory requirements and training time. We introduce gradient sparsification techniques that preserve important parameter updates while discarding redundant information. Our method achieves similar performance to dense training with 60% reduction in memory usage and 40% faster training times.",
        keywords: ["large language models", "sparse gradients", "efficient training", "memory optimization"],
        links: {
            paper: "https://openreview.net/forum?id=xxxxx",
            code: "https://github.com/sardine-lab/sparse-gradient-training",
            bibtex: "#"
        }
    },
    {
        id: 8,
        title: "Neural Parsing with Latent Variable Models",
        authors: "Luis Pereira, André Martins",
        venue: "EMNLP 2024",
        year: 2024,
        type: "conference",
        abstract: "We introduce latent variable models for neural parsing that can capture hierarchical structure without explicit supervision. Our approach uses variational inference to learn meaningful latent representations of syntactic structures. The model achieves competitive parsing accuracy while providing interpretable intermediate representations that align with linguistic theories of syntax.",
        keywords: ["parsing", "latent variables", "syntactic analysis", "variational inference"],
        links: {
            paper: "https://aclanthology.org/2024.emnlp-main.xxx",
            bibtex: "#"
        }
    },
    {
        id: 9,
        title: "Interpretable Machine Translation with Attention Visualization",
        authors: "Elena Rodriguez, Marco Rossi, André Martins",
        venue: "Machine Translation Journal",
        year: 2024,
        type: "journal",
        abstract: "We develop visualization techniques for attention mechanisms in machine translation systems, improving interpretability and debugging capabilities. Our tools provide multiple levels of analysis, from token-level alignments to phrase-level correspondences. User studies with professional translators show that our visualizations help identify translation errors and improve model understanding.",
        keywords: ["machine translation", "interpretability", "attention visualization", "human evaluation"],
        links: {
            paper: "https://doi.org/10.1007/s10590-024-xxxxx",
            demo: "https://demo.sardine-lab.org/mt-viz",
            bibtex: "#"
        }
    },
    {
        id: 10,
        title: "Few-shot Learning for Natural Language Processing Tasks",
        authors: "Ahmed Hassan, Ana Silva, André Martins",
        venue: "NAACL 2024",
        year: 2024,
        type: "conference",
        abstract: "A comprehensive study of few-shot learning techniques for various NLP tasks, proposing improvements based on structured prediction principles. We introduce meta-learning algorithms that leverage structural similarities between tasks. Our approach shows significant improvements on text classification, named entity recognition, and relation extraction with as few as 16 examples per class.",
        keywords: ["few-shot learning", "meta-learning", "NLP", "structured prediction"],
        links: {
            paper: "https://aclanthology.org/2024.naacl-main.xxx",
            code: "https://github.com/sardine-lab/few-shot-nlp",
            bibtex: "#"
        }
    },
    {
        id: 11,
        title: "Structured Attention Networks for Document Classification",
        authors: "Sara Kim, André Martins",
        venue: "WSDM 2024",
        year: 2024,
        type: "conference",
        abstract: "We propose structured attention networks that can model hierarchical document structure for improved classification performance. Our architecture learns to attend to important sentences and words within a document while respecting the inherent hierarchical structure. Experiments on document classification benchmarks show consistent improvements over flat attention models.",
        keywords: ["document classification", "structured attention", "hierarchical models", "text mining"],
        links: {
            paper: "https://dl.acm.org/doi/10.1145/xxxxx",
            code: "https://github.com/sardine-lab/structured-doc-attention",
            bibtex: "#"
        }
    },
    {
        id: 12,
        title: "Adversarial Training for Robust Natural Language Understanding",
        authors: "Max Weber, Pierre Dubois, André Martins",
        venue: "arXiv preprint",
        year: 2024,
        type: "preprint",
        abstract: "We investigate adversarial training techniques for improving robustness in natural language understanding tasks. Our approach generates adversarial examples that are both semantically preserving and challenging for NLU models. We show that models trained with our adversarial examples are more robust to various types of input perturbations while maintaining performance on clean data.",
        keywords: ["adversarial training", "robustness", "natural language understanding", "perturbations"],
        links: {
            paper: "https://arxiv.org/abs/2024.xxxxx",
            code: "https://github.com/sardine-lab/adversarial-nlu",
            bibtex: "#"
        }
    },
    {
        id: 13,
        title: "Graph Neural Networks for Syntactic Parsing",
        authors: "Carlos Lima, André Martins",
        venue: "TACL",
        year: 2023,
        type: "journal",
        abstract: "We apply graph neural networks to syntactic parsing tasks, showing improvements over traditional approaches through better modeling of linguistic structure. Our GNN architecture directly operates on dependency graph structures and learns to propagate information along syntactic edges. The model achieves state-of-the-art results on universal dependency parsing across 20 languages.",
        keywords: ["graph neural networks", "syntactic parsing", "linguistic structure", "universal dependencies"],
        links: {
            paper: "https://doi.org/10.1162/tacl_a_xxxxx",
            code: "https://github.com/sardine-lab/gnn-parsing",
            bibtex: "#"
        }
    },
    {
        id: 14,
        title: "Multimodal Learning with Structured Representations",
        authors: "Anna Kowalski, João Santos, André Martins",
        venue: "CVPR 2023",
        year: 2023,
        type: "conference",
        abstract: "A framework for multimodal learning that leverages structured representations to bridge vision and language understanding. We propose a unified architecture that learns to align visual and textual structures, enabling better cross-modal reasoning. Our approach achieves strong results on visual question answering, image captioning, and visual entailment tasks.",
        keywords: ["multimodal learning", "vision and language", "structured representations", "cross-modal"],
        links: {
            paper: "https://openaccess.thecvf.com/content/CVPR2023/papers/xxxxx",
            code: "https://github.com/sardine-lab/multimodal-structures",
            bibtex: "#"
        }
    },
    {
        id: 15,
        title: "Transformer Models with Explicit Syntactic Bias",
        authors: "Ravi Patel, André Martins",
        venue: "ICLR 2023",
        year: 2023,
        type: "conference",
        abstract: "We incorporate explicit syntactic bias into transformer models, improving performance on tasks that require syntactic understanding. Our approach modifies the attention mechanism to respect syntactic constraints derived from constituency and dependency parsing. Models with syntactic bias show improved generalization on syntactic benchmarks and better performance on low-resource settings.",
        keywords: ["transformers", "syntactic bias", "inductive bias", "generalization"],
        links: {
            paper: "https://openreview.net/forum?id=xxxxx",
            code: "https://github.com/sardine-lab/syntactic-transformers",
            bibtex: "#"
        }
    },
    {
        id: 16,
        title: "Continual Learning in Natural Language Processing",
        authors: "Sophie Chen, Ana Silva, André Martins",
        venue: "ACL 2023",
        year: 2023,
        type: "conference",
        abstract: "We study continual learning approaches for NLP tasks, proposing methods to prevent catastrophic forgetting while learning new tasks. Our framework uses task-specific adapters and regularization techniques to maintain performance on previously learned tasks. Experiments on text classification, named entity recognition, and parsing show that our approach effectively balances stability and plasticity.",
        keywords: ["continual learning", "catastrophic forgetting", "lifelong learning", "task adaptation"],
        links: {
            paper: "https://aclanthology.org/2023.acl-long.xxx",
            code: "https://github.com/sardine-lab/continual-nlp",
            bibtex: "#"
        }
    },
    {
        id: 17,
        title: "Efficient Attention Mechanisms for Long Sequences",
        authors: "Thomas Mueller, André Martins",
        venue: "EMNLP 2023",
        year: 2023,
        type: "conference",
        abstract: "We propose efficient attention mechanisms that can handle very long sequences without quadratic computational complexity. Our approach uses hierarchical attention patterns and sparse connectivity to reduce computational requirements. The method maintains competitive performance on long document understanding tasks while being significantly more efficient than standard attention.",
        keywords: ["efficient attention", "long sequences", "computational efficiency", "hierarchical attention"],
        links: {
            paper: "https://aclanthology.org/2023.emnlp-main.xxx",
            code: "https://github.com/sardine-lab/efficient-long-attention",
            bibtex: "#"
        }
    },
    {
        id: 18,
        title: "Neural Machine Translation for Low-Resource Languages",
        authors: "Isabella Rossi, Pierre Dubois, André Martins",
        venue: "WMT 2023",
        year: 2023,
        type: "conference",
        abstract: "Techniques for improving neural machine translation performance on low-resource language pairs through transfer learning and data augmentation. We explore multilingual pretraining strategies and show how to effectively leverage related high-resource languages. Our approach achieves significant improvements on the WMT low-resource translation benchmarks.",
        keywords: ["low-resource languages", "machine translation", "transfer learning", "data augmentation"],
        links: {
            paper: "https://aclanthology.org/2023.wmt-xxx",
            code: "https://github.com/sardine-lab/lowres-nmt",
            bibtex: "#"
        }
    }
];

// Function to get recent publications (used by index.html)
function getRecentPublications(limit = 3) {
    return publicationsData
        .sort((a, b) => b.year - a.year)
        .slice(0, limit);
}

// Function to get all publications (used by publications.html)
function getAllPublications() {
    return publicationsData;
}

// Function to filter publications by type
function filterPublicationsByType(type) {
    if (type === 'all') return publicationsData;
    return publicationsData.filter(pub => pub.type === type);
}

// Function to filter publications by year
function filterPublicationsByYear(year) {
    if (year === 'all') return publicationsData;
    return publicationsData.filter(pub => pub.year.toString() === year);
}

// Function to search publications
function searchPublications(query) {
    const searchTerm = query.toLowerCase();
    return publicationsData.filter(pub => 
        pub.title.toLowerCase().includes(searchTerm) ||
        pub.authors.toLowerCase().includes(searchTerm) ||
        pub.abstract.toLowerCase().includes(searchTerm) ||
        pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );
}

// Function to get unique years for filtering
function getPublicationYears() {
    const years = [...new Set(publicationsData.map(pub => pub.year))];
    return years.sort((a, b) => b - a);
}

// Function to get unique types for filtering
function getPublicationTypes() {
    return [...new Set(publicationsData.map(pub => pub.type))];
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        publicationsData,
        getRecentPublications,
        getAllPublications,
        filterPublicationsByType,
        filterPublicationsByYear,
        searchPublications,
        getPublicationYears,
        getPublicationTypes
    };
}