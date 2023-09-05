import babel from './assets/icons/tech/babel.svg';
import bootstrap from './assets/icons/tech/bootstrap5.svg';
import css from './assets/icons/tech/css.svg';
import figma from './assets/icons/tech/figma.svg';
import git from './assets/icons/tech/git.svg';
import gitlab from './assets/icons/tech/gitlab.svg';
import html from './assets/icons/tech/html5.svg';
import jest from './assets/icons/tech/jest.svg';
import javascript from './assets/icons/tech/js.svg';
import mongodb from './assets/icons/tech/mongodb.svg';
import node from './assets/icons/tech/nodejs.svg';
import npm from './assets/icons/tech/npm.svg';
import postfresql from './assets/icons/tech/postfresql.svg';
import postman from './assets/icons/tech/postman.svg';
import ps from './assets/icons/tech/ps.svg';
import react from './assets/icons/tech/reactjs.svg';
import sass from './assets/icons/tech/sass.svg';
import semanticUi from './assets/icons/tech/semantic-ui.svg';
import tailwind from './assets/icons/tech/tailwind.svg';
import vs from './assets/icons/tech/vs.svg';
import auth0 from './assets/icons/tech/auth0.svg';
import elementUI from './assets/icons/tech/element-ui.svg';
import netlify from './assets/icons/tech/netlify.svg';
import prettier from './assets/icons/tech/prettier.svg';

import paperbackLogo from './assets/img/paprback_logo_books.svg';
import bookShelf from './assets/img/bookshelfHero.png';
import bhSoundLogo from './assets/img/bhsoundLogo.svg';
import mixingDesk from './assets/img/mixingDesk.jpeg';
import seasonItLogo from './assets/img/seasonit-logo.svg';
import seasonItBackground from './assets/img/seasons-banner3.jpeg';

const tech = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'React',
    icon: react
  },
  {
    name: 'Node.js',
    icon: node
  },
  {
    name: 'Auth0',
    icon: auth0
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Elephant SQL',
    icon: postfresql
  },
  {
    name: 'Git',
    icon: git
  },
  {
    name: 'GitHub',
    icon: gitlab
  },
  {
    name: 'VS Code',
    icon: vs
  },
  {
    name: 'Figma',
    icon: figma
  },
  {
    name: 'Bootstrap',
    icon: bootstrap
  },
  {
    name: 'Sass',
    icon: sass
  },
  {
    name: 'Tailwind',
    icon: tailwind
  },
  {
    name: 'Jest',
    icon: jest
  },
  {
    name: 'NPM',
    icon: npm
  },
  {
    name: 'Postman',
    icon: postman
  },
  {
    name: 'Photoshop',
    icon: ps
  },
  {
    name: 'Babel',
    icon: babel
  },
  {
    name: 'VS Code',
    icon: vs
  },
  {
    name: 'Semantic UI',
    icon: semanticUi
  },
  {
    name: 'Element-UI',
    icon: elementUI
  },
  {
    name: 'Netlify',
    icon: netlify
  },
  {
    name: 'Prettier',
    icon: prettier
  },
]

// Projects data

const projects = [
  {
    key: 1,
    title: 'Paprback',
    logo: paperbackLogo,
    image: bookShelf,
    description: 'Paprback is a software solution to connect people in their local area for the purpose of exchanging and donating unwanted books.',
    live: 'https://bcpaprback.netlify.app/',
    code: 'https://github.com/benhensor/soc_byteclub_paprback'
  },
  {
    key: 2,
    title: 'Ben Hensor Sound',
    logo: bhSoundLogo,
    image: mixingDesk,
    description: 'This is a recreation of my Sound Design website built in React with an Express mail server.',
    live: 'https://benhensorsound.netlify.app/',
    code: 'https://github.com/benhensor/benhensorsound'
  },
  {
    key: 3,
    title: 'Season It',
    logo: seasonItLogo,
    image: seasonItBackground,
    description: 'An app to help you discover seasonal produce throughout the year in the UK.',
    live: 'https://seasonit.netlify.app/',
    code: 'https://github.com/benhensor/season-it'
  }
]


export { tech, projects }