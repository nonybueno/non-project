/**
 * NON PROJECT — language switch (Thai / English / Japanese-English)
 * ---------------------------------------------------------------
 * `lang` is a single app-wide reactive ref, persisted to localStorage.
 *   - 'jp-en' — the default: English copy with Japanese furigana / kickers
 *   - 'en'    — English copy, Japanese kicker text dropped (manga textures stay)
 *   - 'th'    — Thai copy
 *
 * UI chrome strings live in the `ui` dictionary below and are read with `t()`.
 * Editorial content (bio, projects, experience …) is translated in
 * `src/data/content.js` via the `src/data/content.th.js` overlay.
 */
import { ref, watch } from 'vue'

export const LANGS = [
  { id: 'th', label: 'ไทย', short: 'TH' },
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'jp-en', label: '日本語 × EN', short: 'JP·EN' },
]

const STORAGE_KEY = 'non-lang'
const DEFAULT = 'jp-en'

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return LANGS.some((l) => l.id === v) ? v : DEFAULT
  } catch {
    return DEFAULT
  }
}

export const lang = ref(readStored())

watch(lang, (v) => {
  try {
    localStorage.setItem(STORAGE_KEY, v)
  } catch {
    /* private mode / storage disabled — non-fatal */
  }
})

export function setLang(id) {
  if (LANGS.some((l) => l.id === id)) lang.value = id
}

/** BCP-47 tag for <html lang> */
export const htmlLang = { 'jp-en': 'en', en: 'en', th: 'th' }

/* ------------------------------------------------------------------ *
 * UI string dictionary
 * ------------------------------------------------------------------ */
const ui = {
  'jp-en': {
    header: { resume: 'Resume', language: 'Language' },
    marquee:
      'THANINPONG PANTHAWONG ・ タニンポン・パンタウォン ・ MY PROJECT ・ タニンポン・パンタウォン ・ EST. 2021 ・ ',

    hero: {
      kicker: '月刊 · Monthly Issue',
      hi: "Hi, I'm",
      words: ['Thaninpong.', 'a Developer.', 'a Builder.'],
      devFor: 'I am a developer for',
      and: 'and',
      seeWorks: 'See the works',
      readProfile: 'Read the profile',
      ranked: 'No.1 Ranked',
    },

    exp: {
      heading: 'Experience',
      headingJp: '職務経歴 · Work Ranking',
      period: '集計期間 2024 – 2026 · 5 companies',
      current: '現職 · Current',
      seeResume: 'See the full resume',
    },

    hack: {
      heading: 'Hackathons',
      headingJp: 'ハッカソン',
      clickEnlarge: 'Click to enlarge',
      certificate: '✓ Certificate',
      certAlt: '{name} — certificate of participation',
    },

    pickup: { heading: 'Pick Up', headingJp: '今月のピックアップ' },

    updates: {
      heading: "Today's Updates",
      headingJp: '本日の更新',
      new: 'New',
      all: 'All updates ›',
    },

    ranking: {
      heading: 'Manga Ranking',
      headingJp: '週間ランキング',
      period: '集計期間 2021 – 2023 · by build scope',
    },

    articles: { heading: 'Articles & Videos', headingJp: '記事・動画' },

    rec: {
      heading: 'Recommended',
      headingJp: '編集部おすすめ',
      blurb:
        'The skillset behind every build — four ongoing "series" Non keeps reading and shipping.',
    },

    mag: {
      feature: '特集 / Feature',
      periodPrefix: 'マガジン / ',
      readProfile: 'Read the full profile →',
    },

    footer: {
      index: '目次 / Index',
      contact: '連絡先 / Contact',
      tagline:
        'The portfolio of {name} — built and drawn as a black-and-white web manga magazine.',
      disclaimer:
        '© {year} {name} · NON PROJECT. Original design — a manga-magazine tribute. Not affiliated with, and using no artwork, characters or branding from, any publisher.',
      top: '▲ Back to top',
    },

    about: {
      kicker: '人物紹介 · Character Profile',
      hello: "Hello, I'm Non!",
      born: 'Born',
      story: 'The Story',
      storyJp: 'ものがたり',
      dataFile: 'Data File',
      dataFileJp: 'データファイル',
      timeline: 'Timeline',
      timelineJp: '年表',
      tl1When: 'Primary – High School',
      tl1Note: 'Nakhon Pathom',
      tl2When: '2020 – Present',
      tl3When: '2021 – 2023',
      tl3What: 'Four course builds + two SIT camps',
      tl3Note: 'Front-End · Back-End · UX',
      downloadResume: 'Download resume',
      getInTouch: 'Get in touch',
    },

    contact: {
      kicker: 'お問い合わせ · Get in touch',
      title: 'Contact',
      letsTalk: "Let's talk!",
      intro:
        'Reach out about a project, a camp, or just to say hi — replies come faster by email.',
      email: 'メール',
      phone: '電話',
      link: 'リンク',
      github: 'ギットハブ',
      elsewhere: 'Elsewhere',
      elsewhereJp: 'その他',
      basedIn: 'Based in',
      downloadResume: 'Download resume ▽',
    },

    resume: {
      kicker: '履歴書 · Curriculum Vitae',
      title: 'Resume',
      downloadPdf: 'Download PDF ▽',
      profile: 'Profile',
      profileJp: '基本情報',
      experience: 'Experience',
      experienceJp: '職務経歴',
      skills: 'Skills',
      skillsJp: 'スキル',
      selectedWork: 'Selected Work',
      selectedWorkJp: '主な作品',
      hackathons: 'Hackathons',
      certificate: 'Certificate',
      seeProjects: 'See full projects',
      contactNon: 'Contact Non',
      fName: 'Name',
      fNickname: 'Nickname',
      fBorn: 'Born',
      fRole: 'Role',
      fEducation: 'Education',
      fGpax: 'GPAX',
      fLocation: 'Location',
      fEmail: 'Email',
    },

    project: {
      kicker: '作品一覧 · Catalogue',
      title: 'Projects',
      intro:
        'Every "volume" is a real course or team build — full source, live links and the stack used.',
      all: 'All',
    },
  },

  en: {
    header: { resume: 'Resume', language: 'Language' },
    marquee:
      'THANINPONG PANTHAWONG ・ NON PROJECT ・ FULL-STACK WEB DEVELOPER ・ EST. 2021 ・ ',

    hero: {
      kicker: 'Monthly Issue',
      hi: "Hi, I'm",
      words: ['Thaninpong.', 'a Developer.', 'a Builder.'],
      devFor: 'I am a developer for',
      and: 'and',
      seeWorks: 'See the works',
      readProfile: 'Read the profile',
      ranked: 'No.1 Ranked',
    },

    exp: {
      heading: 'Experience',
      headingJp: 'Work Ranking',
      period: '2024 – 2026 · 5 companies',
      current: 'Current',
      seeResume: 'See the full resume',
    },

    hack: {
      heading: 'Hackathons',
      headingJp: 'Competitions',
      clickEnlarge: 'Click to enlarge',
      certificate: '✓ Certificate',
      certAlt: '{name} — certificate of participation',
    },

    pickup: { heading: 'Pick Up', headingJp: 'This Month' },

    updates: {
      heading: "Today's Updates",
      headingJp: 'Latest',
      new: 'New',
      all: 'All updates ›',
    },

    ranking: {
      heading: 'Ranking',
      headingJp: 'Weekly Ranking',
      period: '2021 – 2023 · by build scope',
    },

    articles: { heading: 'Articles & Videos', headingJp: 'Camps & Staff Work' },

    rec: {
      heading: 'Recommended',
      headingJp: "Editors' Picks",
      blurb:
        'The skillset behind every build — four ongoing "series" Non keeps reading and shipping.',
    },

    mag: {
      feature: 'Feature',
      periodPrefix: 'Magazine / ',
      readProfile: 'Read the full profile →',
    },

    footer: {
      index: 'Index',
      contact: 'Contact',
      tagline:
        'The portfolio of {name} — built and drawn as a black-and-white web manga magazine.',
      disclaimer:
        '© {year} {name} · NON PROJECT. Original design — a manga-magazine tribute. Not affiliated with, and using no artwork, characters or branding from, any publisher.',
      top: '▲ Back to top',
    },

    about: {
      kicker: 'Character Profile',
      hello: "Hello, I'm Non!",
      born: 'Born',
      story: 'The Story',
      storyJp: 'Biography',
      dataFile: 'Data File',
      dataFileJp: 'Key Facts',
      timeline: 'Timeline',
      timelineJp: 'Milestones',
      tl1When: 'Primary – High School',
      tl1Note: 'Nakhon Pathom',
      tl2When: '2020 – Present',
      tl3When: '2021 – 2023',
      tl3What: 'Four course builds + two SIT camps',
      tl3Note: 'Front-End · Back-End · UX',
      downloadResume: 'Download resume',
      getInTouch: 'Get in touch',
    },

    contact: {
      kicker: 'Get in touch',
      title: 'Contact',
      letsTalk: "Let's talk!",
      intro:
        'Reach out about a project, a camp, or just to say hi — replies come faster by email.',
      email: 'Email',
      phone: 'Phone',
      link: 'Link',
      github: 'GitHub',
      elsewhere: 'Elsewhere',
      elsewhereJp: 'More',
      basedIn: 'Based in',
      downloadResume: 'Download resume ▽',
    },

    resume: {
      kicker: 'Curriculum Vitae',
      title: 'Resume',
      downloadPdf: 'Download PDF ▽',
      profile: 'Profile',
      profileJp: 'Basic Info',
      experience: 'Experience',
      experienceJp: 'Work History',
      skills: 'Skills',
      skillsJp: 'Stack',
      selectedWork: 'Selected Work',
      selectedWorkJp: 'Key Builds',
      hackathons: 'Hackathons',
      certificate: 'Certificate',
      seeProjects: 'See full projects',
      contactNon: 'Contact Non',
      fName: 'Name',
      fNickname: 'Nickname',
      fBorn: 'Born',
      fRole: 'Role',
      fEducation: 'Education',
      fGpax: 'GPAX',
      fLocation: 'Location',
      fEmail: 'Email',
    },

    project: {
      kicker: 'Catalogue',
      title: 'Projects',
      intro:
        'Every "volume" is a real course or team build — full source, live links and the stack used.',
      all: 'All',
    },
  },

  th: {
    header: { resume: 'เรซูเม่', language: 'ภาษา' },
    marquee:
      'ธนินท์พงษ์ พันธะวงศ์ ・ นนโปรเจกต์ ・ นักพัฒนาเว็บฟูลสแตก ・ ก่อตั้ง 2021 ・ ',

    hero: {
      kicker: 'ฉบับประจำเดือน',
      hi: 'ผมคือ',
      words: ['ธนินท์พงษ์', 'นักพัฒนา', 'นักสร้างสรรค์'],
      devFor: 'ผมเป็นนักพัฒนาสาย',
      and: 'และ',
      seeWorks: 'ดูผลงาน',
      readProfile: 'อ่านประวัติ',
      ranked: 'อันดับ 1',
    },

    exp: {
      heading: 'Experience',
      headingJp: 'ประสบการณ์ทำงาน',
      period: 'ช่วงเวลา 2024 – 2026 · 5 บริษัท',
      current: 'ปัจจุบัน',
      seeResume: 'ดูเรซูเม่ฉบับเต็ม',
    },

    hack: {
      heading: 'Hackathons',
      headingJp: 'แฮกกาธอน',
      clickEnlarge: 'คลิกเพื่อขยาย',
      certificate: '✓ ใบรับรอง',
      certAlt: '{name} — ใบรับรองการเข้าร่วม',
    },

    pickup: { heading: 'Pick Up', headingJp: 'พิกอัพประจำเดือน' },

    updates: {
      heading: "Today's Updates",
      headingJp: 'อัปเดตวันนี้',
      new: 'ใหม่',
      all: 'ดูทั้งหมด ›',
    },

    ranking: {
      heading: 'Ranking',
      headingJp: 'จัดอันดับประจำสัปดาห์',
      period: 'ช่วงเวลา 2021 – 2023 · ตามขนาดของงาน',
    },

    articles: { heading: 'Articles & Videos', headingJp: 'บทความและวิดีโอ' },

    rec: {
      heading: 'Recommended',
      headingJp: 'บรรณาธิการแนะนำ',
      blurb:
        'ชุดทักษะที่อยู่เบื้องหลังทุกงาน — สี่ "ซีรีส์" ที่นนอ่านและลงมือทำอย่างต่อเนื่อง',
    },

    mag: {
      feature: 'ฉบับพิเศษ / Feature',
      periodPrefix: 'นิตยสาร / ',
      readProfile: 'อ่านประวัติฉบับเต็ม →',
    },

    footer: {
      index: 'สารบัญ / Index',
      contact: 'ติดต่อ / Contact',
      tagline:
        'พอร์ตโฟลิโอของ {name} — ออกแบบและวาดเป็นนิตยสารการ์ตูนขาวดำ',
      disclaimer:
        '© {year} {name} · NON PROJECT ออกแบบเองทั้งหมด เป็นงานคารวะนิตยสารการ์ตูน ไม่มีส่วนเกี่ยวข้องกับ และไม่ได้ใช้ภาพ ตัวละคร หรือแบรนด์ของสำนักพิมพ์ใด',
      top: '▲ กลับขึ้นบน',
    },

    about: {
      kicker: 'แนะนำตัวละคร · Character Profile',
      hello: 'สวัสดีครับ ผมนนเองครับ!',
      born: 'เกิด',
      story: 'The Story',
      storyJp: 'เรื่องราว',
      dataFile: 'Data File',
      dataFileJp: 'ข้อมูลส่วนตัว',
      timeline: 'Timeline',
      timelineJp: 'เส้นเวลา',
      tl1When: 'ประถม – มัธยมปลาย',
      tl1Note: 'นครปฐม',
      tl2When: '2020 – ปัจจุบัน',
      tl3When: '2021 – 2023',
      tl3What: 'โปรเจกต์รายวิชา 4 ชิ้น + ค่าย SIT 2 ครั้ง',
      tl3Note: 'Front-End · Back-End · UX',
      downloadResume: 'ดาวน์โหลดเรซูเม่',
      getInTouch: 'ติดต่อผม',
    },

    contact: {
      kicker: 'ติดต่อเรา · Get in touch',
      title: 'Contact',
      letsTalk: 'คุยกันได้เลย!',
      intro:
        'ทักมาคุยเรื่องโปรเจกต์ ค่าย หรือแค่มาทักทายก็ได้ — ตอบเร็วที่สุดทางอีเมล',
      email: 'อีเมล',
      phone: 'โทรศัพท์',
      link: 'ลิงก์',
      github: 'GitHub',
      elsewhere: 'Elsewhere',
      elsewhereJp: 'ช่องทางอื่น',
      basedIn: 'อยู่ที่',
      downloadResume: 'ดาวน์โหลดเรซูเม่ ▽',
    },

    resume: {
      kicker: 'ประวัติย่อ · Curriculum Vitae',
      title: 'Resume',
      downloadPdf: 'ดาวน์โหลด PDF ▽',
      profile: 'Profile',
      profileJp: 'ข้อมูลพื้นฐาน',
      experience: 'Experience',
      experienceJp: 'ประสบการณ์ทำงาน',
      skills: 'Skills',
      skillsJp: 'ทักษะ',
      selectedWork: 'Selected Work',
      selectedWorkJp: 'ผลงานเด่น',
      hackathons: 'แฮกกาธอน',
      certificate: 'ใบรับรอง',
      seeProjects: 'ดูผลงานทั้งหมด',
      contactNon: 'ติดต่อนน',
      fName: 'ชื่อ',
      fNickname: 'ชื่อเล่น',
      fBorn: 'วันเกิด',
      fRole: 'ตำแหน่ง',
      fEducation: 'การศึกษา',
      fGpax: 'เกรดเฉลี่ย',
      fLocation: 'ที่อยู่',
      fEmail: 'อีเมล',
    },

    project: {
      kicker: 'รวมผลงาน · Catalogue',
      title: 'ผลงาน',
      intro:
        'ทุก "เล่ม" คือโปรเจกต์รายวิชาหรืองานทีมจริง — พร้อมซอร์สโค้ด ลิงก์ใช้งานจริง และเทคโนโลยีที่ใช้',
      all: 'ทั้งหมด',
    },
  },
}

function deepGet(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj)
}

/**
 * Translate a dotted key for the current language, with fallback
 * to English then JP-EN. `vars` fills `{placeholder}` tokens.
 */
export function t(key, vars) {
  let s = deepGet(ui[lang.value], key)
  if (s == null) s = deepGet(ui.en, key)
  if (s == null) s = deepGet(ui['jp-en'], key)
  if (s == null) return key
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      s = s.replaceAll(`{${k}}`, v)
    }
  }
  return s
}

/** Convenience for `<script setup>` / templates. */
export function useI18n() {
  return { lang, setLang, t, LANGS, htmlLang }
}
