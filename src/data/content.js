/**
 * NON PROJECT — site content / "editorial data"
 * -------------------------------------------------
 * Every section of the site is driven by the objects below. This is the
 * project's real content (bio, skills, activities, builds, contacts) — edit
 * the English source in `base` and the manga-magazine layout updates
 * everywhere.
 *
 * i18n: the exported objects/arrays are REACTIVE. When the language switch
 * (`src/i18n.js`) changes, the Thai / English overlays in
 * `src/data/content.i18n.js` are merged onto `base` and the exports update
 * in place, so components keep importing `{ profile, projects, … }` as before.
 * Top-level, non-reactive derivations of these (e.g. `experience[0]` captured
 * once in a component's setup) must be wrapped in `computed`.
 *
 * NOTE: the per-skill stack labels (e.g. "MySQL", "Docker") are inferred from
 * the tech stacks listed on the projects. Adjust `skills[].stack` freely.
 */
import { reactive, watchEffect } from 'vue'
import { lang } from '@/i18n'
import { en as enOverlay, th as thOverlay } from './content.i18n'

/* ------------------------------------------------------------------ *
 * English source of truth
 * ------------------------------------------------------------------ */
const base = {
  profile: {
    name: 'Thaninpong Panthawong',
    nickname: 'Non',
    nameJp: 'ノン',
    fullJp: 'ノン・プロジェクト',
    birthDate: 'January 29, 2003',
    role: 'Front-End · Back-End · Full-Stack',
    title: 'Full-Stack Web Developer',
    location: 'Jatujak · Phaholyothin, Bangkok',
    university: "King Mongkut's University of Technology Thonburi",
    universityShort: 'KMUTT',
    faculty: 'School of Information Technology (IT)',
    year: 'B.Sc. Information Technology · KMUTT · 2021–2025',
    gpax: '3.48',
    school: 'Sukhondheerawidh School (Science–Math, GPAX 3.90)',
    portrait: '/images/non-portrait.jpg',
    cover: '/images/D3-Pan-481.jpg',
    cartoon: '/images/cartoonPic.png',
    tagline: 'Transforming ideas into functional websites.',
    subTagline:
      'Full-stack web developer with a passion for creating engaging user experiences.',
    summary:
      'An aspiring software developer with a strong interest in coding, looking for a role to apply my skills in building efficient back-end systems and contribute to a dynamic team.',
    bio: [
      'Hello, my name is Thaninpong Panthawong, but you can call me Non. I currently live in the Jatujak area of Bangkok, near Phaholyothin. I completed my entire schooling journey at Sukhondheerawidh School, from primary to high school. In my free time, I enjoy engaging with various activities and I love reading articles to keep myself updated with the latest trends and developments in the IT field.',
      "I have completed my bachelor's degree in Information Technology at King Mongkut's University of Technology Thonburi. Ever since I was in high school, I developed a passion for coding — the idea of constantly learning and exploring new technologies greatly appeals to me.",
    ],
  },

  contact: {
    email: 'nonthaninpong@gmail.com',
    phone: '099-145-0959',
    address: 'Jatujak, Phaholyothin, Bangkok',
    resume: '/resume/Thaninpong_Resume.pdf',
    linktree: {
      label: 'linktr.ee/nonybueno',
      url: 'https://linktr.ee/nonybueno',
    },
    github: {
      label: 'github.com/nonybueno',
      url: 'https://github.com/nonybueno',
    },
  },

  socials: [
    {
      label: 'Facebook',
      handle: 'lnw.non.1',
      url: 'https://www.facebook.com/lnw.non.1',
      icon: '/images/facebook.png',
    },
    {
      label: 'Instagram',
      handle: 'nonchyy_',
      url: 'https://www.instagram.com/nonchyy_/',
      icon: '/images/ig.png',
    },
    {
      label: 'GitHub',
      handle: 'nonybueno',
      url: 'https://github.com/nonybueno',
      icon: '/images/github.png',
    },
    {
      label: 'Email',
      handle: 'nonthaninpong@gmail.com',
      url: 'mailto:nonthaninpong@gmail.com',
      icon: '/images/email.png',
    },
  ],

  /** Primary route navigation (pages) */
  pageNav: [
    { label: 'Home', labelJp: 'ホーム', to: '/' },
    { label: 'About', labelJp: '人物', to: '/about' },
    {
      label: 'Experience',
      labelJp: '職務経歴',
      to: { path: '/', hash: '#experience' },
    },
    { label: 'Resume', labelJp: '履歴書', to: '/resume' },
    { label: 'Contact', labelJp: '連絡', to: '/contact' },
  ],

  /** Secondary "category bar" — on-page sections of the home magazine */
  sectionNav: [
    { label: 'Experience', labelJp: '職務経歴', hash: '#experience' },
    { label: 'Hackathons', labelJp: 'ハッカソン', hash: '#hackathons' },
    { label: 'Pick Up', labelJp: 'ピックアップ', hash: '#pickup' },
    { label: "Today's Updates", labelJp: '本日の更新', hash: '#updates' },
    { label: 'Ranking', labelJp: 'ランキング', hash: '#ranking' },
    { label: 'Articles & Videos', labelJp: '記事・動画', hash: '#articles' },
    { label: 'Recommended', labelJp: 'おすすめ', hash: '#recommended' },
    { label: 'Magazine', labelJp: 'マガジン', hash: '#magazine' },
  ],

  /** Builds — presented as "manga titles / comic volumes" */
  projects: [
    {
      id: 'sit-announcement',
      volume: 'VOL.03',
      rank: 1,
      date: '2022-11-01',
      title: 'SIT-Announcement System',
      titleJp: 'お知らせ',
      category: 'Full-Stack',
      year: '2022',
      course: 'INT221 — Integrated Projects I',
      role: 'Front-End & Back-End Team',
      tags: ['Vue.js', 'Spring Boot', 'Java', 'Tailwind'],
      summary:
        'A university-wide announcement platform where staff publish posts and every student can read the latest news from the school.',
      cover: '/images/B_N_W-3.png',
      coverFit: 'contain',
      wide: '/images/bnw.jpg',
      mobile: '/images/bnwMob.png',
      links: [
        {
          label: 'Website',
          url: 'http://intproj22.sit.kmutt.ac.th/ssa2/announcement',
        },
        { label: 'GitHub', url: 'https://github.com/nonybueno/PROJECT-BNW' },
      ],
    },
    {
      id: 'word-typing-test',
      volume: 'VOL.01',
      rank: 2,
      date: '2022-03-01',
      title: 'Word Typing Test',
      titleJp: 'タイピング',
      category: 'Client-Side',
      year: '2022',
      course: 'INT203 — Client-Side Development',
      role: 'Group Project',
      tags: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
      summary:
        "A typing-speed test site that measures a user's words-per-minute, accuracy and completion time in real time.",
      cover: '/images/alumili-1.png',
      coverFit: 'contain',
      wide: '/images/al-1.jpg',
      mobile: '/images/alMob.png',
      links: [
        {
          label: 'Website',
          url: 'https://clinquant-bienenstitch-fe9c36.netlify.app/',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/Nine0512/PROJECT1-SEC-2-Alumilize',
        },
      ],
    },
    {
      id: 'ebook-bookstore',
      volume: 'VOL.02',
      rank: 3,
      date: '2022-05-01',
      title: 'E-Book Online Bookstore',
      titleJp: '電子書店',
      category: 'Client-Side',
      year: '2022',
      course: 'INT203 — Client-Side Development',
      role: 'Group Project',
      tags: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
      summary:
        'A one-stop online bookstore with product ordering and user authentication built for a smooth, safe shopping flow.',
      cover: '/images/alumili-2.png',
      coverFit: 'contain',
      wide: '/images/al-b.jpg',
      mobile: '/images/al2Mob.png',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/Nine0512/PROJECT2-SEC-2-Alumilize',
        },
      ],
    },
    {
      id: 'bus-ticket-booking',
      volume: 'VOL.00',
      rank: 4,
      date: '2021-11-01',
      title: 'Bus Ticket Booking System',
      titleJp: 'バス予約',
      category: 'UX / UI Design',
      year: '2021',
      course: 'INT104 — User Experience Design',
      role: 'UX / UI Designer',
      tags: ['Figma', 'Prototyping'],
      summary:
        'A mobile app concept that tracks buses in real time and calculates fares based on the distance a rider travels.',
      cover: '/images/buz.jpg',
      coverFit: 'cover',
      wide: '/images/bus.jpg',
      mobile: '/images/busMob.png',
      links: [
        {
          label: 'Prototype',
          url: 'https://www.figma.com/proto/M35yOfYD32UABPsZNHPNFN/Untitled?node-id=1-4&starting-point-node-id=1%3A4&mode=design',
        },
        {
          label: 'Figma',
          url: 'https://www.figma.com/file/M35yOfYD32UABPsZNHPNFN/Untitled?type=design&node-id=0%3A1&mode=design',
        },
      ],
    },
  ],

  /** Camps & staff work — presented as "articles & videos" */
  activities: [
    {
      id: 'it29-starter-pack',
      kind: 'Article',
      date: '2023-06-01',
      title: 'IT#29 Starter Pack',
      titleJp: 'スターターパック',
      role: 'Academic Staff & Content Creator',
      cover: '/images/D1-202.jpg',
      logo: '/images/start.png',
      gallery: [
        '/images/D3-Pan-149.jpg',
        '/images/D3-Pan-162.jpg',
        '/images/D3-Pan-171.jpg',
      ],
      channels: [
        { label: 'IG', handle: 'sit.it.starterpack' },
        { label: 'Facebook', handle: 'IT#29 Starter Pack' },
      ],
      points: [
        "Served as both academic staff and content creator for the camp's teaching program.",
        'Controlled teaching content, supervised staff instruction, and supported staff and learners in the classroom.',
        'As content creator, reviewed the HTML & CSS lesson material and the post-test used after the camp.',
      ],
    },
    {
      id: 'sit-helloworld',
      kind: 'Article',
      date: '2023-01-15',
      title: 'SIT HelloWorld — #WORLD FENNEC',
      titleJp: 'ハローワールド',
      role: 'Learning Materials & Support',
      cover: '/images/pic11.jpg',
      logo: '/images/f1.png',
      gallery: [
        '/images/IMG_3878.jpg',
        '/images/IMG_3885.jpg',
        '/images/IMG_3889.jpg',
      ],
      channels: [
        { label: 'IG', handle: 'sithelloworld' },
        { label: 'Facebook', handle: 'SIT HelloWorld' },
      ],
      points: [
        'Managed learning materials and helped procure the equipment the camp needed.',
        'Checked the camp computers for problems and kept them maintained.',
        'Acted as a support person across operations, running the tutorial-day notifications.',
      ],
    },
  ],

  /** Work history — presented as an "experience ranking" */
  experience: [
    {
      rank: 1,
      company: 'Accenture',
      role: 'Back-End Developer',
      period: 'Feb 2026 — Current',
      current: true,
      logo: '/images/company/accenture.webp',
      tags: ['Kotlin', 'Spring Boot'],
      points: [
        'Working on the BizOne project at TTB, a system built with Kotlin and Spring Boot.',
        'Built a Kotlin encryption library that secures sensitive data at rest with symmetric and asymmetric encryption.',
      ],
    },
    {
      rank: 2,
      company: 'CT (assigned by AIS)',
      role: 'Back-End Developer',
      period: 'Jun 2025 — Jan 2026',
      logo: '/images/company/ais.jpg',
      tags: ['Java', 'Spring Boot'],
      points: [
        'Developed and optimised API endpoints using Java and Spring Boot.',
        'Enhanced and maintained backend components while keeping code quality, security and performance in check.',
      ],
    },
    {
      rank: 3,
      company: 'Siam Commercial Bank',
      role: 'Back-End Developer',
      period: 'Jan — May 2025 · Part-time',
      logo: '/images/company/scb.png',
      tags: ['Java', 'Spring Boot', 'JUnit', 'Mockito'],
      points: [
        'Developed and optimised API endpoints for international money transfers using Java and Spring Boot.',
        'Wrote unit tests with the JUnit and Mockito frameworks.',
      ],
    },
    {
      rank: 4,
      company: 'Ifrasoft',
      role: 'Software Developer',
      period: 'Jul–Aug 2024 · Mar–Jun 2025 · Contract',
      logo: '/images/company/ifrasoft.jpg',
      tags: ['Full-Stack'],
      points: [
        'Built a system for tracking employee check-ins and check-outs and calculating daily earnings, working hours and total work time.',
      ],
    },
    {
      rank: 5,
      company: 'The Brooker Group PCL',
      role: 'Front-End Developer',
      period: 'Jan — Jun 2024 · Internship',
      logo: '/images/company/brooker.png',
      tags: ['Vue.js', 'Go', 'Cypress'],
      points: [
        'Worked on the front-end with Vue.js and the back-end with Go, testing with Cypress, focused on AI-based image processing for data analysis.',
      ],
    },
  ],

  /** Hackathons — replaces the old "Latest Comics" section */
  hackathons: [
    {
      name: 'Hackcenture',
      org: 'SCB × n8n · 2026',
      result: 'Finalist',
      year: '2026',
      banner: '/images/hackathons/hackcenture-banner.jpg',
      certificate: true,
      stack: ['AI Agent', 'n8n', 'Google ADK'],
      points: [
        'Automated customer data verification with AI agents to improve speed and accuracy.',
        'Designed systems that reduce manual workload for clients through process automation and streamlined operations.',
      ],
    },
    {
      name: 'AI-powered Agentic SDLC Pipeline',
      org: 'AABG Hackathon FY26 · Accenture × AWS',
      result: 'Participant',
      year: '2026',
      banner: '/images/hackathons/aabg-banner.jpg',
      certificate: true,
      certImage: '/images/cert-aabg.png',
      stack: [
        'AWS Lambda',
        'Amazon Bedrock · Claude Sonnet',
        'API Gateway',
        'DynamoDB',
        'S3',
        'SNS',
        'CodeBuild',
        'ECR',
        'App Runner',
      ],
      points: [
        'Built and deployed a multi-agent serverless pipeline on AWS that automates the full software development lifecycle — from meeting transcript to deployed code.',
        'AI agents extract Jira tasks from standup transcripts, generate production-ready code, and open GitHub Pull Requests, with three human approval gates keeping oversight of the AI-generated output.',
      ],
    },
  ],

  /** Skillset — presented as "recommended reading / series" */
  skills: [
    {
      id: 'front-end',
      title: 'Front-End',
      titleJp: 'フロントエンド',
      series: 'SERIES 01',
      blurb:
        'Responsive, component-driven interfaces with Vue and the Nuxt / Next ecosystems.',
      stack: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Vue.js',
        'Nuxt.js',
        'Next.js',
      ],
      logos: [
        '/images/image_18.png',
        '/images/image_19.png',
        '/images/image_20.png',
        '/images/image_21.png',
      ],
    },
    {
      id: 'back-end',
      title: 'Back-End',
      titleJp: 'バックエンド',
      series: 'SERIES 02',
      blurb:
        'RESTful APIs and services in Java, Kotlin and Go — with JUnit, Mockito and Cypress tests.',
      stack: ['Java', 'Kotlin', 'Spring Boot', 'Go', 'Gin', 'JUnit', 'Mockito'],
      logos: ['/images/image_22.png', '/images/image_23.png'],
    },
    {
      id: 'database',
      title: 'Database',
      titleJp: 'データベース',
      series: 'SERIES 03',
      blurb: 'Relational and document data modelling for production web apps.',
      stack: ['MySQL', 'MongoDB', 'SQL Server', 'DBeaver'],
      logos: ['/images/image_28.png', '/images/oracle.png'],
    },
    {
      id: 'devops',
      title: 'DevOps',
      titleJp: '開発運用',
      series: 'SERIES 04',
      blurb:
        'Containerised builds and CI pipelines with Docker and GitHub Actions.',
      stack: ['GitHub Actions', 'Docker', 'CLI', 'Swagger'],
      logos: ['/images/image_25.png', '/images/image_26.png'],
    },
  ],

  /** The "About / CV" content, framed as a magazine issue */
  magazine: {
    issue: 'ISSUE 04',
    price: 'FREE',
    period: '2021 → 2026',
    masthead: 'NON PROJECT MAGAZINE',
    feature: 'THANINPONG "NON" PANTHAWONG',
    cover: '/images/D3-Pan-481.jpg',
    portrait: '/images/non-portrait.jpg',
    excerpt:
      'From a high-school coder in Nakhon Pathom to a back-end developer at Accenture — a short read on the person behind the projects.',
    headlines: [
      'Five companies, backend from day one',
      'Inside the IT#29 Starter Pack classroom',
      'Why I keep chasing new technology',
    ],
    facts: [
      {
        label: 'Study At',
        value: "King Mongkut's University of Technology Thonburi",
      },
      { label: 'Faculty', value: 'School of Information Technology · GPAX 3.48' },
      { label: 'Now At', value: 'Accenture — Back-End Developer' },
      { label: 'Live In', value: 'Jatujak, Bangkok' },
    ],
  },
}

/* ------------------------------------------------------------------ *
 * Overlay merge helpers
 * ------------------------------------------------------------------ */
function isPlainObject(v) {
  return v != null && typeof v === 'object' && !Array.isArray(v)
}

/** Merge `over` onto `bse`. Arrays merge item-by-item, by index. */
function merge(bse, over) {
  if (over === undefined) return clone(bse)
  if (Array.isArray(bse)) {
    return bse.map((item, i) => merge(item, over && over[i]))
  }
  if (isPlainObject(bse)) {
    const out = {}
    for (const k of Object.keys(bse)) out[k] = merge(bse[k], over ? over[k] : undefined)
    return out
  }
  return over !== undefined ? over : bse
}

function clone(v) {
  if (Array.isArray(v)) return v.map(clone)
  if (isPlainObject(v)) {
    const o = {}
    for (const k of Object.keys(v)) o[k] = clone(v[k])
    return o
  }
  return v
}

function replaceObject(target, source) {
  for (const k of Object.keys(target)) if (!(k in source)) delete target[k]
  Object.assign(target, source)
}

function replaceArray(target, source) {
  target.splice(0, target.length, ...source)
}

/* ------------------------------------------------------------------ *
 * Reactive exports — kept in place, updated on language change
 * ------------------------------------------------------------------ */
export const profile = reactive({})
export const contact = reactive({})
export const socials = reactive([])
export const pageNav = reactive([])
export const sectionNav = reactive([])
export const projects = reactive([])
export const activities = reactive([])
export const experience = reactive([])
export const hackathons = reactive([])
export const skills = reactive([])
export const magazine = reactive({})

/** Merged, date-sorted feed for "Today's Updates" */
export const updates = reactive([])

function buildUpdates(projectList, activityList) {
  return [
    ...projectList.map((p) => ({
      date: p.date,
      type: p.category,
      kind: 'PROJECT',
      title: p.title,
      titleJp: p.titleJp,
      note: p.course,
      to: { path: '/project', hash: '#' + p.id },
    })),
    ...activityList.map((a) => ({
      date: a.date,
      type: a.kind,
      kind: 'ARTICLE',
      title: a.title,
      titleJp: a.titleJp,
      note: a.role,
      to: { path: '/', hash: '#articles' },
    })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1))
}

const overlays = { 'jp-en': undefined, en: enOverlay, th: thOverlay }

watchEffect(() => {
  const data = merge(base, overlays[lang.value])

  replaceObject(profile, data.profile)
  replaceObject(contact, data.contact)
  replaceObject(magazine, data.magazine)
  replaceArray(socials, data.socials)
  replaceArray(pageNav, data.pageNav)
  replaceArray(sectionNav, data.sectionNav)
  replaceArray(projects, data.projects)
  replaceArray(activities, data.activities)
  replaceArray(experience, data.experience)
  replaceArray(hackathons, data.hackathons)
  replaceArray(skills, data.skills)
  replaceArray(updates, buildUpdates(data.projects, data.activities))
})
