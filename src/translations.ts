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
      tagline: 'Backend Systems • Scalable APIs • Authentication • Modern Frontend Architecture',
      description:
        'As an experienced Full Stack Developer, I leverage a strong background in production environments to design robust backend systems, intuitive frontend architectures, and seamless deployment workflows.',
    },

    about: {
      title: 'Professional Profile',
      p1: 'As an experienced Full Stack Developer, I leverage a strong background in production environments to design robust backend systems, intuitive frontend architectures, and seamless deployment workflows. I master the complete software lifecycle, from API security to the maintenance of scalable applications using <strong>Symfony, Node.js, Next.js, and PostgreSQL</strong>.',
      p2: 'My career is defined by several years of leadership and entrepreneurial responsibility, which has sharpened my decision-making skills and ability to solve complex problems. Driven by innovation, I continuously expand my expertise to provide comprehensive, multi-channel solutions.',
    },

    skills: {
      title: 'Core Skills',
      categories: {
        backend: 'Backend Engineering',
        auth: 'Authentication & Security',
        frontend: 'Frontend Engineering',
        databases: 'Databases & DevOps',
        cms: 'CMS & Content',
        docs: 'Documentation',
        mobile: 'Mobile Development',
      },
      items: {
        backend: ['Symfony (PHP)', 'Node.js', 'Express.js', 'REST API Architecture', 'Business Logic Design', 'Production Debugging', 'Secure Architecture'],
        auth: ['JWT Authentication', 'Session-based Auth', 'OAuth2 / OIDC', 'RBAC (Role-Based Access Control)', 'SSO Implementation', 'LemonLDAP::NG', 'Secure Token Validation', 'OWASP Standards'],
        frontend: ['Next.js', 'React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'PrimeVue', 'PrimeFlex', 'GSAP Animations', 'Component-driven Architecture'],
        databases: ['PostgreSQL', 'MySQL', 'Relational Modeling', 'Query Optimization', 'Docker', 'Git / GitHub Workflows', 'Vercel', 'AWS (EC2, S3)'],
        cms: ['WordPress', 'Elementor', 'Headless CMS', 'Prismic CMS', 'Custom Theme Development'],
        docs: ['Swagger / OpenAPI', 'Nelmio API Doc', 'GitBook'],
        mobile: ['React Native', 'JavaScript'],
      },
    },

    experience: {
      title: 'Professional Experience',
      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'IF Technologies',
          period: 'September 2024 - Present',
          bullets: [
            'Develop and maintain production-grade full stack applications using Symfony, Vue.js, PostgreSQL, Node.js, and Tailwind CSS',
            'Design backend systems including APIs, authentication flows, and database architecture',
            'Implement authentication systems using JWT, RBAC, and LemonLDAP::NG',
            'Create and maintain API documentation using Swagger, Nelmio, and GitBook',
            'Participate in architecture discussions, technical planning, and feature roadmap decisions',
            'Work directly with clients to analyze requirements and define technical solutions',
          ],
        },
        {
          role: 'Freelance Full Stack Developer',
          company: '',
          period: '2022 - Present',
          bullets: [
            'Development of web solutions for client projects and needs, from conception to production.',
            'Frontend and backend development',
            'Design and integration of APIs',
            'Development of modern and responsive web interfaces',
            'Working with various JavaScript/PHP technologies and frameworks',
            'Autonomous management of projects and technical requirements',
          ],
        },
        {
          role: 'Full Stack Developer — Internship',
          company: 'PIC DIGITAL',
          period: 'April - June 2024',
          bullets: [
            'Internship completed as part of my Full Stack Developer training at GRETA-CFA Aquitaine.',
            'Participation in web application development',
            'Frontend and backend development',
            'Collaboration with the development team',
            'Practical application of skills acquired during training',
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
      title: 'Featured Professional Projects',
      items: [
        {
          title: 'Marion Poizeau Website',
          description:
            'Initially developed with WordPress (2022); fully rebuilt using Next.js in April 2026. I provide ongoing technical maintenance and production updates.',
        },
        {
          title: 'Timeo Coaching Platform',
          description:
            'Built a full-stack coaching platform with dynamic content management. I manage ongoing maintenance and security optimization.',
        },
        {
          title: 'Amandine Mauries Website',
          description:
            'Professional website built with WordPress CMS, Elementor page builder, and optimized with Yoast SEO. Integrated Google Analytics, Tag Manager, and Complianz for cookie compliance.',
        },
      ],
      flutter:
        'Currently developing a cross-platform mobile application focused on mobile architecture, API integration, state management, and responsive UI systems.',
      flutterTitle: 'React Native Application',
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
      profileTitle: 'Professional Profile',
      profileSummary:
        'As an experienced Full Stack Developer, I leverage a strong background to design robust backend systems, intuitive frontend architectures, and seamless deployment workflows. I master the complete software lifecycle, from API security to the maintenance of scalable applications using Symfony, Node.js, Next.js, and PostgreSQL. My career is defined by several years of leadership and entrepreneurial responsibility, which has sharpened my decision-making skills and ability to solve complex problems. Driven by innovation, I continuously expand my expertise to provide comprehensive, multi-channel solutions.',
      experienceTitle: 'Professional Experience',
      skillsTitle: 'Core Technical Skills',
      leadershipTitle: 'Leadership & Business',
      educationTitle: 'Education',
      languagesTitle: 'Languages',
      projectsTitle: 'Featured Professional Projects',
      footerLabel: 'Divine Osuu - Full Stack Developer',
      role: 'Full Stack Developer',

      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'IF Technologies',
          period: 'September 2024 - Present',
          bullets: [
            'Develop and maintain production-grade full stack applications using Symfony, Vue.js, PostgreSQL, Node.js, and Tailwind CSS',
            'Design backend systems including APIs, authentication flows, and database architecture',
            'Implement authentication systems using JWT, RBAC, and LemonLDAP::NG',
            'Create and maintain API documentation using Swagger, Nelmio, and GitBook',
            'Participate in architecture discussions, technical planning, and feature roadmap decisions',
            'Work directly with clients to analyze requirements and define technical solutions',
          ],
        },
        {
          role: 'Freelance Full Stack Developer',
          company: '',
          period: '2022 - Present',
          bullets: [
            'Development of web solutions for client projects and needs, from conception to production.',
            'Frontend and backend development',
            'Design and integration of APIs',
            'Development of modern and responsive web interfaces',
            'Working with various JavaScript/PHP technologies and frameworks',
            'Autonomous management of projects and technical requirements',
          ],
        },
        {
          role: 'Full Stack Developer — Internship',
          company: 'PIC DIGITAL',
          period: 'April - June 2024',
          bullets: [
            'Internship completed as part of my Full Stack Developer training at GRETA-CFA Aquitaine.',
            'Participation in web application development',
            'Frontend and backend development',
            'Collaboration with the development team',
            'Practical application of skills acquired during training',
          ],
        },
      ],

      leadershipRoles: [
        {
          role: 'Manager & Team Leader',
          company: 'BIATA COMPANIES & BIATA Ayo Ventures - Lagos, Nigeria',
          period: '2016 - 2022',
          bullets: [
            'Managed company operations and supervised multidisciplinary teams',
            'Oversaw technical support services and operational workflows',
            'Coordinated equipment management and logistics',
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
          url: 'marionpoizeau.com',
          desc: 'Full Next.js rebuild with ongoing maintenance and SEO optimization.',
        },
        {
          name: 'Timeo Coaching Platform',
          url: 'timeocoaching.com',
          desc: 'Full stack platform with Prismic CMS, GSAP animations, and Vercel deployment.',
        },
        {
          name: 'Amandine Mauries Website',
          url: 'amandinemauries.fr',
          desc: 'WordPress CMS with Elementor, Yoast SEO, Google Analytics, and Complianz cookie compliance.',
        },
        {
          name: 'React Native Application',
          url: '',
          desc: 'Cross-platform mobile app - architecture, API integration, and state management.',
        },
      ],

      skillCategories: {
        backendAuth: 'Backend & Auth',
        databasesDevops: 'Databases & DevOps',
        documentation: 'Documentation',
        frontendUi: 'Frontend & UI',
        cmsMobile: 'CMS & Mobile',
      },

      skillItems: {
        backendAuth: ['Symfony (PHP)', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth2', 'RBAC', 'SSO', 'LemonLDAP::NG'],
        databasesDevops: ['PostgreSQL', 'MySQL', 'Docker', 'Git', 'Vercel', 'AWS (EC2, S3)', 'CI/CD'],
        documentation: ['Swagger / OpenAPI', 'Nelmio API Doc', 'GitBook'],
        frontendUi: ['Next.js', 'React', 'Vue.js', 'Tailwind CSS', 'PrimeVue', 'PrimeFlex', 'GSAP', 'Responsive Design'],
        cmsMobile: ['WordPress', 'Prismic CMS', 'Headless CMS', 'React Native', 'JavaScript'],
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
      tagline: 'Systèmes Backend • APIs Scalables • Authentification • Architecture Frontend Moderne',
      description:
        'Développeur Full Stack expérimenté, je m\'appuie sur une solide pratique pour concevoir des systèmes backend robustes, des architectures frontend intuitives et des workflows de déploiement fluides.',
    },

    about: {
      title: 'Profil Professionnel',
      p1: 'Développeur Full Stack expérimenté, je m\'appuie sur une solide pratique pour concevoir des systèmes backend robustes, des architectures frontend intuitives et des workflows de déploiement fluides. Je maîtrise l\'intégralité du cycle de vie logiciel, de la sécurisation des API à la maintenance d\'applications scalables avec <strong>Symfony, Node.js, Next.js et PostgreSQL</strong>.',
      p2: 'Mon parcours est marqué par plusieurs années de leadership et de responsabilité entrepreneuriale, ce qui a affûté mon sens de la décision et ma capacité à résoudre des problèmes complexes. Toujours tourné vers l\'innovation, j\'étends continuellement mon expertise pour offrir des solutions toujours plus transversales.',
    },

    skills: {
      title: 'Compétences Clés',
      categories: {
        backend: 'Ingénierie Backend',
        auth: 'Authentification & Sécurité',
        frontend: 'Ingénierie Frontend',
        databases: 'Bases de Données & DevOps',
        cms: 'CMS & Contenu',
        docs: 'Documentation',
        mobile: 'Développement Mobile',
      },
      items: {
        backend: ['Symfony (PHP)', 'Node.js', 'Express.js', 'Architecture API REST', 'Conception Logique Métier', 'Débogage en Production', 'Architecture Sécurisée'],
        auth: ['Authentification JWT', 'Authentification Basée sur Session', 'OAuth2 / OIDC', 'RBAC (Contrôle d\'Accès Basé sur les Rôles)', 'Implémentation SSO', 'LemonLDAP::NG', 'Validation de Jeton Sécurisée', 'Normes OWASP'],
        frontend: ['Next.js', 'React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'PrimeVue', 'PrimeFlex', 'Animations GSAP', 'Architecture Orientée Composants'],
        databases: ['PostgreSQL', 'MySQL', 'Modélisation Relationnelle', 'Optimisation de Requêtes', 'Docker', 'Workflows Git / GitHub', 'Vercel', 'AWS (EC2, S3)'],
        cms: ['WordPress', 'Elementor', 'CMS Headless', 'Prismic CMS', 'Développement de Thème Personnalisé'],
        docs: ['Swagger / OpenAPI', 'Nelmio API Doc', 'GitBook'],
        mobile: ['React Native', 'JavaScript'],
      },
    },

    experience: {
      title: 'Expérience Professionnelle',
      jobs: [
        {
          role: 'Développeur Full Stack',
          company: 'IF Technologies',
          period: 'Septembre 2024 - Aujourd\'hui',
          bullets: [
            'Développement et maintenance d\'applications full stack en production avec Symfony, Vue.js, PostgreSQL, Node.js et Tailwind CSS',
            'Conception de systèmes backend incluant APIs, flux d\'authentification et architecture de base de données',
            'Implémentation de systèmes d\'authentification avec JWT, RBAC et LemonLDAP::NG',
            'Création et maintenance de la documentation API avec Swagger, Nelmio et GitBook',
            'Participation aux discussions d\'architecture, à la planification technique et aux décisions de feuille de route',
            'Travail direct avec les clients pour analyser les besoins et définir les solutions techniques',
          ],
        },
        {
          role: 'Développeur Full Stack Freelance',
          company: '',
          period: '2022 - Aujourd\'hui',
          bullets: [
            'Développement de solutions web pour des projets et besoins clients, de la conception à la mise en production.',
            'Développement frontend et backend',
            'Conception et intégration d\'API',
            'Développement d\'interfaces web modernes et responsives',
            'Travail avec différentes technologies et frameworks JavaScript/PHP',
            'Gestion autonome des projets et des besoins techniques',
          ],
        },
        {
          role: 'Développeur Full Stack — Stage',
          company: 'PIC DIGITAL',
          period: 'Avril - Juin 2024',
          bullets: [
            'Stage réalisé dans le cadre de ma formation Développeur Full Stack au GRETA-CFA Aquitaine.',
            'Participation au développement d\'applications web',
            'Développement frontend et backend',
            'Collaboration avec l\'équipe de développement',
            'Mise en pratique des compétences acquises en formation',
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
      title: 'Projets Professionnels',
      items: [
        {
          title: 'Site Marion Poizeau',
          description:
            'Développé initialement avec WordPress (2022) ; entièrement reconstruit avec Next.js en avril 2026. J\'assure la maintenance technique et les mises à jour en production.',
        },
        {
          title: 'Plateforme Timeo Coaching',
          description:
            'Plateforme de coaching full stack avec gestion de contenu dynamique. J\'assure la maintenance continue et l\'optimisation de la sécurité.',
        },
        {
          title: 'Site Amandine Mauries',
          description:
            'Site professionnel construit avec WordPress CMS, Elementor et optimisé avec Yoast SEO. Intégration de Google Analytics, Tag Manager et Complianz pour la conformité cookies.',
        },
      ],
      flutter:
        'Développement en cours d\'une application mobile multiplateforme axée sur l\'architecture mobile, l\'intégration API, la gestion d\'état et les systèmes d\'UI responsive.',
      flutterTitle: 'Application React Native',
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
      profileTitle: 'Profil Professionnel',
      profileSummary:
        'Développeur Full Stack expérimenté, je m\'appuie sur une solide pratique pour concevoir des systèmes backend robustes, des architectures frontend intuitives et des workflows de déploiement fluides. Je maîtrise l\'intégralité du cycle de vie logiciel, de la sécurisation des API à la maintenance d\'applications scalables avec Symfony, Node.js, Next.js et PostgreSQL. Mon parcours est marqué par plusieurs années de leadership et de responsabilité entrepreneuriale, ce qui a affûté mon sens de la décision et ma capacité à résoudre des problèmes complexes. Toujours tourné vers l\'innovation, j\'étends continuellement mon expertise pour offrir des solutions toujours plus transversales.',
      experienceTitle: 'Expérience Professionnelle',
      skillsTitle: 'Compétences Techniques',
      leadershipTitle: 'Leadership & Entrepreneuriat',
      educationTitle: 'Formation',
      languagesTitle: 'Langues',
      projectsTitle: 'Projets Professionnels',
      footerLabel: 'Divine Osuu - Développeur Full Stack',
      role: 'Développeur Full Stack',

      jobs: [
        {
          role: 'Développeur Full Stack',
          company: 'IF Technologies',
          period: 'Septembre 2024 - Aujourd\'hui',
          bullets: [
            'Développement et maintenance d\'applications full stack en production avec Symfony, Vue.js, PostgreSQL, Node.js et Tailwind CSS',
            'Conception de systèmes backend incluant APIs, flux d\'authentification et architecture de base de données',
            'Implémentation de systèmes d\'authentification avec JWT, RBAC et LemonLDAP::NG',
            'Création et maintenance de la documentation API avec Swagger, Nelmio et GitBook',
            'Participation aux discussions d\'architecture, à la planification technique et aux décisions de feuille de route',
            'Travail direct avec les clients pour analyser les besoins et définir les solutions techniques',
          ],
        },
        {
          role: 'Développeur Full Stack Freelance',
          company: '',
          period: '2022 - Aujourd\'hui',
          bullets: [
            'Développement de solutions web pour des projets et besoins clients, de la conception à la mise en production.',
            'Développement frontend et backend',
            'Conception et intégration d\'API',
            'Développement d\'interfaces web modernes et responsives',
            'Travail avec différentes technologies et frameworks JavaScript/PHP',
            'Gestion autonome des projets et des besoins techniques',
          ],
        },
        {
          role: 'Développeur Full Stack — Stage',
          company: 'PIC DIGITAL',
          period: 'Avril - Juin 2024',
          bullets: [
            'Stage réalisé dans le cadre de ma formation Développeur Full Stack au GRETA-CFA Aquitaine.',
            'Participation au développement d\'applications web',
            'Développement frontend et backend',
            'Collaboration avec l\'équipe de développement',
            'Mise en pratique des compétences acquises en formation',
          ],
        },
      ],

      leadershipRoles: [
        {
          role: 'Responsable & Chef d\'Équipe',
          company: 'BIATA COMPANIES & BIATA Ayo Ventures - Lagos, Nigeria',
          period: '2016 - 2022',
          bullets: [
            'Gestion des opérations et supervision d\'équipes pluridisciplinaires',
            'Supervision des services de support technique et des workflows opérationnels',
            'Coordination de la gestion des équipements et de la logistique',
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
          url: 'marionpoizeau.com',
          desc: 'Reconstruction complète en Next.js avec maintenance continue et optimisation SEO.',
        },
        {
          name: 'Plateforme Timeo Coaching',
          url: 'timeocoaching.com',
          desc: 'Plateforme full stack avec Prismic CMS, animations GSAP et déploiement Vercel.',
        },
        {
          name: 'Site Amandine Mauries',
          url: 'amandinemauries.fr',
          desc: 'WordPress CMS avec Elementor, Yoast SEO, Google Analytics et Complianz conformité cookies.',
        },
        {
          name: 'Application React Native',
          url: '',
          desc: 'Application mobile multiplateforme - architecture, intégration API et gestion d\'état.',
        },
      ],

      skillCategories: {
        backendAuth: 'Backend & Auth',
        databasesDevops: 'Bases de Données & DevOps',
        documentation: 'Documentation',
        frontendUi: 'Frontend & UI',
        cmsMobile: 'CMS & Mobile',
      },

      skillItems: {
        backendAuth: ['Symfony (PHP)', 'Node.js', 'Express.js', 'API REST', 'JWT', 'OAuth2', 'RBAC', 'SSO', 'LemonLDAP::NG'],
        databasesDevops: ['PostgreSQL', 'MySQL', 'Docker', 'Git', 'Vercel', 'AWS (EC2, S3)', 'CI/CD'],
        documentation: ['Swagger / OpenAPI', 'Nelmio API Doc', 'GitBook'],
        frontendUi: ['Next.js', 'React', 'Vue.js', 'Tailwind CSS', 'PrimeVue', 'PrimeFlex', 'GSAP', 'Design Réactif'],
        cmsMobile: ['WordPress', 'Prismic CMS', 'CMS Headless', 'React Native', 'JavaScript'],
      },

      docTitle: 'Divine Osuu - Développeur Full Stack CV',
    },
  },
} as const;
