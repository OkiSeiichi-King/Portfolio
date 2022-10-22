import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Oki Seiichi',
  title: "Hi all, I'm Oki Seiichi",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Angular, Ruby, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
  resumeLink:
    'https://drive.google.com/file/d/1ECJpzYKD_j5qZ_ulJpk6XWXV5-RF9HT3/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'https://github.com/OkiSeiichi-King',
};

export const contact = {};

export const socialLinks = {
  // url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/oki-seiichi-ninja/',
  github: 'https://github.com/OkiSeiichi-King/',
  // instagram: 'https://www.instagram.com/__hanzla100',
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassname: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassname: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassname: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassname: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassname: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassname: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassname: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassname: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassname: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassname: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassname: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassname: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassname: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassname: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo = [
  {
    schoolName: 'Osaka University',
    subHeader: 'Bachelor of Computer Engineering',
    duration: 'September 2014 - April 2018',
    desc: 'Participated in the national program contest in 2017 and was awarded a certificate .',
    grade: 'Grade A',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Souco company',
    companylogo: '/img/icons/common/souco.webp',
    date: 'Apr 2018 – Jun 2020',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using React, Redux, Typescript, Three.js and some other libraries.Used React.js , Node.js and MongoDB to build RESTful APIs for video chat project for client and developed Game Communify project using Next.js and Ruby or Rails.I tried to have good skills in Laravel and AngularJS, and developed online shopping project using Angular and Laravel',
  },
  {
    role: 'Blockchain/FullStack Developer',
    company: 'Velocity Promotions LLC',
    companylogo: '/img/icons/common/vvelocity.jfif',
    date: 'Jan 2020 – Mar 2022',
    desc: 'I worked as Blockchain/FullStack Developer on a POSHMARK. POSHMARK is a MarketPlace for the productions. I built Fully Optimized and High Performance RESTful APIs using Ruby on Rails, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions. And I make front-end by using react. And I implemented the transaction by using Ethereum.',
  },
];

export const projects = [
  {
    name: 'PoshMark',
    desc: 'Posh Mark built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/GoshPosh',
    link: 'https://poshmark.com/',
  },
  {
    name: 'MarketPlace',
    desc: 'With Blockchain and smart contract',
    github: 'https://github.com/OkiSeiichi-King/martketplaceD',
    link: 'https://market.decentraland.org/',
  },
  {
    name: 'BookBash',
    desc: 'This is MEANStack Pages',
    link: 'https://bookingbash.com/',
    github: 'https://github.com/OkiSeiichi-King/BookBash',
  },
  {
    name: 'NFT-MarketPlace',
    desc: 'Solidity & React',
    github: 'https://github.com/OkiSeiichi-King/nft-marketplace-test-now',
  },
];

export const feedbacks = [
  {
    name: 'Michael Honda',
    feedback:
      'Great work, thank you! You  was great to work with and did what I asked. Great communication. Timely replies. Attention to detail with great creativity He is the best guy. Always prompt and have never had an issue with their work.',
  },
  {
    name: 'Dennis Stephen',
    feedback:
      "Very detailed in terms of making sure client's projects are fulfilled and working correctly. Since I met you, my work has been very successful. I wish I work with you still. Thank you very much.",
  },
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Oki Seiichi',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Oki Seiichi',
  image: 'https://s.gravatar.com/avatar/2330009ac5a0109db7882a3d85b397ec?s=360',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Seiichi',
    'Oki Seiichi',
    '@seiichi2',
    'seiichi',
    'Portfolio',
    'Seiichi Portfolio ',
    'Oki Seiichi Portfolio',
  ],
};
