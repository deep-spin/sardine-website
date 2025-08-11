// Team data for SARDINE Lab website
// Update this file to add/remove team members or update their information

const teamData = {
    pi: [
        {
            id: 1,
            name: "André Martins",
            role: "Principal Investigator",
            position: "Professor",
            advisor: null,
            bio: "André is a Professor at Instituto Superior Técnico and a researcher at Instituto de Telecomunicações. His research focuses on natural language processing, machine learning, and structured prediction.",
            research_interests: ["Natural Language Processing", "Structured Prediction", "Machine Learning", "Optimization"],
            education: [
                "PhD in Language Technologies, Carnegie Mellon University, 2012",
                "MSc in Electrical and Computer Engineering, Instituto Superior Técnico, 2006"
            ],
            image: "assets/images/andre-martins.jpg",
            links: {
                website: "http://andre-martins.github.io",
                github: "https://github.com/andre-martins",
                linkedin: "https://linkedin.com/in/andre-martins",
                scholar: "https://scholar.google.com/citations?user=xxxxx"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
                coordinates: [38.7223, -9.1393]
            }
        }
    ],
    postdocs: [
        {
            id: 2,
            name: "Dr. Ana Silva",
            role: "Postdoctoral Researcher",
            position: "Postdoc",
            advisor: "André Martins",
            bio: "Ana is a postdoctoral researcher specializing in deep learning for natural language processing. She completed her PhD at University of Porto in 2023.",
            research_interests: ["Deep Learning", "Neural Language Models", "Multilingual NLP"],
            education: [
                "PhD in Computer Science, University of Porto, 2023",
                "MSc in Computer Science, University of Porto, 2019"
            ],
            image: "assets/images/ana-silva.jpg",
            links: {
                github: "https://github.com/ana-silva",
                linkedin: "https://linkedin.com/in/ana-silva-nlp",
                scholar: "https://scholar.google.com/citations?user=xxxxx"
            },
            location: {
                country: "Portugal",
                city: "Porto",
                coordinates: [41.1579, -8.6291]
            }
        },
        {
            id: 3,
            name: "Dr. Marco Rossi",
            role: "Postdoctoral Researcher",
            position: "Postdoc",
            advisor: "André Martins",
            bio: "Marco is a postdoctoral researcher working on structured prediction and optimization. He received his PhD from University of Milan in 2022.",
            research_interests: ["Structured Prediction", "Optimization", "Graph Neural Networks"],
            education: [
                "PhD in Computer Science, University of Milan, 2022",
                "MSc in Computer Engineering, Politecnico di Milano, 2018"
            ],
            image: "assets/images/marco-rossi.jpg",
            links: {
                github: "https://github.com/marco-rossi",
                linkedin: "https://linkedin.com/in/marco-rossi-cs"
            },
            location: {
                country: "Italy",
                city: "Milan",
                coordinates: [45.4642, 9.1900]
            }
        }
    ],
    phds: [
        {
            id: 4,
            name: "João Santos",
            role: "PhD Student",
            position: "PhD Student",
            advisor: "André Martins",
            year_started: 2022,
            bio: "João is a PhD student working on neural machine translation and structured prediction. He previously worked as a software engineer before joining the lab.",
            research_interests: ["Machine Translation", "Structured Prediction", "Cross-lingual Transfer"],
            education: [
                "MSc in Computer Science, Instituto Superior Técnico, 2022",
                "BSc in Computer Engineering, University of Coimbra, 2020"
            ],
            image: "assets/images/joao-santos.jpg",
            links: {
                github: "https://github.com/joao-santos",
                linkedin: "https://linkedin.com/in/joao-santos-nlp"
            },
            location: {
                country: "Portugal",
                city: "Coimbra",
                coordinates: [40.2033, -8.4103]
            }
        },
        {
            id: 5,
            name: "Maria Costa",
            role: "PhD Student",
            position: "PhD Student",
            advisor: "André Martins",
            year_started: 2021,
            bio: "Maria is a PhD student specializing in sparse neural models and efficient NLP. She holds an FCT doctoral fellowship.",
            research_interests: ["Sparse Models", "Efficient NLP", "Model Compression"],
            education: [
                "MSc in Data Science, Nova University Lisbon, 2021",
                "BSc in Mathematics, University of Lisbon, 2019"
            ],
            image: "assets/images/maria-costa.jpg",
            links: {
                github: "https://github.com/maria-costa",
                website: "https://maria-costa.github.io"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
                coordinates: [38.7223, -9.1393]
            }
        },
        {
            id: 6,
            name: "Pierre Dubois",
            role: "PhD Student",
            position: "PhD Student",
            advisor: "André Martins",
            year_started: 2023,
            bio: "Pierre is a PhD student focusing on text classification and multilingual NLP. He joined from École Normale Supérieure in Paris.",
            research_interests: ["Text Classification", "Multilingual NLP", "Transfer Learning"],
            education: [
                "MSc in Machine Learning, École Normale Supérieure, 2023",
                "BSc in Computer Science, Sorbonne University, 2021"
            ],
            image: "assets/images/pierre-dubois.jpg",
            links: {
                github: "https://github.com/pierre-dubois",
                linkedin: "https://linkedin.com/in/pierre-dubois-ml"
            },
            location: {
                country: "France",
                city: "Paris",
                coordinates: [48.8566, 2.3522]
            }
        },
        {
            id: 7,
            name: "Yuki Tanaka",
            role: "PhD Student",
            position: "PhD Student",
            advisor: "André Martins",
            year_started: 2022,
            bio: "Yuki is a PhD student working on attention mechanisms and transformer models. She previously worked at a tech company in Tokyo.",
            research_interests: ["Attention Mechanisms", "Transformer Models", "Interpretability"],
            education: [
                "MSc in Computer Science, University of Tokyo, 2022",
                "BSc in Information Science, Kyoto University, 2020"
            ],
            image: "assets/images/yuki-tanaka.jpg",
            links: {
                github: "https://github.com/yuki-tanaka",
                website: "https://yuki-tanaka.github.io"
            },
            location: {
                country: "Japan",
                city: "Tokyo",
                coordinates: [35.6762, 139.6503]
            }
        }
    ],
    mscs: [
        {
            id: 8,
            name: "Luis Pereira",
            role: "MSc Student",
            position: "MSc Student",
            advisor: "André Martins",
            year_started: 2024,
            thesis_topic: "Neural Parsing with Latent Variables",
            bio: "Luis is an MSc student working on neural parsing. He's interested in incorporating linguistic structure into neural models.",
            research_interests: ["Parsing", "Latent Variable Models", "Syntax"],
            education: [
                "BSc in Computer Engineering, Instituto Superior Técnico, 2024"
            ],
            image: "assets/images/luis-pereira.jpg",
            links: {
                github: "https://github.com/luis-pereira",
                linkedin: "https://linkedin.com/in/luis-pereira-cs"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
                coordinates: [38.7223, -9.1393]
            }
        },
        {
            id: 9,
            name: "Elena Rodriguez",
            role: "MSc Student",
            position: "MSc Student",
            advisor: "Ana Silva",
            year_started: 2024,
            thesis_topic: "Cross-lingual Transfer for Low-Resource Languages",
            bio: "Elena is an MSc student working on cross-lingual transfer learning. She's particularly interested in Romance languages.",
            research_interests: ["Cross-lingual Transfer", "Low-Resource Languages", "Multilingual Models"],
            education: [
                "BSc in Linguistics, University of Barcelona, 2024"
            ],
            image: "assets/images/elena-rodriguez.jpg",
            links: {
                github: "https://github.com/elena-rodriguez"
            },
            location: {
                country: "Spain",
                city: "Barcelona",
                coordinates: [41.3851, 2.1734]
            }
        },
        {
            id: 10,
            name: "Ahmed Hassan",
            role: "MSc Student",
            position: "MSc Student",
            advisor: "Marco Rossi",
            year_started: 2024,
            thesis_topic: "Graph Neural Networks for Multilingual Parsing",
            bio: "Ahmed is an MSc student working on graph neural networks for NLP. He has a background in computer engineering and mathematics.",
            research_interests: ["Graph Neural Networks", "Multilingual Parsing", "Arabic NLP"],
            education: [
                "BSc in Computer Engineering, Cairo University, 2024"
            ],
            image: "assets/images/ahmed-hassan.jpg",
            links: {
                website: "https://ahmed-hassan.github.io"
            },
            location: {
                country: "Egypt",
                city: "Cairo",
                coordinates: [30.0444, 31.2357]
            }
        },
        {
            id: 11,
            name: "Sara Kim",
            role: "MSc Student",
            position: "MSc Student",
            advisor: "André Martins",
            year_started: 2025,
            thesis_topic: "Attention Mechanisms for Low-Resource Languages",
            bio: "Sara is an MSc student working on attention mechanisms. She's interested in applying NLP techniques to Korean and other East Asian languages.",
            research_interests: ["Attention Mechanisms", "Korean NLP", "Low-Resource Languages"],
            education: [
                "BSc in Computer Science, Seoul National University, 2024"
            ],
            image: "assets/images/sara-kim.jpg",
            links: {
                linkedin: "https://linkedin.com/in/sara-kim-nlp"
            },
            location: {
                country: "South Korea",
                city: "Seoul",
                coordinates: [37.5665, 126.9780]
            }
        },
        {
            id: 12,
            name: "Max Weber",
            role: "MSc Student",
            position: "MSc Student",
            advisor: "André Martins",
            year_started: 2024,
            thesis_topic: "Adversarial Training for Robust NLP",
            bio: "Max is an MSc student working on adversarial training methods. He has a strong background in machine learning and optimization.",
            research_interests: ["Adversarial Training", "Robustness", "Optimization"],
            education: [
                "BSc in Computer Science, Technical University of Munich, 2024"
            ],
            image: "assets/images/max-weber.jpg",
            links: {
                github: "https://github.com/max-weber"
            },
            location: {
                country: "Germany",
                city: "Munich",
                coordinates: [48.1351, 11.5820]
            }
        }
    ],
    alumni: [
        {
            id: 13,
            name: "Dr. Carlos Lima",
            role: "Alumni",
            position: "Research Scientist at Google Research",
            degree: "PhD",
            graduation_year: 2023,
            thesis_title: "Graph Neural Networks for Syntactic Parsing",
            advisor: "André Martins",
            current_position: "Research Scientist at Google Research",
            bio: "Carlos completed his PhD in 2023 and now works at Google Research on multilingual NLP systems.",
            image: "assets/images/carlos-lima.jpg",
            links: {
                linkedin: "https://linkedin.com/in/carlos-lima-research"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
                coordinates: [38.7223, -9.1393]
            }
        },
        {
            id: 14,
            name: "Dr. Anna Kowalski",
            role: "Alumni",
            position: "Research Scientist at Meta AI",
            degree: "Postdoc",
            graduation_year: 2023,
            advisor: "André Martins",
            current_position: "Research Scientist at Meta AI",
            bio: "Anna was a postdoc from 2021-2023 and now works at Meta AI on multimodal learning systems.",
            image: "assets/images/anna-kowalski.jpg",
            links: {
                website: "https://anna-kowalski.github.io"
            },
            location: {
                country: "Poland",
                city: "Warsaw",
                coordinates: [52.2297, 21.0122]
            }
        },
        {
            id: 15,
            name: "Ravi Patel",
            role: "Alumni",
            position: "Research Scientist at DeepMind",
            degree: "MSc",
            graduation_year: 2024,
            thesis_title: "Transformer Models with Explicit Syntactic Bias",
            advisor: "André Martins",
            current_position: "Research Scientist at DeepMind",
            bio: "Ravi completed his MSc in 2024 and joined DeepMind to work on large language models.",
            image: "assets/images/ravi-patel.jpg",
            links: {
                github: "https://github.com/ravi-patel"
            },
            location: {
                country: "India",
                city: "Mumbai",
                coordinates: [19.0760, 72.8777]
            }
        },
        {
            id: 16,
            name: "Sophie Chen",
            role: "Alumni",
            position: "Research Scientist at OpenAI",
            degree: "MSc",
            graduation_year: 2023,
            thesis_title: "Continual Learning in Natural Language Processing",
            advisor: "Ana Silva",
            current_position: "Research Scientist at OpenAI",
            bio: "Sophie completed her MSc in 2023 and now works at OpenAI on safety and alignment research.",
            image: "assets/images/sophie-chen.jpg",
            links: {
                website: "https://sophie-chen.github.io",
                linkedin: "https://linkedin.com/in/sophie-chen-ai"
            },
            location: {
                country: "China",
                city: "Beijing",
                coordinates: [39.9042, 116.4074]
            }
        },
        {
            id: 17,
            name: "Dr. Thomas Mueller",
            role: "Alumni",
            position: "Principal Researcher at Microsoft Research",
            degree: "PhD",
            graduation_year: 2022,
            thesis_title: "Efficient Attention Mechanisms for Long Sequences",
            advisor: "André Martins",
            current_position: "Principal Researcher at Microsoft Research",
            bio: "Thomas completed his PhD in 2022 and is now a principal researcher at Microsoft Research working on efficient transformer architectures.",
            image: "assets/images/thomas-mueller.jpg",
            links: {
                website: "https://thomas-mueller.github.io",
                scholar: "https://scholar.google.com/citations?user=xxxxx"
            },
            location: {
                country: "Germany",
                city: "Berlin",
                coordinates: [52.5200, 13.4050]
            }
        },
        {
            id: 18,
            name: "Isabella Rossi",
            role: "Alumni",
            position: "Research Scientist at Amazon Science",
            degree: "MSc",
            graduation_year: 2022,
            thesis_title: "Neural Machine Translation for Low-Resource Languages",
            advisor: "Pierre Dubois",
            current_position: "Research Scientist at Amazon Science",
            bio: "Isabella completed her MSc in 2022 and now works at Amazon Science on multilingual e-commerce applications.",
            image: "assets/images/isabella-rossi.jpg",
            links: {
                linkedin: "https://linkedin.com/in/isabella-rossi-ml"
            },
            location: {
                country: "Italy",
                city: "Rome",
                coordinates: [41.9028, 12.4964]
            }
        }
    ]
};

// Function to get all team members by role
function getTeamByRole(role) {
    return teamData[role] || [];
}

// Function to get all current team members (excluding alumni)
function getCurrentTeam() {
    return {
        pi: teamData.pi,
        postdocs: teamData.postdocs,
        phds: teamData.phds,
        mscs: teamData.mscs
    };
}

// Function to get alumni
function getAlumni() {
    return teamData.alumni;
}

// Function to get all team member locations for the world map
function getTeamLocations() {
    const locations = [];
    
    Object.keys(teamData).forEach(role => {
        teamData[role].forEach(member => {
            if (member.location) {
                locations.push({
                    name: member.name,
                    country: member.location.country,
                    city: member.location.city,
                    coordinates: member.location.coordinates,
                    role: member.role
                });
            }
        });
    });
    
    return locations;
}

// Function to search team members
function searchTeam(query) {
    const searchTerm = query.toLowerCase();
    const results = [];
    
    Object.keys(teamData).forEach(role => {
        teamData[role].forEach(member => {
            if (member.name.toLowerCase().includes(searchTerm) ||
                member.bio.toLowerCase().includes(searchTerm) ||
                member.research_interests.some(interest => interest.toLowerCase().includes(searchTerm))) {
                results.push({...member, category: role});
            }
        });
    });
    
    return results;
}

// Function to get team statistics
function getTeamStats() {
    const stats = {
        total: 0,
        by_role: {},
        by_country: {},
        publications: 0
    };
    
    Object.keys(teamData).forEach(role => {
        stats.by_role[role] = teamData[role].length;
        stats.total += teamData[role].length;
        
        teamData[role].forEach(member => {
            if (member.location) {
                const country = member.location.country;
                stats.by_country[country] = (stats.by_country[country] || 0) + 1;
            }
        });
    });
    
    return stats;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        teamData,
        getTeamByRole,
        getCurrentTeam,
        getAlumni,
        getTeamLocations,
        searchTeam,
        getTeamStats
    };
}