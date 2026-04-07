export type Language = "de" | "en"

type NavItem = {
  label: string
  to: string
  end?: boolean
}

type TextBlock = {
  title: string
  body: string
}

export type ResumeTrackItem = {
  title: string
  body: string
  bullets: string[]
}

export type ResumeTimelineRow = {
  id: string
  period: string
  career?: ResumeTrackItem
  education?: ResumeTrackItem
}

export type ResumeLogoItem = {
  id: string
  name: string
  kind: "career" | "education"
}

type SkillItem = {
  title: string
  body: string
  level: number
}

type ProjectItem = {
  label: string
  title: string
  body: string
  tags: string[]
}

type ContactMethod = {
  label: string
  value: string
  href?: string
  badge: string
}

type AvailabilityItem = {
  title: string
  body: string
}

type PageCopy = {
  eyebrow: string
  title: string
  lead: string
}

export type SiteCopy = {
  brand: {
    title: string
    subtitle: string
  }
  languageLabel: string
  nav: NavItem[]
  routeTitles: Record<string, string>
  home: {
    eyebrow: string
    lead: string
    note: string
    primaryCta: string
    secondaryCta: string
    primaryHref: string
    secondaryHref: string
    heroTagline: string
    marqueeLabel: string
    marqueeItems: string[]
  }
  about: PageCopy & {
    cards: TextBlock[]
  }
  resume: PageCopy & {
      labels: {
        period: string
        career: string
        education: string
        expand: string
        collapse: string
      }
    rows: ResumeTimelineRow[]
    logoBand: {
      label: string
      hint: string
      items: ResumeLogoItem[]
    }
  }
  skills: PageCopy & {
    items: SkillItem[]
  }
  projects: PageCopy & {
    items: ProjectItem[]
  }
  contact: PageCopy & {
    methods: ContactMethod[]
    availability: AvailabilityItem[]
  }
  footer: string
}

export const siteCopy: Record<Language, SiteCopy> = {
  de: {
    brand: {
      title: "Noah Wuhrmann",
      subtitle: "Wirtschaft, Technik & Praxis",
    },
    languageLabel: "Sprache",
    nav: [
      { label: "Home", to: "/", end: true },
      { label: "Über mich", to: "/about" },
      { label: "Lebenslauf", to: "/resume" },
      { label: "Skills", to: "/skills" },
      { label: "Projekte", to: "/projects" },
      { label: "Kontakt", to: "/contact" },
    ],
    routeTitles: {
      "/": "Home",
      "/about": "Über mich",
      "/resume": "Lebenslauf",
      "/skills": "Skills",
      "/projects": "Projekte",
      "/contact": "Kontakt",
    },
    home: {
      eyebrow: "Wirtschaft trifft Technik trifft Praxis",
      lead:
        "Ich studiere Wirtschaftsingenieurwesen an der ZHAW mit Vertiefung Wirtschaftsmathematik und arbeite parallel als stellvertretender Filialleiter bei Taurus Sports AG. Mein Profil verbindet Praxiserfahrung, analytisches Denken und Interesse an Digitalisierung, Prozessoptimierung und umsetzbaren Lösungen.",
      note:
        "Mich interessieren Aufgaben an der Schnittstelle von Wirtschaft, Technik und Analyse - dort, wo strukturierte Ideen zu spürbaren Verbesserungen im Alltag werden.",
      primaryCta: "Projekte ansehen",
      secondaryCta: "Kontakt öffnen",
      primaryHref: "/projects",
      secondaryHref: "/contact",
      heroTagline: "Analytisch, praxisnah und mit klarem Fokus auf Digitalisierung, Prozesse und umsetzbare Verbesserungen.",
      marqueeLabel: "Praxis, Analyse und Digitalisierung im Zusammenspiel",
      marqueeItems: [
        "Wirtschaftsingenieurwesen",
        "Wirtschaftsmathematik",
        "Prozessoptimierung",
        "Digitalisierung",
        "Automatisierung",
        "Python",
        "Excel & SAP",
        "Datenverständnis",
        "Analytisches Denken",
        "Operative Verantwortung",
        "Praxisbezug",
      ],
    },
    about: {
      eyebrow: "Über mich",
      title: "Praxisorientiertes Profil an der Schnittstelle von Wirtschaft, Technik und Analyse",
      lead:
        "Ich verbinde Studium, operative Verantwortung und Eigeninitiative in digitalen Themen zu einem Profil, das analytisch denkt und pragmatisch umsetzt.",
      cards: [
        {
          title: "Wer ich bin",
          body:
            "Ich studiere Wirtschaftsingenieurwesen an der ZHAW School of Engineering mit Vertiefung Wirtschaftsmathematik und arbeite parallel als stellvertretender Filialleiter bei Taurus Sports AG in Kloten. Dadurch verbinde ich akademische Entwicklung mit direkter Praxiserfahrung im Berufsalltag.",
        },
        {
          title: "Wie ich arbeite",
          body:
            "Ich arbeite strukturiert, lösungsorientiert und mit klarem Blick auf Umsetzbarkeit. Besonders motivieren mich Aufgaben, bei denen Daten, Prozesse und wirtschaftliche Zusammenhänge verständlich werden und in konkrete Verbesserungen überführt werden können.",
        },
        {
          title: "Wofür ich mich interessiere",
          body:
            "Mich interessieren Prozessoptimierung, datenbasierte Entscheidungen, Automatisierung, künstliche Intelligenz und digitale Lösungen mit echtem Nutzen. Ich suche Einstiegsmöglichkeiten, in denen ich Theorie und Praxis sinnvoll verbinden und Verantwortung übernehmen kann.",
        },
      ],
    },
    resume: {
      eyebrow: "Lebenslauf",
      title: "Stationen, Verantwortung und Entwicklung",
      lead:
        "Mein Weg verbindet Studium, berufliche Verantwortung und eine kontinuierlich aufgebaute Praxisbasis im operativen Umfeld.",
      labels: {
        period: "Zeitraum",
        career: "Beruflicher Werdegang",
        education: "Bildung",
        expand: "Ausklappen",
        collapse: "Einklappen",
      },
      rows: [
        {
          id: "zhaw-and-current-role",
          period: "2024 - 2028",
          career: {
            title: "Stellvertretender Filialleiter, Teilzeit · Taurus Sports AG, Kloten",
            body: "Aktuelle Teilzeitrolle parallel zum Bachelorstudium mit Verantwortung im operativen Alltag und aktiver Mitarbeit in der Filialführung.",
            bullets: [
              "Mitarbeit in der Filialführung und im Tagesgeschäft",
              "Praxisnahe Verantwortung parallel zum Studium",
              "Verbindung von Umsetzung, Wirtschaftlichkeit und Teamalltag",
            ],
          },
          education: {
            title: "Bachelor of Science in Wirtschaftsingenieurwesen · ZHAW School of Engineering",
            body: "Aktuelles Bachelorstudium an der Schnittstelle von Wirtschaft, Technik und Analyse mit klarer Ausrichtung auf anwendungsnahe und strukturierte Problemlösung.",
            bullets: [
              "Vertiefung Wirtschaftsmathematik",
              "Fokus auf Analyse, Modellierung und wirtschaftliche Zusammenhänge",
              "Paralleler Aufbau von Studienwissen und Praxiserfahrung",
            ],
          },
        },
        {
          id: "bms-and-part-time-role",
          period: "2022 - 2024",
          career: {
            title: "Stellvertretender Filialleiter, Teilzeit · Taurus Sports AG, Kloten",
            body: "Teilzeitrolle parallel zur Berufsmaturität mit kontinuierlicher Verantwortung in Organisation, Tagesgeschäft und Filialbetrieb.",
            bullets: [
              "Kontinuierliche Berufserfahrung in einer Führungsfunktion",
              "Verbindung von Weiterbildung und operativer Verantwortung",
              "Praxisnähe, Verlässlichkeit und wirtschaftliches Denken",
            ],
          },
          education: {
            title: "Berufsmaturität, Technik, Architektur, Life Sciences · Bildungszentrum Uster",
            body: "Berufsbegleitende Weiterbildung mit starker analytischer und mathematischer Grundlage als Brücke zum anschliessenden Studium.",
            bullets: [
              "Ausbau mathematischer und analytischer Kompetenzen",
              "Vertiefte Auseinandersetzung mit technischen Zusammenhängen",
              "Fundament für das Studium im Wirtschaftsingenieurwesen",
            ],
          },
        },
        {
          id: "full-time-deputy-manager",
          period: "2019 - 2022",
          career: {
            title: "Stellvertretender Filialleiter, Vollzeit · Taurus Sports AG, Kloten",
            body: "Vollzeitfunktion mit operativer Verantwortung und aktiver Mitarbeit in der Filialführung.",
            bullets: [
              "Verantwortung im Filialalltag und in der Organisation",
              "Praxisnahe Führungserfahrung im Sportdetailhandel",
              "Direkte Arbeit an Abläufen, Kundenorientierung und Umsetzung",
            ],
          },
        },
        {
          id: "swiss-army",
          period: "2019",
          career: {
            title: "Schweizer Armee · Rekrut und Soldat",
            body: "Militärdienst zwischen Ausbildung und nächster beruflicher Station in einem strukturierten und fordernden Umfeld.",
            bullets: [
              "Rekrut von Juni bis September 2019",
              "Anschliessend Soldat bis Oktober 2019",
              "Erfahrung in einem klar strukturierten Umfeld mit hoher Verbindlichkeit",
            ],
          },
        },
        {
          id: "retail-specialist",
          period: "2018 - 2019",
          career: {
            title: "Detailhandelsfachmann EFZ, Vollzeit · Taurus Sports AG, Kloten",
            body: "Fachliche Tätigkeit im Sportdetailhandel nach Abschluss der Lehre mit direktem Kundenkontakt und operativer Verantwortung.",
            bullets: [
              "Kundennahe Verantwortung im Tagesgeschäft",
              "Vertieftes Verständnis für Produkte, Beratung und Verkaufsprozesse",
              "Weiterentwicklung der Praxisbasis im operativen Umfeld",
            ],
          },
        },
        {
          id: "apprenticeship-and-vocational-school",
          period: "2015 - 2018",
          career: {
            title: "Lehre als Detailhandelsfachmann EFZ · Taurus Sports AG",
            body: "Berufseinstieg mit fundierter praktischer Ausbildung im Sportdetailhandel und frühem Aufbau von Verlässlichkeit, Praxisnähe und Kundenorientierung.",
            bullets: [
              "Kombination aus Praxisbetrieb und schulischer Ausbildung",
              "Frühe Verantwortung im direkten Kundenumfeld",
              "Aufbau einer belastbaren operativen Basis",
            ],
          },
          education: {
            title: "Berufsschule für Detailhandel Zürich · Detailhandelsfachmann EFZ, Sport",
            body: "Schulischer Ausbildungsweg parallel zur Lehre mit Abschluss als Detailhandelsfachmann EFZ im Bereich Sport.",
            bullets: [
              "Berufsschulische Grundlage parallel zur Praxisausbildung",
              "Abschluss Detailhandelsfachmann EFZ, Sport",
              "Verbindung von Fachwissen, Praxis und Verlässlichkeit",
            ],
          },
        },
      ],
      logoBand: {
        label: "Stationen und Institutionen im Überblick",
        hint: "Arbeitgeber und Bildungsstationen, die meinen Weg bisher geprägt haben.",
        items: [
          { id: "taurus-sports", name: "Taurus Sports AG", kind: "career" },
          { id: "zhaw", name: "ZHAW School of Engineering", kind: "education" },
          { id: "bildungszentrum-uster", name: "Bildungszentrum Uster", kind: "education" },
          { id: "schweizer-armee", name: "Schweizer Armee", kind: "career" },
          { id: "berufsschule-zuerich", name: "Berufsschule für Detailhandel und Pharmazie Zürich", kind: "education" },
        ],
      },
    },
    skills: {
      eyebrow: "Skills",
      title: "Kompetenzen mit klarer Gewichtung",
      lead:
        "Meine Stärken verbinden operative Erfahrung, analytisches Denken und ein wachsendes digitales Werkzeugset mit klarem Praxisbezug.",
      items: [
        {
          title: "Wirtschaft und Praxis",
          body: "Operatives Verständnis, Filialalltag, Kundenorientierung, Verantwortungsübernahme und wirtschaftliches Denken aus mehreren Jahren Praxiserfahrung.",
          level: 5,
        },
        {
          title: "Analyse und Struktur",
          body: "Analytisches Denken, Zahlenverständnis, strukturierte Herangehensweise, Problemlösung und systemisches Denken.",
          level: 5,
        },
        {
          title: "Digitalisierung und Tools",
          body: "Python, Excel, R, RStudio, Datenaufbereitung, Automatisierungsansätze und die strukturierte Visualisierung von Ergebnissen.",
          level: 4,
        },
        {
          title: "Prozess- und Projektfokus",
          body: "Prozessoptimierung, Praxisbezug, Eigeninitiative, Umsetzungsorientierung und die Verbindung von Theorie und Praxis in konkreten Anwendungsfällen.",
          level: 4,
        },
        {
          title: "Persönliche Arbeitsweise",
          body: "Zuverlässig, lernbereit, verantwortungsbewusst, lösungsorientiert, strukturiert und engagiert.",
          level: 5,
        },
      ],
    },
    projects: {
      eyebrow: "Projekte",
      title: "Arbeiten, die Qualität sichtbar machen",
      lead:
        "Ausgewählte Projekte zeigen, wie ich digitale und analytische Themen mit echtem Praxisbezug angehe.",
      items: [
        {
          label: "Projekt 01",
          title: "Automatisierung der Produktbildbearbeitung",
          body:
            "Ich habe ein Python-Tool entwickelt, das Produktbilder aus unterschiedlichen Quellen automatisiert standardisiert, Hintergründe bereinigt, Produkte korrekt positioniert und Dateien strukturiert abspeichert. Das Ergebnis ist ein effizienterer Prozess mit weniger manueller Arbeit und konsistenterer Bildqualität.",
          tags: ["Python", "Bildverarbeitung", "Prozessautomatisierung"],
        },
        {
          label: "Projekt 02",
          title: "Optimierungsideen für den Einkaufsprozess",
          body:
            "Ausgehend von SAP-Exporten und manuellen Excel-Schritten habe ich eine digitale Lösung konzipiert, mit der Einkaufsdaten automatisiert verarbeitet und strukturiert für Entscheidungen aufbereitet werden können. Das Projekt verbindet klaren Praxisbezug mit starkem Digitalisierungsfokus.",
          tags: ["SAP", "Excel", "Prozessanalyse"],
        },
        {
          label: "Projekt 03",
          title: "Modellierung dynamischer Systeme",
          body:
            "Im Rahmen von Projekten habe ich dynamische Systeme modelliert, Parameter untersucht, Simulationen interpretiert und die Ergebnisse strukturiert dokumentiert. Dadurch wurden systemisches Denken, Modellbildung und analytische Struktur weiter geschärft.",
          tags: ["Berkeley Madonna", "Simulation", "Analyse"],
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Direkt und unkompliziert erreichbar",
      lead:
        "Ich freue mich über den Austausch zu Einstiegsmöglichkeiten, spannenden Projekten und Rollen an der Schnittstelle von Wirtschaft, Technik und Analyse.",
      methods: [
        {
          label: "E-Mail",
          value: "noahwuhrmann@gmx.ch",
          href: "mailto:noahwuhrmann@gmx.ch",
          badge: "@",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/noah-wuhrmann-087271216",
          href: "https://www.linkedin.com/in/noah-wuhrmann-087271216/",
          badge: "in",
        },
        {
          label: "GitHub",
          value: "github.com/Noahwuhrmann",
          href: "https://github.com/Noahwuhrmann",
          badge: "gh",
        },
        {
          label: "Standort",
          value: "Raum Zürich, Schweiz",
          badge: "ZH",
        },
      ],
      availability: [
        {
          title: "Offen für",
          body: "Einstiegsrollen, Werkstudententätigkeiten und spannende Aufgaben mit Praxisbezug.",
        },
        {
          title: "Profil",
          body: "Wirtschaft, Technik, Analyse und operative Umsetzung in einem ausgewogenen Profil.",
        },
        {
          title: "Unterlagen",
          body: "Lebenslauf und weitere Informationen stelle ich gerne auf Anfrage zur Verfügung.",
        },
      ],
    },
    footer: "",
  },
  en: {
    brand: {
      title: "Noah Wuhrmann",
      subtitle: "Business, Technology & Practice",
    },
    languageLabel: "Language",
    nav: [
      { label: "Home", to: "/", end: true },
      { label: "About", to: "/about" },
      { label: "Resume", to: "/resume" },
      { label: "Skills", to: "/skills" },
      { label: "Projects", to: "/projects" },
      { label: "Contact", to: "/contact" },
    ],
    routeTitles: {
      "/": "Home",
      "/about": "About",
      "/resume": "Resume",
      "/skills": "Skills",
      "/projects": "Projects",
      "/contact": "Contact",
    },
    home: {
      eyebrow: "Where business, technology and practice meet",
      lead:
        "I am studying Industrial Engineering at ZHAW with a specialization in business mathematics while working part-time as Deputy Store Manager at Taurus Sports AG. My profile combines hands-on experience, analytical thinking and a strong interest in digitalization, process improvement and practical solutions.",
      note:
        "I am especially interested in roles at the intersection of business, technology and analysis - where structured thinking can turn into meaningful real-world improvements.",
      primaryCta: "View projects",
      secondaryCta: "Open contact",
      primaryHref: "/projects",
      secondaryHref: "/contact",
      heroTagline: "Analytical, practice-oriented and focused on digitalization, processes and measurable improvement.",
      marqueeLabel: "Practice, analysis and digitalization working together",
      marqueeItems: [
        "Industrial Engineering",
        "Business Mathematics",
        "Process Improvement",
        "Digitalization",
        "Automation",
        "Python",
        "Excel & SAP",
        "Data Understanding",
        "Analytical Thinking",
        "Operational Responsibility",
        "Practical Execution",
      ],
    },
    about: {
      eyebrow: "About",
      title: "A practice-oriented profile at the intersection of business, technology and analysis",
      lead:
        "I combine academic development, operational responsibility and initiative in digital topics into a profile that thinks analytically and works in a pragmatic, implementation-oriented way.",
      cards: [
        {
          title: "Who I am",
          body:
            "I study Industrial Engineering at the ZHAW School of Engineering with a specialization in business mathematics and work in parallel as Deputy Store Manager at Taurus Sports AG in Kloten. This allows me to combine academic development with direct day-to-day professional experience.",
        },
        {
          title: "How I work",
          body:
            "I work in a structured and solution-oriented way with a strong focus on practical implementation. I am especially motivated by tasks where data, processes and business relationships can be translated into concrete and useful improvements.",
        },
        {
          title: "What I am interested in",
          body:
            "I am particularly interested in process improvement, data-driven decisions, automation, artificial intelligence and digital solutions with real value. I am looking for entry-level opportunities where I can connect theory and practice and take on responsibility.",
        },
      ],
    },
    resume: {
      eyebrow: "Resume",
      title: "Milestones, responsibility and development",
      lead:
        "My path combines academic studies, operational responsibility and a steadily growing foundation of hands-on experience.",
      labels: {
        period: "Period",
        career: "Career path",
        education: "Education",
        expand: "Expand",
        collapse: "Collapse",
      },
      rows: [
        {
          id: "zhaw-and-current-role",
          period: "2024 - 2028",
          career: {
            title: "Deputy Store Manager, part-time · Taurus Sports AG, Kloten",
            body: "Current part-time role alongside my bachelor's studies with responsibility in daily operations and active involvement in store leadership.",
            bullets: [
              "Involvement in store leadership and day-to-day operations",
              "Practical responsibility alongside academic development",
              "Strong combination of execution, business thinking and team collaboration",
            ],
          },
          education: {
            title: "Bachelor of Science in Industrial Engineering · ZHAW School of Engineering",
            body: "Current bachelor's program at the intersection of business, technology and analysis with a clear focus on applied and structured problem-solving.",
            bullets: [
              "Specialization in business mathematics",
              "Focus on analysis, modeling and business-related systems",
              "Parallel development of academic knowledge and practical experience",
            ],
          },
        },
        {
          id: "bms-and-part-time-role",
          period: "2022 - 2024",
          career: {
            title: "Deputy Store Manager, part-time · Taurus Sports AG, Kloten",
            body: "Part-time role alongside my professional baccalaureate with continuous responsibility in organization, day-to-day business and store operations.",
            bullets: [
              "Continuous leadership exposure in an operational role",
              "Combination of further education and practical responsibility",
              "Strong practical awareness, reliability and business thinking",
            ],
          },
          education: {
            title: "Professional Baccalaureate in Technology, Architecture and Life Sciences · Bildungszentrum Uster",
            body: "Further education with a strong analytical and mathematical foundation that prepared the way for my subsequent degree program.",
            bullets: [
              "Expansion of mathematical and analytical skills",
              "Deeper engagement with technical contexts",
              "Foundation for studying Industrial Engineering",
            ],
          },
        },
        {
          id: "full-time-deputy-manager",
          period: "2019 - 2022",
          career: {
            title: "Deputy Store Manager, full-time · Taurus Sports AG, Kloten",
            body: "Full-time position with operational responsibility and active participation in store management.",
            bullets: [
              "Responsibility for store operations and organization",
              "Hands-on leadership experience in sports retail",
              "Direct involvement in processes, customer orientation and execution",
            ],
          },
        },
        {
          id: "swiss-army",
          period: "2019",
          career: {
            title: "Swiss Armed Forces · Recruit and Soldier",
            body: "Military service between my apprenticeship and my next professional role in a structured and demanding environment.",
            bullets: [
              "Recruit from June to September 2019",
              "Continued service as a soldier until October 2019",
              "Experience in a highly structured environment with clear accountability",
            ],
          },
        },
        {
          id: "retail-specialist",
          period: "2018 - 2019",
          career: {
            title: "Certified Retail Specialist EFZ, full-time · Taurus Sports AG, Kloten",
            body: "Professional role in sports retail after completing my apprenticeship, with direct customer contact and operational responsibility.",
            bullets: [
              "Customer-facing responsibility in day-to-day business",
              "Deeper understanding of products, consulting and sales processes",
              "Continued development of a strong practical foundation",
            ],
          },
        },
        {
          id: "apprenticeship-and-vocational-school",
          period: "2015 - 2018",
          career: {
            title: "Apprenticeship as Certified Retail Specialist EFZ · Taurus Sports AG",
            body: "Professional starting point with solid hands-on training in sports retail and an early foundation in reliability, customer orientation and practical execution.",
            bullets: [
              "Combination of practical training and vocational education",
              "Early responsibility in a customer-facing environment",
              "Built a reliable operational foundation",
            ],
          },
          education: {
            title: "Vocational School of Retail Zurich · Certified Retail Specialist EFZ, Sports",
            body: "School-based education alongside the apprenticeship, completed with the EFZ qualification in sports retail.",
            bullets: [
              "Vocational school foundation parallel to practical training",
              "Graduated as Certified Retail Specialist EFZ in sports retail",
              "Connected specialist knowledge with day-to-day practice",
            ],
          },
        },
      ],
      logoBand: {
        label: "Employers and institutions at a glance",
        hint: "Employers and educational institutions that have shaped my path so far.",
        items: [
          { id: "taurus-sports", name: "Taurus Sports AG", kind: "career" },
          { id: "zhaw", name: "ZHAW School of Engineering", kind: "education" },
          { id: "bildungszentrum-uster", name: "Bildungszentrum Uster", kind: "education" },
          { id: "swiss-armed-forces", name: "Swiss Armed Forces", kind: "career" },
          { id: "vocational-school-zurich", name: "Vocational School of Retail and Pharmacy Zurich", kind: "education" },
        ],
      },
    },
    skills: {
      eyebrow: "Skills",
      title: "Capabilities with visible weighting",
      lead:
        "My strengths combine operational experience, analytical thinking and a growing digital toolkit with a clear practical orientation.",
      items: [
        {
          title: "Business and practical execution",
          body: "Operational understanding, customer orientation, responsibility in day-to-day business and a strong sense for business realities built through several years of practical experience.",
          level: 5,
        },
        {
          title: "Analysis and structure",
          body: "Analytical thinking, strong comfort with numbers, structured problem-solving and a systematic way of understanding complex situations.",
          level: 5,
        },
        {
          title: "Digitalization and tools",
          body: "Python, Excel, R, RStudio, data preparation, automation approaches and the structured visualization of results.",
          level: 4,
        },
        {
          title: "Process and project focus",
          body: "Process improvement, strong practical relevance, initiative and the ability to connect theory with execution in real use cases.",
          level: 4,
        },
        {
          title: "Personal working style",
          body: "Reliable, eager to learn, responsible, solution-oriented, structured and committed.",
          level: 5,
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Work that makes quality visible",
      lead:
        "Selected projects show how I approach digital and analytical topics with a clear link to practical application.",
      items: [
        {
          label: "Case Study 01",
          title: "Automating product image processing",
          body:
            "I developed a Python-based tool that standardizes product images from different sources, cleans up backgrounds, positions products consistently and stores files in a structured way. The result is a more efficient workflow with less manual work and more consistent image quality.",
          tags: ["Python", "Image Processing", "Process Automation"],
        },
        {
          label: "Case Study 02",
          title: "Ideas to improve the purchasing process",
          body:
            "Based on SAP exports and manual Excel steps, I designed a digital solution concept that would automatically process and structure purchasing data for better decision-making. The project combines a strong practical angle with a clear digitalization focus.",
          tags: ["SAP", "Excel", "Process Analysis"],
        },
        {
          label: "Case Study 03",
          title: "Modeling dynamic systems",
          body:
            "In project work, I modeled dynamic systems, explored parameter effects, interpreted simulations and documented results in a structured way. This strengthened my systems thinking, modeling approach and analytical discipline.",
          tags: ["Berkeley Madonna", "Simulation", "Analysis"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Easy to reach and clear to read",
      lead:
        "I am happy to connect about entry-level opportunities, interesting projects and roles at the intersection of business, technology and analysis.",
      methods: [
        {
          label: "Email",
          value: "noahwuhrmann@gmx.ch",
          href: "mailto:noahwuhrmann@gmx.ch",
          badge: "@",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/noah-wuhrmann-087271216",
          href: "https://www.linkedin.com/in/noah-wuhrmann-087271216/",
          badge: "in",
        },
        {
          label: "GitHub",
          value: "github.com/Noahwuhrmann",
          href: "https://github.com/Noahwuhrmann",
          badge: "gh",
        },
        {
          label: "Location",
          value: "Greater Zurich Area, Switzerland",
          badge: "ZH",
        },
      ],
      availability: [
        {
          title: "Open to",
          body: "Entry-level roles, working student opportunities and meaningful responsibilities with a practical focus.",
        },
        {
          title: "Profile",
          body: "A balanced combination of business, technology, analysis and operational execution.",
        },
        {
          title: "Documents",
          body: "CV and further information are available on request.",
        },
      ],
    },
    footer: "",
  },
}
