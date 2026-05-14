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
        'Full stack developer with professional software development experience and strong production expertise in designing and maintaining scalable applications using Symfony, Node.js, Vue.js, and Next.js. Focused on secure backend architecture, high-performance APIs, and seamless user experiences.',
    },

    about: {
      title: 'Professional Profile',
      p1: 'Full stack developer with professional software development experience and strong production experience across backend systems, frontend architecture, authentication, APIs, and deployment workflows. Experienced in designing and maintaining scalable applications using <strong>Symfony, Node.js, Vue.js, Next.js, and PostgreSQL</strong>. Comfortable working across the complete software lifecycle including architecture, backend logic, security, deployment, and production maintenance.',
      p2: 'Beyond software engineering, I bring several years of leadership, operational management, and business responsibility from entrepreneurship roles. This background strengthened my <strong>problem-solving, ownership, and decision-making abilities</strong> in professional environments. Currently expanding into cross-platform mobile development with <strong>Flutter</strong>.',
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
        mobile: ['Flutter (Learning)', 'Dart'],
      },
    },

    experience: {
      title: 'Professional Experience',
      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'IF Technologies - France',
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
          role: 'Web Developer Intern',
          company: 'PIC DIGITAL - Bidart, France',
          period: 'Apr 2024 - Jun 2024',
          bullets: [
            'Developed frontend and backend tasks using Next.js and Express.js',
            'Implemented unit testing and CI/CD integration to ensure robust production deployment',
            'Contributed to responsive UI implementation and frontend improvements',
            'Participated in hosting configuration and deployment tasks',
          ],
        },
        {
          role: 'Freelance Full Stack Developer',
          company: 'Remote | France',
          period: '2022 - Present',
          bullets: [
            'Marion Poizeau Website: Initially designed with WordPress (2022); fully rebuilt and migrated to Next.js in April 2026 for production scalability',
            'Timeo Coaching Platform: Designed and developed a full stack coaching platform using Next.js, Prismic CMS, GSAP, and Vercel',
            'Provide ongoing maintenance, security updates, and performance optimization for both platforms',
            'Managed deployment workflows, SEO optimization, and production updates',
          ],
        },
      ],
    },

    leadership: {
      title: 'Leadership & Business Experience',
      roles: [
        {
          role: 'Manager',
          company: 'BIATA COMPANIES - Lagos, Nigeria',
          period: '2018 - 2022',
          bullets: [
            'Managed company operations and supervised multidisciplinary teams',
            'Oversaw technical support services and operational workflows',
            'Coordinated equipment management and logistics',
            'Developed strong leadership, communication, and problem-solving skills',
          ],
        },
        {
          role: 'Team Leader',
          company: 'BIATA Ayo Ventures - Lagos, Nigeria',
          period: '2016 - 2019',
          bullets: [
            'Managed technical support operations and company equipment',
            'Supervised operational teams and workflow execution',
            'Maintained high operational standards and client satisfaction',
          ],
        },
        {
          role: 'Business Owner',
          company: 'Maggy-nificent Enterprise',
          period: '2020 - Present',
          bullets: [
            'Managed business operations, logistics, and financial activities',
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
      ],
      flutter:
        'Currently developing a cross-platform mobile application focused on mobile architecture, API integration, state management, and responsive UI systems.',
      flutterTitle: 'Flutter Application',
    },

    education: {
      title: 'Education',
      items: [
        {
          title: 'Full Stack Developer - Level 5 Technical Professional (BAC+2)',
          institution: 'GRETA-CFA Aquitaine - Bayonne, France',
          year: '2023 - 2024',
        },
        {
          title: 'Back-End Development with Python, SQL & DevOps',
          institution: 'Nucamp Coding Bootcamp - USA (Remote)',
          year: '2022',
        },
        {
          title: 'Scientific Baccalaureate',
          institution: 'Emmaüs High School - Lomé, Togo',
          year: '2016',
        },
      ],
    },

    footer: {
      role: 'Full Stack Developer',
      rights: 'All rights reserved.',
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
        'Full stack developer with professional software development experience and strong production experience across backend systems, frontend architecture, authentication, APIs, and deployment workflows. Expert in designing scalable applications using Symfony, Node.js, Next.js, and PostgreSQL. Comfortable working across the complete software lifecycle including architecture, security, and production maintenance. Brings several years of leadership and business responsibility from entrepreneurship roles, strengthening problem-solving and decision-making abilities. Currently expanding into cross-platform mobile development with Flutter.',
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
          company: 'IF Technologies - France',
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
          role: 'Web Developer Intern',
          company: 'PIC DIGITAL - Bidart, France',
          period: 'April - June 2024',
          bullets: [
            'Developed frontend and backend tasks using Next.js and Express.js',
            'Implemented unit testing and CI/CD integration for robust production deployment',
            'Contributed to responsive UI implementation and frontend improvements',
            'Participated in hosting configuration and deployment tasks',
          ],
        },
        {
          role: 'Freelance Full Stack Developer',
          company: 'Remote - France',
          period: '2022 - Present',
          bullets: [
            'Marion Poizeau Website: Initially developed with WordPress (2022); fully rebuilt using Next.js in April 2026 for production scalability',
            'Timeo Coaching Platform: Designed and developed a full stack coaching platform using Next.js, Prismic CMS, GSAP, and Vercel',
            'Provide ongoing maintenance, security updates, and performance optimization for both platforms',
            'Managed deployment workflows, SEO optimization, and production updates',
          ],
        },
      ],

      leadershipRoles: [
        {
          role: 'Manager',
          company: 'BIATA COMPANIES - Lagos, Nigeria',
          period: '2018 - 2022',
          bullets: [
            'Managed company operations and supervised multidisciplinary teams',
            'Oversaw technical support services and operational workflows',
            'Coordinated equipment management and logistics',
          ],
        },
        {
          role: 'Team Leader',
          company: 'BIATA Ayo Ventures - Lagos, Nigeria',
          period: '2016 - 2019',
          bullets: [
            'Managed technical support operations and company equipment',
            'Supervised operational teams and workflow execution',
            'Maintained high operational standards and client satisfaction',
          ],
        },
        {
          role: 'Business Owner',
          company: 'Maggy-nificent Enterprise',
          period: '2020 - Present',
          bullets: [
            'Managed business operations, logistics, and financial activities',
            'Oversaw accounting, payments, and supplier coordination',
            'Handled operational decision-making and business administration',
          ],
        },
      ],

      educationItems: [
        {
          title: 'Full Stack Developer - Level 5 Technical Professional (BAC+2)',
          institution: 'GRETA-CFA Aquitaine - Bayonne, France',
          year: '2023 - 2024',
        },
        {
          title: 'Back-End Development',
          institution: 'Nucamp Coding Bootcamp - USA (Remote)',
          year: '2022',
        },
        {
          title: 'Scientific Baccalaureate',
          institution: 'Emmaüs High School - Lomé, Togo',
          year: '2016',
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
          name: 'Flutter Application',
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
        cmsMobile: ['WordPress', 'Prismic CMS', 'Headless CMS', 'Flutter', 'Dart'],
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
        'Développeur full stack avec une expérience professionnelle en développement logiciel et une solide expertise en production dans la conception et la maintenance d\'applications scalables avec Symfony, Node.js, Vue.js et Next.js. Spécialisé dans l\'architecture backend sécurisée, les APIs performantes et les expériences utilisateur fluides.',
    },

    about: {
      title: 'Profil Professionnel',
      p1: 'Développeur full stack avec une expérience professionnelle en développement logiciel et une solide expérience en production dans les systèmes backend, l\'architecture frontend, l\'authentification, les APIs et les workflows de déploiement. Expérimenté dans la conception et la maintenance d\'applications scalables avec <strong>Symfony, Node.js, Vue.js, Next.js et PostgreSQL</strong>. À l\'aise sur l\'ensemble du cycle de vie logiciel, incluant l\'architecture, la logique backend, la sécurité, le déploiement et la maintenance en production.',
      p2: 'Au-delà de l\'ingénierie logicielle, j\'apporte plusieurs années de leadership, de gestion opérationnelle et de responsabilité entrepreneuriale. Cette expérience a renforcé mes capacités de <strong>résolution de problèmes, de prise de responsabilité et de prise de décision</strong> en environnement professionnel. Actuellement en expansion vers le développement mobile multiplateforme avec <strong>Flutter</strong>.',
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
        mobile: ['Flutter (Apprentissage)', 'Dart'],
      },
    },

    experience: {
      title: 'Expérience Professionnelle',
      jobs: [
        {
          role: 'Développeur Full Stack',
          company: 'IF Technologies - France',
          period: 'Septembre 2024 - Présent',
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
          role: 'Développeur Web Stagiaire',
          company: 'PIC DIGITAL - Bidart, France',
          period: 'Avr. 2024 - Juin 2024',
          bullets: [
            'Développement de tâches frontend et backend avec Next.js et Express.js',
            'Implémentation de tests unitaires et intégration CI/CD pour un déploiement en production robuste',
            'Contribution à l\'implémentation d\'UI responsive et améliorations frontend',
            'Participation à la configuration d\'hébergement et aux tâches de déploiement',
          ],
        },
        {
          role: 'Développeur Full Stack Freelance',
          company: 'Télétravail | France',
          period: '2022 - Présent',
          bullets: [
            'Site Marion Poizeau : Conçu initialement avec WordPress (2022) ; entièrement reconstruit et migré vers Next.js en avril 2026 pour la scalabilité en production',
            'Plateforme Timeo Coaching : Conception et développement d\'une plateforme de coaching full stack avec Next.js, Prismic CMS, GSAP et Vercel',
            'Maintenance continue, mises à jour de sécurité et optimisation des performances pour les deux plateformes',
            'Gestion des workflows de déploiement, optimisation SEO et mises à jour en production',
          ],
        },
      ],
    },

    leadership: {
      title: 'Leadership & Expérience Entrepreneuriale',
      roles: [
        {
          role: 'Responsable',
          company: 'BIATA COMPANIES - Lagos, Nigeria',
          period: '2018 - 2022',
          bullets: [
            'Gestion des opérations et supervision d\'équipes pluridisciplinaires',
            'Supervision des services de support technique et des workflows opérationnels',
            'Coordination de la gestion des équipements et de la logistique',
            'Développement de compétences en leadership, communication et résolution de problèmes',
          ],
        },
        {
          role: 'Chef d\'Équipe',
          company: 'BIATA Ayo Ventures - Lagos, Nigeria',
          period: '2016 - 2019',
          bullets: [
            'Gestion des opérations de support technique et des équipements',
            'Supervision des équipes opérationnelles et de l\'exécution des workflows',
            'Maintien de standards opérationnels élevés et satisfaction client',
          ],
        },
        {
          role: 'Chef d\'Entreprise',
          company: 'Maggy-nificent Enterprise',
          period: '2020 - Présent',
          bullets: [
            'Gestion des opérations commerciales, de la logistique et des activités financières',
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
      ],
      flutter:
        'Développement en cours d\'une application mobile multiplateforme axée sur l\'architecture mobile, l\'intégration API, la gestion d\'état et les systèmes d\'UI responsive.',
      flutterTitle: 'Application Flutter',
    },

    education: {
      title: 'Formation',
      items: [
        {
          title: 'Développeur Full Stack - Titre Professionnel Niveau 5 (BAC+2)',
          institution: 'GRETA-CFA Aquitaine - Bayonne, France',
          year: '2023 - 2024',
        },
        {
          title: 'Développement Back-End avec Python, SQL & DevOps',
          institution: 'Nucamp Coding Bootcamp - USA (À distance)',
          year: '2022',
        },
        {
          title: 'Baccalauréat Scientifique',
          institution: 'Lycée Emmaüs - Lomé, Togo',
          year: '2016',
        },
      ],
    },

    footer: {
      role: 'Développeur Full Stack',
      rights: 'Tous droits réservés.',
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
        'Développeur full stack avec une expérience professionnelle en développement logiciel et une solide expérience en production dans les systèmes backend, l\'architecture frontend, l\'authentification, les APIs et les workflows de déploiement. Expert dans la conception d\'applications scalables avec Symfony, Node.js, Next.js et PostgreSQL. À l\'aise sur l\'ensemble du cycle de vie logiciel, incluant l\'architecture, la sécurité et la maintenance en production. Apporte plusieurs années de leadership et de responsabilité entrepreneuriale, renforçant les capacités de résolution de problèmes et de prise de décision. Actuellement en expansion vers le développement mobile multiplateforme avec Flutter.',
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
          company: 'IF Technologies - France',
          period: 'Septembre 2024 - Présent',
          bullets: [
            'Développement et maintenance d\'applications full stack en production avec Symfony, Vue.js, PostgreSQL, Node.js et Tailwind CSS',
            'Conception de systèmes backend incluant APIs, flux d\'authentification et architecture de base de données',
            'Implémentation de systèmes d\'authentification avec JWT, RBAC et LemonLDAP::NG',
            'Création et maintenance de la documentation API avec Swagger, Nelmio et GitBook',
            'Participation aux discussions d\'architecture, planification technique et décisions de feuille de route',
            'Travail direct avec les clients pour analyser les besoins et définir les solutions techniques',
          ],
        },
        {
          role: 'Développeur Web Stagiaire',
          company: 'PIC DIGITAL - Bidart, France',
          period: 'Avril - Juin 2024',
          bullets: [
            'Développement de tâches frontend et backend avec Next.js et Express.js',
            'Implémentation de tests unitaires et intégration CI/CD pour un déploiement en production robuste',
            'Contribution à l\'implémentation d\'UI responsive et améliorations frontend',
            'Participation à la configuration d\'hébergement et aux tâches de déploiement',
          ],
        },
        {
          role: 'Développeur Full Stack Freelance',
          company: 'Télétravail - France',
          period: '2022 - Présent',
          bullets: [
            'Site Marion Poizeau : Développé initialement avec WordPress (2022) ; entièrement reconstruit avec Next.js en avril 2026 pour la scalabilité en production',
            'Plateforme Timeo Coaching : Conception et développement d\'une plateforme de coaching full stack avec Next.js, Prismic CMS, GSAP et Vercel',
            'Maintenance continue, mises à jour de sécurité et optimisation des performances pour les deux plateformes',
            'Gestion des workflows de déploiement, optimisation SEO et mises à jour en production',
          ],
        },
      ],

      leadershipRoles: [
        {
          role: 'Responsable',
          company: 'BIATA COMPANIES - Lagos, Nigeria',
          period: '2018 - 2022',
          bullets: [
            'Gestion des opérations et supervision d\'équipes pluridisciplinaires',
            'Supervision des services de support technique et des workflows opérationnels',
            'Coordination de la gestion des équipements et de la logistique',
          ],
        },
        {
          role: 'Chef d\'Équipe',
          company: 'BIATA Ayo Ventures - Lagos, Nigeria',
          period: '2016 - 2019',
          bullets: [
            'Gestion des opérations de support technique et des équipements',
            'Supervision des équipes opérationnelles et de l\'exécution des workflows',
            'Maintien de standards opérationnels élevés et satisfaction client',
          ],
        },
        {
          role: 'Chef d\'Entreprise',
          company: 'Maggy-nificent Enterprise',
          period: '2020 - Présent',
          bullets: [
            'Gestion des opérations commerciales, de la logistique et des activités financières',
            'Supervision de la comptabilité, des paiements et de la coordination fournisseurs',
            'Prise de décisions opérationnelles et administration de l\'entreprise',
          ],
        },
      ],

      educationItems: [
        {
          title: 'Développeur Full Stack - Titre Professionnel Niveau 5 (BAC+2)',
          institution: 'GRETA-CFA Aquitaine - Bayonne, France',
          year: '2023 - 2024',
        },
        {
          title: 'Développement Back-End',
          institution: 'Nucamp Coding Bootcamp - USA (À distance)',
          year: '2022',
        },
        {
          title: 'Baccalauréat Scientifique',
          institution: 'Lycée Emmaüs - Lomé, Togo',
          year: '2016',
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
          name: 'Application Flutter',
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
        cmsMobile: ['WordPress', 'Prismic CMS', 'CMS Headless', 'Flutter', 'Dart'],
      },

      docTitle: 'Divine Osuu - Développeur Full Stack CV',
    },
  },
} as const;
