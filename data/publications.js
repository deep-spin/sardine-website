// Publications data for SARDINE Lab website
// Add new publications to maintain chronological order (newest first)

const publicationsData = [
    // 2025
    {
        id: 67,
        title: "Long-Context Generalization with Sparse Attention",
        authors: "Pavlo Vasylenko, Marcos Treviso, André F. T. Martins",
        venue: "arxiv",
        year: 2025,
        type: "preprint",
        abstract: "We show in this paper that sparse attention mechanisms using α-entmax can avoid these issues, due to their ability to assign exact zeros to irrelevant tokens. Furthermore, we introduce Adaptive-Scalable Entmax (ASEntmax), which endows α-entmax with a learnable temperature parameter, allowing the attention distribution to interpolate between sparse (pattern-focused) and dense (softmax-like) regimes. Finally, we show that the ability to locate and generalize fixed-size patterns can be further improved through a careful design of position encodings, which impacts both dense and sparse attention methods. By integrating ASEntmax into standard transformer layers alongside proper positional encodings, we show that our models greatly outperform softmax, scalable softmax, and fixed-temperature α-entmax baselines on long-context generalization.",
        keywords: ["long-context", "sparse models", "efficiency", "attention"],
        links: {
            paper: "https://arxiv.org/abs/2506.16640"
        }
    }, 
    {
        id: 66,
        title: "LaTIM: Measuring Latent Token-to-Token Interactions in Mamba Models",
        authors: "Hugo Pitorro, Marcos Treviso",
        venue: "ACL 2025 (Outstanding Paper Award)",
        year: 2025,
        type: "conference",
        abstract: "We introduce LaTIM, a novel token-level decomposition method for both Mamba-1 and Mamba-2 that enables fine-grained interpretability. We extensively evaluate our method across diverse tasks, including machine translation, copying, and retrieval-based generation, demonstrating its effectiveness in revealing Mamba's token-to-token interaction patterns.",
        keywords: ["state space models", "mamba", "efficiency", "long-context"],
        links: {
            paper: "https://arxiv.org/abs/2502.15612"
        }
    }, 
    {
        id: 1,
        title: "AdaSplash: Adaptive Sparse Flash Attention",
        authors: "Nuno Gonçalves, Marcos Treviso, André F. T. Martins",
        venue: "ICML 2025 (oral)",
        year: 2025,
        type: "conference",
        abstract: "We propose AdaSplash, an adaptive sparse flash attention mechanism that dynamically adjusts sparsity patterns based on input characteristics. Our approach significantly reduces computational overhead while maintaining competitive performance across various tasks. The method demonstrates particularly strong results in long-sequence modeling scenarios.",
        keywords: ["attention", "sparse models", "efficiency", "transformers"],
        links: {
            paper: "https://arxiv.org/abs/2502.12082"
        }
    },
    {
        id: 2,
        title: "∞-Video: A Training-Free Approach to Long Video Understanding via Continuous-Time Memory Consolidation",
        authors: "Saul Santos, António Farinhas, Daniel C McNamee, André F. T. Martins",
        venue: "ICML 2025",
        year: 2025,
        type: "conference",
        abstract: "We present ∞-Video, a training-free approach for understanding long videos through continuous-time memory consolidation. Our method leverages temporal dynamics and memory mechanisms to process extended video sequences without requiring task-specific training, achieving strong performance on video understanding benchmarks.",
        keywords: ["video understanding", "memory consolidation", "continuous-time", "training-free"],
        links: {
            paper: "https://arxiv.org/abs/2501.19098"
        }
    },
    {
        id: 3,
        title: "A Context-aware Framework for Translation-mediated Conversations",
        authors: "José Pombal, Sweta Agrawal, Patrick Fernandes, Emmanouil Zaranis, André F. T. Martins",
        venue: "TACL",
        year: 2025,
        type: "journal",
        abstract: "We introduce a context-aware framework for handling translation-mediated conversations, addressing the unique challenges of maintaining coherence and context across languages in multi-turn dialogues. Our approach significantly improves translation quality in conversational settings.",
        keywords: ["machine translation", "conversation", "context-aware", "dialogue"],
        links: {
            paper: "https://arxiv.org/abs/2412.04205"
        }
    },
    {
        id: 4,
        title: "Did Translation Models Get More Robust Without Anyone Even Noticing?",
        authors: "Ben Peters, André F. T. Martins",
        venue: "ACL 2025",
        year: 2025,
        type: "conference",
        abstract: "We investigate the evolution of robustness in neural machine translation models over recent years, analyzing whether improvements in robustness have occurred naturally as a byproduct of other advances. Our findings reveal surprising trends in model robustness across different types of perturbations and domains.",
        keywords: ["robustness", "machine translation", "evaluation", "neural networks"],
        links: {
            paper: "https://arxiv.org/abs/2403.03923"
        }
    },
    {
        id: 5,
        title: "Watching the watchers: Exposing gender disparities in machine translation quality estimation",
        authors: "Emmanouil Zaranis, Giuseppe Attanasio, Sweta Agrawal, André F. T. Martins",
        venue: "ACL 2025",
        year: 2025,
        type: "conference",
        abstract: "We expose and analyze gender disparities in machine translation quality estimation systems, revealing systematic biases in how quality estimators evaluate translations involving different genders. Our work highlights the need for more equitable evaluation metrics in machine translation.",
        keywords: ["gender bias", "quality estimation", "machine translation", "fairness"],
        links: {
            paper: "https://arxiv.org/abs/2410.10995"
        }
    },
    {
        id: 6,
        title: "Different Speech Translation Models Encode and Translate Speaker Gender Differently",
        authors: "Dennis Fucci, Marco Gaido, Matteo Negri, Luisa Bentivogli, Andre Martins, Giuseppe Attanasio",
        venue: "ACL 2025",
        year: 2025,
        type: "conference",
        abstract: "We investigate how different speech translation models encode and translate speaker gender information, revealing significant variations in gender representation across model architectures. Our analysis provides insights into the mechanisms underlying gender encoding in speech translation systems.",
        keywords: ["speech translation", "gender encoding", "multilingual", "representation learning"],
        links: {
            paper: "https://arxiv.org/abs/2506.02172"
        }
    },
    {
        id: 7,
        title: "LLMs instead of Human Judges? A Large Scale Empirical Study across 20 NLP Evaluation Tasks",
        authors: "Anna Bavaresco, Raffaella Bernardi, Leonardo Bertolazzi, Desmond Elliott, Raquel Fernández, Albert Gatt, Esam Ghaleb, Mario Giulianelli, Michael Hanna, Alexander Koller, Andre Martins, Philipp Mondorf, Vera Neplenbroek, Sandro Pezzelle, Barbara Plank, David Schlangen, Alessandro Suglia, Aditya K Surikuchi, Ece Takmaz, Alberto Testoni",
        venue: "ACL 2025",
        year: 2025,
        type: "conference",
        abstract: "We conduct a comprehensive empirical study comparing LLM-based evaluation with human judgment across 20 NLP evaluation tasks. Our findings provide insights into when and how LLMs can effectively replace human evaluators, highlighting both the potential and limitations of automated evaluation methods.",
        keywords: ["evaluation", "large language models", "human judgment", "NLP"],
        links: {
            paper: "https://arxiv.org/abs/2406.18403"
        }
    },
    {
        id: 8,
        title: "Global MMLU: Understanding and Addressing Cultural and Linguistic Biases in Multilingual Evaluation",
        authors: "Shivalika Singh, Angelika Romanou, Clémentine Fourrier, David Ifeoluwa Adelani, Jian Gang Ngui, Daniel Vila-Suero, Peerat Limkonchotiwat, Kelly Marchisio, Wei Qi Leong, Yosephine Susanto, Raymond Ng, Shayne Longpre, Sebastian Ruder, Wei-Yin Ko, Antoine Bosselut, Alice Oh, Andre Martins, Leshem Choshen, Daphne Ippolito, Enzo Ferrante, Marzieh Fadaee, Beyza Ermis, Sara Hooker",
        venue: "ACL 2025",
        year: 2025,
        type: "conference",
        abstract: "We introduce Global MMLU, a comprehensive analysis of cultural and linguistic biases in multilingual evaluation benchmarks. Our work reveals systematic biases in current evaluation practices and proposes methods to create more equitable and culturally-aware evaluation frameworks.",
        keywords: ["multilingual evaluation", "cultural bias", "linguistic bias", "fairness"],
        links: {
            paper: "https://arxiv.org/abs/2412.03304"
        }
    },
    {
        id: 9,
        title: "Discrete latent structure in neural networks",
        authors: "Vlad Niculae, Caio Corro, Nikita Nangia, Tsvetomila Mihaylova, André F. T. Martins",
        venue: "Foundations and Trends in Signal Processing",
        year: 2025,
        type: "journal",
        abstract: "We provide a comprehensive survey of discrete latent structure in neural networks, covering theoretical foundations, algorithmic approaches, and practical applications. This work synthesizes recent advances in structured prediction and latent variable modeling within deep learning frameworks.",
        keywords: ["discrete structures", "latent variables", "neural networks", "structured prediction"],
        links: {
            paper: "https://arxiv.org/abs/2301.07473"
        }
    },
    {
        id: 10,
        title: "Sparse Activations as Conformal Predictors",
        authors: "Margarida Campos, João Calém, Sophia Sklaviadis, Mário A. T. Figueiredo, André F. T. Martins",
        venue: "AISTATS 2025",
        year: 2025,
        type: "conference",
        abstract: "We propose using sparse activations as conformal predictors, providing uncertainty quantification with theoretical guarantees. Our method leverages the natural sparsity in neural network activations to construct prediction sets with valid coverage properties.",
        keywords: ["conformal prediction", "sparse activations", "uncertainty quantification", "statistical learning"],
        links: {
            paper: "https://arxiv.org/pdf/2502.14773"
        }
    },
    {
        id: 11,
        title: "Modern Hopfield Networks with Continuous-Time Memories",
        authors: "Saul Santos, António Farinhas, Daniel C McNamee, André FT Martins",
        venue: "ICLR Workshop on New Frontiers in Associative Memories",
        year: 2025,
        type: "conference",
        abstract: "We extend modern Hopfield networks to incorporate continuous-time memory dynamics, enabling more flexible and biologically-plausible memory storage and retrieval mechanisms. Our approach demonstrates improved performance on associative memory tasks.",
        keywords: ["Hopfield networks", "continuous-time", "associative memory", "neural dynamics"],
        links: {
            paper: "https://arxiv.org/pdf/2502.10122"
        }
    },
    {
        id: 12,
        title: "XAMPLER: Learning to retrieve cross-lingual in-context examples",
        authors: "Peiqin Lin, André FT Martins, Hinrich Schütze",
        venue: "Findings of NAACL 2025",
        year: 2025,
        type: "conference",
        abstract: "XAMPLER is a method for learning to retrieve effective cross-lingual in-context examples for few-shot learning. Our approach significantly improves performance on cross-lingual tasks by selecting optimal examples that bridge language gaps effectively.",
        keywords: ["cross-lingual", "in-context learning", "few-shot learning", "example retrieval"],
        links: {
            paper: "https://arxiv.org/pdf/2405.05116"
        }
    },

    // 2024
    {
        id: 13,
        title: "Reranking Laws for Language Generation: A Communication-Theoretic Perspective",
        authors: "António Farinhas, Haau-Sing Li, André F. T. Martins",
        venue: "NeurIPS 2024 (spotlight)",
        year: 2024,
        type: "conference",
        abstract: "We establish theoretical laws governing reranking in language generation from a communication-theoretic perspective. Our work provides fundamental insights into the trade-offs between generation quality and computational efficiency, offering principled guidelines for designing reranking strategies.",
        keywords: ["reranking", "language generation", "communication theory", "theoretical analysis"],
        links: {
            paper: "https://arxiv.org/abs/2409.07131"
        }
    },
    {
        id: 14,
        title: "QUEST: Quality-Aware Metropolis-Hastings Sampling for Machine Translation",
        authors: "Gonçalo R. A. Faria, Sweta Agrawal, António Farinhas, Ricardo Rei, José G. C. de Souza, André F. T. Martins",
        venue: "NeurIPS 2024",
        year: 2024,
        type: "conference",
        abstract: "QUEST introduces quality-aware Metropolis-Hastings sampling for machine translation, incorporating translation quality estimates directly into the sampling process. This approach leads to improved translation quality while maintaining diversity in the generated outputs.",
        keywords: ["machine translation", "sampling", "quality estimation", "Metropolis-Hastings"],
        links: {
            paper: "https://arxiv.org/abs/2406.00049"
        }
    },
    {
        id: 15,
        title: "Can Automatic Metrics Assess High-Quality Translations?",
        authors: "Sweta Agrawal, António Farinhas, Ricardo Rei, André F.T. Martins",
        venue: "EMNLP 2024",
        year: 2024,
        type: "conference",
        abstract: "We investigate the ability of automatic metrics to assess high-quality translations, revealing limitations in current evaluation practices. Our analysis provides insights into when and how automatic metrics fail to capture translation quality nuances.",
        keywords: ["evaluation metrics", "translation quality", "automatic assessment", "machine translation"],
        links: {
            paper: "https://arxiv.org/abs/2405.18348"
        }
    },
    {
        id: 16,
        title: "Modeling User Preferences with Automatic Metrics: Creating a High-Quality Preference Dataset for Machine Translation",
        authors: "Sweta Agrawal, José G. C. de Souza, Ricardo Rei, António Farinhas, Gonçalo Faria, Patrick Fernandes, Nuno M Guerreiro, André F.T. Martins",
        venue: "EMNLP 2024",
        year: 2024,
        type: "conference",
        abstract: "We present a methodology for creating high-quality preference datasets for machine translation using automatic metrics. Our approach enables the development of more aligned translation systems that better reflect human preferences.",
        keywords: ["preference learning", "machine translation", "automatic metrics", "dataset creation"],
        links: {
            paper: "#"
        }
    },
    {
        id: 17,
        title: "Analyzing Context Contributions in LLM-based Machine Translation",
        authors: "Emmanouil Zaranis, Nuno M. Guerreiro, Andre Martins",
        venue: "Findings of EMNLP 2024",
        year: 2024,
        type: "conference",
        abstract: "We analyze how context contributes to translation quality in large language model-based machine translation systems. Our findings reveal important insights about the role of context in different translation scenarios.",
        keywords: ["context analysis", "LLM-based translation", "machine translation", "contextual information"],
        links: {
            paper: "#"
        }
    },
    {
        id: 18,
        title: "xTower: A Multilingual LLM for Explaining and Correcting Translation Errors",
        authors: "Marcos V. Treviso, Nuno M. Guerreiro, Sweta Agrawal, Ricardo Rei, José Pombal, Tania Vaz, Helena Wu, Beatriz Silva, Daan van Stigt, André F.T. Martins",
        venue: "Findings of EMNLP 2024",
        year: 2024,
        type: "conference",
        abstract: "xTower is a multilingual large language model specifically designed for explaining and correcting translation errors. Our model provides detailed explanations for translation mistakes and suggests appropriate corrections, advancing interpretable machine translation.",
        keywords: ["error correction", "multilingual LLM", "translation explanation", "interpretability"],
        links: {
            paper: "https://arxiv.org/abs/2406.19482"
        }
    },
    {
        id: 19,
        title: "How Effective are State Space Models for Machine Translation?",
        authors: "Hugo Pitorro, Pavlo Vasylenko, Marcos Treviso, André F.T. Martins",
        venue: "WMT 2024",
        year: 2024,
        type: "conference",
        abstract: "We evaluate the effectiveness of state space models for machine translation tasks, comparing them against traditional transformer architectures. Our analysis provides insights into the strengths and limitations of state space models in translation scenarios.",
        keywords: ["state space models", "machine translation", "sequence modeling", "comparative analysis"],
        links: {
            paper: "https://arxiv.org/abs/2407.05489"
        }
    },
    {
        id: 20,
        title: "Tower: An Open Multilingual Large Language Model for Translation-Related Tasks",
        authors: "Duarte M. Alves, José Pombal, Nuno M. Guerreiro, Pedro H. Martins, João Alves, Amin Farajian, Ben Peters, Ricardo Rei, Patrick Fernandes, Sweta Agrawal, Pierre Colombo, José G.C. de Souza, André F.T. Martins",
        venue: "COLM 2024 (oral)",
        year: 2024,
        type: "conference",
        abstract: "Tower is an open multilingual large language model specifically designed for translation-related tasks. Our model demonstrates strong performance across various translation scenarios while maintaining transparency and accessibility for the research community.",
        keywords: ["multilingual LLM", "open-source", "translation", "large language models"],
        links: {
            paper: "https://arxiv.org/abs/2402.17733"
        }
    },
    {
        id: 21,
        title: "Conformal Prediction for Natural Language Processing: A Survey",
        authors: "Margarida M. Campos, António Farinhas, Chrysoula Zerva, Mário A.T. Figueiredo, André F.T. Martins",
        venue: "TACL",
        year: 2024,
        type: "journal",
        abstract: "We provide a comprehensive survey of conformal prediction methods in natural language processing, covering theoretical foundations, practical applications, and current challenges. This work serves as a guide for researchers interested in uncertainty quantification in NLP.",
        keywords: ["conformal prediction", "uncertainty quantification", "survey", "statistical learning theory"],
        links: {
            paper: "https://arxiv.org/abs/2405.01976"
        }
    },
    {
        id: 22,
        title: "Conformalizing Machine Translation Evaluation",
        authors: "Chryssa Zerva, André F. T. Martins",
        venue: "TACL",
        year: 2024,
        type: "journal",
        abstract: "We introduce conformal prediction methods for machine translation evaluation, providing uncertainty quantification for translation quality assessments. Our approach offers theoretical guarantees for evaluation confidence intervals.",
        keywords: ["conformal prediction", "machine translation evaluation", "uncertainty quantification", "quality assessment"],
        links: {
            paper: "https://arxiv.org/pdf/2306.06221"
        }
    },
    {
        id: 23,
        title: "Assessing the Role of Context in Chat Translation Evaluation: Is Context Helpful and Under What Conditions?",
        authors: "Sweta Agarwal, Amin Farajian, Patrick Fernandes, Ricardo Rei, André F. T. Martins",
        venue: "TACL",
        year: 2024,
        type: "journal",
        abstract: "We investigate the role of context in chat translation evaluation, determining when and how context improves translation quality assessment. Our findings provide guidelines for effective context utilization in conversational translation scenarios.",
        keywords: ["chat translation", "context evaluation", "conversational AI", "machine translation"],
        links: {
            paper: "https://arxiv.org/pdf/2403.08314"
        }
    },
    {
        id: 24,
        title: "Sparse and Structured Hopfield Networks",
        authors: "Saul Santos, Vlad Niculae, Daniel C. McNamee, André F. T. Martins",
        venue: "ICML 2024 (spotlight)",
        year: 2024,
        type: "conference",
        abstract: "We introduce sparse and structured variants of modern Hopfield networks, reducing computational complexity while maintaining or improving memory capacity. Our approach demonstrates superior performance on associative memory tasks with significantly reduced resource requirements.",
        keywords: ["Hopfield networks", "sparsity", "structured networks", "associative memory"],
        links: {
            paper: "https://arxiv.org/pdf/2402.13725"
        }
    },
    {
        id: 25,
        title: "Aligning Neural Machine Translation Models: Human Feedback in Training and Inference",
        authors: "Miguel Moura Ramos, Patrick Fernandes, António Farinhas, André F. T. Martins",
        venue: "EAMT 2024",
        year: 2024,
        type: "conference",
        abstract: "We explore methods for aligning neural machine translation models using human feedback during both training and inference. Our approach improves translation quality by incorporating human preferences throughout the model development process.",
        keywords: ["alignment", "human feedback", "machine translation", "preference learning"],
        links: {
            paper: "https://arxiv.org/pdf/2311.09132"
        }
    },
    {
        id: 26,
        title: "Non-exchangeable Conformal Risk Control",
        authors: "António Farinhas, Chryssa Zerva, Dennis Ulmer, André F. T. Martins",
        venue: "ICLR 2024",
        year: 2024,
        type: "conference",
        abstract: "We extend conformal prediction to non-exchangeable settings, enabling risk control in scenarios where traditional conformal methods fail. Our approach provides theoretical guarantees for risk control under distribution shift and temporal dependencies.",
        keywords: ["conformal prediction", "risk control", "non-exchangeable", "distribution shift"],
        links: {
            paper: "https://arxiv.org/pdf/2310.01262"
        }
    },
    {
        id: 27,
        title: "Non-exchangeable Conformal Language Generation with Nearest Neighbors",
        authors: "Dennis Ulmer, Chryssa Zerva, André F. T. Martins",
        venue: "EACL 2024",
        year: 2024,
        type: "conference",
        abstract: "We propose non-exchangeable conformal methods for language generation tasks using nearest neighbor approaches. Our method provides uncertainty quantification for generated text while handling non-exchangeable data distributions.",
        keywords: ["conformal prediction", "language generation", "nearest neighbors", "uncertainty quantification"],
        links: {
            paper: "https://arxiv.org/pdf/2402.00707"
        }
    },
    {
        id: 28,
        title: "mPLM-Sim: Unveiling Better Cross-Lingual Similarity and Transfer in Multilingual Pretrained Language Models",
        authors: "Peiqin Lin, Chengzhi Hu, Zheyu Zhang, André F. T. Martins, Hinrich Schütze",
        venue: "EACL 2024",
        year: 2024,
        type: "conference",
        abstract: "mPLM-Sim introduces improved methods for measuring cross-lingual similarity and transfer in multilingual pretrained language models. Our approach provides better insights into cross-lingual capabilities and transfer mechanisms.",
        keywords: ["cross-lingual similarity", "multilingual models", "transfer learning", "language models"],
        links: {
            paper: "https://arxiv.org/abs/2305.13684"
        }
    },
    {
        id: 29,
        title: "xCOMET: Transparent Machine Translation Evaluation through Fine-grained Error Detection",
        authors: "Nuno M. Guerreiro, Ricardo Rei, Daan van Stigt, Luisa Coheur, Pierre Colombo, André F. T. Martins",
        venue: "TACL",
        year: 2024,
        type: "journal",
        abstract: "xCOMET is a state-of-the-art machine translation evaluation metric that provides transparent, fine-grained error detection. Our approach offers interpretable quality assessments by identifying specific types of translation errors.",
        keywords: ["machine translation evaluation", "error detection", "interpretability", "quality estimation"],
        links: {
            paper: "https://arxiv.org/abs/2310.10482"
        }
    },

    // 2023
    {
        id: 30,
        title: "Sparse Modern Hopfield Networks",
        authors: "André F. T. Martins, Vlad Niculae, Daniel C. McNamee",
        venue: "NeurIPS Workshop on Associative Memories & Hopfield Networks",
        year: 2023,
        type: "conference",
        abstract: "We introduce sparse variants of modern Hopfield networks that maintain the expressive power of dense networks while significantly reducing computational requirements. Our approach demonstrates improved efficiency and scalability for large-scale associative memory tasks.",
        keywords: ["Hopfield networks", "sparsity", "associative memory", "computational efficiency"],
        links: {
            paper: "https://openreview.net/pdf?id=zwqlV7HoaT"
        }
    },
    {
        id: 31,
        title: "The Devil Is in the Errors: Leveraging Large Language Models for Fine-grained Machine Translation Evaluation",
        authors: "Patrick Fernandes, Daniel Deutsch, Mara Finkelstein, Parker Riley, André Martins, Graham Neubig, Ankush Garg, Jonathan Clark, Markus Freitag, Orhan Firat",
        venue: "WMT 2023",
        year: 2023,
        type: "conference",
        abstract: "We leverage large language models for fine-grained machine translation evaluation, focusing on detailed error analysis. Our approach provides more nuanced quality assessments by identifying and categorizing specific translation errors.",
        keywords: ["machine translation evaluation", "large language models", "error analysis", "fine-grained evaluation"],
        links: {
            paper: "https://arxiv.org/abs/2308.07286"
        }
    },
    {
        id: 32,
        title: "Steering Large Language Models for Machine Translation with Finetuning and In-Context Learning",
        authors: "Duarte M. Alves, Nuno M. Guerreiro, João Alves, José Pombal, Ricardo Rei, José G. C. de Souza, Pierre Colombo, André F. T. Martins",
        venue: "Findings of EMNLP 2023",
        year: 2023,
        type: "conference",
        abstract: "We explore methods for steering large language models for machine translation using both finetuning and in-context learning approaches. Our work provides insights into effective strategies for adapting LLMs to translation tasks.",
        keywords: ["large language models", "machine translation", "finetuning", "in-context learning"],
        links: {
            paper: "https://arxiv.org/abs/2310.13448"
        }
    },
    {
        id: 33,
        title: "Scaling up CometKiwi: Unbabel-IST 2023 Submission for the Quality Estimation Shared Task",
        authors: "Ricardo Rei, Nuno M. Guerreiro, José Pombal, Daan van Stigt, Marcos Treviso, Luisa Coheur, José G.C. de Souza, André F.T. Martins",
        venue: "WMT 2023",
        year: 2023,
        type: "conference",
        abstract: "We present our scaled-up CometKiwi system for the WMT 2023 Quality Estimation shared task, demonstrating significant improvements in quality estimation accuracy through enhanced model architectures and training strategies.",
        keywords: ["quality estimation", "machine translation", "shared task", "model scaling"],
        links: {
            paper: "https://arxiv.org/pdf/2309.11925.pdf"
        }
    },
    {
        id: 34,
        title: "An Empirical Study of Translation Hypothesis Ensembling with Large Language Models",
        authors: "António Farinhas, José G. C. de Souza, André F. T. Martins",
        venue: "EMNLP 2023",
        year: 2023,
        type: "conference",
        abstract: "We conduct an empirical study on translation hypothesis ensembling using large language models, investigating different strategies for combining multiple translation hypotheses to improve overall translation quality.",
        keywords: ["ensembling", "machine translation", "large language models", "hypothesis combination"],
        links: {
            paper: "https://arxiv.org/abs/2310.11430"
        }
    },
    {
        id: 35,
        title: "Bridging the gap: A survey on integrating (human) feedback for natural language generation",
        authors: "Patrick Fernandes, Aman Madaan, Emmy Liu, António Farinhas, Pedro H. Martins, Amanda Bertsch, José G. C. de Souza, Shuyan Zhou, Tongshuang Wu, Graham Neubig, André F. T. Martins",
        venue: "TACL",
        year: 2023,
        type: "journal",
        abstract: "We provide a comprehensive survey on integrating human feedback in natural language generation, covering various feedback mechanisms, integration strategies, and their impact on generation quality.",
        keywords: ["human feedback", "natural language generation", "survey", "interactive systems"],
        links: {
            paper: "https://arxiv.org/pdf/2305.00955"
        }
    },
    {
        id: 36,
        title: "Hallucinations in large multilingual translation models",
        authors: "Nuno M. Guerreiro, Duarte Alves, Jonas Waldendorf, Barry Haddow, Alexandra Birch, Pierre Colombo, André F. T. Martins",
        venue: "TACL",
        year: 2023,
        type: "journal",
        abstract: "We investigate hallucinations in large multilingual translation models, analyzing their causes, frequency, and impact on translation quality. Our work provides insights into mitigating hallucination issues in multilingual systems.",
        keywords: ["hallucinations", "multilingual translation", "large language models", "quality analysis"],
        links: {
            paper: "https://arxiv.org/pdf/2303.16104"
        }
    },
    {
        id: 37,
        title: "When Does Translation Require Context? A Data-driven, Multilingual Exploration",
        authors: "Patrick Fernandes, Kayo Yin, Emmy Liu, André F. T. Martins, Graham Neubig",
        venue: "ACL 2023",
        year: 2023,
        type: "conference",
        abstract: "We conduct a data-driven, multilingual exploration of when translation requires context, providing empirical insights into context dependency across different languages and domains. Best resource paper award.",
        keywords: ["context-aware translation", "multilingual analysis", "context dependency", "empirical study"],
        links: {
            paper: "https://arxiv.org/pdf/2109.07446"
        }
    },
    {
        id: 38,
        title: "Python Code Generation by Asking Clarification Questions",
        authors: "Haau-Sing Li, Mohsen Mesgar, André F. T. Martins, Iryna Gurevych",
        venue: "ACL 2023",
        year: 2023,
        type: "conference",
        abstract: "We propose a method for Python code generation that improves accuracy by asking clarification questions when the initial specification is ambiguous or incomplete.",
        keywords: ["code generation", "clarification questions", "Python", "interactive programming"],
        links: {
            paper: "https://arxiv.org/pdf/2212.09885"
        }
    },
    {
        id: 39,
        title: "CREST: A Joint Framework for Rationalization and Counterfactual Text Generation",
        authors: "Marcos Treviso, Alexis Ross, Nuno M. Guerreiro, André F. T. Martins",
        venue: "ACL 2023",
        year: 2023,
        type: "conference",
        abstract: "CREST is a joint framework that combines rationalization and counterfactual text generation, enabling models to provide explanations for their predictions while generating counterfactual examples that illustrate decision boundaries.",
        keywords: ["rationalization", "counterfactual generation", "explainability", "text generation"],
        links: {
            paper: "https://arxiv.org/pdf/2305.17075"
        }
    },
    {
        id: 40,
        title: "Glot500: Scaling Multilingual Corpora and Language Models to 500 Languages",
        authors: "Ayyoob ImaniGooghari, Peiqin Lin, Amir Hossein Kargaran, Silvia Severini, Masoud Jalili Sabet, Nora Kassner, Chunlan Ma, Helmut Schmid, André F. T. Martins, François Yvon, Hinrich Schütze",
        venue: "ACL 2023",
        year: 2023,
        type: "conference",
        abstract: "Glot500 scales multilingual corpora and language models to 500 languages, providing unprecedented coverage of world languages. ACL 2023 Area Chair Award.",
        keywords: ["multilingual", "language models", "low-resource languages", "corpora"],
        links: {
            paper: "https://arxiv.org/pdf/2305.12182"
        }
    },
    {
        id: 41,
        title: "The inside story: Towards better understanding of machine translation neural evaluation metrics",
        authors: "Ricardo Rei, Nuno M. Guerreiro, Marcos Treviso, Luisa Coheur, Alon Lavie, André F. T. Martins",
        venue: "ACL 2023",
        year: 2023,
        type: "conference",
        abstract: "We provide insights into the inner workings of neural machine translation evaluation metrics, analyzing what linguistic features they capture and how they relate to human judgment.",
        keywords: ["evaluation metrics", "machine translation", "neural networks", "interpretability"],
        links: {
            paper: "https://arxiv.org/pdf/2305.11806"
        }
    },
    {
        id: 42,
        title: "Optimal transport for unsupervised hallucination detection in neural machine translation",
        authors: "Nuno M. Guerreiro, Pierre Colombo, Pablo Piantanida, André F. T. Martins",
        venue: "ACL 2023",
        year: 2023,
        type: "conference",
        abstract: "We use optimal transport theory for unsupervised detection of hallucinations in neural machine translation, providing a principled approach to identify unreliable translations without reference texts.",
        keywords: ["optimal transport", "hallucination detection", "machine translation", "unsupervised learning"],
        links: {
            paper: "https://arxiv.org/pdf/2212.09631"
        }
    },
    {
        id: 43,
        title: "Empirical Assessment of kNN-MT for Real-World Translation Scenarios",
        authors: "Pedro H. Martins, João Alves, Tânia Vaz, Madalena Gonçalves, Beatriz Silva, Marianna Buchicchio, José G. C. de Souza, André F. T. Martins",
        venue: "EAMT 2023",
        year: 2023,
        type: "conference",
        abstract: "We conduct an empirical assessment of k-nearest neighbor machine translation (kNN-MT) in real-world scenarios, evaluating its effectiveness across different domains and language pairs.",
        keywords: ["kNN-MT", "machine translation", "empirical evaluation", "real-world scenarios"],
        links: {
            paper: "https://aclanthology.org/2023.eamt-1.12/"
        }
    },
    {
        id: 44,
        title: "BLEU Meets COMET: Combining Lexical and Neural Metrics Towards Robust Machine Translation Evaluation",
        authors: "Taisiya Glushkova, Chrysoula Zerva, André F. T. Martins",
        venue: "EAMT 2023",
        year: 2023,
        type: "conference",
        abstract: "We propose combining lexical metrics like BLEU with neural metrics like COMET to create more robust machine translation evaluation, leveraging the strengths of both approaches.",
        keywords: ["evaluation metrics", "BLEU", "COMET", "robust evaluation"],
        links: {
            paper: "https://arxiv.org/pdf/2305.19144"
        }
    },
    {
        id: 45,
        title: "Efficient methods for natural language processing: a survey",
        authors: "Marcos Treviso, Tianchu Ji, Ji-Ung Lee, Betty van Aken, Qingqing Cao, Manuel R. Ciosici, Michael Hassid, Kenneth Heafield, Sara Hooker, Pedro H. Martins, André F. T. Martins, Peter Milder, Colin Raffel, Edwin Simpson, Noam Slonim, Niranjan Balasubramanian, Leon Derczynski, Roy Schwartz",
        venue: "TACL",
        year: 2023,
        type: "journal",
        abstract: "We provide a comprehensive survey of efficient methods for natural language processing, covering model compression, efficient architectures, and training strategies for resource-constrained environments.",
        keywords: ["efficiency", "model compression", "survey", "resource constraints"],
        links: {
            paper: "https://arxiv.org/pdf/2209.00099.pdf"
        }
    },
    {
        id: 46,
        title: "Looking for a needle in a haystack: A comprehensive study of hallucinations in neural machine translation",
        authors: "Nuno M. Guerreiro, Elena Voita, André F. T. Martins",
        venue: "EACL 2023",
        year: 2023,
        type: "conference",
        abstract: "We conduct a comprehensive study of hallucinations in neural machine translation, analyzing their patterns, causes, and potential mitigation strategies across different model architectures and language pairs.",
        keywords: ["hallucinations", "neural machine translation", "comprehensive study", "error analysis"],
        links: {
            paper: "https://arxiv.org/pdf/2208.05309.pdf"
        }
    },

    // 2022
    {
        id: 47,
        title: "Learning to Scaffold: Optimizing Model Explanations for Teaching",
        authors: "Patrick Fernandes, Marcos Treviso, Danish Pruthi, André F. T. Martins, Graham Neubig",
        venue: "NeurIPS 2022",
        year: 2022,
        type: "conference",
        abstract: "We propose learning to scaffold model explanations for teaching, optimizing explanations to maximize student learning rather than just accuracy or interpretability.",
        keywords: ["explainability", "teaching", "scaffolding", "model explanations"],
        links: {
            paper: "https://arxiv.org/pdf/2204.10810.pdf"
        }
    },
    {
        id: 48,
        title: "Chunk-based Nearest Neighbor Machine Translation",
        authors: "Pedro Martins, Zita Marinho, André F. T. Martins",
        venue: "EMNLP 2022",
        year: 2022,
        type: "conference",
        abstract: "We introduce chunk-based nearest neighbor machine translation, extending kNN-MT to operate on phrase-level chunks rather than individual tokens, improving translation fluency and coherence.",
        keywords: ["kNN-MT", "chunk-based", "machine translation", "phrase-level"],
        links: {
            paper: "https://arxiv.org/abs/2205.12230"
        }
    },
    {
        id: 49,
        title: "Disentangling Uncertainty in Machine Translation Evaluation",
        authors: "Chrysoula Zerva, Taisiya Glushkova, André F. T. Martins",
        venue: "EMNLP 2022",
        year: 2022,
        type: "conference",
        abstract: "We propose methods for disentangling different sources of uncertainty in machine translation evaluation, providing more nuanced understanding of evaluation confidence.",
        keywords: ["uncertainty quantification", "machine translation evaluation", "disentanglement", "confidence estimation"],
        links: {
            paper: "https://arxiv.org/abs/2204.06546"
        }
    },
    {
        id: 50,
        title: "Modeling Structure with Undirected Neural Networks",
        authors: "Tsvetomila Mihaylova, Vlad Niculae, André F. T. Martins",
        venue: "ICML 2022",
        year: 2022,
        type: "conference",
        abstract: "We propose undirected neural networks for modeling structured data, enabling more flexible representation learning for tasks with complex dependencies and constraints.",
        keywords: ["undirected networks", "structured modeling", "neural networks", "representation learning"],
        links: {
            paper: "https://arxiv.org/pdf/2202.03760.pdf"
        }
    },
    {
        id: 51,
        title: "Quality-Aware Decoding for Neural Machine Translation",
        authors: "Patrick Fernandes, António Farinhas, Ricardo Rei, José G. C. Souza, Perez Ogayo, Graham Neubig, André F. T. Martins",
        venue: "NAACL 2022",
        year: 2022,
        type: "conference",
        abstract: "We introduce quality-aware decoding strategies for neural machine translation that incorporate quality estimates during the generation process to improve translation quality.",
        keywords: ["quality-aware decoding", "machine translation", "generation", "quality estimation"],
        links: {
            paper: "https://arxiv.org/pdf/2205.00978.pdf"
        }
    },
    {
        id: 52,
        title: "Beyond characters: Subword-level morpheme segmentation",
        authors: "Ben Peters, André F. T. Martins",
        venue: "SIGMORPHON 2022",
        year: 2022,
        type: "conference",
        abstract: "We explore subword-level morpheme segmentation beyond character-level approaches, proposing methods that better capture morphological structure in neural language models.",
        keywords: ["morpheme segmentation", "subword modeling", "morphology", "segmentation"],
        links: {
            paper: "https://aclanthology.org/2022.sigmorphon-1.14.pdf"
        }
    },
    {
        id: 53,
        title: "Searching for COMETINHO: The Little Metric That Could",
        authors: "Ricardo Rei, Ana C. Farinha, José G. C. Souza, P. G. Ramos, André F. T. Martins, Luisa Coheur, Alon Lavie",
        venue: "EAMT 2022",
        year: 2022,
        type: "conference",
        abstract: "COMETINHO is a lightweight version of the COMET metric for machine translation evaluation. Best Paper Award.",
        keywords: ["evaluation metrics", "lightweight models", "machine translation", "efficiency"],
        links: {
            paper: "https://aclanthology.org/2022.eamt-1.9/"
        }
    },
    {
        id: 54,
        title: "∞-former: Infinite Memory Transformer",
        authors: "Pedro Martins, Zita Marinho, André F. T. Martins",
        venue: "ACL 2022",
        year: 2022,
        type: "conference",
        abstract: "We introduce the ∞-former, a transformer architecture with theoretically infinite memory capacity, enabling processing of arbitrarily long sequences without memory limitations.",
        keywords: ["infinite memory", "transformers", "long sequences", "memory architectures"],
        links: {
            paper: "https://arxiv.org/pdf/2109.00301.pdf"
        }
    },
    {
        id: 55,
        title: "Efficient Machine Translation Domain Adaptation",
        authors: "Pedro H. Martins, Zita Marinho, André F. T. Martins",
        venue: "ACL Workshop on Semiparametric Methods in NLP",
        year: 2022,
        type: "conference",
        abstract: "We propose efficient methods for machine translation domain adaptation, reducing the computational cost while maintaining adaptation effectiveness.",
        keywords: ["domain adaptation", "machine translation", "efficiency", "transfer learning"],
        links: {
            paper: "https://arxiv.org/pdf/2204.12608.pdf"
        }
    },
    {
        id: 56,
        title: "Predicting attention sparsity in transformers",
        authors: "Marcos Treviso, António Góis, Patrick Fernandes, Erick Fonseca, André F. T. Martins",
        venue: "SPNLP 2022",
        year: 2022,
        type: "conference",
        abstract: "We propose methods for predicting attention sparsity patterns in transformers, enabling more efficient attention computation without sacrificing model performance.",
        keywords: ["attention sparsity", "transformers", "efficiency", "prediction"],
        links: {
            paper: "https://arxiv.org/pdf/2109.12188.pdf"
        }
    },
    {
        id: 57,
        title: "Sparse Communication via Mixed Distributions",
        authors: "António Farinhas, Wilker Aziz, Vlad Niculae, André F. T. Martins",
        venue: "ICLR 2022 (oral)",
        year: 2022,
        type: "conference",
        abstract: "We propose sparse communication mechanisms using mixed distributions, enabling efficient information transmission while maintaining representational capacity.",
        keywords: ["sparse communication", "mixed distributions", "information theory", "efficiency"],
        links: {
            paper: "https://arxiv.org/pdf/2108.02658.pdf"
        }
    },
    {
        id: 58,
        title: "Differentiable Causal Discovery Under Latent Interventions",
        authors: "Gonçalo R. A. Faria, André F. T. Martins, Mário A. T. Figueiredo",
        venue: "CLeaR 2022",
        year: 2022,
        type: "conference",
        abstract: "We propose differentiable methods for causal discovery under latent interventions, enabling end-to-end learning of causal structures from observational and interventional data.",
        keywords: ["causal discovery", "latent interventions", "differentiable programming", "causal inference"],
        links: {
            paper: "https://arxiv.org/pdf/2203.02336.pdf"
        }
    },
    {
        id: 59,
        title: "Sparse Continuous Distributions and Fenchel-Young Losses",
        authors: "André F. T. Martins, Marcos Treviso, António Farinhas, Pedro M. Q. Aguiar, Mário A. T. Figueiredo, Mathieu Blondel, Vlad Niculae",
        venue: "JMLR",
        year: 2022,
        type: "journal",
        abstract: "We introduce sparse continuous distributions and their associated Fenchel-Young losses, providing a theoretical framework for sparse probabilistic modeling with continuous distributions.",
        keywords: ["sparse distributions", "Fenchel-Young losses", "continuous distributions", "theoretical analysis"],
        links: {
            paper: "https://arxiv.org/pdf/2108.01988.pdf"
        }
    },

    // Continue with more publications from 2021, 2020, etc. following the same pattern...
    // I'll add a few more key ones to demonstrate the structure

    // 2021
    {
        id: 60,
        title: "Uncertainty-Aware Machine Translation Evaluation",
        authors: "Taisiya Glushkova, Chrysoula Zerva, Ricardo Rei, André F. T. Martins",
        venue: "Findings of EMNLP 2021",
        year: 2021,
        type: "conference",
        abstract: "We introduce uncertainty-aware methods for machine translation evaluation, providing confidence estimates for automatic evaluation metrics.",
        keywords: ["uncertainty quantification", "machine translation evaluation", "confidence estimation", "automatic metrics"],
        links: {
            paper: "https://arxiv.org/pdf/2109.06352.pdf"
        }
    },
    {
        id: 61,
        title: "SPECTRA: Sparse Structured Text Rationalization",
        authors: "Nuno M. Guerreiro, André F. T. Martins",
        venue: "EMNLP 2021",
        year: 2021,
        type: "conference",
        abstract: "SPECTRA provides sparse structured explanations for text classification, identifying the most important parts of input text while maintaining structural coherence.",
        keywords: ["text rationalization", "sparse explanations", "structured prediction", "interpretability"],
        links: {
            paper: "https://arxiv.org/pdf/2109.04552.pdf"
        }
    },

    // 2020
    {
        id: 62,
        title: "Sparse and Continuous Attention Mechanisms",
        authors: "André F. T. Martins, António Farinhas, Marcos Treviso, Vlad Niculae, Pedro M. Q. Aguiar, Mário A. T. Figueiredo",
        venue: "NeurIPS 2020 (spotlight)",
        year: 2020,
        type: "conference",
        abstract: "We introduce sparse and continuous attention mechanisms that provide more flexible and interpretable attention patterns while maintaining computational efficiency.",
        keywords: ["sparse attention", "continuous attention", "attention mechanisms", "interpretability"],
        links: {
            paper: "https://arxiv.org/abs/2006.07214"
        }
    },
    {
        id: 63,
        title: "Efficient Marginalization of Discrete and Structured Latent Variables via Sparsity",
        authors: "Gonçalo M. Correia, Vlad Niculae, Wilker Aziz, André F. T. Martins",
        venue: "NeurIPS 2020 (spotlight)",
        year: 2020,
        type: "conference",
        abstract: "We propose efficient methods for marginalizing discrete and structured latent variables using sparsity, enabling tractable inference in complex probabilistic models.",
        keywords: ["marginalization", "latent variables", "sparsity", "probabilistic models"],
        links: {
            paper: "https://arxiv.org/abs/2007.01919"
        }
    },

    // Add key earlier papers
    {
        id: 64,
        title: "From Softmax to Sparsemax: A Sparse Model of Attention and Multi-Label Classification",
        authors: "André F. T. Martins, Ramon Astudillo",
        venue: "ICML 2016",
        year: 2016,
        type: "conference",
        abstract: "We introduce sparsemax, a sparse alternative to softmax that can produce sparse probability distributions, enabling more interpretable attention mechanisms and multi-label classification.",
        keywords: ["sparsemax", "sparse attention", "multi-label classification", "interpretability"],
        links: {
            paper: "http://proceedings.mlr.press/v48/martins16.pdf"
        }
    },
    {
        id: 65,
        title: "Concise Integer Linear Programming Formulations for Dependency Parsing",
        authors: "André F. T. Martins, Noah A. Smith, Eric P. Xing",
        venue: "ACL 2009",
        year: 2009,
        type: "conference",
        abstract: "We present concise integer linear programming formulations for dependency parsing, providing exact inference methods for structured prediction in parsing. Best Paper Award.",
        keywords: ["dependency parsing", "integer linear programming", "structured prediction", "exact inference"],
        links: {
            paper: "../docs/acl2009.pdf"
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