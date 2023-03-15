import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Leasing,
  tohfabdshott,
  tripguide,
  threejs,
  ReliSource,
  tohfabd,
  genex,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Php/Laravel Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "ReliSource Technologies Ltd",
    icon: ReliSource,
    iconBg: "#383E56",
    date: "Sept 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Ruby on Rails and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Dedicatedly worked on bike lease management system and HRMS system",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tohfabd Ltd",
    icon: tohfabd,
    iconBg: "#E6DEDD",
    date: "Sept 2019 - Aug 2021",
    points: [
      "Developing and maintaining Gift Ecommerce site  using Php/Laravel , Vue js and other related technologies.",
      "Developing and maintaining Parcel delivery site  using Php/Laravel , Vue js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility to its fornt end.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Participating in system design for parcel module development and continously presented to the management body.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Genex Solution Ltd",
    icon: genex,
    iconBg: "#383E56",
    date: "May 2019 - Sept 2019",
    points: [
      "Developing and maintaining web applications using React.js, node js, express js , Php/Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented  broker site and vehicle management system.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mazherul is an excellent resource, He makes sure all the deadlines meet and that also with the highest standards. He is a hardworking and dedicated person who will complete your project in a given time frame. I would recommend and endorse Mazherul.”",
    name: "Jemima Farhin",
    designation: "HR Professional",
    company: "Tohfabd Ltd",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Mr. Mazherul islam is a motivated, forward thinking and also intelligent programmer who has lots of knowledge in his fields. I worked with him directly. He is very good problem solver and helpful. He is also a good person. Wish him a better career always.",
    name: "Chandan sharma",
    designation: "Software Engineer",
    company: "SSL Wireless",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mazherul optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Iftekhar Hasan",
    designation: "Sr Web Developer",
    company: "ReliSource Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Tohfabd",
    description:
      "Web-based platform that allows users to search, order Gifts  from various providers, providing a convenient and efficient delivery  to its end customer.",
    tags: [
      {
        name: "Vue js",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: tohfabdshott,
    source_code_link: "https://tohfabd.com/",
  },
  {
    name: "Leasing Application",
    description:
      "Web application with dealer portal and admin portal used for managing bike leasing applications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ROR",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: Leasing,
    source_code_link: "https://github.com/mazher123",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next Js",
        color: "green-text-gradient",
      },
      {
        name: "Larvel",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mazher123",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
