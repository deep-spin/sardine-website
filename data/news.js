// News data for SARDINE Lab website
// Add new news items to the top of the array to maintain chronological order
// Higher IDs = newer news (makes it easier to add new entries)

const newsData = [
    {
        id: 20,
        date: '2024-11-15',
        title: 'EuroHPC Summit Presentation on Multilingual LLMs',
        content: `I presented <a href="./docs/EuroHPCSummit2025.pdf">"Open & Multilingual LLMs for Europe"</a> in a discussion panel at <a href="https://www.eurohpcsummit.eu/">EuroHPC Summit</a> in Krakow about the AI Factories. There I covered some of our recent successes with CroissantLLM, TowerLLM, EuroLLM, and EuroBERT.`,
        type: 'conference',
        tags: ['eurohpc', 'multilingual', 'llm', 'presentation']
    },
    {
        id: 19,
        date: '2024-11-01',
        title: 'EuroLLM Website Launch and Success Story',
        content: `New <a href="https://eurollm.io">EuroLLM website</a>! We trained two LLMs from scratch, <a href="https://huggingface.co/utter-project/EuroLLM-1.7B">EuroLLM-1.7B</a> and <a href="https://huggingface.co/utter-project/EuroLLM-9B">EuroLLM-9B</a>, using the European supercomputing infrastructure (EuroHPC). These models support 35 languages (including all 24 EU official languages). They were released fully open and are <a href="https://huggingface.co/blog/eurollm-team/eurollm-9b">among the best in several benchmarks</a>. They have 300k+ downloads so far! This was done in collaboration with Instituto Superior Técnico, Instituto de Telecomunicações, Unbabel, The University of Edinburgh, CentraleSupélec among others and was recently featured as <a href="https://eurohpc-ju.europa.eu/eurohpc-success-story-speaking-freely-eurollm_en">a success story at EuroHPC</a>. Larger and more powerful models are on the making now!`,
        type: 'release',
        tags: ['eurollm', 'multilingual', 'open-source', 'eurohpc']
    },
    {
        id: 18,
        date: '2024-10-20',
        title: 'Invited Talks at Cornell Tech, MIT, and EPFL',
        content: `I gave recent talks at Cornell Tech <a href="https://events.cornell.edu/event/lmss-cornell-tech-andre-f-t-martins-tecnico-lisboa">"Quality-Aware Generation: Reranking Laws and Insights from Communication Theory"</a>, MIT ("Dynamic Sparsity for Machine Learning"), and EPFL <a href="https://memento.epfl.ch/event/xcomet-tower-eurollm-open-multilingual-llms-for-eu/">"xCOMET, Tower, EuroLLM: Open & Multilingual LLMs for Europe"</a>.`,
        type: 'conference',
        tags: ['invited-talk', 'mit', 'cornell', 'epfl']
    },
    {
        id: 17,
        date: '2024-12-15',
        title: 'NeurIPS 2024 Tutorial on Dynamic Sparsity',
        content: `I presented a tutorial at NeurIPS 2024 with <a href="https://ducdauge.github.io/">Edoardo Ponti</a> on <a href="https://dynamic-sparsity.github.io/">Dynamic Sparsity in Machine Learning: Routing Information through Neural Pathways</a>. Check it out! We have lots of materials, including slides and Jupyter notebooks.`,
        type: 'conference',
        tags: ['neurips', 'tutorial', 'dynamic-sparsity', 'materials']
    },
    {
        id: 16,
        date: '2024-09-01',
        title: 'TowerLLM Release and COLM 2024 Spotlight',
        content: `We released TowerLLM 7B and 13B: multilingual LLMs for translation-related tasks. Check our <a href="https://huggingface.co/collections/Unbabel/tower-659eaedfe36e6dd29eb1805c">Tower Collection</a> at Hugging Face. These models and datasets are now widely used by the community (200k+ downloads so far). We presented this work as a spotlight paper at COLM 2024.`,
        type: 'publication',
        tags: ['tower-llm', 'multilingual', 'translation', 'colm', 'spotlight']
    },
    {
        id: 15,
        date: '2024-08-01',
        title: 'WMT 2024 Shared Task Victory',
        content: `We participated for the first time in the WMT 2024 shared task on General Translation -- and we were the best participating system, with the best results in 8 out of 11 languages! (Bonus: we also won the Biomedical and the Chat Translation task!) Fruit of this work, Unbabel launched <a href="https://www.widn.ai/">Widn.Ai</a> -- the highest quality MT engine which can be personalized with instructions and used as an API. Try it out!`,
        type: 'award',
        tags: ['wmt', 'machine-translation', 'shared-task', 'winner']
    },
    {
        id: 14,
        date: '2024-07-15',
        title: 'xCOMET: State-of-the-Art MT Evaluation Model',
        content: `We built <a href="https://huggingface.co/collections/Unbabel/xcomet-659eca973b3be2ae4ac023bb">xCOMET</a>, a state-of-the-art interpretable model for MT evaluation and quality estimation. Give it a try! It was published in TACL and presented at ACL 2024.`,
        type: 'publication',
        tags: ['xcomet', 'evaluation', 'tacl', 'acl', 'interpretable']
    },
    {
        id: 13,
        date: '2024-06-01',
        title: 'AI Boost Large AI Grand Challenge Grant',
        content: `We were one of the 4 winning projects of the Large AI Grand Challenge grant (AI Boost), a highly competitive grant which comes with 2M GPU hours. We are using this allocation to train a mixture-of-experts version of Tower.`,
        type: 'funding',
        tags: ['ai-boost', 'grant', 'gpu-hours', 'mixture-of-experts']
    },
    {
        id: 12,
        date: '2024-05-01',
        title: '20+ Papers at Top 2024 Conferences',
        content: `In 2024, our team presented 20+ papers in top conferences (including NeurIPS, ICLR, ICML, COLM, TACL, EMNLP, COLM, ICML, ...). We had spotlight/oral papers at ICML, NeurIPS, and COLM. We presented in several keynote talks in workshops and other events.`,
        type: 'publication',
        tags: ['conferences', 'publications', 'spotlight', 'keynote']
    },
    {
        id: 11,
        date: '2024-04-01',
        title: 'ACL 2024 Program Co-Chair',
        content: `I am Program Co-Chair of ACL 2024.`,
        type: 'service',
        tags: ['acl', 'program-chair', 'service']
    },
    {
        id: 10,
        date: '2024-01-15',
        title: 'ERC Consolidator Grant DECOLLAGE Awarded',
        content: `<strong>Great news: I got an ERC (European Research Council) Consolidator Grant on "Deep Cognition Learning for Language Generation (DECOLLAGE)". <a href="pages/jobs.html">I am now looking for Post-Doc and PhD Students</a>.</strong>`,
        type: 'funding',
        tags: ['erc', 'consolidator-grant', 'decollage', 'recruitment']
    },
    {
        id: 9,
        date: '2022-09-15',
        title: 'SEPLN 2022 Keynote',
        content: `I gave a keynote talk at the <a href="https://sepln2022.grupolys.org/">SEPLN 2022</a> conference.`,
        type: 'conference',
        tags: ['sepln', 'keynote', 'structured-prediction']
    },
    {
        id: 8,
        date: '2022-08-01',
        title: 'Mercury Machine Learning Lab Keynote',
        content: `I gave a keynote at the Mercury Machine Learning Lab (<a href="https://icai.ai/mercury-machine-learning-lab/">MMLL</a>) seminar series. I talked about how to go from sparse modeling to sparse communication. Check the video <a href="https://www.youtube.com/watch?v=UFsCAr4kIc0&list=PLTg_E6ob657XajMOqJ4HxfQcv49f8xD_Z&t=8s">here</a>!`,
        type: 'conference',
        tags: ['mmll', 'keynote', 'sparse-modeling', 'video']
    },
    {
        id: 7,
        date: '2022-07-01',
        title: 'LxMLS 2022 Back In-Person',
        content: `I am co-organizing LxMLS 2022 (Lisbon Machine Learning School), back to in-person this year! See <a href="http://lxmls.it.pt">here</a> for details!`,
        type: 'event',
        tags: ['lxmls', 'machine-learning-school', 'in-person', 'organizing']
    },
    {
        id: 6,
        date: '2022-06-01',
        title: 'Multiple 2022 Conference Acceptances',
        content: `We have new papers accepted at CLeaR 2022, ICLR 2022, ACL 2022, NAACL 2022, and ICML 2022.`,
        type: 'publication',
        tags: ['clear', 'iclr', 'acl', 'naacl', 'icml']
    },
    {
        id: 5,
        date: '2022-05-01',
        title: 'TRITON Conference Keynote',
        content: `I gave a keynote talk at the <a href="https://triton-conference.org/">TRITON</a> conference.`,
        type: 'conference',
        tags: ['triton', 'keynote']
    },
    {
        id: 4,
        date: '2022-04-01',
        title: 'TALN Keynote on DeepSPIN Project',
        content: `I gave a keynote talk at <a href="https://talnrecital2021.inria.fr">TALN</a> where I presented some of the work we did in the <a href="https://deep-spin.github.io/">DeepSPIN</a> project. <a href="docs/taln2021.pdf">Here</a> are the slides.`,
        type: 'conference',
        tags: ['taln', 'keynote', 'deepspin', 'slides']
    },
    {
        id: 3,
        date: '2021-07-01',
        title: 'LxMLS 2021 Goes Virtual',
        content: `I am co-organizing LxMLS 2021 (Lisbon Machine Learning School), which will be a fully remote school this year. See <a href="http://lxmls.it.pt">here</a> for details!`,
        type: 'event',
        tags: ['lxmls', 'virtual', 'remote', 'organizing']
    },
    {
        id: 2,
        date: '2021-06-01',
        title: 'NAACL and ACL 2021 Publications',
        content: `We have new papers accepted at NAACL 2021 and ACL 2021.`,
        type: 'publication',
        tags: ['naacl', 'acl', 'publications']
    },
    {
        id: 1,
        date: '2021-01-01',
        title: 'ELLIS NLP Program Co-Direction',
        content: `I am co-directing the <a href="https://ellis.eu/programs/natural-language-processing">ELLIS NLP program</a> with <a href="https://www.informatik.tu-darmstadt.de/ukp/ukp_home/staff_ukp/prof_dr_iryna_gurevych/index.en.jsp">Iryna Guleyvich</a> and <a href="http://ivan-titov.org/">Ivan Titov</a>, with an amazing list of fellows and scholars!`,
        type: 'service',
        tags: ['ellis', 'nlp-program', 'co-director', 'network']
    },
    // Additional older news items
    {
        id: 35,
        date: '2019-07-01',
        title: 'ACL 2019 Tutorial on Latent Structure Models',
        content: `We presented a <a href="https://deep-spin.github.io/tutorial/">tutorial on Latent Structure Models for NLP</a> at ACL 2019 in Florence.`,
        type: 'conference',
        tags: ['acl', 'tutorial', 'latent-structure', 'florence']
    },
    {
        id: 34,
        date: '2019-09-01',
        title: 'EurNLP Summit Invited Talk',
        content: `André Martins is giving an invited talk at the <a href="https://www.eurnlp.org">First EurNLP Summit</a> in London.`,
        type: 'conference',
        tags: ['eurnlp', 'invited-talk', 'london']
    },
    {
        id: 33,
        date: '2019-08-01',
        title: 'Summer School Speaking Tour',
        content: `André Martins is giving invited talks at 3 Summer schools: <a href="http://lxmls.it.pt">LxMLS 2019</a> in Lisbon, <a href="http://athnlp.iit.demokritos.gr">AthNLP 2019</a> in Athens, and <a href="https://www.mlrs.ai">MLRS 2019</a> in Bangkok.`,
        type: 'conference',
        tags: ['summer-school', 'lxmls', 'athnlp', 'mlrs', 'invited-talk']
    },
    {
        id: 32,
        date: '2019-07-15',
        title: 'LxMLS 2019 Organization',
        content: `Several deep spinners are organizing/serving as monitors in LxMLS 2019 (Lisbon Machine Learning School). See <a href="http://lxmls.it.pt">here</a> for details!`,
        type: 'event',
        tags: ['lxmls', 'organizing', 'machine-learning-school']
    },
    {
        id: 31,
        date: '2019-06-01',
        title: 'AISTATS, NAACL, and ACL 2019 Acceptances',
        content: `We have new papers accepted at AISTATS, NAACL, and ACL 2019.`,
        type: 'publication',
        tags: ['aistats', 'naacl', 'acl', 'publications']
    },
    {
        id: 30,
        date: '2019-05-15',
        title: 'WMT 2019 Quality Estimation Victory',
        content: `A joint team with Unbabel and IT won the WMT 2019 Shared Task on Quality Estimation! Check the results <a href="http://www.statmt.org/wmt19/qe-results.html">here</a>!`,
        type: 'award',
        tags: ['wmt', 'quality-estimation', 'shared-task', 'winner', 'unbabel']
    },
    {
        id: 29,
        date: '2019-05-01',
        title: 'OpenKiwi Best Demo Paper Award',
        content: `We received the <strong>best system demo paper award</strong> for OpenKiwi, a Pytorch-based software toolkit for translation quality estimation. Check the <a href="https://github.com/Unbabel/OpenKiwi">repo</a> and the <a href="https://arxiv.org/abs/1902.08646">demo paper</a> at ACL 2019!`,
        type: 'award',
        tags: ['openkiwi', 'demo-paper', 'award', 'pytorch', 'quality-estimation']
    },
    {
        id: 28,
        date: '2019-04-01',
        title: 'Marcos Treviso Joins Team',
        content: `Marcos Treviso is joining the <a href="team.html">team</a> as a PhD student!`,
        type: 'team',
        tags: ['team', 'phd-student', 'marcos-treviso']
    },
    {
        id: 27,
        date: '2018-11-01',
        title: 'EMNLP 2018 SparseMAP Paper',
        content: `We have a new EMNLP paper where we propose <em>SparseMAP</em> to build dynamic computation graphs via sparse latent structure (work done in collaboration with <a href="http://www.cs.cornell.edu/home/cardie">Claire Cardie</a>). Keep posted!`,
        type: 'publication',
        tags: ['emnlp', 'sparsemap', 'dynamic-computation', 'sparse-structure']
    },
    {
        id: 26,
        date: '2018-07-15',
        title: 'ACL 2018 Workshop Invited Talk',
        content: `André Martins gave an invited talk in the <a href="https://sites.google.com/site/wnmt18">ACL 2018 Workshop on Neural Machine Translation and Generation</a>. Here are the <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnx3bm10MTh8Z3g6NzM2ZWNhMTk2MTdlODQ2Yw">slides</a>.`,
        type: 'conference',
        tags: ['acl', 'workshop', 'invited-talk', 'neural-mt', 'slides']
    },
    {
        id: 25,
        date: '2018-09-01',
        title: 'Vlad Niculae Joins as Post-Doc',
        content: `Vlad Niculae is joining the <a href="team.html">team</a> as a post-doc researcher!`,
        type: 'team',
        tags: ['team', 'post-doc', 'vlad-niculae']
    },
    {
        id: 24,
        date: '2018-08-01',
        title: 'Erick Fonseca Joins as Post-Doc',
        content: `Erick Fonseca is joining the <a href="team.html">team</a> as a post-doc researcher!`,
        type: 'team',
        tags: ['team', 'post-doc', 'erick-fonseca']
    },
    {
        id: 23,
        date: '2018-09-15',
        title: 'New PhD Students Join Team',
        content: `Tsvetomila Mihaylova and Ben Peters are joining the <a href="team.html">team</a> as PhD students!`,
        type: 'team',
        tags: ['team', 'phd-students', 'tsvetomila-mihaylova', 'ben-peters']
    },
    {
        id: 22,
        date: '2018-06-01',
        title: 'LxMLS 2018 Co-Organization',
        content: `We are co-organizing LxMLS 2018 (Lisbon Machine Learning School). See <a href="http://lxmls.it.pt">here</a> for details!`,
        type: 'event',
        tags: ['lxmls', 'co-organizing', 'machine-learning-school']
    },
    {
        id: 21,
        date: '2018-05-01',
        title: 'ICML 2018 SparseMAP Paper',
        content: `We have a new <a href="http://proceedings.mlr.press/v80/niculae18a.html">ICML paper</a> where we propose <em>SparseMAP</em> as a new inference procedure for sparse structured prediction (work done in collaboration with <a href="http://vene.ro">Vlad Niculae</a>, <a href="http://mblondel.org">Mathieu Blondel</a>, and <a href="http://www.cs.cornell.edu/home/cardie">Claire Cardie</a>).`,
        type: 'publication',
        tags: ['icml', 'sparsemap', 'inference', 'structured-prediction']
    },
    {
        id: 20,
        date: '2018-04-01',
        title: 'ACL 2018 Sparse Attention Paper',
        content: `We have a new <a href="http://aclweb.org/anthology/P18-2059">ACL short paper</a> where we use new forms of sparse and constrained attention within neural machine translation (work done in collaboration with Chaitanya Malaviya and Pedro Ferreira).`,
        type: 'publication',
        tags: ['acl', 'sparse-attention', 'neural-mt', 'constrained-attention']
    },
    {
        id: 19,
        date: '2018-03-01',
        title: 'WMT18 Quality Estimation Co-Organization',
        content: `With Unbabel, we are co-organizing the WMT18 shared task in quality estimation. See <a href="http://www.statmt.org/wmt18/quality-estimation-task.html">here</a> for details!`,
        type: 'event',
        tags: ['wmt', 'quality-estimation', 'shared-task', 'co-organizing', 'unbabel']
    },
    {
        id: 18,
        date: '2018-02-01',
        title: 'Gonçalo Correia Joins as PhD Student',
        content: `Gonçalo Correia joined the <a href="team.html">team</a> as a PhD student!`,
        type: 'team',
        tags: ['team', 'phd-student', 'goncalo-correia']
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