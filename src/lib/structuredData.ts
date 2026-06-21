/* Site-wide constants + schema.org JSON-LD for Ansh Desai's site.
   Single source of truth for the production URL, social profiles, and the
   meta description used across <head>. Injected by BaseLayout. */

// Production domain. Every canonical / og:url / JSON-LD url derives from this
// one constant — keep in sync with `site` in astro.config.mjs.
export const SITE = 'https://anshdesai.me'

export const AUTHOR = 'Ansh Desai'

export const DEFAULT_DESCRIPTION =
  'Ansh Desai is a physics PhD candidate at the University of Oregon searching for light dark matter with the SENSEI and FASER experiments.'

// External identities — used for JSON-LD sameAs and anywhere we link out.
export const SAME_AS = [
  'https://orcid.org/0000-0002-5447-8304',
  'https://inspirehep.net/authors/2789549',
  'https://scholar.google.com/citations?user=_XUdxmMAAAAJ&hl=en',
  'https://www.github.com/anshsdesai',
  'https://www.linkedin.com/in/anshsdesai',
]

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR,
  url: SITE,
  email: 'mailto:ansh.s.desai@proton.me',
  jobTitle: 'Physics PhD Candidate',
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Oregon',
    url: 'https://www.uoregon.edu/',
  },
  knowsAbout: [
    'Dark matter',
    'Particle physics',
    'Direct detection',
    'Dark sectors',
  ],
  sameAs: SAME_AS,
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE,
  name: AUTHOR,
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'en-US',
  author: { '@type': 'Person', name: AUTHOR, url: SITE },
}
