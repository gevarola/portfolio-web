const ICON_PATHS = {
  instagram: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
  tiktok: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  x: 'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z',
  facebook: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  notion: 'M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z',
  figma: 'M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z',
  canva: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z',
  buffer: 'M1.371 5.476L11.943 0l10.686 5.476-10.686 5.495zm3.36 4.81l7.212 3.547 7.288-3.547 3.398 1.655-10.686 5.202L1.371 11.94zm0 6.171l7.212 3.911 7.288-3.91 3.398 1.815L11.943 24 1.371 18.273z',
  semrush: 'M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z',
  google: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
  openai: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
  anthropic: 'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z'
};

const SITE = {
en: {
  meta: { title: "Germán Rojas La Valle — Content & Social Media Manager", langLabel: "ES" },
  nav: { about: "About", work: "Case studies", creator: "As a creator", contact: "Contact" },
  intro: {
    roleLine: "Social Media Manager · Content Manager · Content Creator",
    title: "Hi, I'm Germán — I build content that makes people stop scrolling.",
    subtitle: "4+ years leading content strategy across LATAM markets. Today, freelancing full-time for brands across the board.",
    ctaWork: "View case studies",
    ctaContact: "Get in touch"
  },
  details: {
    experienceHeading: "Experience",
    experience: [
      { role: "Social Media & Content Manager", org: "Freelance · Independent", period: "Mar 2026 — Present" },
      { role: "Social Media Manager", org: "Bitso · Remote", period: "Apr 2024 — Mar 2026" },
      { role: "Social Media Strategist", org: "Bitso · Remote", period: "Apr 2023 — Apr 2024" },
      { role: "Social Media Analyst & Community Manager", org: "Bitso · Remote", period: "Oct 2021 — Apr 2023" },
      { role: "Community & Social Media Manager", org: "Freelance · Independent", period: "Jan 2019 — Oct 2021" }
    ],
    educationHeading: "Education",
    education: [
      { name: "Leadership & Innovation Program", org: "UADE", year: "2024" },
      { name: "Blockchain & Crypto Certificate", org: "University of Michigan", year: "2021" },
      { name: "BA in Labor Relations", org: "Universidad de Buenos Aires", year: "2016" }
    ],
    toolsHeading: "Tools",
    platformsLabel: "Platforms",
    toolsLabel: "Software",
    cvButton: "Download CV (Spanish)"
  },
  pillars: {
    eyebrow: "What I do",
    items: [
      { num: "01", title: "Social Media Manager", body: "I keep the lights on — calendars, growth, agencies, numbers. The unglamorous stuff that makes everything else possible." },
      { num: "02", title: "Content Manager", body: "I decide what gets said before anyone writes a word. Voice, pillars, campaigns — the plan nobody sees but everyone feels." },
      { num: "03", title: "Content Creator", body: "Camera, mic, edit. I make the thing people actually watch, not just scroll past." },
      { num: "04", title: "Copywriting", body: "Words that don't sound like a press release. Scripts, captions, campaigns — written to be read, not skimmed." }
    ]
  },
  work: {
    heading: "Selected work",
    challengeLabel: "The challenge",
    processLabel: "The process",
    resultLabel: "The result",
    viewCase: "View case study",
    close: "Close"
  },
  creator: {
    eyebrow: "As a creator",
    title: "I also step in front of the camera.",
    body: "Beyond strategy, I write, shoot and edit my own short-form video — as @gevarola, and as a creator for the brands I work with. Same instinct for what stops the scroll, just from the other side of the camera.",
    accountStatsLabel: "Account, last 30 days",
    accountStats: [
      { value: "24.7K", label: "views" },
      { value: "630", label: "engagement" },
      { value: "50", label: "pieces of content" }
    ],
    watchLabel: "Watch"
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your content.",
    body: "Open to freelance content strategy work, full-time roles, and brand collaborations as a creator.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    footer: "Built and designed by Germán Rojas La Valle."
  }
},
es: {
  meta: { title: "Germán Rojas La Valle — Content & Social Media Manager", langLabel: "EN" },
  nav: { about: "Sobre mí", work: "Casos de éxito", creator: "Como creador", contact: "Contacto" },
  intro: {
    roleLine: "Social Media Manager · Content Manager · Content Creator",
    title: "Hola, soy Germán — construyo contenido que hace que la gente deje de scrollear.",
    subtitle: "Más de 4 años liderando estrategia de contenido en mercados de LATAM. Hoy, freelance full-time para marcas de todo tipo.",
    ctaWork: "Ver casos de éxito",
    ctaContact: "Escribime"
  },
  details: {
    experienceHeading: "Experiencia",
    experience: [
      { role: "Social Media & Content Manager", org: "Freelance · Independiente", period: "Mar 2026 — Presente" },
      { role: "Social Media Manager", org: "Bitso · Remoto", period: "Abr 2024 — Mar 2026" },
      { role: "Social Media Strategist", org: "Bitso · Remoto", period: "Abr 2023 — Abr 2024" },
      { role: "Social Media Analyst & Community Manager", org: "Bitso · Remoto", period: "Oct 2021 — Abr 2023" },
      { role: "Community & Social Media Manager", org: "Freelance · Independiente", period: "Ene 2019 — Oct 2021" }
    ],
    educationHeading: "Educación",
    education: [
      { name: "Programa de Liderazgo e Innovación", org: "UADE", year: "2024" },
      { name: "Certificado Blockchain & Cripto", org: "Universidad de Michigan", year: "2021" },
      { name: "Licenciatura en Relaciones del Trabajo", org: "Universidad de Buenos Aires", year: "2016" }
    ],
    toolsHeading: "Herramientas",
    platformsLabel: "Plataformas",
    toolsLabel: "Software",
    cvButton: "Descargar CV (español)"
  },
  pillars: {
    eyebrow: "Qué hago",
    items: [
      { num: "01", title: "Social Media Manager", body: "Mantengo todo funcionando — calendarios, crecimiento, agencias, números. Lo poco glamoroso que hace posible todo lo demás." },
      { num: "02", title: "Content Manager", body: "Decido qué se dice antes de que alguien escriba una palabra. Voz, pilares, campañas — el plan que nadie ve pero todos sienten." },
      { num: "03", title: "Content Creator", body: "Cámara, micrófono, edición. Hago lo que la gente realmente mira, no lo que scrollea de largo." },
      { num: "04", title: "Copywriting", body: "Palabras que no suenan a gacetilla de prensa. Guiones, captions, campañas — escritas para leerse, no para pasarlas de largo." }
    ]
  },
  work: {
    heading: "Trabajo seleccionado",
    challengeLabel: "El desafío",
    processLabel: "El proceso",
    resultLabel: "El resultado",
    viewCase: "Ver caso de éxito",
    close: "Cerrar"
  },
  creator: {
    eyebrow: "Como creador",
    title: "También me pongo delante de cámara.",
    body: "Además de la estrategia, escribo, grabo y edito mis propios videos cortos — como @gevarola, y como creador para las marcas con las que trabajo. El mismo instinto de qué hace que alguien deje de scrollear, pero del otro lado de la cámara.",
    accountStatsLabel: "Cuenta, últimos 30 días",
    accountStats: [
      { value: "24.7K", label: "visualizaciones" },
      { value: "630", label: "de engagement" },
      { value: "50", label: "contenidos" }
    ],
    watchLabel: "Ver"
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de tu contenido.",
    body: "Abierto a proyectos freelance de estrategia de contenido, roles full-time, y colaboraciones de marca como creador.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    footer: "Diseñado y construido por Germán Rojas La Valle."
  }
}
};

const LINKS = {
  email: "germanc.rojaslv@gmail.com",
  linkedin: "https://www.linkedin.com/in/germanrlv/",
  instagram: "https://www.instagram.com/gevarola/",
  cv: "assets/files/German_Rojas_La_Valle_CV_ES.pdf"
};

const CLIENTS = [
  {
    id: "bitso",
    en: {
      name: "Bitso",
      meta: "Fintech · Crypto exchange · LATAM",
      intro: "4+ years in-house as Social Media Manager (2021–2026) — building content strategy across Argentina, Mexico, Brazil and Colombia. Since May 2026, creating content for them as a freelance creator."
    },
    es: {
      name: "Bitso",
      meta: "Fintech · Exchange de cripto · LATAM",
      intro: "Más de 4 años en relación de dependencia como Social Media Manager (2021–2026) — construyendo la estrategia de contenido en Argentina, México, Brasil y Colombia. Desde mayo de 2026, creando contenido para ellos como freelance."
    }
  }
];

const CASES = [
  {
    id: "brand-expansion",
    client: "bitso",
    tag: { en: "Brand Expansion", es: "Expansión de Marca" },
    image: "assets/images/case-brand-expansion.jpg",
    org: "Bitso",
    period: "2022 — 2026",
    stats: [
      { value: "60K+", en: "combined followers built from zero", es: "seguidores combinados construidos desde cero" },
      { value: "40–50", en: "pieces of content / week across 4 markets", es: "piezas de contenido / semana en 4 mercados" },
      { value: "10+", en: "person hybrid team coordinated", es: "personas en el equipo híbrido coordinado" }
    ],
    en: {
      title: "Brand expansion in LATAM",
      challenge: "Bitso had consolidated channels in Mexico and Brazil, but no dedicated presence in Argentina or Colombia — and content volume and consistency across markets was uneven.",
      process: [
        "Built the Argentina and Colombia channels from scratch: architecture, localized tone of voice, and a market-specific editorial calendar — going from zero to consistent weekly publishing in both.",
        "Coordinated a hybrid team (in-house + agency) to sustain production across all 4 markets simultaneously, publishing on Instagram, X and Facebook every week without interruption.",
        "In 2025, led the content side of Bitso's global rebrand for the region — rebuilding messaging architecture, tone of voice and creative guidelines from scratch."
      ],
      result: "Took Bitso from operating in 2 markets to a full, owned content strategy across 4 — with a unified tone of voice and content pillars aligned to business goals in every market and channel."
    },
    es: {
      title: "Expansión de marca en LATAM",
      challenge: "Bitso tenía canales consolidados en México y Brasil, pero ninguna presencia dedicada en Argentina o Colombia — y el volumen y la consistencia de contenido entre mercados era despareja.",
      process: [
        "Construimos los canales de Argentina y Colombia desde cero: arquitectura, tono de voz localizado y un calendario editorial por mercado — pasando de cero a publicación semanal consistente en ambos.",
        "Coordinamos un equipo híbrido (interno + agencia) para sostener la producción en los 4 mercados en simultáneo, publicando en Instagram, X y Facebook todas las semanas sin interrupciones.",
        "En 2025, lideré el lado de contenido del rebranding global de Bitso para la región — reconstruyendo la arquitectura de mensajes, el tono de voz y los lineamientos creativos desde cero."
      ],
      result: "Llevamos a Bitso de operar en 2 mercados a una estrategia de contenido propia en 4 — con un tono de voz y pilares de contenido unificados y alineados a los objetivos de negocio en cada mercado y canal."
    }
  },
  {
    id: "hugging-users",
    client: "bitso",
    tag: { en: "Educational Content", es: "Contenido Educativo" },
    image: "assets/images/case-hugging-users.jpg",
    org: "Bitso",
    period: "2023 — 2026",
    stats: [
      { value: "+2M", en: "impressions", es: "de impresiones" },
      { value: "+400K", en: "engagement", es: "de engagement" },
      { value: "15+", en: "how-to videos & guides produced", es: "videos y guías how-to producidos" }
    ],
    en: {
      title: "Hugging Our Users",
      challenge: "Customer support was getting a high volume of repetitive tickets — questions users could have solved themselves with the right content.",
      process: [
        "Mapped the most frequent questions across social channels to find users' real pain points.",
        "Designed a new educational content branch: 15+ how-to videos and carousel guides, from buying crypto for the first time to setting up a wallet.",
        "Published natively across Instagram and TikTok, written to sound like a friend explaining, not a support article."
      ],
      result: "Built a functional content pillar with a double impact — real, on-demand answers for users, and less operational load for the support team, as common questions got solved by content before they became tickets."
    },
    es: {
      title: "Hugging Our Users",
      challenge: "El equipo de soporte recibía un volumen alto de tickets repetitivos — preguntas que los usuarios podrían haber resuelto solos con el contenido correcto.",
      process: [
        "Mapeamos las preguntas más frecuentes en redes para identificar los verdaderos puntos de dolor de los usuarios.",
        "Diseñamos una nueva rama de contenido educativo: +15 videos how-to y guías en carrusel, desde comprar cripto por primera vez hasta configurar una wallet.",
        "Publicamos en formato nativo en Instagram y TikTok, escrito para sonar como un amigo explicando, no como un artículo de soporte."
      ],
      result: "Construimos un pilar de contenido funcional con doble impacto — respuestas reales y a demanda para los usuarios, y menos carga operativa para el equipo de soporte, porque las preguntas comunes se resolvían con contenido antes de convertirse en tickets."
    }
  },
  {
    id: "financial-education",
    client: "bitso",
    tag: { en: "Creator Partnerships", es: "Alianzas con Creadores" },
    image: "assets/images/case-financial-education.jpg",
    org: "Bitso",
    period: "2024",
    stats: [
      { value: "4", en: "creator partnerships, 4 long-form episodes", es: "creadores, 4 episodios long-form" },
      { value: "20+", en: "short-form clips from the same production", es: "clips short-form de la misma producción" },
      { value: "+150K", en: "views & +20K engagement combined", es: "views y +20K de engagement combinados" }
    ],
    en: {
      title: "Financial education with content creators",
      challenge: "User interviews showed a clear demand for more educational content to make informed financial decisions — a gap Bitso's own channels weren't filling.",
      process: [
        "Identified and partnered with 4 Argentine creators with established, trusted crypto and finance audiences.",
        "Co-produced an introductory educational video series, scripting and briefing each creator so the content felt genuinely useful, not branded messaging in disguise.",
        "Published natively on each creator's own channel and cross-promoted on Bitso's accounts, then repurposed each episode into 4–5 short-form clips."
      ],
      result: "Positioned Bitso in financial-education conversations through voices users already trusted, reaching audiences its own channels hadn't engaged before."
    },
    es: {
      title: "Educación financiera con creadores de contenido",
      challenge: "Las entrevistas a usuarios mostraron una demanda clara de más contenido educativo para tomar decisiones financieras informadas — un vacío que los canales propios de Bitso no cubrían.",
      process: [
        "Identificamos y armamos alianza con 4 creadores argentinos con audiencias de cripto y finanzas ya establecidas y de confianza.",
        "Co-producimos una serie de video educativa introductoria, escribiendo el guion y briefeando a cada creador para que el contenido se sintiera genuinamente útil, no mensaje de marca disfrazado.",
        "Publicamos en formato nativo en el canal de cada creador y lo cross-promocionamos en las cuentas de Bitso, después recortamos cada episodio en 4-5 clips cortos."
      ],
      result: "Posicionamos a Bitso en las conversaciones de educación financiera a través de voces en las que los usuarios ya confiaban, llegando a audiencias que los canales propios no habían alcanzado antes."
    }
  },
  {
    id: "influencer-marketing",
    client: "bitso",
    tag: { en: "Influencer Marketing", es: "Influencer Marketing" },
    image: "assets/images/case-influencer-1.jpg",
    image2: "assets/images/case-influencer-2.jpg",
    org: "Bitso",
    period: "2025 — 2026",
    stats: [
      { value: "120+", en: "videos published", es: "videos publicados" },
      { value: "+4M", en: "views", es: "de views" },
      { value: "+500K", en: "engagement", es: "de engagement" }
    ],
    en: {
      title: "Influencer Marketing Program",
      challenge: "Bitso was launching Bitso Stocks — letting LATAM users invest in US stocks — but had to reach an audience well beyond its existing crypto community, for a product category most users had never associated with the brand.",
      process: [
        "Led the influencer and UGC strategy for the launch alongside a specialized agency.",
        "Sourced and vetted 20 influencers and 80+ UGC creators across Instagram, TikTok and YouTube, with creative direction and final approval on every profile.",
        "Managed end-to-end execution: briefs, content approvals, posting timelines and brand-guideline compliance across 120+ videos.",
        "Tracked performance via per-creator UTM links, enabling clear attribution and data-driven decisions on renewals and budget."
      ],
      result: "Built a scalable creator-program framework — from briefing templates to UTM tracking — that's now replicable for future product launches."
    },
    es: {
      title: "Programa de Influencer Marketing",
      challenge: "Bitso lanzaba Bitso Stocks — que permite a usuarios de LATAM invertir en acciones de EE.UU. — pero tenía que alcanzar una audiencia mucho más amplia que su comunidad cripto, para una categoría de producto que la mayoría no asociaba con la marca.",
      process: [
        "Lideré la estrategia de influencers y UGC para el lanzamiento junto a una agencia especializada.",
        "Sourceamos y evaluamos 20 influencers y +80 creadores UGC en Instagram, TikTok y YouTube, con dirección creativa y aprobación final de cada perfil.",
        "Gestioné la ejecución de punta a punta: briefs, aprobaciones de contenido, cronograma de publicación y cumplimiento de lineamientos de marca en +120 videos.",
        "Trackeamos performance con links UTM por creador, permitiendo atribución clara y decisiones basadas en datos sobre renovaciones y presupuesto."
      ],
      result: "Construimos un framework de programa de creadores escalable — desde templates de briefing hasta tracking con UTM — replicable para futuros lanzamientos de producto."
    }
  },
  {
    id: "storytelling-culture",
    client: "bitso",
    tag: { en: "Culture & Storytelling", es: "Cultura & Storytelling" },
    image: "assets/images/case-storytelling.jpg",
    org: "Bitso",
    period: "2026",
    stats: [
      { value: "+300K", en: "impressions", es: "de impresiones" },
      { value: "+1K", en: "saves", es: "guardados" },
      { value: "+2K", en: "shares", es: "compartidos" }
    ],
    en: {
      title: "Financial storytelling through culture",
      challenge: "Crypto and financial concepts are inherently complex, and traditional educational content often loses the audience before the point lands.",
      process: [
        "Identified high-profile cultural moments — a record-breaking Pokémon card auction, the economics of Oscar campaigns, the cost of a Super Bowl ad — as entry points to explain financial concepts.",
        "Built each piece around a hook the audience already cared about, then connected it to a financial insight they hadn't considered.",
        "Designed content to be genuinely educational, not promotional — positioning Bitso as a trusted voice in financial literacy, not just crypto."
      ],
      result: "Made complex financial concepts accessible and shareable by anchoring them to moments people were already talking about — proving the best entry point to financial education is a story the audience already knows, not a definition."
    },
    es: {
      title: "Storytelling financiero a través de la cultura",
      challenge: "Los conceptos de cripto y finanzas son inherentemente complejos, y el contenido educativo tradicional suele perder a la audiencia antes de llegar al punto.",
      process: [
        "Identificamos momentos culturales de alto perfil — una subasta récord de una carta Pokémon, la economía detrás de las campañas al Oscar, el costo de un spot en el Super Bowl — como puerta de entrada para explicar conceptos financieros.",
        "Construimos cada pieza alrededor de un gancho que a la audiencia ya le importaba, y lo conectamos con un insight financiero que no habían considerado.",
        "Diseñamos contenido genuinamente educativo, no promocional — posicionando a Bitso como una voz de confianza en educación financiera, no solo en cripto."
      ],
      result: "Hicimos que conceptos financieros complejos fueran accesibles y compartibles, ancládolos a momentos de los que la gente ya estaba hablando — demostrando que la mejor puerta de entrada a la educación financiera es una historia que la audiencia ya conoce, no una definición."
    }
  },
  {
    id: "havanna-mundial",
    client: "havanna",
    tag: { en: "World Cup Campaign", es: "Campaña Mundial" },
    image: "assets/images/case-havanna-hero.jpg",
    image2: "assets/images/case-havanna-tweet.jpg",
    org: "Havanna x Leo Messi",
    period: "Freelance · 2026",
    stats: [
      { value: "+39M", en: "views in 45 days", es: "de views en 45 días" },
      { value: "+512K", en: "engagement", es: "de engagement" },
      { value: "130+", en: "pieces of content produced", es: "piezas de contenido producidas" }
    ],
    en: {
      title: "Havanna x Mundial",
      challenge: "Havanna partnered with Lionel Messi during the 2026 World Cup — success meant capturing a fast-moving, high-emotion national conversation in real time, not just publishing a fixed calendar, while protecting a beloved 100-year-old brand from ever feeling opportunistic.",
      process: [
        "Ran real-time content and community strategy across Instagram, TikTok, Facebook and X for 45+ days, from campaign launch through the tournament final.",
        "Rode cultural moments as they happened — Messi's birthday, the pre-final tension, the final whistle — turning each into timely content instead of sticking to a rigid calendar.",
        "Tracked audience sentiment daily and adjusted tone in real time, moderating conversation through emotionally sensitive moments like product doubts, pricing questions and the match result.",
        "Balanced two roles for the brand at once — cheering as a fan and building awareness as a marketer — without ever reading as opportunistic."
      ],
      result: "39M+ views, 512K+ engagement and 130+ pieces of content in 45 days. Sentiment stayed strongly positive throughout the campaign, reaching 100% positive in the emotional aftermath of the final — with the campaign becoming one of the most talked-about brand moments of the tournament in Argentina."
    },
    es: {
      title: "Havanna x Mundial",
      challenge: "Havanna se asoció con Lionel Messi durante el Mundial 2026 — el éxito significaba capturar en tiempo real una conversación nacional de alta emocionalidad y ritmo acelerado, no solo publicar un calendario fijo, cuidando a la vez a una marca centenaria y querida de sonar oportunista.",
      process: [
        "Llevé la estrategia de contenido y comunidad en tiempo real en Instagram, TikTok, Facebook y X durante más de 45 días, desde el lanzamiento de la campaña hasta la final del torneo.",
        "Capitalizamos los momentos culturales a medida que sucedían — el cumpleaños de Messi, la previa a la final, el pitazo final — convirtiendo cada uno en contenido oportuno en vez de seguir un calendario rígido.",
        "Trackeamos el sentimiento de la audiencia día a día y ajustamos el tono en tiempo real, moderando la conversación en momentos emocionalmente sensibles como dudas de producto, consultas de precio y el resultado del partido.",
        "Balanceamos dos roles a la vez para la marca — alentar como hincha y generar awareness como marketer — sin que se sintiera oportunista en ningún momento."
      ],
      result: "+39M de visualizaciones, +512K de engagement y +130 piezas de contenido en 45 días. El sentimiento se mantuvo fuertemente positivo durante toda la campaña, llegando a 100% positivo en el after emocional de la final — y la campaña se convirtió en uno de los momentos de marca más comentados del torneo en Argentina."
    }
  }
];

const PLATFORMS = [
  { name: "Instagram", icon: "instagram", color: "#FF0069" },
  { name: "TikTok", icon: "tiktok", color: "#000000" },
  { name: "X", icon: "x", color: "#000000" },
  { name: "Facebook", icon: "facebook", color: "#0866FF" },
  { name: "YouTube", icon: "youtube", color: "#FF0000" }
];

const TOOLS = [
  { name: "Notion", icon: "notion", color: "#000000" },
  { name: "Figma", icon: "figma", color: "#F24E1E" },
  { name: "Canva", icon: "canva", color: "#00C4CC" },
  { name: "Buffer", icon: "buffer", color: "#231F20" },
  { name: "Google Workspace", icon: "google", color: "#4285F4" },
  { name: "ChatGPT", icon: "openai", color: "#10A37F" },
  { name: "Claude", icon: "anthropic", color: "#D97757" },
  { name: "CapCut", img: "assets/images/logo-capcut.jpg" },
  { name: "Sprout Social", img: "assets/images/logo-sproutsocial.png" },
  { name: "Monday", img: "assets/images/logo-monday.png" }
];

const CREATOR_ITEMS = [
  {
    image: "assets/images/creator-fruta-noble.jpg",
    link: "https://www.instagram.com/p/DVqwdxOESsE/",
    brand: "@fruta.noble",
    stats: [{ value: "1.9K", en: "views", es: "views" }, { value: "105", en: "engagement", es: "engagement" }],
    en: "Awareness video for a wine subscription club — explaining the service and product in one video, with a conversational, humor-first tone so it doesn't feel like a tutorial.",
    es: "Video de awareness para un club de vinos — explicando el servicio y el producto en un solo video, con un tono conversacional y con humor para que no se sienta como un tutorial."
  },
  {
    image: "assets/images/creator-barao.jpg",
    link: "https://www.instagram.com/p/DV1E1XIEVu6/",
    brand: "@barao.argentina",
    stats: [{ value: "1.5K", en: "views", es: "views" }, { value: "75", en: "engagement", es: "engagement" }],
    en: "Awareness video for a yerba mate brand — an everyday-situation sketch used as the hook, so the product lands organically instead of feeling like an ad.",
    es: "Video de awareness para una marca de yerbas — un sketch de situación cotidiana como gancho, para que el producto entre de forma orgánica y no se sienta publicitario."
  },
  {
    image: "assets/images/creator-bitso-referidos.jpg",
    link: "https://www.instagram.com/p/DNQmRlBNINr/",
    brand: "@bitso.ar",
    stats: [{ value: "1.5K", en: "views", es: "views" }, { value: "30", en: "engagement", es: "engagement" }],
    en: "Amplification video for Bitso's referral program — created on top of my regular Social Media Manager work, in a dynamic, native-feeling format.",
    es: "Video de amplificación para el programa de referidos de Bitso — generado además de mi rol de Social Media Manager, en un formato dinámico y nativo de redes."
  },
  {
    image: "assets/images/creator-bitso-bitcoin.jpg",
    link: "https://www.instagram.com/reel/DDM6G2exlN2/",
    brand: "@bitso.ar",
    stats: [{ value: "3K", en: "views", es: "views" }, { value: "80", en: "engagement", es: "engagement" }],
    en: "Reaction video riding a real-time Bitcoin price milestone — jumping into a trending conversation to communicate Bitso's value organically, right when it was relevant.",
    es: "Video de reacción aprovechando un hito de precio de Bitcoin en tiempo real — subiéndonos a una conversación en tendencia para comunicar la propuesta de valor de Bitso de forma orgánica, justo en el momento indicado."
  },
  {
    image: "assets/images/creator-psicologia-color.jpg",
    link: "https://www.instagram.com/p/DWOzOlJDsih/",
    brand: "@gevarola",
    stats: [{ value: "2.1K", en: "views", es: "views" }, { value: "80", en: "engagement", es: "engagement" }],
    en: "Conversational explainer built around a dilemma — how color shapes perception — developed with information and humor.",
    es: "Video explicativo conversacional, construido sobre un dilema — cómo los colores influyen en nuestra percepción — desarrollado con información y humor."
  },
  {
    image: "assets/images/creator-olor-helado.jpg",
    link: "https://www.instagram.com/p/DWHMtDFDglO/",
    brand: "@gevarola",
    stats: [{ value: "2K", en: "views", es: "views" }, { value: "50", en: "engagement", es: "engagement" }],
    en: "Conversational explainer built around a playful dilemma: does ice cream actually have a smell?",
    es: "Video explicativo conversacional, construido sobre un dilema divertido: ¿el helado tiene olor o no?"
  },
  {
    image: "assets/images/creator-entrevistas.jpg",
    link: "https://www.instagram.com/reel/C9VLilEO2Bb/",
    brand: "Bitso · 10 años",
    stats: [{ value: "3.1K", en: "views", es: "views" }, { value: "130", en: "engagement", es: "engagement" }],
    en: "Ran on-camera user interviews at Bitso's 10th-anniversary event.",
    es: "Encargado de llevar a cabo las entrevistas a usuarios en el evento de los 10 años de Bitso."
  }
];
