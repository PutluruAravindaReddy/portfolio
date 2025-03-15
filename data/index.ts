export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    title:
      "Currently building a website for the Computer Vision Lab at SRM University",
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
    title: "DevOverflow",
    shortTitle: "DevOverflow",
    des: "Built a developer-centric Q&A platform using Next.js, enabling users to post questions, answer queries, and engage in discussions. Integrated authentication with NextAuth for secure user access. Implemented upvoting, comment sections, and a tagging system for better content organization. Optimized performance with server-side rendering and MongoDB for efficient data storage.",
    img: "/devflow_interface.png",
    iconLists: [
      "/html.png",
      "/next.svg",
      "/tailwind.png",
      "/api.png",
      "/mongodb.png",
    ],
    link: "https://aravind-devflow.vercel.app",
  },
  {
    id: 2,
    title: "Computer Vision Lab Website",
    shortTitle: "Computer_Vision_Lab_Website",
    des: "Developed a responsive and modern website for the Computer Vision Lab at SRM University. Utilized Next.js and Tailwind CSS to showcase the lab's research and activities effectively.",
    img: "/vclab.png",
    iconLists: [
      "/html.png",
      "/next.svg",
      "/tailwind.png",
      "/api.png",
      "/mongodb.png",
    ],
    link: "https://vc-vertical.vercel.app",
  },
  {
    id: 3,
    title: "Hotel Booking Website",
    shortTitle: "Hotel_Booking_Website",
    des: "A full-stack project featuring a user login system and professional database. Utilizes HTML and Bootstrap for the front end and Node.js with MongoDB for the back end. Includes cloud storage for image handling via Cloudinary.",
    img: "/Hotel.png",
    iconLists: [
      "/html.png",
      "/bootstrap.png",
      "/node.png",
      "Express.png",
      "/mongodb.png",
      "/cloudinary.svg",
    ],
    link: "https://hotel-website-3xbf.onrender.com",
  },
  {
    id: 4,
    title: "YouTube Clone",
    shortTitle: "YouTube_Clone",
    des: "A front-end project replicating key features of YouTube using HTML, CSS, and JavaScript. Leveraged Google API to fetch and display real data, providing a practical application of front-end development skills and API integration.",
    img: "/Youtube.png",
    iconLists: ["/html.png", "/css.png", "/js.png", "/api.png"],
    link: "https://putluruaravindareddy.github.io/Youtube_clone/",
  },
];

export const testimonials = [
  {
    quote:
      "Aravinda's innovative contributions to web development at Foruppo were pivotal in advancing our projects. His ability to blend creativity with technical expertise resulted in solutions that surpassed our expectations. Aravinda's dedication and professionalism make him an invaluable member of any team.",
    name: "Saanjh K",
    title: "Founder, Foruppo",
    img: "/saanj3.jpeg",
  },
  {
    quote:
      "His dedication and expertise in developing the Computer Vision Lab website at SRM University were exemplary. Aravinda created a modern and responsive platform to showcase our research, enhancing our digital presence. His commitment to excellence and collaborative spirit make him a valuable asset to any project.",
    name: "Aruna Mam",
    title: "Associate Professor, SRM University",
    img: "/Aruna.jpg",
  },
  {
    quote:
      "Aravinda's contributions to the Computer Vision Lab at SRM University were remarkable. His technical proficiency and innovative approach were evident in every aspect of the project. His proactive attitude and commitment to delivering high-quality work make him an asset to any team.",
    name: "Arthi Mam",
    title: "Mentor, Computer Vision Lab, SRM University",
    img: "/Arthi.jpg",
  },
  {
    quote:
      "Aravinda's skills and expertise in class were impressive. His ability to apply complex concepts in practical scenarios stood out among his peers. I have no doubt he will continue to excel in his career as a skilled developer and problem solver.",
    name: "Ashok Kumar Sir",
    title: "Assistant Professor, SRM University",
    img: "/Ashok-Kumar.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer - Computer Vision Lab, SRM University",
    desc: "Developing a modern, responsive website using Next.js and Tailwind CSS. Worked closely with faculty to showcase the lab's research and activities effectively.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Project Management Intern - Foruppo",
    desc: "Led project management efforts for innovative startups in research mode. Coordinated teams, managed timelines, and ensured successful project execution.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    href: "https://github.com/PutluruAravindaReddy",
    img: "/git.svg",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/putluruaravindareddy/",
    img: "/link.svg",
  },
  {
    id: 3,
    href: "https://www.instagram.com/aravind_reddy234/",
    img: "/insta.svg",
  },
];
