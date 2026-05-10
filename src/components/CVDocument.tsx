'use client';

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Svg, Path, Image } from '@react-pdf/renderer';

// Register Inter font (local TTF files)
Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/ttf/Inter-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/ttf/Inter-Medium.ttf', fontWeight: 500 },
    { src: '/fonts/ttf/Inter-Bold.ttf', fontWeight: 700 },
    { src: '/fonts/ttf/Inter-Italic.ttf', fontWeight: 400, fontStyle: 'italic' },
  ],
});

// Disable hyphenation for cleaner text
Font.registerHyphenationCallback((word) => [word]);

const C = {
  primary: '#1a3b42',
  accent: '#28555e',
  gold: '#D4AF37',
  text: '#1a202c',
  textSecondary: '#374151',
  textMuted: '#6b7280',
  border: '#cbd5e1',
  borderLight: '#e2e8f0',
  white: '#ffffff',
  bgSubtle: '#f1f5f9',
};

// Reusable SVG icon component
const Icon = ({ d, size = 10, color = C.accent }: { d: string; size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// SVG icon paths (Lucide-compatible)
const I = {
  mapPin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z M22 6l-10 7L2 6',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z M2 9h4v12H2Z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  github: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4 M9 18c-4.51 2-5-2-7-2',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z',
};

// Styles
const s = StyleSheet.create({
  page: {
    padding: 0,
    fontFamily: 'Inter',
    color: C.text,
    backgroundColor: C.white,
  },

  // Fixed top spacer for page 2+
  page2TopSpacer: {
    height: 30,
  },

  // Header band
  headerBand: {
    backgroundColor: C.primary,
    paddingHorizontal: 40,
    paddingTop: 28,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  profileImageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2.5,
    borderColor: C.gold,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 64,
    height: 64,
    objectFit: 'cover',
  },
  headerContent: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    color: C.white,
    letterSpacing: 0.3,
  },
  roleText: {
    fontSize: 11,
    fontWeight: 500,
    color: C.gold,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  contactLabel: {
    fontSize: 8.5,
    color: 'rgba(255,255,255,0.9)',
  },

  // Body
  body: {
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 50,
  },
  pageBreakSpacer: {
    height: 20,
  },

  // Section header
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 10,
    gap: 6,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: C.borderLight,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: 700,
    color: C.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },

  summary: {
    fontSize: 9.5,
    lineHeight: 1.7,
    color: C.textSecondary,
  },

  // Experience items
  expItem: {
    marginBottom: 14,
  },
  expTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 1,
  },
  expTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: C.primary,
  },
  expDate: {
    fontSize: 8.5,
    fontWeight: 700,
    color: C.gold,
  },
  expCompany: {
    fontSize: 9.5,
    fontWeight: 500,
    color: C.accent,
    marginBottom: 5,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2.5,
    paddingLeft: 2,
  },
  bulletDot: {
    width: 12,
    fontSize: 9,
    color: C.gold,
    marginTop: 0.5,
  },
  bulletContent: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.5,
    color: C.textSecondary,
  },

  // Skills grid
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 6,
  },
  skillCatLabel: {
    fontSize: 9,
    fontWeight: 700,
    color: C.primary,
    marginBottom: 4,
  },
  skillTag: {
    fontSize: 8,
    color: C.primary,
    backgroundColor: C.bgSubtle,
    borderWidth: 0.5,
    borderColor: C.borderLight,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
  },

  // Education / two-column bottom
  twoCol: {
    flexDirection: 'row',
    gap: 24,
  },
  colHalf: {
    flex: 1,
  },
  eduItem: {
    marginBottom: 7,
  },
  eduTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: C.primary,
  },
  eduInstitution: {
    fontSize: 8.5,
    color: C.accent,
  },
  eduYear: {
    fontSize: 8,
    color: C.textMuted,
  },

  // Projects
  projectRow: {
    marginBottom: 6,
  },
  projectName: {
    fontSize: 9.5,
    fontWeight: 700,
    color: C.primary,
  },
  projectUrl: {
    fontSize: 8,
    color: C.gold,
  },
  projectDesc: {
    fontSize: 8.5,
    color: C.textSecondary,
    lineHeight: 1.45,
  },

  // Languages
  langRow: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 3,
  },
  langItem: {
    fontSize: 9,
    fontWeight: 500,
    color: C.text,
  },
  langLevel: {
    fontSize: 8,
    color: C.textMuted,
  },

  // Page 2 mini header
  page2Header: {
    backgroundColor: C.primary,
    paddingHorizontal: 40,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  page2Name: {
    fontSize: 14,
    fontWeight: 700,
    color: C.white,
  },
  page2Role: {
    fontSize: 9,
    fontWeight: 500,
    color: C.gold,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 15,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderTopColor: C.borderLight,
    paddingTop: 6,
  },
  footerText: {
    fontSize: 7.5,
    color: C.textMuted,
  },
});

const Section = ({ title }: { title: string }) => (
  <View style={s.sectionHeader}>
    <Text style={s.sectionTitle}>{title}</Text>
    <View style={s.sectionLine} />
  </View>
);

const Bullet = ({ text }: { text: string }) => (
  <View style={s.bulletRow}>
    <Text style={s.bulletDot}>{'\u203A'}</Text>
    <Text style={s.bulletContent}>{text}</Text>
  </View>
);

// Skills category component
const SkillGroup = ({ label, skills }: { label: string; skills: string[] }) => (
  <View style={{ marginBottom: 6 }}>
    <Text style={s.skillCatLabel}>{label}</Text>
    <View style={s.skillsRow}>
      {skills.map((skill, i) => (
        <Text key={i} style={s.skillTag}>{skill}</Text>
      ))}
    </View>
  </View>
);

// Document
const CVDocument = () => (
  <Document
  >
    <Page size="A4" style={s.page}>
      {/* Top spacer - only visible on page 2+ to add breathing room */}
      <View fixed render={({ pageNumber }) =>
        pageNumber > 1 ? (
          <View style={s.page2TopSpacer} />
        ) : null
      }
      />

      {/* Footer - only visible on page 2+ */}
      {/* <View fixed render={({ pageNumber }) =>
        pageNumber > 1 ? (
          <View style={s.footer}>
            <Text style={s.footerText}>
              Divine Osuu - Full Stack Developer
            </Text>
          </View>
        ) : null
      }
      />

      {/* Main Header Band - page 1 only */}
      <View style={s.headerBand}>
        <View style={s.profileImageContainer}>
          <Image src="/profile-img-removebg.png" style={s.profileImage} />
        </View>
        <View style={s.headerContent}>
          <View style={s.nameRow}>
            <Text style={s.name}>Divine Osuu</Text>
            <Text style={s.roleText}>Full Stack Developer</Text>
          </View>

          <View style={s.contactRow}>
            <View style={s.contactItem}>
              <Icon d={I.mapPin} size={9} color={C.gold} />
              <Text style={s.contactLabel}>France</Text>
            </View>
            <View style={s.contactItem}>
              <Icon d={I.mail} size={9} color={C.gold} />
              <Text style={s.contactLabel}>divineosuuweb@gmail.com</Text>
            </View>
            <View style={s.contactItem}>
              <Icon d={I.phone} size={9} color={C.gold} />
              <Text style={s.contactLabel}>+33 (0)7 49 65 06 96</Text>
            </View>
            <View style={s.contactItem}>
              <Icon d={I.linkedin} size={9} color={C.gold} />
              <Text style={s.contactLabel}>linkedin.com/in/divine-osuu-36a3a0301</Text>
            </View>
            <View style={s.contactItem}>
              <Icon d={I.github} size={9} color={C.gold} />
              <Text style={s.contactLabel}>github.com/Div-divine</Text>
            </View>
          </View>
        </View>
      </View>

      {/* All content in a single flowing body */}
      <View style={s.body}>
        {/* Profile */}
        <Section title="Professional Profile" />
        <Text style={s.summary}>
          Full stack developer with professional software development experience and strong production experience across backend systems, frontend architecture, authentication, APIs, and deployment workflows. Expert in designing scalable applications using Symfony, Node.js, Next.js, and PostgreSQL. Comfortable working across the complete software lifecycle including architecture, security, and production maintenance. Brings several years of leadership and business responsibility from entrepreneurship roles, strengthening problem-solving and decision-making abilities. Currently expanding into cross-platform mobile development with Flutter.
        </Text>

        {/* Experience */}
        <Section title="Professional Experience" />

        <View style={s.expItem}>
          <View style={s.expTopRow}>
            <Text style={s.expTitle}>Full Stack Developer</Text>
            <Text style={s.expDate}>July 2024 - Present</Text>
          </View>
          <Text style={s.expCompany}>IF Technologies - France</Text>
          <Bullet text="Develop and maintain production-grade full stack applications using Symfony, Vue.js, PostgreSQL, Node.js, and Tailwind CSS" />
          <Bullet text="Design backend systems including APIs, authentication flows, and database architecture" />
          <Bullet text="Implement authentication systems using JWT, RBAC, and LemonLDAP::NG" />
          <Bullet text="Create and maintain API documentation using Swagger, Nelmio, and GitBook" />
          <Bullet text="Participate in architecture discussions, technical planning, and feature roadmap decisions" />
          <Bullet text="Work directly with clients to analyze requirements and define technical solutions" />
        </View>

        <View style={s.expItem}>
          <View style={s.expTopRow}>
            <Text style={s.expTitle}>Web Developer Intern</Text>
            <Text style={s.expDate}>April - June 2024</Text>
          </View>
          <Text style={s.expCompany}>PIC DIGITAL - Bidart, France</Text>
          <Bullet text="Developed frontend and backend tasks using Next.js and Express.js" />
          <Bullet text="Implemented unit testing and CI/CD integration for robust production deployment" />
          <Bullet text="Contributed to responsive UI implementation and frontend improvements" />
          <Bullet text="Participated in hosting configuration and deployment tasks" />
        </View>

        <View style={s.expItem}>
          <View style={s.expTopRow}>
            <Text style={s.expTitle}>Freelance Full Stack Developer</Text>
            <Text style={s.expDate}>2022 - Present</Text>
          </View>
          <Text style={s.expCompany}>Remote - France</Text>
          <Bullet text="Marion Poizeau Website: Initially developed with WordPress (2022); fully rebuilt using Next.js in April 2026 for production scalability" />
          <Bullet text="Timeo Coaching Platform: Designed and developed a full stack coaching platform using Next.js, Prismic CMS, GSAP, and Vercel" />
          <Bullet text="Provide ongoing maintenance, security updates, and performance optimization for both platforms" />
          <Bullet text="Managed deployment workflows, SEO optimization, and production updates" />
        </View>

        {/* Core Technical Skills */}
        <Section title="Core Technical Skills" />
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <View style={{ flex: 1 }}>
            <SkillGroup label="Backend & Auth" skills={['Symfony (PHP)', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth2', 'RBAC', 'SSO', 'LemonLDAP::NG']} />
            <SkillGroup label="Databases & DevOps" skills={['PostgreSQL', 'MySQL', 'Docker', 'Git', 'Vercel', 'AWS (EC2, S3)', 'CI/CD']} />
            <SkillGroup label="Documentation" skills={['Swagger / OpenAPI', 'Nelmio API Doc', 'GitBook']} />
          </View>
          <View style={{ flex: 1 }}>
            <SkillGroup label="Frontend & UI" skills={['Next.js', 'React', 'Vue.js', 'Tailwind CSS', 'PrimeVue', 'PrimeFlex', 'GSAP', 'Responsive Design']} />
            <SkillGroup label="CMS & Mobile" skills={['WordPress', 'Prismic CMS', 'Headless CMS', 'Flutter', 'Dart']} />
          </View>
        </View>

        {/* Leadership & Business - starts on page 2 */}
        <View break>
          <Section title="Leadership & Business" />
        </View>

        <View style={s.expItem}>
          <View style={s.expTopRow}>
            <Text style={s.expTitle}>Manager</Text>
            <Text style={s.expDate}>2018 - 2022</Text>
          </View>
          <Text style={s.expCompany}>BIATA COMPANIES - Lagos, Nigeria</Text>
          <Bullet text="Managed company operations and supervised multidisciplinary teams" />
          <Bullet text="Oversaw technical support services and operational workflows" />
          <Bullet text="Coordinated equipment management and logistics" />
        </View>

        <View style={s.expItem}>
          <View style={s.expTopRow}>
            <Text style={s.expTitle}>Team Leader</Text>
            <Text style={s.expDate}>2016 - 2019</Text>
          </View>
          <Text style={s.expCompany}>BIATA Ayo Ventures - Lagos, Nigeria</Text>
          <Bullet text="Managed technical support operations and company equipment" />
          <Bullet text="Supervised operational teams and workflow execution" />
          <Bullet text="Maintained high operational standards and client satisfaction" />
        </View>

        <View style={s.expItem}>
          <View style={s.expTopRow}>
            <Text style={s.expTitle}>Business Owner</Text>
            <Text style={s.expDate}>2020 - Present</Text>
          </View>
          <Text style={s.expCompany}>Maggy-nificent Enterprise</Text>
          <Bullet text="Managed business operations, logistics, and financial activities" />
          <Bullet text="Oversaw accounting, payments, and supplier coordination" />
          <Bullet text="Handled operational decision-making and business administration" />
        </View>

        {/* Education & Projects side-by-side */}
        <View style={s.twoCol}>
          <View style={s.colHalf}>
            <Section title="Education" />
            <View style={s.eduItem}>
              <Text style={s.eduTitle}>Full Stack Developer - Level 5 Technical Professional (BAC+2)</Text>
              <Text style={s.eduInstitution}>GRETA-CFA Aquitaine - Bayonne, France</Text>
              <Text style={s.eduYear}>2023 - 2024</Text>
            </View>
            <View style={s.eduItem}>
              <Text style={s.eduTitle}>Back-End Development</Text>
              <Text style={s.eduInstitution}>Nucamp Coding Bootcamp - USA (Remote)</Text>
              <Text style={s.eduYear}>2022</Text>
            </View>
            <View style={s.eduItem}>
              <Text style={s.eduTitle}>Scientific Baccalaureate</Text>
              <Text style={s.eduInstitution}>Emmaüs High School - Lomé, Togo</Text>
              <Text style={s.eduYear}>2016</Text>
            </View>

            <Section title="Languages" />
            <View style={s.langRow}>
              <View>
                <Text style={s.langItem}>English</Text>
                <Text style={s.langLevel}>Professional</Text>
              </View>
              <View>
                <Text style={s.langItem}>French</Text>
                <Text style={s.langLevel}>Professional</Text>
              </View>
              <View>
                <Text style={s.langItem}>Igbo</Text>
                <Text style={s.langLevel}>Native</Text>
              </View>
            </View>
          </View>

          <View style={s.colHalf}>
            <Section title="Featured Professional Projects" />
            <View style={s.projectRow}>
              <Text style={s.projectName}>Marion Poizeau Website</Text>
              <Text style={s.projectUrl}>marionpoizeau.com</Text>
              <Text style={s.projectDesc}>Full Next.js rebuild with ongoing maintenance and SEO optimization.</Text>
            </View>
            <View style={s.projectRow}>
              <Text style={s.projectName}>Timeo Coaching Platform</Text>
              <Text style={s.projectUrl}>timeocoaching.com</Text>
              <Text style={s.projectDesc}>Full stack platform with Prismic CMS, GSAP animations, and Vercel deployment.</Text>
            </View>
            <View style={s.projectRow}>
              <Text style={s.projectName}>Private Flutter Application</Text>
              <Text style={s.projectDesc}>Cross-platform mobile app - architecture, API integration, and state management.</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CVDocument;

