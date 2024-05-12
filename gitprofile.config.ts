// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'hizinberg', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {

        projects: [], 
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'FSD',
          description:
            'Windows app for securing files with single password and multiple password encryption. This app includes ways of encrypting decrypting and deleting files securely',
          imageUrl:
          './src/assets/fsd.png',
          link: 'https://apps.microsoft.com/detail/9pb3b81f8p8d?hl=en-US&gl=US',
        },
        {
          title: 'Skill Quest',
          description:
            `A resume ranking website which helps recruiters rank based on the recruiters requirement. This website implements a custom ranking algorithm for ranking resumes. Demo will be provided upon request`,
          imageUrl:
            './src/assets/sq.png',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of A Naveen',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'hizinberg',
    email: 'naveen.ayyakannan@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'JavaScript',
    'React',
    'PostgreSQL',
    'Git',
  ],
  experiences: [
    {
      company: 'BOSCH Global Software Technologies',
      position: 'Python Developer Intern',
      from: '10 February 2024',
      to: '30 May 2024',
      companyLink: 'https://www.bosch-softwaretechnologies.com/en/',
    },

  ],
  certifications: [],
  educations: [
    {
      institution: 'New Horizon College of Engineering',
      degree: 'B.E. ISE',
      from: '2020',
      to: '2024',
      marks:"9.3 CGPA"
    },
    {
      institution: 'Narayana PU College',
      degree: 'Pre University',
      from: '2018',
      to: '2020',
      marks:'75%'
    },
    {
      institution: 'Ryan International School',
      degree: 'Secondary',
      from: '2018',
      to: '2020',
      marks:'82%'
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {

  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Thanks to arifszn <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> `,

  enablePWA: true,
};

export default CONFIG;
