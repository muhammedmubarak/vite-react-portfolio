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
  meta,
  starbucks,
  tesla,
  shopify,
  ominfood,
  bigGame,
  guessmyNum,
  threejs,
  demo,
  bankist,
  crud,
  quizapp,
  tiktakxo,
  eatnsplit,
  todolist,
} from "../assets";
export const navLinks = [
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Responsive Web Design",
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
    title: "university Futuer Acdaemy",
    company_name: "Academic Major | Management Information System",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2016 - May 2020",
    points: [],
  },
  {
    title: "Information Technology Institute",
    company_name: "Front-End",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jul 2022",
    points: [],
  },
  {
    title: "kalbonyan-elmarsos ",
    company_name: "Full stack Developer Using MERN",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ominfood",
    description:
      "A healthy meal delivered to your door, every single day The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. We have delivered 250,000+ meals last year",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ominfood,
    source_code_link: "https://github.com/muhammedmubarak/ominfood",
    demo_link: "https://ominfood-muhammed.netlify.app/",
  },
  {
    name: "Big Game",
    description:
      "** The game starts with a turn of either player one or player two. On each player's turn, a player can press on the 'Roll' button in order to roll the dice. On each dice roll, unless both dice land on 1 or 6, the sum of the dice roll will be registered in the current score counter box.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bigGame,
    source_code_link: "https://github.com/muhammedmubarak/PIG-game",
    demo_link: "https://grand-nasturtium-b2df51.netlify.app/",
  },
  {
    name: "guess my number ",
    description:
      "The first player thinks of an integer within a known range.  The second player tries to guess the number.  If the guess is incorrect, then the first player tells the second player whether the guess was too high or too low.  Eventually, the second player guesses the correct number.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: guessmyNum,
    source_code_link: "https://github.com/muhammedmubarak/Guess-My-Number",
    demo_link: "https://guess-my-numberss.netlify.app/",
  },
  {
    name: "bank",
    description:
      " Bankist is a modern and secure banking application designed to provide a seamless banking experience to users. With a user-friendly interface and advanced security measures, this app aims to simplify financial management and empower users to take control of their finances.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bankist,
    source_code_link:
      "https://github.com/muhammedmubarak/number-dates-timer-bankist",
    demo_link: "https://banklists.netlify.app/?",
  },
  {
    name: "crud",
    description:
      "The CRUD Product Management System is a comprehensive application designed to simplify and streamline the process of managing products. With this system, you can effortlessly create, read, update, and delete product records, allowing you to efficiently track and organize your inventor",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    source_code_link:
      "https://github.com/muhammedmubarak/Full-product-management-system-crud",
    demo_link: "https://thecruds.netlify.app/",
  },
  {
    name: "quizapp",
    description:
      "The Quiz App is an interactive and engaging application designed to test your knowledge on various subjects. With a user-friendly interface and a wide range of questions, this app aims to entertain and educate users of all ages. Whether you want to challenge yourself or compete with friends, the Quiz App has got you covered!",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quizapp,
    source_code_link: "https://github.com/muhammedmubarak/Quz-App",
    demo_link: "https://quizappgit.netlify.app/",
  },
  {
    name: "tik tak tok game",
    description:
      "TikTakXO is a popular game that combines elements of Tic-Tac-Toe and the game mechanics of TikTok, a social media platform known for its short videos. It is an interactive and entertaining version of the classic Tic-Tac-Toe game that incorporates modern trends and features.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tiktakxo,
    source_code_link: "https://github.com/muhammedmubarak/XO_ONLINE",
    demo_link: "https://tiktakxo.netlify.app/",
  },
  {
    name: "eatnsplit",
    description:
      "TikTakXO is a popular game that combines elements of Tic-Tac-Toe and the game mechanics of TikTok, a social media platform known for its short videos. It is an interactive and entertaining version of the classic Tic-Tac-Toe game that incorporates modern trends and features.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: eatnsplit,
    source_code_link: "https://github.com/muhammedmubarak/XO_ONLINE",
    demo_link: "https://tiktakxo.netlify.app/",
  },
  {
    name: "todoList",
    description:
      "TikTakXO is a popular game that combines elements of Tic-Tac-Toe and the game mechanics of TikTok, a social media platform known for its short videos. It is an interactive and entertaining version of the classic Tic-Tac-Toe game that incorporates modern trends and features.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/muhammedmubarak/Reac-TodoList",
    demo_link: "https://tiktakxo.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
