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
      title: " Highly motivated, results oriented and passionate for hybrid mobile development. ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
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
      link: "https://asesoftware.com/proyectos/caso-de-exito-la-previsora/",
    },
  ];
  

  
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Developer, Ux/UI Lead",
      company: "Provincial Smart Home Services",
      desc: "Led the development of multiple web and mobile projects using Flutter and React.js, and the creation of a REST API for the integration of platforms like five9, Salesforce and Meta Ads.",
      className: "md:col-span-2",
      thumbnail: "/pshs.webp",
    },
    {
      id: 2,
      title: "Software Developer,",
      company: "Asesoftware",
      desc: 'Collaborated with cross-functional teams in the development of mobile and web applications for multiple customers like "Bank of the Republic of Colombia", La Previsora and Justo & Bueno',
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/asesoftware.png",
    },
    {
      id: 3,
      title: "Product Support Technician",
      company: "TouchBistro",
      desc: "Provided exceptional customer service and technical support to TouchBistro clients and collaborated with internal teams to identify and document bugs or issues with the platform.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/tb.svg",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "Teleperformance",
      desc: "Performed data analysis and real time reporting to the operations team, and collaborated with cross-functional teams to improve the efficiency of the call center.",
      className: "md:col-span-2",
      thumbnail: "/teleperformance.svg",
    },
    {
      id: 5,
      title: "Canine Care Volunteer",
      company: "Toronto Humane Society",
      desc: "Actively helped with the care and socialization of dogs. Assisted with the cleaning and maintenance of the shelter, and helped with the organization of events and fundraisers.",
      className: "md:col-span-2",
      thumbnail: "/ths.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Ale6995"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/alejandromoralesa/"
    },
  ];