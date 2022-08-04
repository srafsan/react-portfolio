import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
} from "@mui/icons-material";

/* For Portfolio */
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

/* For About Section */
import myPicture from "../../assets/myPicture.jpg";

export const about = {
  desc: "Hello, I am a Junior React developer. I am passionate about web development, software development while writing clean code. I have been learning MERN stack for a few months and I have also done many projects which are in my github repository. Besides web development, I like competitive programming and participated in various contests.",
  image: myPicture,
};

export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "I can create website while mantaining clean code.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "I can make websites responsive",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Bootstrap / Material UI",
    desc: "While I am comfortable using custom CSS, to make quick web design I can use CSS frameworks effectively.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
];

export const portfolio = [
  {
    id: 1,
    image: IMG1,
    title: "Weather Information Site",
    github: "https://github.com/srafsan/Weather-Information",
    demo: "https://weather-info-places.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-commerce Site",
    github: "https://github.com/srafsan/Ecommerce-raw",
    demo: "https://raw-ecommerce.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "COVID-19 Tracker",
    github: "https://github.com/srafsan/covid19_tracker",
    demo: "https://covid19-tracker-2022.netlify.app/",
  },
];

export const frontend = [
  {
    id: "1",
    name: "HTML5",
    level: "Comfortable",
  },
  {
    id: "2",
    name: "CSS3",
    level: "Comfortable",
  },
  {
    id: "3",
    name: "Javascript",
    level: "Comfortable",
  },
  {
    id: "4",
    name: "Bootstrap",
    level: "Comfortable",
  },
  {
    id: "5",
    name: "React.js",
    level: "Comfortable",
  },
  {
    id: "6",
    name: "Material UI",
    level: "Familiar",
  },
];

export const backend = [
  {
    id: "1",
    name: "Node.js",
    level: "Familiar",
  },
  {
    id: "2",
    name: "Firebase",
    level: "Comfortable",
  },
  {
    id: "3",
    name: "MongoDB",
    level: "Comfortable",
  },
  {
    id: "4",
    name: "MySQL",
    level: "Comfortable",
  },
  {
    id: "5",
    name: "Express.js",
    level: "Familiar",
  },
];
