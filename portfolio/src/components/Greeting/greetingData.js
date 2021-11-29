import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";

export const greetingData = [
  {
    id: 1,
    title: "Resume",
    link: "https://www.perhapserik.com/resume",
    icon: <DescriptionIcon color="secondary" fontSize="large" />,
  },
  {
    id: 2,
    title: "Email",
    link: "mailto:perhapserik@gmail.com",
    icon: <EmailIcon color="secondary" fontSize="large" />,
  },
  {
    id: 3,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/erikrodriguez-webdev/",
    icon: <LinkedInIcon color="secondary" fontSize="large" />,
  },
  {
    id: 4,
    title: "Github",
    link: "https://github.com/ErikRodriguez-webdev/",
    icon: <GitHubIcon color="secondary" fontSize="large" />,
  },
  {
    id: 5,
    title: "Leetcode",
    link: "https://leetcode.com/ErikRodriguez-webdev/",
    icon: <StarIcon color="secondary" fontSize="large" />,
  },
];
