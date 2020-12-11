// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

// Certs Images
import dev from "./assets/images/dev.PNG";
import saa from "./assets/images/saa.PNG";

// Projects Images (add your images to the /assets/images directory and import below)
import colors from "./assets/images/colors.svg";
import react from "./assets/images/logo.svg";
import notepad from "./assets/images/notepad.svg";

// Carousel Images
import rwd from "./assets/images/rwd.jpg";
import js from "./assets/images/js.jpg";
import fel from "./assets/images/fel.jpg";

/* START HERE - add your GitHub username below
 ************************************************************** */
export const githubUsername = "mshuber1981";

/* Skills
 ************************************************************** */
// Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaSass className="display-4" />,
    name: "Sass",
  },
  {
    id: 5,
    skill: <FaBootstrap className="display-4" />,
    name: "Bootstrap",
  },
  {
    id: 6,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 7,
    skill: <FaNodeJs className="display-4" />,
    name: "Node",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaAws className="display-4" />,
    name: "AWS",
  },
];

export const certs = [
  {
    id: 1,
    image: dev,
    name: "AWS Developer Associate",
    link:
      "https://www.youracclaim.com/badges/b8be6845-1c01-4205-8387-09a97be77004/public_u",
  },
  {
    id: 2,
    image: saa,
    name: "AWS Solutions Architect Associate",
    link:
      "https://www.youracclaim.com/badges/bda9d426-3515-4063-8d0a-5bf1626b2d14/public_u",
  },
];

/* Projects
 ************************************************************** */
// List the repo names you want to include (they will be sorted alphabetically), leave the array empty if you want to include everything
export const filteredProjects = [
  "Background-Generator",
  "github-react-portfolio-template",
  "notepad",
];

// List the card images you want to include in the same order as the repos above (alphabetically)
// There MUST be one image per repo above or the defualt image will be applied
export const projectData = [
  {
    image: colors,
  },
  {
    image: react,
  },
  {
    image: notepad,
  },
];

export const carouselData = [
  {
    id: 1,
    image: rwd,
    name: "Responsive Web Design",
    link: "https://github.com/mshuber1981/FCC-Responsive-Web-Design-Projects",
  },
  {
    id: 2,
    image: js,
    name: "JavaScript Algorithms and Data Structures",
    link:
      "https://github.com/mshuber1981/FCC-JavaScript-Algorithms-and-Data-Structures-Projects",
  },
  {
    id: 3,
    image: fel,
    name: "Front End Libraries",
    link: "https://github.com/mshuber1981/FCC-Front-End-Libraries-Projects",
  },
];

/* Contact Info
 ************************************************************** */
// Share the contact info you are comfortable with (no dashes for phone numbers)
// If no info provided a button with a link to mailchimp will be rendered, update the link if you want to use this option
export const contactInfo = {
  email: "",
  phone: "",
  mailChimp: "https://www.mailchimp.com/",
};
