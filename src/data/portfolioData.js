import profileHome from "../assets/profile-original.png";
import profileAbout from "../assets/image2.jpg";

export const site = {
  name: "Ehtisham",
  fullName: "Ehtisham Nazir",
  role: "Full Stack Developer",
  tagline:
    "High level experience in web development and producing quality work across the full stack.",
  homeDescription:
    "As a dedicated full-stack developer specializing in React and Node.js, I build intuitive, high-performance applications that turn complex requirements into seamless, responsive experiences.",
  aboutDescription:
    "Ehtisham Nazir is a passionate software developer with a BS in IT from M.A.O Postgraduate College (University of the Punjab). Skilled in React, Node.js, MongoDB, and modern UI development, with experience in graphic design and delivering functional, engaging web applications.",
  social: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/EhtishamNazir1234",
    dribbble: "https://github.com/EhtishamNazir1234",
  },
  stats: [
    { title: "02+", name: "Years <br> experience" },
    { title: "03+", name: "Completed <br> project" },
    { title: "01+", name: "Companies <br> worked" },
  ],
  resumePath: "/EhtishamNazirResume.pdf",
  profiles: {
    home: profileHome,
    about: profileAbout,
  },
};

export const skills = [
  {
    id: "frontend",
    title: "Frontend Developer",
    subtitle: "More than 2 years",
    icon: "uil-brackets-curly",
    open: true,
    items: [
      { name: "React", percent: 85, class: "skills__react" },
      { name: "JavaScript", percent: 80, class: "skills__javascript" },
      { name: "HTML", percent: 90, class: "skills__html" },
      { name: "CSS", percent: 85, class: "skills__css" },
    ],
  },
  {
    id: "backend",
    title: "Backend Developer",
    subtitle: "More than 1 year",
    icon: "uil-server-network",
    open: false,
    items: [
      { name: "Node.js", percent: 75, class: "skills__node" },
      { name: "Express.js", percent: 75, class: "skills__express" },
      { name: "REST APIs", percent: 80, class: "skills__php" },
    ],
  },
  {
    id: "database",
    title: "Database",
    subtitle: "More than 1 year",
    icon: "uil-database",
    open: false,
    items: [
      { name: "MongoDB", percent: 70, class: "skills__mongodb" },
      { name: "MySQL", percent: 70, class: "skills__mysql" },
    ],
  },
];

export const qualifications = {
  education: [
    {
      title: "BS Information Technology",
      subtitle: "M.A.O Postgraduate College",
      date: "University of the Punjab",
      side: "left",
    },
  ],
  work: [
    {
      title: "Full Stack Developer",
      subtitle: "IIfa Tech",
      date: "2024 - Present",
      side: "right",
    },
  ],
};

export const services = [
  {
    title: "UI/UX",
    icon: "uil-web-grid",
    modalTitle: "UI/UX Designer",
    points: [
      "I develop the user interface.",
      "I create web page layouts and components.",
      "I design engaging user experiences.",
    ],
  },
  {
    title: "Frontend",
    icon: "uil-arrow",
    modalTitle: "Frontend Developer",
    points: [
      "I build responsive React applications.",
      "I optimize performance and accessibility.",
      "I integrate APIs with clean UI flows.",
    ],
  },
  {
    title: "Full Stack",
    icon: "uil-edit",
    modalTitle: "Full Stack Developer",
    points: [
      "I develop end-to-end MERN solutions.",
      "I design REST APIs and data models.",
      "I deploy and maintain production apps.",
    ],
  },
];

export const projects = [
  {
    title: "Velo Lab",
    description:
      "No-code platform to build, test, and iterate machine learning models for stock movement prediction in seconds, with backtesting and walkforward validation.",
    image: "/velolab.png",
    link: "https://velolab.io/",
  },
  {
    title: "Ibadah Web App",
    description:
      "Islamic-themed MERN application helping Muslims enhance daily spiritual practices.",
    image: "/ibadah.png",
    link: "https://ibadah-mu.vercel.app/",
  },
  {
    title: "IIFA TECH LMS",
    description:
      "Learning management system for courses, internees, employees, and admins.",
    image: "/iifalms.png",
    link: "#portfolio",
  },
  {
    title: "MERN Blog App",
    description:
      "CRUD blog platform with a responsive interface built on the MERN stack.",
    image: "/blog.png",
    link: "https://mern-blog-ixd6.vercel.app/",
  },
];

export const testimonials = [
  
  {
    name: "Project Client",
    role: "Web Application",
    image: "/portfolio.png",
    text: "Built a responsive, well-structured application that met requirements and performed reliably in production.",
  },
  {
    name: "Collaborator",
    role: "Development",
    image: "/portfolio.png",
    text: "Consistent, proactive, and skilled across frontend and backend — a strong contributor to any dev team.",
  },
];

export const contact = {
  phone: "+92 347 10 40 596",
  email: "ehtishamnazir1234@gmail.com",
  location: "Pakistan",
  footerSocial: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
  },
};

export const navLinks = [
  { id: "home", label: "Home", icon: "uil-estate" },
  { id: "about", label: "About", icon: "uil-user" },
  { id: "skills", label: "Skills", icon: "uil-file-alt" },
  { id: "services", label: "Services", icon: "uil-briefcase-alt" },
  { id: "portfolio", label: "Portfolio", icon: "uil-scenery" },
  { id: "contact", label: "Contact", icon: "uil-message" },
];
