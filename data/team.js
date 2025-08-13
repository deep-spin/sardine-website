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
            }
        }
    ],
    postdocs: [
        {
            id: 2,
            name: "Miguel Faria",
            role: "Postdoctoral Researcher",
            position: "Post-doc at IT",
            advisor: "André Martins",
            year_started: 2024,
            bio: "Miguel is a postdoctoral researcher at Instituto de Telecomunicações working on natural language processing and machine learning.",
            research_interests: ["Natural Language Processing", "Machine Learning", "Deep Learning"],
            education: [],
            image: "assets/images/miguel-faria.jpg",
            links: {},
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 3,
            name: "Giuseppe Attanasio",
            role: "Postdoctoral Researcher",
            position: "Post-doc at IT",
            advisor: "André Martins",
            year_started: 2024,
            bio: "Giuseppe is a postdoctoral researcher specializing in natural language processing and machine learning applications.",
            research_interests: ["Natural Language Processing", "Machine Learning", "Computational Linguistics"],
            education: [],
            image: "assets/images/giuseppe-attanasio.jpg",
            links: {
                website: "https://gattanasio.cc/"
            },
            location: {
                country: "Italy",
                city: "Milan",
            }
        },
        {
            id: 4,
            name: "Marcos Treviso",
            role: "Postdoctoral Researcher",
            position: "Post-doc at IT",
            advisor: "André Martins",
            year_started: 2023,
            bio: "Marcos is a postdoctoral researcher at IT. He completed his PhD at IST in 2023 and now continues his research in NLP and structured prediction.",
            research_interests: ["Natural Language Processing", "Structured Prediction", "Machine Translation"],
            education: [
                "PhD at IST, 2019-2023"
            ],
            image: "assets/images/marcos-treviso.jpg",
            links: {
                website: "http://mtreviso.github.io"
            },
            location: {
                country: "Brazil",
                city: "São Paulo",
            }
        },
        {
            id: 5,
            name: "Ben Peters",
            role: "Postdoctoral Researcher",
            position: "Post-doc at IT",
            advisor: "André Martins",
            year_started: 2022,
            bio: "Ben is a postdoctoral researcher at IT. He completed his PhD at IST in 2023 and specializes in computational linguistics and NLP.",
            research_interests: ["Computational Linguistics", "Natural Language Processing", "Syntax"],
            education: [
                "PhD at IST, 2018-2023"
            ],
            image: "assets/images/ben-peters.jpg",
            links: {},
            location: {
                country: "United States",
                city: "Boston",
            }
        }
    ],
    phds: [
        {
            id: 6,
            name: "Beatriz Canaverde",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            year_started: 2025,
            bio: "Beatriz is a PhD student at Instituto Superior Técnico working on natural language processing.",
            research_interests: ["Natural Language Processing", "Machine Learning"],
            education: [],
            image: "assets/images/beatriz-canaverde.jpg",
            links: {},
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 7,
            name: "Miguel Ramos",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            year_started: 2024,
            bio: "Miguel is a PhD student at Instituto Superior Técnico focusing on machine learning and NLP.",
            research_interests: ["Machine Learning", "Natural Language Processing"],
            education: [],
            image: "assets/images/miguel-ramos.jpg",
            links: {},
            location: {
                country: "Portugal",
                city: "Porto",
            }
        },
        {
            id: 8,
            name: "Sonal Sannigrahi",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            year_started: 2023,
            bio: "Sonal is a PhD student at Instituto Superior Técnico working on natural language processing and machine learning.",
            research_interests: ["Natural Language Processing", "Machine Learning", "Deep Learning"],
            education: [],
            image: "assets/images/sonal-sannigrahi.jpg",
            links: {
                website: "https://sonalsannigrahi.github.io/"
            },
            location: {
                country: "India",
                city: "Mumbai",
            }
        },
        {
            id: 9,
            name: "Emmanouil Zaranis",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            year_started: 2023,
            bio: "Emmanouil is a PhD student at Instituto Superior Técnico specializing in computational linguistics.",
            research_interests: ["Computational Linguistics", "Natural Language Processing"],
            education: [],
            image: "assets/images/emmanouil-zaranis.jpg",
            links: {},
            location: {
                country: "Greece",
                city: "Athens",
            }
        },
        {
            id: 10,
            name: "Pavlo Vasylenko",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            co_advisor: "Marcos Treviso",
            year_started: 2023,
            bio: "Pavlo is a PhD student at Instituto Superior Técnico, co-supervised with Marcos Treviso.",
            research_interests: ["Natural Language Processing", "Machine Learning"],
            education: [],
            image: "assets/images/pavlo-vasylenko.jpg",
            links: {},
            location: {
                country: "Ukraine",
                city: "Kyiv",
            }
        },
        {
            id: 11,
            name: "Sophia Sklaviadis",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            year_started: 2023,
            bio: "Sophia is a PhD student at Instituto Superior Técnico working on natural language processing.",
            research_interests: ["Natural Language Processing", "Computational Linguistics"],
            education: [],
            image: "assets/images/sophia-sklaviadis.jpg",
            links: {},
            location: {
                country: "Greece",
                city: "Thessaloniki",
            }
        },
        {
            id: 12,
            name: "Margarida Campos",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            co_advisor: "Mário Figueiredo",
            bio: "Margarida is a PhD student co-supervised with Mário Figueiredo.",
            research_interests: ["Machine Learning", "Signal Processing", "Natural Language Processing"],
            education: [],
            image: "assets/images/margarida-campos.jpg",
            links: {},
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 13,
            name: "Saul Santos",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            co_advisor: "Daniel McNamee",
            bio: "Saul is a PhD student co-supervised with Daniel McNamee from Champalimaud Foundation.",
            research_interests: ["Neuroscience", "Natural Language Processing", "Computational Biology"],
            education: [],
            image: "assets/images/saul-santos.jpg",
            links: {
                website: "https://ssantos97.github.io/"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 14,
            name: "Duarte Alves",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            year_started: 2023,
            bio: "Duarte is a PhD student at Instituto Superior Técnico working on natural language processing.",
            research_interests: ["Natural Language Processing", "Machine Learning"],
            education: [],
            image: "assets/images/duarte-alves.jpg",
            links: {},
            location: {
                country: "Portugal",
                city: "Coimbra",
            }
        },
        {
            id: 15,
            name: "António Farinhas",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            year_started: 2021,
            bio: "António is a PhD student at Instituto Superior Técnico with expertise in natural language processing and machine learning.",
            research_interests: ["Natural Language Processing", "Machine Learning", "Deep Learning"],
            education: [
                "MSc at IST, 2020"
            ],
            image: "assets/images/antonio-farinhas.jpg",
            links: {
                website: "https://antonio-farinhas.github.io/"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 16,
            name: "Haau-Sing Li",
            role: "PhD Student",
            position: "ELLIS PhD at TU Darmstadt University",
            advisor: "André Martins",
            co_advisor: "Iryna Gurevych",
            year_started: 2021,
            bio: "Haau-Sing is an ELLIS PhD student at TU Darmstadt University, co-advised with Iryna Gurevych.",
            research_interests: ["Natural Language Processing", "Machine Learning", "Computational Linguistics"],
            education: [],
            image: "assets/images/haau-sing-li.jpg",
            links: {
                website: "https://lhaausing.github.io/"
            },
            location: {
                country: "Germany",
                city: "Darmstadt",
            }
        },
        {
            id: 17,
            name: "Patrick Fernandes",
            role: "PhD Student",
            position: "PhD Student at CMU/IST",
            advisor: "André Martins",
            co_advisor: "Graham Neubig",
            year_started: 2020,
            bio: "Patrick is a PhD student at CMU/IST, co-advised with Graham Neubig.",
            research_interests: ["Machine Translation", "Natural Language Processing", "Deep Learning"],
            education: [],
            image: "assets/images/patrick-fernandes.jpg",
            links: {
                website: "https://coderpat.github.io/"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 18,
            name: "Nuno Guerreiro",
            role: "PhD Student",
            position: "PhD Student at IST",
            advisor: "André Martins",
            co_advisor: "Pierre Colombo",
            year_started: 2020,
            bio: "Nuno is a PhD student at IST, co-advised with Pierre Colombo at University of Paris Saclay.",
            research_interests: ["Machine Translation", "Natural Language Processing", "Quality Estimation"],
            education: [],
            image: "assets/images/nuno-guerreiro.jpg",
            links: {
                website: "https://nunonmg.github.io/"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 19,
            name: "Peiqin Lin",
            role: "PhD Student",
            position: "ELLIS PhD at LMU Munich",
            advisor: "André Martins",
            co_advisor: "Hinrich Schutze",
            year_started: 2021,
            bio: "Peiqin is an ELLIS PhD student at LMU Munich, co-supervised with Hinrich Schutze.",
            research_interests: ["Natural Language Processing", "Machine Learning", "Computational Linguistics"],
            education: [],
            image: "assets/images/peiqin-lin.jpg",
            links: {
                website: "https://lpq29743.github.io/"
            },
            location: {
                country: "China",
                city: "Beijing",
            }
        },
        {
            id: 20,
            name: "Hugo Pitorro",
            role: "Researcher",
            position: "Researcher at IT",
            advisor: "André Martins",
            co_advisor: "Marcos Treviso",
            year_started: 2024,
            bio: "Hugo is a researcher at IT, co-supervised with Marcos Treviso.",
            research_interests: ["Natural Language Processing", "Machine Learning"],
            education: [],
            image: "assets/images/hugo-pitorro.jpg",
            links: {
                website: "https://pitorro.de/"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        }
    ],
    mscs: [
        {
            id: 21,
            name: "Nuno Gonçalves",
            role: "MSc Student",
            position: "MSc Student at IST",
            advisor: "André Martins",
            co_advisor: "Marcos Treviso",
            year_started: 2024,
            bio: "Nuno is an MSc student at IST, co-supervised with Marcos Treviso.",
            research_interests: ["Natural Language Processing", "Machine Learning"],
            education: [],
            image: "assets/images/nuno-goncalves.jpg",
            links: {},
            location: {
                country: "Portugal",
                city: "Braga",
            }
        }
    ],
    alumni: [
        {
            id: 22,
            name: "Sweta Agrawal",
            role: "Alumni",
            position: "Research Scientist at Google",
            degree: "Postdoc",
            graduation_year: 2025,
            advisor: "André Martins",
            current_position: "Research Scientist at Google",
            bio: "Sweta was a postdoc at IT from 2024-2025 and now works at Google as a Research Scientist.",
            image: "assets/images/sweta-agrawal.jpg",
            links: {
                website: "https://sweta20.github.io/"
            },
            location: {
                country: "India",
                city: "Delhi",
            }
        },
        {
            id: 23,
            name: "Chunchuan Lyu",
            role: "Alumni",
            position: "Former Postdoc",
            degree: "Postdoc",
            graduation_year: 2022,
            advisor: "André Martins",
            period: "2021-2022",
            current_position: "Industry Position",
            bio: "Chunchuan was a postdoc at IT from 2021-2022.",
            image: "assets/images/chunchuan-lyu.jpg",
            links: {},
            location: {
                country: "China",
                city: "Shanghai",
            }
        },
        {
            id: 24,
            name: "Chryssa Zerva",
            role: "Alumni",
            position: "Assistant Professor at Instituto Superior Técnico",
            degree: "Postdoc",
            graduation_year: 2023,
            advisor: "André Martins",
            period: "2021-2023",
            current_position: "Assistant Professor at Instituto Superior Técnico",
            bio: "Chryssa was a postdoc at IT from 2021-2023 and is now an Assistant Professor at Instituto Superior Técnico.",
            image: "assets/images/chryssa-zerva.jpg",
            links: {
                linkedin: "https://www.linkedin.com/in/chryssa-zerva-7bb4a966"
            },
            location: {
                country: "Greece",
                city: "Athens",
            }
        },
        {
            id: 25,
            name: "Vlad Niculae",
            role: "Alumni",
            position: "Assistant Professor at University of Amsterdam",
            degree: "Postdoc",
            graduation_year: 2020,
            advisor: "André Martins",
            period: "2018-2020",
            current_position: "Assistant Professor at University of Amsterdam",
            bio: "Vlad was a postdoc at IT from 2018-2020 and is now an Assistant Professor at University of Amsterdam.",
            image: "assets/images/vlad-niculae.jpg",
            links: {
                website: "http://vene.ro"
            },
            location: {
                country: "Romania",
                city: "Bucharest",
            }
        },
        {
            id: 26,
            name: "Erick Fonseca",
            role: "Alumni",
            position: "Data Scientist at Kaufland",
            degree: "Postdoc",
            graduation_year: 2020,
            advisor: "André Martins",
            period: "2018-2020",
            current_position: "Data Scientist at Kaufland",
            bio: "Erick was a postdoc at IT from 2018-2020 and is now a Data Scientist at Kaufland.",
            image: "assets/images/erick-fonseca.jpg",
            links: {
                website: "http://www.nilc.icmc.usp.br/nilc/pessoas/erickrf"
            },
            location: {
                country: "Brazil",
                city: "São Paulo",
            }
        },
        {
            id: 27,
            name: "Taisiya Glushkova",
            role: "Alumni",
            position: "PhD Graduate",
            degree: "PhD",
            graduation_year: 2024,
            advisor: "André Martins",
            co_advisor: "Chryssa Zerva",
            period: "2020-2024",
            current_position: "Industry Position",
            bio: "Taisiya completed her PhD at IST from 2020-2024, co-advised with Chryssa Zerva.",
            image: "assets/images/taisiya-glushkova.jpg",
            links: {},
            location: {
                country: "Bulgaria",
                city: "Sofia",
            }
        },
        {
            id: 28,
            name: "Pedro Martins",
            role: "Alumni",
            position: "Software Engineer at SAP",
            degree: "PhD",
            graduation_year: 2022,
            advisor: "André Martins",
            co_advisor: "Zita Marinho",
            period: "2018-2022",
            current_position: "Software Engineer at SAP",
            bio: "Pedro completed his PhD at IST from 2018-2022, co-advised with Zita Marinho from Google DeepMind, and now works at SAP.",
            image: "assets/images/pedro-martins.jpg",
            links: {},
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 29,
            name: "Tsvetomila Mihaylova",
            role: "Alumni",
            position: "Researcher at Aalto University",
            degree: "PhD",
            graduation_year: 2022,
            advisor: "André Martins",
            co_advisor: "Vlad Niculae",
            period: "2018-2022",
            current_position: "Researcher at Aalto University",
            bio: "Tsvetomila completed her PhD at IST from 2018-2022, co-advised with Vlad Niculae, and now works at Aalto University.",
            image: "assets/images/tsvetomila-mihaylova.jpg",
            links: {
                website: "https://tsvm.github.io"
            },
            location: {
                country: "Bulgaria",
                city: "Sofia",
            }
        },
        {
            id: 30,
            name: "Gonçalo Correia",
            role: "Alumni",
            position: "Researcher at Priberam",
            degree: "PhD (ELLIS)",
            graduation_year: 2022,
            advisor: "André Martins",
            co_advisor: "Vlad Niculae",
            period: "2018-2022",
            current_position: "Researcher at Priberam",
            bio: "Gonçalo completed his ELLIS PhD at IST from 2018-2022, co-advised with Vlad Niculae, and now works at Priberam.",
            image: "assets/images/goncalo-correia.jpg",
            links: {
                website: "https://goncalomcorreia.github.io"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 31,
            name: "Gonçalo Faria",
            role: "Alumni",
            position: "PhD Student at University of Washington",
            degree: "Researcher",
            graduation_year: 2024,
            advisor: "André Martins",
            period: "2023-2024",
            current_position: "PhD Student at University of Washington",
            bio: "Gonçalo was a researcher at IT from 2023-2024 and is now a PhD student at the University of Washington.",
            image: "assets/images/goncalo-faria.jpg",
            links: {
                website: "https://www.goncalofaria.com/"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
            }
        },
        {
            id: 32,
            name: "Zita Marinho",
            role: "Alumni",
            position: "Head of Research at Priberam Labs",
            degree: "PhD",
            graduation_year: 2018,
            advisor: "André Martins",
            co_advisor: "Geoff Gordon, Sidd Srinivasa",
            period: "2013-2018",
            current_position: "Head of Research at Priberam Labs",
            bio: "Zita completed her PhD at CMU/IST from 2013-2018, co-advised with Geoff Gordon and Sidd Srinivasa, and is now Head of Research at Priberam Labs.",
            image: "assets/images/zita-marinho.jpg",
            links: {
                website: "http://www.cs.cmu.edu/~zmarinho"
            },
            location: {
                country: "Portugal",
                city: "Lisbon",
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