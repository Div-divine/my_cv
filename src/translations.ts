export type Lang = 'fr' | 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      leadership: 'Leadership',
      projects: 'Projects',
      education: 'Education',
    },

    hero: {
      role: 'Full Stack Developer',
      tagline: 'Symfony · PHP · Node.js · React · Next.js · Vue.js · PostgreSQL',
      description:
        'Full Stack Developer with professional experience building and maintaining production web applications across backend, frontend, data, authentication, documentation, and deployment.',
    },

    about: {
      title: 'Professional Profile',
      p1: 'Full Stack Developer with professional experience building and maintaining production web applications across backend, frontend, data, authentication, documentation, and deployment. Experienced with Symfony/PHP, Node.js, Vue.js, React/Next.js, PostgreSQL, Docker, AWS, Vercel, JWT, RBAC, SSO, and REST APIs. Comfortable translating client requirements into technical solutions, contributing to architecture decisions, and taking features from development through production. Additional experience leading teams and managing business operations brings strong ownership, communication, and decision-making skills.',
      p2: '',
    },

    skills: {
      title: 'Technical Skills',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        security: 'Security',
        databases: 'Data & DevOps',
        docs: 'Documentation & CMS',
        mobile: 'Mobile',
      },
      items: {
        backend: ['Symfony', 'PHP', 'Node.js', 'Express.js', 'REST APIs'],
        frontend: ['JavaScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'PrimeVue', 'GSAP', 'responsive design'],
        security: ['JWT', 'OAuth2', 'RBAC', 'SSO', 'LemonLDAP::NG'],
        databases: ['PostgreSQL', 'MySQL', 'Docker', 'Git', 'Vercel', 'AWS EC2/S3', 'CI/CD'],
        docs: ['Swagger/OpenAPI', 'Nelmio API Doc', 'GitBook', 'WordPress', 'Prismic CMS', 'headless CMS'],
        mobile: ['React Native'],
      },
    },

    experience: {
      title: 'Professional Experience',
      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'IF Technologies',
          period: 'September 2024 – Present',
          bullets: [
            'Develop and maintain production web applications using Symfony, Vue.js, Node.js, PostgreSQL, and Tailwind CSS.',
            'Design and implement REST APIs, authentication flows, database structures, and backend services.',
            'Implement secure access control with JWT, RBAC, and LemonLDAP::NG/SSO.',
            'Create and maintain API documentation using Swagger/OpenAPI, Nelmio API Doc, and GitBook.',
            'Contribute to architecture discussions, technical planning, roadmap decisions, and client requirement analysis.',
          ],
        },
        {
          role: 'Freelance Full Stack Developer',
          company: '',
          period: '2022 – Present',
          bullets: [
            'Deliver web solutions from requirements and technical design through development, deployment, and maintenance.',
            'Build responsive frontend interfaces, backend services, API integrations, and CMS-driven websites.',
            'Manage projects independently, communicate with clients, and translate business needs into technical requirements.',
          ],
        },
        {
          role: 'Full Stack Developer Intern',
          company: 'PIC DIGITAL',
          period: 'April – June 2024',
          bullets: [
            'Contributed to web application development across frontend and backend tasks while collaborating with the development team. Used Next.js and Express.js.',
          ],
        },
      ],
    },

    leadership: {
      title: 'Leadership & Business Experience',
      roles: [
        {
          role: 'Manager & Team Leader',
          company: 'BIATA COMPANIES & BIATA Ayo Ventures - Lagos, Nigeria',
          period: '2016 - 2022',
          bullets: [
            'Managed company operations and supervised multidisciplinary teams',
            'Oversaw technical support services and operational workflows',
            'Coordinated equipment management and logistics',
            'Developed strong leadership, communication, and problem-solving skills',
          ],
        },
        {
          role: 'Founder & Business Owner',
          company: 'Maggy-nificent Enterprise',
          period: '2022 - Present',
          bullets: [
            'Founded and managed business operations, logistics, and financial activities',
            'Oversaw accounting, payments, and supplier coordination',
            'Handled operational decision-making and business administration',
          ],
        },
      ],
    },

    projects: {
      title: 'Selected Projects',
      items: [
        {
          title: 'Marion Poizeau Website',
          description:
            'Next.js rebuild, ongoing maintenance, and SEO optimization. Live website.',
        },
        {
          title: 'Timeo Coaching Platform',
          description:
            'Full-stack platform using Prismic CMS, GSAP animations, and Vercel deployment. Live website.',
        },
        {
          title: 'Amandine Mauries Website',
          description:
            'WordPress, Elementor, Yoast SEO, Google Analytics, and Complianz cookie compliance. Live website.',
        },
        {
          title: 'React Native Application',
          description:
            'Cross-platform mobile application involving architecture, API integration, and state management.',
        },
      ],
      flutter: '',
      flutterTitle: '',
    },

    education: {
      title: 'Education',
      items: [
        {
          title: 'Full Stack Developer — Professional Title Level 5',
          institution: 'GRETA-CFA Aquitaine',
          year: '2023 - 2024',
          description: '',
        },
        {
          title: 'Full Stack Web Development',
          institution: 'Nucamp Coding Bootcamp',
          year: '2022',
          description: 'Obtained title and began professional freelance activity.',
        },
      ],
    },

    footer: {
      role: 'Full Stack Developer',
      rights: 'All rights reserved.',
      website: 'https://cv-divine-osuu-full-stack-developer.vercel.app/',
    },

    download: {
      loading: 'Loading CV...',
      preparing: 'Preparing PDF...',
      ready: 'Download CV',
      error: 'Error generating PDF',
      fileName: 'Divine_Osuu_CV.pdf',
    },

    pdf: {
      profileTitle: 'Professional Summary',
      profileSummary:
        'Full Stack Developer with professional experience building and maintaining production web applications across backend, frontend, data, authentication, documentation, and deployment. Experienced with Symfony/PHP, Node.js, Vue.js, React/Next.js, PostgreSQL, Docker, AWS, Vercel, JWT, RBAC, SSO, and REST APIs. Comfortable translating client requirements into technical solutions, contributing to architecture decisions, and taking features from development through production. Additional experience leading teams and managing business operations brings strong ownership, communication, and decision-making skills.',
      experienceTitle: 'Professional Experience',
      skillsTitle: 'Technical Skills',
      leadershipTitle: 'Additional Leadership & Business Experience',
      educationTitle: 'Education & Languages',
      languagesTitle: 'Languages',
      projectsTitle: 'Selected Projects',
      footerLabel: 'Divine Osuu - Full Stack Developer',
      role: 'Full Stack Developer',

      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'IF Technologies',
          period: 'September 2024 – Present',
          bullets: [
            'Develop and maintain production web applications using Symfony, Vue.js, Node.js, PostgreSQL, and Tailwind CSS.',
            'Design and implement REST APIs, authentication flows, database structures, and backend services.',
            'Implement secure access control with JWT, RBAC, and LemonLDAP::NG/SSO.',
            'Create and maintain API documentation using Swagger/OpenAPI, Nelmio API Doc, and GitBook.',
            'Contribute to architecture discussions, technical planning, roadmap decisions, and client requirement analysis.',
          ],
        },
        {
          role: 'Freelance Full Stack Developer',
          company: '',
          period: '2022 – Present',
          bullets: [
            'Deliver web solutions from requirements and technical design through development, deployment, and maintenance.',
            'Build responsive frontend interfaces, backend services, API integrations, and CMS-driven websites.',
            'Manage projects independently, communicate with clients, and translate business needs into technical requirements.',
          ],
        },
        {
          role: 'Full Stack Developer Intern',
          company: 'PIC DIGITAL',
          period: 'April – June 2024',
          bullets: [
            'Contributed to web application development across frontend and backend tasks while collaborating with the development team. Used Next.js and Express.js.',
          ],
        },
      ],

      leadershipRoles: [
        {
          role: 'Manager & Team Leader',
          company: 'BIATA Companies & BIATA Ayo Ventures',
          period: '2016 – 2022',
          bullets: [
            'Managed operations, supervised multidisciplinary teams, coordinated technical support workflows, and managed equipment and logistics.',
          ],
        },
        {
          role: 'Founder & Business Owner',
          company: 'Maggy-nificent Enterprise',
          period: '2022 – Present',
          bullets: [
            'Manage business operations, logistics, accounting coordination, supplier relationships, payments, and operational decision-making.',
          ],
        },
      ],

      educationItems: [
        {
          title: 'Full Stack Developer — Professional Title Level 5',
          institution: 'GRETA-CFA Aquitaine',
          year: '2023 - 2024',
          description: '',
        },
        {
          title: 'Full Stack Web Development',
          institution: 'Nucamp Coding Bootcamp',
          year: '2022',
          description: 'Obtained title and began professional freelance activity.',
        },
      ],

      languages: [
        { name: 'English', level: 'Native' },
        { name: 'French', level: 'Professional' },
        { name: 'Igbo', level: 'Native' },
        { name: 'Ewe', level: 'Fluent' },
      ],

      projectItems: [
        {
          name: 'Marion Poizeau Website',
          url: 'https://www.marionpoizeau.com/',
          desc: 'Next.js rebuild, ongoing maintenance, and SEO optimization. Live website.',
        },
        {
          name: 'Timeo Coaching Platform',
          url: 'https://www.timeocoaching.com/',
          desc: 'Full-stack platform using Prismic CMS, GSAP animations, and Vercel deployment. Live website.',
        },
        {
          name: 'Amandine Mauries Website',
          url: 'https://amandinemauries.fr/',
          desc: 'WordPress, Elementor, Yoast SEO, Google Analytics, and Complianz cookie compliance. Live website.',
        },
        {
          name: 'React Native Application',
          url: '',
          desc: 'Cross-platform mobile application involving architecture, API integration, and state management.',
        },
      ],

      skillCategories: {
        backend: 'Backend',
        frontend: 'Frontend',
        security: 'Security',
        databases: 'Data & DevOps',
        docs: 'Documentation & CMS',
        mobile: 'Mobile',
      },

      skillItems: {
        backend: ['Symfony', 'PHP', 'Node.js', 'Express.js', 'REST APIs'],
        frontend: ['JavaScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'PrimeVue', 'GSAP', 'responsive design'],
        security: ['JWT', 'OAuth2', 'RBAC', 'SSO', 'LemonLDAP::NG'],
        databases: ['PostgreSQL', 'MySQL', 'Docker', 'Git', 'Vercel', 'AWS EC2/S3', 'CI/CD'],
        docs: ['Swagger/OpenAPI', 'Nelmio API Doc', 'GitBook', 'WordPress', 'Prismic CMS', 'headless CMS'],
        mobile: ['React Native'],
      },

      docTitle: 'Divine Osuu - Full Stack Developer CV',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      skills: 'Compétences',
      experience: 'Expérience',
      leadership: 'Leadership',
      projects: 'Projets',
      education: 'Formation',
    },

    hero: {
      role: 'Développeur Full Stack',
      tagline: 'Symfony · PHP · Node.js · React · Next.js · Vue.js · PostgreSQL',
      description:
        'Développeur Full Stack avec une expérience professionnelle dans la construction et la maintenance d\'applications web couvrant le backend, le frontend, les données, l\'authentification, la documentation et le déploiement.',
    },

    about: {
      title: 'Profil Professionnel',
      p1: 'Développeur Full Stack avec une expérience professionnelle dans la construction et la maintenance d\'applications web couvrant le backend, le frontend, les données, l\'authentification, la documentation et le déploiement. Expérimenté avec Symfony/PHP, Node.js, Vue.js, React/Next.js, PostgreSQL, Docker, AWS, Vercel, JWT, RBAC, SSO et les API REST. À l\'aise pour traduire les exigences clients en solutions techniques, contribuer aux décisions d\'architecture et mener les fonctionnalités du développement à la production. Une expérience supplémentaire dans la direction d\'équipes et la gestion d\'entreprises apporte de solides compétences en prise de responsabilité, communication et prise de décision.',
      p2: '',
    },

    skills: {
      title: 'Compétences Techniques',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        security: 'Sécurité',
        databases: 'Données & DevOps',
        docs: 'Documentation & CMS',
        mobile: 'Mobile',
      },
      items: {
        backend: ['Symfony', 'PHP', 'Node.js', 'Express.js', 'API REST'],
        frontend: ['JavaScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'PrimeVue', 'GSAP', 'design responsive'],
        security: ['JWT', 'OAuth2', 'RBAC', 'SSO', 'LemonLDAP::NG'],
        databases: ['PostgreSQL', 'MySQL', 'Docker', 'Git', 'Vercel', 'AWS EC2/S3', 'CI/CD'],
        docs: ['Swagger/OpenAPI', 'Nelmio API Doc', 'GitBook', 'WordPress', 'Prismic CMS', 'CMS headless'],
        mobile: ['React Native'],
      },
    },

    experience: {
      title: 'Expérience Professionnelle',
      jobs: [
        {
          role: 'Développeur Full Stack',
          company: 'IF Technologies',
          period: 'Septembre 2024 – Présent',
          bullets: [
            'Développer et maintenir des applications web de production avec Symfony, Vue.js, Node.js, PostgreSQL et Tailwind CSS.',
            'Concevoir et implémenter des API REST, flux d\'authentification, structures de base de données et services backend.',
            'Implémenter un contrôle d\'accès sécurisé avec JWT, RBAC et LemonLDAP::NG/SSO.',
            'Créer et maintenir la documentation API avec Swagger/OpenAPI, Nelmio API Doc et GitBook.',
            'Contribuer aux discussions d\'architecture, à la planification technique, aux décisions de roadmap et à l\'analyse des exigences clients.',
          ],
        },
        {
          role: 'Développeur Full Stack Freelance',
          company: '',
          period: '2022 – Présent',
          bullets: [
            'Livrer des solutions web des exigences et de la conception technique jusqu\'au développement, déploiement et maintenance.',
            'Construire des interfaces frontend responsives, services backend, intégrations d\'API et sites web pilotés par CMS.',
            'Gérer des projets de manière autonome, communiquer avec les clients et traduire les besoins métiers en exigences techniques.',
          ],
        },
        {
          role: 'Développeur Full Stack — Stage',
          company: 'PIC DIGITAL',
          period: 'Avril – Juin 2024',
          bullets: [
            'Contribué au développement d\'applications web sur les tâches frontend et backend en collaborant avec l\'équipe de développement. Utilisé Next.js et Express.js.',
          ],
        },
      ],
    },

    leadership: {
      title: 'Leadership & Expérience Entrepreneuriale',
      roles: [
        {
          role: 'Responsable & Chef d\'Équipe',
          company: 'BIATA COMPANIES & BIATA Ayo Ventures - Lagos, Nigeria',
          period: '2016 - 2022',
          bullets: [
            'Gestion des opérations et supervision d\'équipes pluridisciplinaires',
            'Supervision des services de support technique et des workflows opérationnels',
            'Coordination de la gestion des équipements et de la logistique',
            'Développement de compétences en leadership, communication et résolution de problèmes',
          ],
        },
        {
          role: 'Fondateur & Chef d\'Entreprise',
          company: 'Maggy-nificent Enterprise',
          period: '2022 - Présent',
          bullets: [
            'Fondé et géré les opérations commerciales, la logistique et les activités financières',
            'Supervision de la comptabilité, des paiements et de la coordination fournisseurs',
            'Prise de décisions opérationnelles et administration de l\'entreprise',
          ],
        },
      ],
    },

    projects: {
      title: 'Projets Sélectionnés',
      items: [
        {
          title: 'Site Marion Poizeau',
          description:
            'Reconstruction Next.js, maintenance continue et optimisation SEO. Site en ligne.',
        },
        {
          title: 'Plateforme Timeo Coaching',
          description:
            'Plateforme full stack utilisant Prismic CMS, animations GSAP et déploiement Vercel. Site en ligne.',
        },
        {
          title: 'Site Amandine Mauries',
          description:
            'WordPress, Elementor, Yoast SEO, Google Analytics et conformité cookies Complianz. Site en ligne.',
        },
        {
          title: 'Application React Native',
          description:
            'Application mobile multiplateforme impliquant l\'architecture, l\'intégration API et la gestion d\'état.',
        },
      ],
      flutter: '',
      flutterTitle: '',
    },

    education: {
      title: 'Formation',
      items: [
        {
          title: 'Développeur Full Stack — Titre Professionnel Niveau 5',
          institution: 'GRETA-CFA Aquitaine',
          year: '2023 - 2024',
          description: '',
        },
        {
          title: 'Full Stack Web Development',
          institution: 'Nucamp Coding Bootcamp',
          year: '2022',
          description: 'Obtention du titre et début d\'activité professionnelle en freelance.',
        },
      ],
    },

    footer: {
      role: 'Développeur Full Stack',
      rights: 'Tous droits réservés.',
      website: 'https://cv-divine-osuu-full-stack-developer.vercel.app/',
    },

    download: {
      loading: 'Chargement du CV...',
      preparing: 'Préparation du PDF...',
      ready: 'Télécharger le CV',
      error: 'Erreur de génération du PDF',
      fileName: 'Divine_Osuu_CV_FR.pdf',
    },

    pdf: {
      profileTitle: 'Résumé Professionnel',
      profileSummary:
        'Développeur Full Stack avec une expérience professionnelle dans la construction et la maintenance d\'applications web couvrant le backend, le frontend, les données, l\'authentification, la documentation et le déploiement. Expérimenté avec Symfony/PHP, Node.js, Vue.js, React/Next.js, PostgreSQL, Docker, AWS, Vercel, JWT, RBAC, SSO et les API REST. À l\'aise pour traduire les exigences clients en solutions techniques, contribuer aux décisions d\'architecture et mener les fonctionnalités du développement à la production. Une expérience supplémentaire dans la direction d\'équipes et la gestion d\'entreprises apporte de solides compétences en prise de responsabilité, communication et prise de décision.',
      experienceTitle: 'Expérience Professionnelle',
      skillsTitle: 'Compétences Techniques',
      leadershipTitle: 'Expérience de Leadership & Business Supplémentaire',
      educationTitle: 'Formation & Langues',
      languagesTitle: 'Langues',
      projectsTitle: 'Projets Sélectionnés',
      footerLabel: 'Divine Osuu - Développeur Full Stack',
      role: 'Développeur Full Stack',

      jobs: [
        {
          role: 'Développeur Full Stack',
          company: 'IF Technologies',
          period: 'Septembre 2024 – Présent',
          bullets: [
            'Développer et maintenir des applications web de production avec Symfony, Vue.js, Node.js, PostgreSQL et Tailwind CSS.',
            'Concevoir et implémenter des API REST, flux d\'authentification, structures de base de données et services backend.',
            'Implémenter un contrôle d\'accès sécurisé avec JWT, RBAC et LemonLDAP::NG/SSO.',
            'Créer et maintenir la documentation API avec Swagger/OpenAPI, Nelmio API Doc et GitBook.',
            'Contribuer aux discussions d\'architecture, à la planification technique, aux décisions de roadmap et à l\'analyse des exigences clients.',
          ],
        },
        {
          role: 'Développeur Full Stack Freelance',
          company: '',
          period: '2022 – Présent',
          bullets: [
            'Livrer des solutions web des exigences et de la conception technique jusqu\'au développement, déploiement et maintenance.',
            'Construire des interfaces frontend responsives, services backend, intégrations d\'API et sites web pilotés par CMS.',
            'Gérer des projets de manière autonome, communiquer avec les clients et traduire les besoins métiers en exigences techniques.',
          ],
        },
        {
          role: 'Développeur Full Stack — Stage',
          company: 'PIC DIGITAL',
          period: 'Avril – Juin 2024',
          bullets: [
            'Contribué au développement d\'applications web sur les tâches frontend et backend en collaborant avec l\'équipe de développement. Utilisé Next.js et Express.js.',
          ],
        },
      ],

      leadershipRoles: [
        {
          role: 'Responsable & Chef d\'Équipe',
          company: 'BIATA Companies & BIATA Ayo Ventures',
          period: '2016 – 2022',
          bullets: [
            'Gérer les opérations, superviser les équipes pluridisciplinaires, coordonner les workflows de support technique et gérer les équipements et la logistique.',
          ],
        },
        {
          role: 'Fondateur & Chef d\'Entreprise',
          company: 'Maggy-nificent Enterprise',
          period: '2022 – Présent',
          bullets: [
            'Gérer les opérations commerciales, la logistique, la coordination comptable, les relations fournisseurs, les paiements et la prise de décision opérationnelle.',
          ],
        },
      ],

      educationItems: [
        {
          title: 'Développeur Full Stack — Titre Professionnel Niveau 5',
          institution: 'GRETA-CFA Aquitaine',
          year: '2023 - 2024',
          description: '',
        },
        {
          title: 'Full Stack Web Development',
          institution: 'Nucamp Coding Bootcamp',
          year: '2022',
          description: 'Obtention du titre et début d\'activité professionnelle en freelance.',
        },
      ],

      languages: [
        { name: 'Anglais', level: 'Langue Maternelle' },
        { name: 'Français', level: 'Professionnel' },
        { name: 'Igbo', level: 'Langue Maternelle' },
        { name: 'Ewe', level: 'Courant' },
      ],

      projectItems: [
        {
          name: 'Site Marion Poizeau',
          url: 'https://www.marionpoizeau.com/',
          desc: 'Reconstruction Next.js, maintenance continue et optimisation SEO. Site en ligne.',
        },
        {
          name: 'Plateforme Timeo Coaching',
          url: 'https://www.timeocoaching.com/',
          desc: 'Plateforme full stack utilisant Prismic CMS, animations GSAP et déploiement Vercel. Site en ligne.',
        },
        {
          name: 'Site Amandine Mauries',
          url: 'https://amandinemauries.fr/',
          desc: 'WordPress, Elementor, Yoast SEO, Google Analytics et conformité cookies Complianz. Site en ligne.',
        },
        {
          name: 'Application React Native',
          url: '',
          desc: 'Application mobile multiplateforme impliquant l\'architecture, l\'intégration API et la gestion d\'état.',
        },
      ],

      skillCategories: {
        backend: 'Backend',
        frontend: 'Frontend',
        security: 'Sécurité',
        databases: 'Données & DevOps',
        docs: 'Documentation & CMS',
        mobile: 'Mobile',
      },

      skillItems: {
        backend: ['Symfony', 'PHP', 'Node.js', 'Express.js', 'API REST'],
        frontend: ['JavaScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'PrimeVue', 'GSAP', 'Design Réactif'],
        security: ['JWT', 'OAuth2', 'RBAC', 'SSO', 'LemonLDAP::NG'],
        databases: ['PostgreSQL', 'MySQL', 'Docker', 'Git', 'Vercel', 'AWS EC2/S3', 'CI/CD'],
        docs: ['Swagger/OpenAPI', 'Nelmio API Doc', 'GitBook', 'WordPress', 'Prismic CMS', 'CMS Headless'],
        mobile: ['React Native'],
      },

      docTitle: 'Divine Osuu - Développeur Full Stack CV',
    },
  },
} as const;
