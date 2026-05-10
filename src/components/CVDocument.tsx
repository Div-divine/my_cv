'use client';

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Svg, Path, Image } from '@react-pdf/renderer';
import { translations, Lang } from '@/translations';

Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/ttf/Inter-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/ttf/Inter-Medium.ttf', fontWeight: 500 },
    { src: '/fonts/ttf/Inter-Bold.ttf', fontWeight: 700 },
    { src: '/fonts/ttf/Inter-Italic.ttf', fontWeight: 400, fontStyle: 'italic' },
  ],
});

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

const Icon = ({ d, size = 10, color = C.accent }: { d: string; size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const I = {
  mapPin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z M22 6l-10 7L2 6',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z M2 9h4v12H2Z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  github: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4 M9 18c-4.51 2-5-2-7-2',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z',
};

const s = StyleSheet.create({
  page: {
    padding: 0,
    fontFamily: 'Inter',
    color: C.text,
    backgroundColor: C.white,
  },
  page2TopSpacer: {
    height: 30,
  },
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: C.primary,
  },

  profileImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
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
  body: {
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 50,
  },
  pageBreakSpacer: {
    height: 20,
  },
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

const SkillGroup = ({
  label,
  skills,
}: {
  label: string;
  skills: readonly string[];
}) => (
  <View style={{ marginBottom: 6 }}>
    <Text style={s.skillCatLabel}>{label}</Text>

    <View style={s.skillsRow}>
      {skills.map((skill, i) => (
        <Text key={i} style={s.skillTag}>
          {skill}
        </Text>
      ))}
    </View>
  </View>
);

const CVDocument = ({ lang = 'en' }: { lang?: Lang }) => {
  const t = translations[lang].pdf;

  return (
    <Document
      author="Divine Osuu"
      title={t.docTitle}
      subject="Professional CV"
      creator="Divine Osuu"
      producer="Divine Osuu"
    >
      <Page size="A4" style={s.page}>
        <View fixed render={({ pageNumber }) =>
          pageNumber > 1 ? (
            <View style={s.page2TopSpacer} />
          ) : null
        }
        />

        <View style={s.headerBand}>
          <View style={s.profileImageContainer}>
            <Image src="/profile-img-removebg.png" style={s.profileImage} />
          </View>
          <View style={s.headerContent}>
            <View style={s.nameRow}>
              <Text style={s.name}>Divine Osuu</Text>
              <Text style={s.roleText}>{t.role}</Text>
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

        <View style={s.body}>
          <Section title={t.profileTitle} />
          <Text style={s.summary}>{t.profileSummary}</Text>

          <Section title={t.experienceTitle} />
          {t.jobs.map((job, idx) => (
            <View key={idx} style={s.expItem}>
              <View style={s.expTopRow}>
                <Text style={s.expTitle}>{job.role}</Text>
                <Text style={s.expDate}>{job.period}</Text>
              </View>
              <Text style={s.expCompany}>{job.company}</Text>
              {job.bullets.map((b, bi) => (
                <Bullet key={bi} text={b} />
              ))}
            </View>
          ))}

          <View break>
            <Section title={t.skillsTitle} />
          </View>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View style={{ flex: 1 }}>
              <SkillGroup label={t.skillCategories.backendAuth} skills={t.skillItems.backendAuth} />
              <SkillGroup label={t.skillCategories.databasesDevops} skills={t.skillItems.databasesDevops} />
              <SkillGroup label={t.skillCategories.documentation} skills={t.skillItems.documentation} />
            </View>
            <View style={{ flex: 1 }}>
              <SkillGroup label={t.skillCategories.frontendUi} skills={t.skillItems.frontendUi} />
              <SkillGroup label={t.skillCategories.cmsMobile} skills={t.skillItems.cmsMobile} />
            </View>
          </View>

          <Section title={t.leadershipTitle} />

          {t.leadershipRoles.map((role, idx) => (
            <View key={idx} style={s.expItem}>
              <View style={s.expTopRow}>
                <Text style={s.expTitle}>{role.role}</Text>
                <Text style={s.expDate}>{role.period}</Text>
              </View>
              <Text style={s.expCompany}>{role.company}</Text>
              {role.bullets.map((b, bi) => (
                <Bullet key={bi} text={b} />
              ))}
            </View>
          ))}

          <View style={s.twoCol}>
            <View style={s.colHalf}>
              <Section title={t.educationTitle} />
              {t.educationItems.map((edu, idx) => (
                <View key={idx} style={s.eduItem}>
                  <Text style={s.eduTitle}>{edu.title}</Text>
                  <Text style={s.eduInstitution}>{edu.institution}</Text>
                  <Text style={s.eduYear}>{edu.year}</Text>
                </View>
              ))}

              <Section title={t.languagesTitle} />
              <View style={s.langRow}>
                {t.languages.map((lang, idx) => (
                  <View key={idx}>
                    <Text style={s.langItem}>{lang.name}</Text>
                    <Text style={s.langLevel}>{lang.level}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={s.colHalf}>
              <Section title={t.projectsTitle} />
              {t.projectItems.map((proj, idx) => (
                <View key={idx} style={s.projectRow}>
                  <Text style={s.projectName}>{proj.name}</Text>
                  {proj.url ? <Text style={s.projectUrl}>{proj.url}</Text> : null}
                  <Text style={s.projectDesc}>{proj.desc}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CVDocument;
