import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Work Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: " Highly motivated and results-oriented, passionate for hybrid mobile development. ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/F1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Prioritizing Communication and Collaboration, Anywhere",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently transforming the HVAC Industry in Canada with Technology.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Pronto",
      des: "Revolutionizng the hvac industry with a fixed quote generator and booking web app.",
      img: "/pronto.svg",
      iconLists: ["/flutter.svg","next.svg", "/javascript.svg", "/firebase.svg","python.svg"],
      link: "https://quote.mypronto.io/",
    },
    {
      id: 2,
      title: "My PSH App",
      des: "Mobile Application for customers to book and manage their services, rebates, buyouts, and more in just a few clicks. Developed in Flutter and available on Web, iOS and Android.",
      img: "/pshApp.svg",
      iconLists: [ "/javascript.svg","/flutter.svg", "/firebase.svg","python.svg"],
      link: "https://provincialsmarthome.com/download-the-app/",
    },
    {
      id: 3,
      title: "Justo & Bueno",
      des: "Web and mobile Ecommerce, for one of the bigger supermarket chains in Colombia. Developed in Angular for web and Flutter for Mobile App",
      img: "/JB.svg",
      iconLists: ["/angular.png","bootstrap.svg","/ts.svg", "/flutter.svg"],
      link: "https://justo-bueno.bd.aptoide.com/app",
    },
    {
      id: 4,
      title: "La Previsora App",
      des: "App Custom built for La Previsora, a leading insurance company in Colombia. Developed in AngularJs, and native for ios and android app.",
      img: "/previsora.svg",
      iconLists: ["/angular.png", "/bootstrap.svg", "/ts.svg"],
      link: "https://asesoftware.com/en/case-studies/la-previsora-us/",
    },
  ];
  

  
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: ""
    },
    {
      id: 3,
      img: "/link.svg",
      link: ""
    },
  ];