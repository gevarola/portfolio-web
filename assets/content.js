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
  anthropic: 'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z',
  mail: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.135.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
};

const SITE = {
en: {
  meta: { title: "Germán Rojas La Valle · Content & Social Media Manager" },
  nav: { about: "About", work: "Work", creator: "As a creator", contact: "Contact" },
  intro: {
    roleLine: "Social Media Manager · Content Manager · Content Creator",
    title: "Hi, I'm Germán. I help brands and creators build content people [[choose to stick around for]].",
    subtitle: "4+ years leading content strategy across LATAM markets. Today, freelancing full-time for brands across the board.",
    ctaWork: "View case studies",
    ctaContact: "Get in touch"
  },
  details: {
    experienceHeading: "Experience",
    experience: [
      { role: "Social Media & Content Manager", org: "Freelance · Independent", period: "Mar 2026 to Present" },
      { role: "Social Media Manager", org: "Bitso · Remote", period: "Apr 2024 to Mar 2026" },
      { role: "Social Media Strategist", org: "Bitso · Remote", period: "Apr 2023 to Apr 2024" },
      { role: "Social Media Analyst & Community Manager", org: "Bitso · Remote", period: "Oct 2021 to Apr 2023" },
      { role: "Community & Social Media Manager", org: "Freelance · Independent", period: "Jan 2019 to Oct 2021" }
    ],
    educationHeading: "Education",
    education: [
      { name: "Leadership & Innovation Program", org: "UADE", year: "2024" },
      { name: "Blockchain & Crypto Certificate", org: "University of Michigan", year: "2021" },
      { name: "BA in Labor Relations", org: "Universidad de Buenos Aires", year: "2016" }
    ],
    languagesLabel: "Languages",
    languages: "Spanish (native) · English (C1) · Portuguese (advanced)",
    toolsHeading: "Tools",
    platformsLabel: "Platforms",
    toolsLabel: "Software",
    cvButtonEs: "Download CV (Spanish)",
    cvButtonEn: "Download CV (English)"
  },
  pillars: {
    eyebrow: "What I do",
    items: [
      { num: "01", title: "Social Media Manager", body: "I keep the lights on: calendars, growth, agencies, numbers. The unglamorous stuff that makes everything else possible." },
      { num: "02", title: "Content Manager", body: "I decide what gets said before anyone writes a word. Voice, pillars, campaigns: the plan nobody sees but everyone feels." },
      { num: "03", title: "Content Creator", body: "Camera, mic, edit. I make the thing people actually watch, not just scroll past." },
      { num: "04", title: "Copywriting", body: "Words that don't sound like a press release. Scripts, captions, campaigns, written to be read, not skimmed." },
      { num: "05", title: "Video Editor", body: "Timelines, cuts, pacing. The invisible half-second that decides if someone keeps watching or swipes away." },
      { num: "06", title: "AI Automation", body: "I build the pipelines and prompts that handle the repetitive part for me. Scraping, reporting, workflows: less manual work, same output." },
      { num: "07", title: "Web Development", body: "This site, client landing pages, quick internal tools: I build what I need instead of waiting on a developer." },
      { num: "08", title: "Community Management", body: "Replies, DMs, comment sections. The direct line between the brand and the people actually watching it." }
    ]
  },
  work: {
    heading: "Work",
    tabCases: "Big projects",
    tabBrands: "Accounts I manage",
    challengeLabel: "The challenge",
    processLabel: "The process",
    resultLabel: "The result",
    strategicLabel: "The strategic thinking",
    learnedLabel: "What we learned",
    viewCase: "View case study",
    close: "Close"
  },
  otherWork: {
    body: "I also handle content, video editing and community management for these brands. Some are just getting started, others are already established — tap a logo to see the actual reels and posts I made for each one.",
    cta: "See the work",
    viewProfile: "View Instagram profile",
    piecesLabel: "pieces",
    empty: "New content for this account is on its way. In the meantime, check out the full profile.",
    featuredHeading: "Featured content",
    pendingLabel: "Coming soon"
  },
  creator: {
    eyebrow: "As a creator",
    title: "I also step in front of the camera.",
    body: "Beyond strategy, I write, shoot and edit my own short-form video, as @gevarola. Same instinct for what stops the scroll, just from the other side of the camera.",
    watchLabel: "Watch"
  },
  ai: {
    eyebrow: "Self-Designed Tracking Tool",
    title: "I also build the tools.",
    body: "Beyond strategy and content, I build the tools that support it. This reporting pipeline is something I designed and built myself from scratch, using AI (Claude Code) to do it. It scrapes Instagram data, analyzes it, and generates a monthly dashboard automatically for clients like Tempo Café and Prato Autos. No manual copy-pasting into slides, no agency retainer for reporting.",
    ctaLabel: "View live dashboard"
  },
  webdev: {
    eyebrow: "Web Development",
    body: "\"De Guerrero a Guerrero\" is a live sports news site for Rosario Central fans that I built end-to-end with Claude Code. I'm upfront that AI wrote the code, but building and shipping a real site taught me the general concepts behind web development: structure, hosting, and how the pieces fit together. Scores, upcoming fixtures, league standings and head-to-head history all update automatically, no manual data entry. It's already live with 3,000+ visits.",
    ctaLabel: "View live site"
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your content.",
    body: "Open to freelance content strategy work, full-time roles, and brand collaborations as a creator.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    githubLabel: "GitHub",
    footer: "Built and designed by Germán Rojas La Valle."
  }
},
es: {
  meta: { title: "Germán Rojas La Valle · Content & Social Media Manager" },
  nav: { about: "Sobre mí", work: "Trabajo", creator: "Como creador", contact: "Contacto" },
  intro: {
    roleLine: "Social Media Manager · Content Manager · Content Creator",
    title: "Hola, soy Germán. Ayudo a marcas y creadores a construir contenido que la gente [[elige quedarse a ver]].",
    subtitle: "Más de 4 años liderando estrategia de contenido en mercados de LATAM. Hoy, freelance full-time para marcas de todo tipo.",
    ctaWork: "Ver casos de éxito",
    ctaContact: "Escribime"
  },
  details: {
    experienceHeading: "Experiencia",
    experience: [
      { role: "Social Media & Content Manager", org: "Freelance · Independiente", period: "Mar 2026 a Presente" },
      { role: "Social Media Manager", org: "Bitso · Remoto", period: "Abr 2024 a Mar 2026" },
      { role: "Social Media Strategist", org: "Bitso · Remoto", period: "Abr 2023 a Abr 2024" },
      { role: "Social Media Analyst & Community Manager", org: "Bitso · Remoto", period: "Oct 2021 a Abr 2023" },
      { role: "Community & Social Media Manager", org: "Freelance · Independiente", period: "Ene 2019 a Oct 2021" }
    ],
    educationHeading: "Educación",
    education: [
      { name: "Programa de Liderazgo e Innovación", org: "UADE", year: "2024" },
      { name: "Certificado Blockchain & Cripto", org: "Universidad de Michigan", year: "2021" },
      { name: "Licenciatura en Relaciones del Trabajo", org: "Universidad de Buenos Aires", year: "2016" }
    ],
    languagesLabel: "Idiomas",
    languages: "Español (nativo) · Inglés (C1) · Portugués (avanzado)",
    toolsHeading: "Herramientas",
    platformsLabel: "Plataformas",
    toolsLabel: "Software",
    cvButtonEs: "Descargar CV (español)",
    cvButtonEn: "Descargar CV (inglés)"
  },
  pillars: {
    eyebrow: "Qué hago",
    items: [
      { num: "01", title: "Social Media Manager", body: "Mantengo todo funcionando: calendarios, crecimiento, agencias, números. Lo poco glamoroso que hace posible todo lo demás." },
      { num: "02", title: "Content Manager", body: "Decido qué se dice antes de que alguien escriba una palabra. Voz, pilares, campañas: el plan que nadie ve pero todos sienten." },
      { num: "03", title: "Content Creator", body: "Cámara, micrófono, edición. Hago lo que la gente realmente mira, no lo que scrollea de largo." },
      { num: "04", title: "Copywriting", body: "Palabras que no suenan a gacetilla de prensa. Guiones, captions, campañas, escritas para leerse, no para pasarlas de largo." },
      { num: "05", title: "Editor de Video", body: "Timelines, cortes, ritmo. El medio segundo invisible que decide si alguien se queda mirando o desliza al siguiente." },
      { num: "06", title: "AI Automation", body: "Armo los pipelines y prompts que hacen la parte repetitiva por mí. Scraping, reportes, flujos de trabajo: menos trabajo manual, el mismo resultado." },
      { num: "07", title: "Desarrollo Web", body: "Esta web, landings de clientes, herramientas internas rápidas: construyo lo que necesito en vez de esperar a un desarrollador." },
      { num: "08", title: "Community Management", body: "Respuestas, DMs, comentarios. La línea directa entre la marca y la gente que realmente la está mirando." }
    ]
  },
  work: {
    heading: "Trabajo",
    tabCases: "Proyectos grandes",
    tabBrands: "Cuentas que manejo",
    challengeLabel: "El desafío",
    processLabel: "El proceso",
    resultLabel: "El resultado",
    strategicLabel: "El pensamiento estratégico",
    learnedLabel: "Qué aprendimos",
    viewCase: "Ver caso de éxito",
    close: "Cerrar"
  },
  otherWork: {
    body: "También llevo el contenido, la edición de video y el community management de estas marcas. Algunas recién están arrancando, otras ya están asentadas — tocá un logo para ver la info y los reels y posts reales que hice para cada una.",
    cta: "Ver el trabajo",
    viewProfile: "Ver perfil de Instagram",
    piecesLabel: "piezas",
    empty: "El contenido de esta cuenta está en camino. Mientras tanto, mirá el perfil completo.",
    featuredHeading: "Contenido destacado",
    pendingLabel: "Próximamente"
  },
  creator: {
    eyebrow: "Como creador",
    title: "También me pongo delante de cámara.",
    body: "Además de la estrategia, escribo, grabo y edito mis propios videos cortos, como @gevarola. El mismo instinto de qué hace que alguien deje de scrollear, pero del otro lado de la cámara.",
    watchLabel: "Ver"
  },
  ai: {
    eyebrow: "Tracking Tool, Diseño Propio",
    title: "También construyo las herramientas.",
    body: "Además de estrategia y contenido, construyo las herramientas que lo sostienen. Este pipeline de reportes lo diseñé y armé yo desde cero, usando IA (Claude Code) para hacerlo. Scrapea datos de Instagram, los analiza, y genera un dashboard mensual automáticamente para clientes como Tempo Café y Prato Autos. Sin copiar y pegar a mano en un slide, sin depender de una agencia para el reporte.",
    ctaLabel: "Ver dashboard en vivo"
  },
  webdev: {
    eyebrow: "Desarrollo Web",
    body: "\"De Guerrero a Guerrero\" es una web de noticias deportivas para hinchas de Rosario Central que armé de punta a punta con Claude Code. Soy transparente en que el código lo escribió la IA, pero construir y publicar una web real me enseñó los conceptos generales del desarrollo web: estructura, hosting, y cómo encaja cada pieza. Resultados, próximos partidos, tabla de posiciones e historial se actualizan automáticamente, sin carga manual de datos. Ya está en vivo con más de 3.000 visitas.",
    ctaLabel: "Ver sitio en vivo"
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de tu contenido.",
    body: "Abierto a proyectos freelance de estrategia de contenido, roles full-time, y colaboraciones de marca como creador.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    githubLabel: "GitHub",
    footer: "Diseñado y construido por Germán Rojas La Valle."
  }
}
};

const LINKS = {
  email: "germanc.rojaslv@gmail.com",
  linkedin: "https://www.linkedin.com/in/germanrlv/",
  instagram: "https://www.instagram.com/gevarola/",
  github: "https://github.com/gevarola",
  cvEs: "assets/files/German_Rojas_La_Valle_CV_ES.pdf",
  cvEn: "assets/files/German_Rojas_La_Valle_CV_EN.pdf",
  tempoDashboard: "https://tempo-cafe-seven.vercel.app/#agosto",
  pratoDashboard: "https://prato-autos.vercel.app/",
  guerreroSite: "https://www.deguerreroaguerrero.site/"
};

const AI_TOOLS = [
  { name: "Tempo Café", image: "assets/images/ai-tempo-hero.png", link: LINKS.tempoDashboard },
  { name: "Prato Autos", image: "assets/images/ai-prato-hero.png", link: LINKS.pratoDashboard }
];

const WEBDEV_PROJECT = {
  name: "De Guerrero a Guerrero",
  image: "assets/images/case-guerrero-hero.png",
  link: LINKS.guerreroSite,
  stats: [
    { value: "+3.000", en: "visits since launch", es: "visitas desde el lanzamiento" },
    { value: "100%", en: "automated live data", es: "datos en vivo automatizados" },
    { value: "Claude Code", en: "wrote the code", es: "escribió el código" }
  ]
};

const CASES = [
  {
    id: "havanna-mundial",
    client: "havanna",
    tag: { en: "Community Management & Copywriting", es: "Community Management & Copywriting" },
    image: "assets/images/case-havanna-hero.jpg",
    image2: "assets/images/case-havanna-tweet.jpg",
    org: "Havanna",
    period: "2026",
    stats: [
      { value: "+39M", en: "views in 45 days", es: "de views en 45 días" },
      { value: "+512K", en: "engagement", es: "de engagement" },
      { value: "130+", en: "pieces of content produced", es: "piezas de contenido producidas" }
    ],
    en: {
      title: "Havanna x Leo",
      challenge: "Havanna partnered with Lionel Messi during the 2026 World Cup. Success meant capturing a fast-moving, high-emotion national conversation in real time, not just publishing a fixed calendar, while protecting a beloved 100-year-old brand from ever feeling opportunistic.",
      process: [
        "Ran real-time content and community strategy across Instagram, TikTok, Facebook and X for 45+ days, from campaign launch through the tournament final.",
        "Rode cultural moments as they happened (Messi's birthday, the pre-final tension, the final whistle), turning each into timely content instead of sticking to a rigid calendar.",
        "Tracked audience sentiment daily and adjusted tone in real time, moderating conversation through emotionally sensitive moments like product doubts, pricing questions and the match result.",
        "Balanced two roles for the brand at once, cheering as a fan and building awareness as a marketer, without ever reading as opportunistic."
      ],
      result: "39M+ views, 512K+ engagement and 130+ pieces of content in 45 days. Sentiment stayed strongly positive throughout the campaign, reaching 100% positive in the emotional aftermath of the final, with the campaign becoming one of the most talked-about brand moments of the tournament in Argentina.",
      strategicThinking: "The rule for balancing \"fan\" and \"marketer\": every post had to feel genuine first, brand second.",
      whatWeLearned: "The closer a brand gets to its users, the more engagement and the more good buzz it generates."
    },
    es: {
      title: "Havanna x Leo",
      challenge: "Havanna se asoció con Lionel Messi durante el Mundial 2026. El éxito significaba capturar en tiempo real una conversación nacional de alta emocionalidad y ritmo acelerado, no solo publicar un calendario fijo, cuidando a la vez a una marca centenaria y querida de sonar oportunista.",
      process: [
        "Llevé la estrategia de contenido y comunidad en tiempo real en Instagram, TikTok, Facebook y X durante más de 45 días, desde el lanzamiento de la campaña hasta la final del torneo.",
        "Capitalizamos los momentos culturales a medida que sucedían (el cumpleaños de Messi, la previa a la final, el pitazo final), convirtiendo cada uno en contenido oportuno en vez de seguir un calendario rígido.",
        "Trackeamos el sentimiento de la audiencia día a día y ajustamos el tono en tiempo real, moderando la conversación en momentos emocionalmente sensibles como dudas de producto, consultas de precio y el resultado del partido.",
        "Balanceamos dos roles a la vez para la marca, alentar como hincha y generar awareness como marketer, sin que se sintiera oportunista en ningún momento."
      ],
      result: "+39M de visualizaciones, +512K de engagement y +130 piezas de contenido en 45 días. El sentimiento se mantuvo fuertemente positivo durante toda la campaña, llegando a 100% positivo en el after emocional de la final, y la campaña se convirtió en uno de los momentos de marca más comentados del torneo en Argentina.",
      strategicThinking: "La regla para balancear \"hincha\" y \"marketer\": todo posteo tenía que sentirse genuino primero, marca después.",
      whatWeLearned: "Cuanto más cercana es la marca con los usuarios, más engagement y ruido positivo genera."
    }
  },
  {
    id: "storytelling-culture",
    client: "bitso",
    tag: { en: "Culture & Storytelling", es: "Cultura & Storytelling" },
    image: "assets/images/case-storytelling.jpg",
    imgPos: "top",
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
        "Identified high-profile cultural moments (a record-breaking Pokémon card auction, the economics of Oscar campaigns, the cost of a Super Bowl ad) as entry points to explain financial concepts.",
        "Built each piece around a hook the audience already cared about, then connected it to a financial insight they hadn't considered.",
        "Designed content to be genuinely educational, not promotional, positioning Bitso as a trusted voice in financial literacy, not just crypto."
      ],
      result: "Made complex financial concepts accessible and shareable by anchoring them to moments people were already talking about, proving the best entry point to financial education is a story the audience already knows, not a definition.",
      strategicThinking: "We anchored financial education to pop-culture moments instead of a traditional explainer format, because the audience was already emotionally hooked, which lowered the resistance to \"learning something.\"",
      whatWeLearned: "At first we wanted to spell out the \"financial insight\" clearly in every piece. It worked better once we kept it subtler and the content felt more like culture than class. We learned to under-explain instead of over-explain."
    },
    es: {
      title: "Storytelling financiero a través de la cultura",
      challenge: "Los conceptos de cripto y finanzas son inherentemente complejos, y el contenido educativo tradicional suele perder a la audiencia antes de llegar al punto.",
      process: [
        "Identificamos momentos culturales de alto perfil (una subasta récord de una carta Pokémon, la economía detrás de las campañas al Oscar, el costo de un spot en el Super Bowl) como puerta de entrada para explicar conceptos financieros.",
        "Construimos cada pieza alrededor de un gancho que a la audiencia ya le importaba, y lo conectamos con un insight financiero que no habían considerado.",
        "Diseñamos contenido genuinamente educativo, no promocional, posicionando a Bitso como una voz de confianza en educación financiera, no solo en cripto."
      ],
      result: "Hicimos que conceptos financieros complejos fueran accesibles y compartibles, ancládolos a momentos de los que la gente ya estaba hablando, demostrando que la mejor puerta de entrada a la educación financiera es una historia que la audiencia ya conoce, no una definición.",
      strategicThinking: "Anclamos educación financiera a momentos de cultura pop en vez de un formato explicativo tradicional, porque la audiencia ya estaba emocionalmente enganchada, lo que bajaba la resistencia a \"aprender algo\".",
      whatWeLearned: "Al principio queríamos remarcar bien el \"insight financiero\" en cada pieza. Funcionó mejor cuando lo dejamos más sutil y el contenido se sintió más cultura que clase. Aprendimos a subexplicar en vez de sobreexplicar."
    }
  },
  {
    id: "influencer-marketing",
    client: "bitso",
    tag: { en: "Influencer Marketing", es: "Influencer Marketing" },
    image: "assets/images/case-influencer-1.jpg",
    image2: "assets/images/case-influencer-2.jpg",
    org: "Bitso",
    period: "2025 to 2026",
    stats: [
      { value: "120+", en: "videos published", es: "videos publicados" },
      { value: "+4M", en: "views", es: "de views" },
      { value: "+500K", en: "engagement", es: "de engagement" }
    ],
    en: {
      title: "Influencer Marketing Program",
      challenge: "Bitso was launching Bitso Stocks, letting LATAM users invest in US stocks, but had to reach an audience well beyond its existing crypto community, for a product category most users had never associated with the brand.",
      process: [
        "Led the influencer and UGC strategy for the launch alongside a specialized agency.",
        "Sourced and vetted 20 influencers and 80+ UGC creators across Instagram, TikTok and YouTube, with creative direction and final approval on every profile.",
        "Managed end-to-end execution: briefs, content approvals, posting timelines and brand-guideline compliance across 120+ videos.",
        "Tracked performance via per-creator UTM links, enabling clear attribution and data-driven decisions on renewals and budget."
      ],
      result: "Built a scalable creator-program framework, from briefing templates to UTM tracking, that's now replicable for future product launches.",
      strategicThinking: "We combined big influencers with 80+ UGC creators instead of going for reach alone, because the challenge wasn't visibility. It was credibility, for an audience that never associated Bitso with investing in stocks.",
      whatWeLearned: "Budget started out weighted toward the highest-reach profiles. UTM data showed mid-tier profiles converted better. We reallocated on the fly, and kept it as a lesson for the next launch."
    },
    es: {
      title: "Programa de Influencer Marketing",
      challenge: "Bitso lanzaba Bitso Stocks, que permite a usuarios de LATAM invertir en acciones de EE.UU., pero tenía que alcanzar una audiencia mucho más amplia que su comunidad cripto, para una categoría de producto que la mayoría no asociaba con la marca.",
      process: [
        "Lideré la estrategia de influencers y UGC para el lanzamiento junto a una agencia especializada.",
        "Sourceamos y evaluamos 20 influencers y +80 creadores UGC en Instagram, TikTok y YouTube, con dirección creativa y aprobación final de cada perfil.",
        "Gestioné la ejecución de punta a punta: briefs, aprobaciones de contenido, cronograma de publicación y cumplimiento de lineamientos de marca en +120 videos.",
        "Trackeamos performance con links UTM por creador, permitiendo atribución clara y decisiones basadas en datos sobre renovaciones y presupuesto."
      ],
      result: "Construimos un framework de programa de creadores escalable, desde templates de briefing hasta tracking con UTM, replicable para futuros lanzamientos de producto.",
      strategicThinking: "Combinamos influencers grandes con 80+ creadores UGC en vez de ir solo por alcance, porque el desafío no era visibilidad. Era credibilidad para un público que nunca asoció a Bitso con inversión en acciones.",
      whatWeLearned: "El presupuesto arrancó más cargado hacia los perfiles de mayor alcance. La data de UTM mostró que los perfiles medianos convertían mejor. Reasignamos el presupuesto sobre la marcha y lo dejamos como aprendizaje para el próximo lanzamiento."
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
      challenge: "User interviews showed a clear demand for more educational content to make informed financial decisions: a gap Bitso's own channels weren't filling.",
      process: [
        "Identified and partnered with 4 Argentine creators with established, trusted crypto and finance audiences.",
        "Co-produced an introductory educational video series, scripting and briefing each creator so the content felt genuinely useful, not branded messaging in disguise.",
        "Published natively on each creator's own channel and cross-promoted on Bitso's accounts, then repurposed each episode into 4–5 short-form clips."
      ],
      result: "Positioned Bitso in financial-education conversations through voices users already trusted, reaching audiences its own channels hadn't engaged before.",
      strategicThinking: "We worked with creators instead of doing it all in the brand's own voice, because the trust was already built on their side: the audience listens to them on financial topics, not (yet) to an exchange.",
      whatWeLearned: "We started out briefing very tightly to protect the brand message. The content performed better once we gave creators more creative freedom within guidelines. We learned to loosen the grip."
    },
    es: {
      title: "Educación financiera con creadores de contenido",
      challenge: "Las entrevistas a usuarios mostraron una demanda clara de más contenido educativo para tomar decisiones financieras informadas: un vacío que los canales propios de Bitso no cubrían.",
      process: [
        "Identificamos y armamos alianza con 4 creadores argentinos con audiencias de cripto y finanzas ya establecidas y de confianza.",
        "Co-producimos una serie de video educativa introductoria, escribiendo el guion y briefeando a cada creador para que el contenido se sintiera genuinamente útil, no mensaje de marca disfrazado.",
        "Publicamos en formato nativo en el canal de cada creador y lo cross-promocionamos en las cuentas de Bitso, después recortamos cada episodio en 4-5 clips cortos."
      ],
      result: "Posicionamos a Bitso en las conversaciones de educación financiera a través de voces en las que los usuarios ya confiaban, llegando a audiencias que los canales propios no habían alcanzado antes.",
      strategicThinking: "Trabajamos con creadores en vez de hacerlo todo con la voz de la marca porque la confianza ya estaba construida del lado de ellos: la audiencia los escucha a ellos en temas financieros, no (todavía) a un exchange.",
      whatWeLearned: "Arrancamos briefeando muy de cerca para proteger el mensaje de marca. El contenido funcionó mejor cuando les dimos más libertad creativa dentro de los lineamientos. Aprendimos a soltar el control."
    }
  },
  {
    id: "hugging-users",
    client: "bitso",
    tag: { en: "Educational Content", es: "Contenido Educativo" },
    image: "assets/images/case-hugging-users.jpg",
    org: "Bitso",
    period: "2023 to 2026",
    stats: [
      { value: "+2M", en: "impressions", es: "de impresiones" },
      { value: "+400K", en: "engagement", es: "de engagement" },
      { value: "15+", en: "how-to videos & guides produced", es: "videos y guías how-to producidos" }
    ],
    en: {
      title: "Hugging Our Users",
      challenge: "Customer support was getting a high volume of repetitive tickets: questions users could have solved themselves with the right content.",
      process: [
        "Mapped the most frequent questions across social channels to find users' real pain points.",
        "Designed a new educational content branch: 15+ how-to videos and carousel guides, from buying crypto for the first time to setting up a wallet.",
        "Published natively across Instagram and TikTok, written to sound like a friend explaining, not a support article."
      ],
      result: "Built a functional content pillar with a double impact: real, on-demand answers for users, and less operational load for the support team, as common questions got solved by content before they became tickets.",
      strategicThinking: "We chose social content over just improving the help center, because that's where users were already paying attention: a video feels like a friend explaining, a support article doesn't.",
      whatWeLearned: "We expected each video to directly lower ticket volume on that specific topic. Some did, but the bigger real impact was on brand trust. We learned to measure that by sentiment too, not just tickets avoided."
    },
    es: {
      title: "Hugging Our Users",
      challenge: "El equipo de soporte recibía un volumen alto de tickets repetitivos: preguntas que los usuarios podrían haber resuelto solos con el contenido correcto.",
      process: [
        "Mapeamos las preguntas más frecuentes en redes para identificar los verdaderos puntos de dolor de los usuarios.",
        "Diseñamos una nueva rama de contenido educativo: +15 videos how-to y guías en carrusel, desde comprar cripto por primera vez hasta configurar una wallet.",
        "Publicamos en formato nativo en Instagram y TikTok, escrito para sonar como un amigo explicando, no como un artículo de soporte."
      ],
      result: "Construimos un pilar de contenido funcional con doble impacto: respuestas reales y a demanda para los usuarios, y menos carga operativa para el equipo de soporte, porque las preguntas comunes se resolvían con contenido antes de convertirse en tickets.",
      strategicThinking: "Elegimos contenido en redes en vez de mejorar solo la central de ayuda, porque ahí es donde el usuario ya presta atención: un video se siente como \"un amigo explicando\", un artículo de soporte no.",
      whatWeLearned: "Esperábamos que cada video bajara directamente el volumen de tickets sobre ese tema puntual. Algunos lo hicieron, pero el impacto real más grande fue en confianza de marca. Aprendimos a medir esto también por sentimiento, no solo por tickets evitados."
    }
  },
  {
    id: "brand-expansion",
    client: "bitso",
    tag: { en: "Growth", es: "Growth" },
    image: "assets/images/Brand expansion Latam.webp",
    org: "Bitso",
    period: "2022 to 2026",
    stats: [
      { value: "60K+", en: "combined followers built from zero", es: "seguidores combinados construidos desde cero" },
      { value: "40–50", en: "pieces of content / week across 4 markets", es: "piezas de contenido / semana en 4 mercados" },
      { value: "10+", en: "person hybrid team coordinated", es: "personas en el equipo híbrido coordinado" }
    ],
    en: {
      title: "Brand expansion in LATAM",
      challenge: "Bitso had consolidated channels in Mexico and Brazil, but no dedicated presence in Argentina or Colombia, and content volume and consistency across markets was uneven.",
      process: [
        "Built the Argentina and Colombia channels from scratch: architecture, localized tone of voice, and a market-specific editorial calendar, going from zero to consistent weekly publishing in both.",
        "Coordinated a hybrid team (in-house + agency) to sustain production across all 4 markets simultaneously, publishing on Instagram, X and Facebook every week without interruption.",
        "In 2025, led the content side of Bitso's global rebrand for the region, rebuilding messaging architecture, tone of voice and creative guidelines from scratch."
      ],
      result: "Took Bitso from operating in 2 markets to a full, owned content strategy across 4, with a unified tone of voice and content pillars aligned to business goals in every market and channel.",
      strategicThinking: "We went with a hybrid team (in-house + agency) instead of fully outsourcing or keeping it fully in-house: the agency gave us production speed, while brand-voice control stayed in-house. And we built Argentina and Colombia from scratch instead of translating Mexico and Brazil's content, because the crypto conversation is different in every market.",
      whatWeLearned: "At first we assumed one unified LATAM tone would work across all 4 markets. It didn't. We had to break the single playbook and let each market find its own voice within the same guidelines."
    },
    es: {
      title: "Expansión de marca en LATAM",
      challenge: "Bitso tenía canales consolidados en México y Brasil, pero ninguna presencia dedicada en Argentina o Colombia, y el volumen y la consistencia de contenido entre mercados era despareja.",
      process: [
        "Construimos los canales de Argentina y Colombia desde cero: arquitectura, tono de voz localizado y un calendario editorial por mercado, pasando de cero a publicación semanal consistente en ambos.",
        "Coordinamos un equipo híbrido (interno + agencia) para sostener la producción en los 4 mercados en simultáneo, publicando en Instagram, X y Facebook todas las semanas sin interrupciones.",
        "En 2025, lideré el lado de contenido del rebranding global de Bitso para la región, reconstruyendo la arquitectura de mensajes, el tono de voz y los lineamientos creativos desde cero."
      ],
      result: "Llevamos a Bitso de operar en 2 mercados a una estrategia de contenido propia en 4, con un tono de voz y pilares de contenido unificados y alineados a los objetivos de negocio en cada mercado y canal.",
      strategicThinking: "Optamos por un equipo híbrido (interno + agencia) en vez de tercerizar todo o mantenerlo 100% interno: la agencia daba velocidad de producción, pero el control de brand voice se mantenía adentro. Y construimos Argentina y Colombia desde cero en vez de \"traducir\" el contenido de México/Brasil, porque la conversación cripto es distinta en cada mercado.",
      whatWeLearned: "Al principio asumimos que un tono de marca único para toda LATAM iba a funcionar en los 4 mercados. No fue así. Tuvimos que romper el playbook único y dejar que cada mercado tuviera su propia voz dentro de los mismos lineamientos."
    }
  }
];

const PLATFORMS = [
  { name: "Instagram", icon: "instagram" },
  { name: "TikTok", icon: "tiktok" },
  { name: "X", icon: "x" },
  { name: "Facebook", icon: "facebook" },
  { name: "YouTube", icon: "youtube" }
];

const TOOLS = [
  { name: "Notion", icon: "notion" },
  { name: "Figma", icon: "figma" },
  { name: "Canva", icon: "canva" },
  { name: "Buffer", icon: "buffer" },
  { name: "Google Workspace", icon: "google" },
  { name: "ChatGPT", icon: "openai" },
  { name: "Claude", icon: "anthropic" },
  { name: "CapCut", img: "assets/images/logo-capcut.jpg" },
  { name: "Sprout Social", img: "assets/images/logo-sproutsocial.png" },
  { name: "Monday", img: "assets/images/logo-monday.png" }
];

const TICKER_KEYWORDS = {
  en: ["Content Strategy", "Social Media Management", "Copywriting", "Brand Voice", "Influencer Marketing", "Community Management", "Content Creation", "Editorial Planning", "Campaign Direction", "Creator Partnerships", "Crisis Communication", "Video Editing"],
  es: ["Estrategia de Contenido", "Social Media Management", "Copywriting", "Brand Voice", "Influencer Marketing", "Community Management", "Creación de Contenido", "Planificación Editorial", "Dirección Creativa", "Alianzas con Creadores", "Comunicación de Crisis", "Edición de Video"]
};

const OTHER_CLIENTS = [
  {
    id: "fruta-noble",
    logo: "assets/images/logo-fruta-noble-client.png",
    name: "Fruta Noble",
    link: "https://www.instagram.com/fruta.noble/",
    stage: { en: "Consolidating", es: "Consolidando" },
    stats: [{ value: "+20", en: "pieces", es: "piezas" }, { value: "+50K", en: "views", es: "views" }],
    description: {
      en: "I run the Instagram strategy and content for Fruta Noble: I script, shoot and edit the reels and posts, appear on camera in some of them, and manage the day-to-day community.",
      es: "Llevo la estrategia y el contenido de Instagram de Fruta Noble: escribo el guion, grabo y edito los reels y posts, apareciendo en cámara en algunos, además de gestionar el día a día de la comunidad."
    },
    pendingSlots: 0
  },
  {
    id: "tempo-cafe",
    logo: "assets/images/logo-tempo-cafe-client.jpg",
    name: "Tempo Café",
    link: "https://www.instagram.com/tempocafe_/",
    stage: { en: "Consolidating", es: "Consolidando" },
    stats: [{ value: "+40", en: "pieces", es: "piezas" }, { value: "+70K", en: "views", es: "views" }],
    description: {
      en: "I run the Instagram strategy and content for Tempo Café: I script, shoot and edit the reels and posts, appear on camera in some of them, and manage the day-to-day community.",
      es: "Llevo la estrategia y el contenido de Instagram de Tempo Café: escribo el guion, grabo y edito los reels y posts, apareciendo en cámara en algunos, además de gestionar el día a día de la comunidad."
    },
    pendingSlots: 0
  },
  {
    id: "criscar",
    logo: "assets/images/logo-criscar-client.jpeg",
    name: "Frigorífico Criscar",
    link: "https://www.instagram.com/frigorifico.criscar.campana/",
    stage: { en: "Consolidating", es: "Consolidando" },
    stats: [{ value: "+30", en: "pieces", es: "piezas" }, { value: "+300K", en: "views", es: "views" }],
    description: {
      en: "Content creator for Frigorífico Criscar: I come up with the ideas, write the scripts and bring them to life, on camera when the piece needs a face.",
      es: "Creador de contenido de Frigorífico Criscar: ideo los conceptos, escribo los guiones y los llevo a la pantalla, poniendo la cara cuando la pieza lo pide."
    },
    pendingSlots: 0
  },
  {
    id: "prato-autos",
    logo: "assets/images/logo-prato-autos.png",
    name: "Prato Autos",
    link: "https://www.instagram.com/prato.autos/",
    stage: { en: "Established & growing", es: "Marca asentada" },
    stats: [{ value: "+40", en: "pieces", es: "piezas" }, { value: "+2M", en: "views", es: "views" }],
    description: {
      en: "Social media manager for Prato Autos, a personal brand: I define the content strategy, drive its growth on Instagram and come up with the ideas and scripts, then handle production and the day-to-day community.",
      es: "Social media manager de Prato Autos, una marca personal: defino la estrategia de contenido, impulso su crecimiento en Instagram y ideo los conceptos y guiones, además de la producción y la comunidad del día a día."
    },
    pendingSlots: 0
  }
];

const CREATOR_ITEMS = [
  {
    image: "assets/images/creator-bitso-xstocks.webp",
    link: "https://www.instagram.com/p/DY2_VAsla0W/",
    brand: "@bitso.ar",
    type: { en: "New product announcement", es: "Anuncio de producto" },
    stats: [{ value: "6.3M", en: "views", es: "views" }, { value: "+6K", en: "engagement", es: "engagement" }],
    en: "Announced Bitso's xStocks launch from my own account — the same campaign as the case study.",
    es: "Anuncié el lanzamiento de xStocks de Bitso desde mi cuenta, la misma campaña del caso de estudio."
  },
  {
    image: "assets/images/creator-criscar.webp",
    link: "https://www.instagram.com/reel/DXE8WY8ESmy/",
    brand: "@frigorifico.criscar.campana",
    client: "criscar",
    type: { en: "Account launch", es: "Lanzamiento de cuenta" },
    stats: [{ value: "84K", en: "views", es: "views" }, { value: "500", en: "engagement", es: "engagement" }],
    en: "Introductory plant tour to launch Frigorífico Criscar's account.",
    es: "Recorrida por la planta para lanzar la cuenta de Frigorífico Criscar."
  },
  {
    image: "assets/images/creator-criscar-2.jpg",
    link: "https://www.instagram.com/reel/DbawF4TFGFS/",
    brand: "@frigorifico.criscar.campana",
    client: "criscar",
    type: { en: "Trend Humor", es: "Trend Humor" },
    stats: [{ value: "+120K", en: "views", es: "views" }, { value: "99", en: "likes", es: "me gusta" }, { value: "4", en: "comments", es: "comentarios" }],
    en: "Humor bit contrasting an absurd 1-star review with the shop's real 5-star reviews.",
    es: "Video de humor que contrasta una reseña de 1 estrella absurda con las reseñas reales de 5 estrellas."
  },
  {
    image: "assets/images/creator-criscar-3.jpg",
    link: "https://www.instagram.com/reel/DYSw8pbAAEk/",
    brand: "@frigorifico.criscar.campana",
    client: "criscar",
    type: { en: "Trend Humor", es: "Trend Humor" },
    stats: [{ value: "+4.3K", en: "views", es: "views" }, { value: "55", en: "likes", es: "me gusta" }, { value: "6", en: "comments", es: "comentarios" }],
    en: "Humor bit on choosing meat over salad, playing up the shop's meat-first attitude.",
    es: "Video de humor sobre elegir carne antes que ensalada, jugando con la actitud carnívora del local."
  },
  {
    image: "assets/images/creator-criscar-4.jpg",
    link: "https://www.instagram.com/reel/DZFaAmbDpYG/",
    brand: "@frigorifico.criscar.campana",
    client: "criscar",
    type: { en: "Talking head", es: "Frente a cámara" },
    stats: [{ value: "+60K", en: "views", es: "views" }, { value: "43", en: "likes", es: "me gusta" }, { value: "4", en: "comments", es: "comentarios" }],
    en: "Talking-head bit showing how much quality meat a fixed budget buys.",
    es: "Video frente a cámara mostrando cuánta carne de calidad rinde un presupuesto fijo."
  },
  {
    image: "assets/images/creator-tempo-cafe.webp",
    link: "https://www.instagram.com/p/DbYZR8PhEGg/",
    brand: "@tempocafe_",
    client: "tempo-cafe",
    type: { en: "Trend Humor", es: "Trend Humor" },
    stats: [{ value: "+6K", en: "views", es: "views" }, { value: "+250", en: "engagement", es: "engagement" }],
    en: "Comedic trend video made for Tempo Café's account.",
    es: "Video cómico sobre un trend, hecho para la cuenta de Tempo Café."
  },
  {
    image: "assets/images/creator-tempo-cafe-2.jpg",
    link: "https://www.instagram.com/p/DcRD-OpBxC8/",
    brand: "@tempocafe_",
    client: "tempo-cafe",
    type: { en: "In-store moment", es: "Momento en el local" },
    stats: [{ value: "+6K", en: "views", es: "views" }, { value: "102", en: "likes", es: "me gusta" }, { value: "25", en: "comments", es: "comentarios" }],
    en: "Counter scene handing over coffee and a medialuna as a mid-day treat.",
    es: "Escena de mostrador entregando café y medialuna como un mimo para el día."
  },
  {
    image: "assets/images/creator-tempo-cafe-3.jpg",
    link: "https://www.instagram.com/p/DcgrkXWBQG_/",
    brand: "@tempocafe_",
    client: "tempo-cafe",
    type: { en: "Trend Humor", es: "Trend Humor" },
    stats: [{ value: "+4.2K", en: "views", es: "views" }, { value: "203", en: "likes", es: "me gusta" }, { value: "42", en: "comments", es: "comentarios" }],
    en: "In-store humor bit with two team members playing on \"the perfect duo.\"",
    es: "Video de humor en el local con dos del equipo, jugando con la idea del 'dúo perfecto'."
  },
  {
    image: "assets/images/creator-tempo-cafe-4.jpg",
    link: "https://www.instagram.com/p/DbJpLIUhYZC/",
    brand: "@tempocafe_",
    client: "tempo-cafe",
    type: { en: "Talking head", es: "Frente a cámara" },
    stats: [{ value: "3.2K", en: "views", es: "views" }, { value: "171", en: "likes", es: "me gusta" }, { value: "24", en: "comments", es: "comentarios" }],
    en: "Talking-head bit telling the audience to stop scrolling and grab a coffee.",
    es: "Video frente a cámara invitando a dejar de scrollear y pasar por un café."
  },
  {
    image: "assets/images/creator-entrevistas.jpg",
    link: "https://www.instagram.com/reel/C9VLilEO2Bb/",
    brand: "@bitso.ar",
    type: { en: "Interview", es: "Entrevista" },
    stats: [{ value: "3.1K", en: "views", es: "views" }, { value: "130", en: "engagement", es: "engagement" }],
    en: "On-camera user interviews at Bitso's 10th-anniversary event.",
    es: "Entrevistas a usuarios en el evento de los 10 años de Bitso."
  },
  {
    image: "assets/images/creator-bitso-bitcoin.jpg",
    link: "https://www.instagram.com/reel/DDM6G2exlN2/",
    brand: "@bitso.ar",
    type: { en: "Educational video", es: "Video educativo" },
    stats: [{ value: "3K", en: "views", es: "views" }, { value: "80", en: "engagement", es: "engagement" }],
    en: "Reaction video riding a real-time Bitcoin price milestone.",
    es: "Video de reacción aprovechando un hito de precio de Bitcoin en tiempo real."
  },
  {
    image: "assets/images/creator-psicologia-color.jpg",
    link: "https://www.instagram.com/p/DWOzOlJDsih/",
    brand: "@gevarola",
    type: { en: "Talking head", es: "Frente a cámara" },
    stats: [{ value: "2.1K", en: "views", es: "views" }, { value: "80", en: "engagement", es: "engagement" }],
    en: "Talking-head explainer on how color shapes perception.",
    es: "Video frente a cámara sobre cómo los colores influyen en nuestra percepción."
  },
  {
    image: "assets/images/creator-olor-helado.jpg",
    link: "https://www.instagram.com/p/DWHMtDFDglO/",
    brand: "@gevarola",
    type: { en: "Talking head", es: "Frente a cámara" },
    stats: [{ value: "2K", en: "views", es: "views" }, { value: "50", en: "engagement", es: "engagement" }],
    en: "Talking-head explainer on whether ice cream actually has a smell.",
    es: "Video frente a cámara sobre si el helado tiene olor o no."
  },
  {
    image: "assets/images/creator-experta.jpg",
    link: "https://www.instagram.com/p/Dc_tOn8CKGD/",
    brand: "@expertaoficial",
    type: { en: "Talking head", es: "Frente a cámara" },
    stats: [{ value: "+2K", en: "views", es: "views" }, { value: "+70", en: "engagement", es: "engagement" }],
    en: "Talking-head humor bit for Experta Seguros about using a house as loan collateral.",
    es: "Video de humor frente a cámara para Experta Seguros sobre usar una casa como garantía de un préstamo."
  },
  {
    image: "assets/images/creator-fruta-noble.jpg",
    link: "https://www.instagram.com/p/DVqwdxOESsE/",
    brand: "@fruta.noble",
    type: { en: "Collab post", es: "Colaboración" },
    stats: [{ value: "1.9K", en: "views", es: "views" }, { value: "105", en: "engagement", es: "engagement" }],
    en: "Awareness video explaining a wine subscription club with a humor-first tone.",
    es: "Video de awareness explicando un club de vinos, con tono conversacional y humor."
  },
  {
    image: "assets/images/creator-fruta-noble-2.jpg",
    link: "https://www.instagram.com/reel/DY4hxcOOikI/",
    brand: "@fruta.noble",
    client: "fruta-noble",
    type: { en: "Educational tip", es: "Tip educativo" },
    stats: [{ value: "+13K", en: "views", es: "views" }, { value: "87", en: "likes", es: "me gusta" }, { value: "10", en: "comments", es: "comentarios" }],
    en: "Tip on how to hold and pour wine without staining your clothes.",
    es: "Tip sobre cómo sostener y servir vino sin arruinarte la ropa."
  },
  {
    image: "assets/images/creator-fruta-noble-3.jpg",
    link: "https://www.instagram.com/reel/Dayg8MihAVI/",
    brand: "@fruta.noble",
    client: "fruta-noble",
    type: { en: "Humor", es: "Humor" },
    stats: [{ value: "+4K", en: "views", es: "views" }, { value: "111", en: "likes", es: "me gusta" }, { value: "10", en: "comments", es: "comentarios" }],
    en: "Relatable humor bit about wanting wine earlier than you probably should.",
    es: "Video de humor sobre las ganas de tomar vino más temprano de lo que 'deberías'."
  },
  {
    image: "assets/images/creator-fruta-noble-4.jpg",
    link: "https://www.instagram.com/reel/DcMh3Q0hzIa/",
    brand: "@fruta.noble",
    client: "fruta-noble",
    type: { en: "Educational video", es: "Video educativo" },
    stats: [{ value: "+9K", en: "views", es: "views" }, { value: "108", en: "likes", es: "me gusta" }, { value: "0", en: "comments", es: "comentarios" }],
    en: "Explains orange wine and its link to the club's small-producer labels.",
    es: "Explica qué es el vino naranjo y su conexión con los productores chicos del club."
  },
  {
    image: "assets/images/creator-fruta-noble-5.jpg",
    link: "https://www.instagram.com/reel/DZVteLJhacC/",
    brand: "@fruta.noble",
    client: "fruta-noble",
    type: { en: "Educational tip", es: "Tip educativo" },
    stats: [{ value: "+2K", en: "views", es: "views" }, { value: "94", en: "likes", es: "me gusta" }, { value: "6", en: "comments", es: "comentarios" }],
    en: "Answers how long opened wine lasts and how to keep it drinkable.",
    es: "Responde cuánto dura un vino abierto y cómo conservarlo."
  },
  {
    image: "assets/images/creator-prato-autos-1.jpg",
    link: "https://www.tiktok.com/@tomyprat/video/7681708029724691733",
    brand: "@tomyprat",
    client: "prato-autos",
    type: { en: "Vehicle walkaround", es: "Recorrida de auto" },
    stats: [{ value: "+100K", en: "views", es: "views" }, { value: "3642", en: "likes", es: "me gusta" }, { value: "459", en: "comments", es: "comentarios" }],
    en: "Walkaround of a Ford Focus wagon, asking followers their take on the body style.",
    es: "Recorrida de un Ford Focus con baúl, preguntando a los seguidores qué opinan."
  },
  {
    image: "assets/images/creator-prato-autos-2.jpg",
    link: "https://www.tiktok.com/@tomyprat/video/7682475467345120519",
    brand: "@tomyprat",
    client: "prato-autos",
    type: { en: "Listing walkaround", es: "Recorrida de unidad" },
    stats: [{ value: "+50K", en: "views", es: "views" }, { value: "1154", en: "likes", es: "me gusta" }, { value: "84", en: "comments", es: "comentarios" }],
    en: "Quick walkaround of a 2016 Honda CR-V listed for sale.",
    es: "Recorrida corta de una Honda CR-V 2016 en venta."
  },
  {
    image: "assets/images/creator-prato-autos-3.jpg",
    link: "https://www.instagram.com/reel/DcMp7vVp7lU/",
    brand: "@prato.autos",
    client: "prato-autos",
    type: { en: "New inventory", es: "Nuevo ingreso" },
    stats: [{ value: "+15K", en: "views", es: "views" }, { value: "148", en: "likes", es: "me gusta" }, { value: "27", en: "comments", es: "comentarios" }],
    en: "Announces a new Chevrolet Tracker 2024 arrival on the lot.",
    es: "Anuncia el ingreso de una Chevrolet Tracker 2024 a la agencia."
  },
  {
    image: "assets/images/creator-prato-autos-4.jpg",
    link: "https://www.instagram.com/reel/DcefJ0_p4QX/",
    brand: "@prato.autos",
    client: "prato-autos",
    type: { en: "Comparison", es: "Comparación" },
    stats: [{ value: "+12K", en: "views", es: "views" }, { value: "105", en: "likes", es: "me gusta" }, { value: "14", en: "comments", es: "comentarios" }],
    en: "Side-by-side comparison of a Corolla and a Fit, built to drive comments.",
    es: "Comparación lado a lado de un Corolla y una Fit, armada para generar comentarios."
  },
  {
    image: "assets/images/creator-barao.jpg",
    link: "https://www.instagram.com/p/DV1E1XIEVu6/",
    brand: "@barao.argentina",
    type: { en: "Collab post", es: "Colaboración" },
    stats: [{ value: "1.5K", en: "views", es: "views" }, { value: "75", en: "engagement", es: "engagement" }],
    en: "Awareness video for a yerba mate brand, using an everyday sketch as the hook.",
    es: "Video de awareness para una marca de yerbas, con un sketch cotidiano como gancho."
  }
];
