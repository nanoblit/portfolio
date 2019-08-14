import fotographImage from "./images/projects/Fotograph.png";
import howToImage from "./images/projects/How-To.png";
import twitchCloneImage from "./images/projects/Twitch-Clone.png";
import dadJokesImage from "./images/projects/Dad-Jokes.jpg";

const projectData = [
  {
    title: "How-To",
    image: howToImage,
    description: "A React app for submitting guides.",
    tags: ["React", "React Router", "Redux", "Styled-Components"],
    websiteLink: "https://how-to-jm.netlify.com/",
    codeLink: "https://github.com/nanoblit/how-to-FE"
  },
  {
    title: "Fotograph",
    image: fotographImage,
    description: "A website for a portfolio app.",
    tags: ["HTML5", "Less", "GSAP", "ES6+"],
    websiteLink: "https://fotograph-jm.netlify.com/",
    codeLink: "https://github.com/art-portfolio-bw/art-portfolio-UI-Jakub"
  },
  {
    title: "Dad Jokes backend",
    image: dadJokesImage,
    description: "A backend for a website with jokes.",
    tags: ["Express", "Knex", "SQLite"],
    websiteLink: "https://dad-jokes-be.herokuapp.com/",
    codeLink: "https://github.com/nanoblit/dad-jokes-be"
  },
  {
    title: "Twitch Clone",
    image: twitchCloneImage,
    description: "A clone of Twitch's layout.",
    tags: ["HTML5", "Less"],
    websiteLink: "https://nanoblit.github.io/twitch-channel-view-clone/",
    codeLink: "https://github.com/nanoblit/twitch-channel-view-clone"
  }
];

export default projectData;
