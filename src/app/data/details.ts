


export  const serviceDetails=  [{
    "id":' 01',
    title:'Web Development',
    description:"Get custom web development solutions with modern designs, responsive layouts, and smooth animations tailored to your needs.",
 },
 {
    "id": '02',
    title:'Web Designing',
    description:"Crafting unique, user-focused web designs that are visually appealing, responsive, and optimized for the best user experience.",
 },
 {
    "id": '03',
    title:'Graphic Design',
    description:"Transform your ideas into stunning visuals with custom graphic designs that capture attention and elevate your brand.",
 } ]
export const reviews=[{
   "id":'01',
   "title":"Prof. Zia Shahzad (client) ", 
   "description":"Dua Fatima is a highly skilled and dedicated software developer. Her technical proficiency in C and databases is remarkable, and she consistently goes beyond expectations to expand her knowledge. Dua excels at problem-solving, quickly identifying issues and providing efficient solutions. Her collaborative nature and strong work ethic make her a reliable and valuable team member.",
},
{
  "id": '02', 
  title:'Ms. Ramsha Noshad (client)',
  description:"Thank you, Dua Fatima, for the exceptional work on my design. Your creativity and professionalism truly stand out. The layout is visually appealing, and the design elements reflect a high level of expertise. I’m particularly impressed with how you balanced aesthetics with clarity, ensuring that it is both attractive and easy to read. Your attention to detail and dedication to delivering a high-quality result is greatly appreciated. You're a talented graphic designer, and I look forward to working with you again in the future!",
},
{
  "id": '03',
  title:'Mr. Abid Ali (client)',
  description:"Dua Fatima has excelled as a frontend developer, skillfully translating complex requirements into user-friendly interfaces. Her keen eye for design and technical expertise ensure that her applications are both functional and visually appealing. Dua is committed to continuous learning, keeping up with the latest frontend technologies. Her proficiency in HTML, CSS, and JavaScript helps maintain high-quality code standards. Notably, her problem-solving skills allow her to quickly diagnose issues and develop effective solutions, streamlining our development processes and enhancing project efficiency.",
},
{
   "id": '04',
   title:'Ms. Saba Nizam',
   description:"I'm thoroughly impressed with Dua Fatima exceptional coding skills! She delivered an outstanding project, exceeding my expectations, and completed it well ahead of schedule. Her efficiency, creativity, and attention to detail are truly inspiring. You are a talented developer who understands the client's needs and delivers high-quality results. Highly recommended!",
},
{
   "id": '05',
   title:'Ms. Sumbul Khan',
   description:"Dua Fatima is an exceptional web developer! Delivers high-quality work, exceeding expectations. Highly recommended!, 5/5 stars!",
},

{
   "id": '06',
   title:'Ms. Tabassum Naz',
   description:"I am genuinely impressed by Dua Fatima's exceptional coding skills! She delivered an outstanding project that exceeded my expectations and was completed ahead of schedule. Her efficiency, creativity, and attention to detail are commendable. If you're looking for a talented developer who understands client needs, I highly recommend Dua Fatima as an invaluable asset in the tech field!",
},
{
   "id": '07',
   title:'Ms. Umm-e-Hani Khan',
   description:"Fatima is an exceptional web developer who delivered a visually stunning, responsive website for my project. She understood my requirements perfectly and turned them into a user-friendly, polished website. Her communication and attention to detail were impressive, and she was always open to feedback. I highly recommend her for any web development needs.",
},
{
   "id": '08',
   title:'Ms. Tabya Khan',
   description:"Dua is an amazing web developer! She did a fantastic job on my website, listening to what I needed and delivering exactly that. She's professional, easy to work with, and really knows her stuff. I'm so happy with the result and highly recommend her to anyone who needs a great website!",
},
{
  "id": '09',
  title:'Ms. Yusra Khan',
  description:"I am truly amazed by Dua Fatima's coding abilities. She completed an impressive project that not only met but surpassed my expectations, and she did it well ahead of the deadline. Her creativity, efficiency, and meticulous attention to detail are remarkable. I highly recommend her for any development work!",
},

]







// project details
import p1 from "../../../public/project/p1.png";
import p2 from "../../../public/project/p2.png";
import p3 from "../../../public/project/p3.png";
import p4 from "../../../public/project/p4.png";
import p5 from "../../../public/project/p5.png";
import p6 from "../../../public/project/p6.png";
import p7 from "../../../public/project/p7.png";
import p8 from "../../../public/project/p8.png";
import p9 from "../../../public/project/p9.png";
import p10 from "../../../public/project/p10.png";


import { StaticImageData } from 'next/image';

interface ProjectDetails {
 
   id: number; 
   cat:string;
  title: string;
  description: string;
  image: StaticImageData; 
  badges: string[]; 
  url:string,
}


export const projects: ProjectDetails[] = [
   {
      id: 1,
      cat: 'Latest',
      title: "Next.js Portfolio Website",
      description: "Built my personal portfolio using Next.js with dynamic routes. The design was created using Figma, and the site is fully responsive, styled with Tailwind CSS. A carousel is also implemented to showcase various projects.",
      image: p1,  
      badges: ["Next.js", "Figma", "Tailwind CSS", "Responsive Design", "Carousel"],
      url:`/`,
    },
    
    {
      id: 2,
      cat: 'Latest',
      title: "Estore Website",
      description: "Designed and developed a fully functional eCommerce website called Estore Web, based on a Figma design. Built using Next.js with dynamic routes and implemented essential eCommerce features like product listings, a shopping cart, and a checkout system. The site is responsive and styled using Tailwind CSS.",
      image: p2,  // Assuming p2 is the image for this project
      badges: [
        "Next.js",             
        "Figma",    
        "Tailwind CSS",      
        "Dynamic Routes",      
        "Responsive Design"    
      ],
      url: "https://estore-df.vercel.app",
    },
    {
      id: 3,
      cat: 'Latest',
      title: "Personal Portfolio Website",
      description: "Created a personal portfolio website using HTML, CSS, and JavaScript, featuring my own design. Implemented smooth animations with GSAP and ScrollTrigger for enhanced user experience. Utilized CSS animations to showcase my projects effectively.",
      image: p3,  
      badges: [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "ScrollTrigger",
        "CSS Animations",
        "Responsive Design"
      ],
      url:`https://df-24-portfolio.vercel.app/`,
    },
    {
      id: 4,
      cat: 'Latest',
      title: "Bakery Website",
      description: "Developed a bakery website based on a Figma design. Utilized Bootstrap for layout and responsiveness, along with Tailwind CSS for additional styling. Implemented Swiper.js for carousels, and used HTML, CSS, and JavaScript to enhance user experience.",
      image: p4,  
      badges: [
        "Bootstrap",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
        "Swiper.js",
        "Responsive Design"
      ],
       url:`https://df-bakery.vercel.app/`,
    }
,
{
   id: 5,
   cat: 'Latest',
   title: "Netflix UI Clone",
   description: "Developed a pixel-perfect clone of the Netflix UI using HTML, CSS, and JavaScript. Focused on recreating the layout and design elements to closely match the original interface, ensuring a seamless user experience.",
   image: p5,  
   badges: [
     "HTML",
     "CSS",
     "JavaScript",
     "Pixel Perfect Design",
  
   ],
   url:``,
 },
 {
   id: 6,
   cat: 'Latest',
   title: "DF Resume Generator",
   description: "Created a DF Resume Generator using HTML, CSS, and JavaScript that allows users to create their CVs easily. Users can input their information, edit the content, and download their resumes in PDF format using html2pdf.js. The application is fully responsive for a seamless user experience.",
   image: p6,  
   badges: [
     "HTML",
     "CSS",
     "JavaScript",
     "html2pdf.js",
     "Responsive Design"
   ],
    url:`https://dua-fatima-khan.github.io/DF-Resume-Generator/`,
 }
,{
   id: 7,
   cat: 'Latest',
   title: "DF Todo List App",
   description: "Developed a DF Todo List App using HTML, CSS, and JavaScript that allows users to add and delete tasks. The app provides a simple and intuitive interface for managing daily tasks, making it easy to keep track of what needs to be done.",
   image: p7,  
   badges: [
     "HTML",
     "CSS",
     "JavaScript",
     "Todo List Functionality",
     "Responsive Design"
   ],
    url:`https://dua-fatima-khan.github.io/DF-TODO-App/`,
 },{
   id: 8,
   cat: 'Latest',
   title: "Sidcup Family Golf UI Clone",
   description: "Created a pixel-perfect clone of the award-winning Sidcup Family Golf website using HTML, CSS, JavaScript, GSAP, and ScrollTrigger. Focused on replicating the design and interactive features to deliver a seamless user experience.",
   image: p8,  
   badges: [
     "HTML",
     "CSS",
     "JavaScript",
     "GSAP",
     "ScrollTrigger",
     "UI Clone",

   ],
    url:``,
 },
 {
   id: 9,
   cat: 'Latest',
   title: "Pomodoro Timer",
   description: "Developed a Pomodoro Timer using HTML, CSS, and JavaScript that helps users manage their work sessions. The timer includes features for starting, resetting, and alerting users after 25 minutes, along with sound notifications to enhance productivity.",
   image: p9,  
   badges: [
     "HTML",
     "CSS",
     "JavaScript",
     "Timer Functionality",
     "Sound Notifications",
     "Responsive Design"
   ],
    url:`https://df-pomodoro-timer.vercel.app/`,
 },
 {
   id: 10,
   cat: 'Latest',
   title: "Amazon Website UI Clone",
   description: "Created a frontend clone of the Amazon website using HTML, CSS, and JavaScript. Focused on replicating the design and layout of the original site to provide a realistic shopping experience while showcasing my frontend development skills.",
   image: p10,  
   badges: [
     "HTML",
     "CSS",
     "JavaScript",
     "UI Clone",

   ],
    url:``,
 }
 
];


import s1 from "../../../public/s1.png";
import s2 from "../../../public/s2.png";
// Define the type for individual service details
interface Service {
   id: number;
   title: string;
   subtitle: string;
   image: StaticImageData; 
   description: string;
   list?: Array<{ title: string; description: string }>; // Optional array for services that have a list
 }
 
 // Export an array of services with the defined type
 export const services: Service[] = [
   {
     id: 1,
     title: "Web Development",
     subtitle: "Developing High-Performance Websites and Web Applications",
     image: s1,
     description: `
       I specialize in crafting <span class="font-bold italic playfair">responsive</span>, 
       <span class="font-bold italic playfair">high-performance</span> web applications using 
       <span class="font-bold italic playfair">HTML5</span>, <span class="font-bold italic playfair">CSS3</span>, 
       <span class="font-bold italic playfair">JavaScript</span>, <span class="font-bold italic playfair">TypeScript</span>, 
       and <span class="font-bold italic playfair">Next.js</span>. I leverage tools like 
       <span class="font-bold italic playfair">Tailwind CSS</span>, <span class="font-bold italic playfair">Bootstrap</span>, 
       and animation libraries such as <span class="font-bold italic playfair">GSAP</span> and 
       <span class="font-bold italic playfair">ScrollTrigger</span> to create dynamic, user-friendly interfaces. 
       With proficiency in <span class="font-bold italic playfair">Figma</span>, <span class="font-bold italic playfair">Adobe Creative Cloud</span>, 
       and version control via <span class="font-bold italic playfair">Git/GitHub</span>, 
       I ensure that every project is visually impressive and performs smoothly across all platforms.
     `,
   },
   {
     id: 2,
     title: "Web Designing",
     subtitle: "Designing visually stunning and User-centric Websites.",
     image: s2,
     description: `
       I am a professional <span class="font-bold italic playfair">Web Designer</span> specializing in creating 
       <span class="font-bold italic playfair">customized</span>, <span class="font-bold italic playfair">responsive</span> websites 
       tailored to meet your business needs. My services include <span class="font-bold italic playfair">custom website design</span>, 
       <span class="font-bold italic playfair">responsive layouts</span>, and <span class="font-bold italic playfair">UI/UX design</span> 
       to ensure a <span class="font-bold italic playfair">seamless user experience</span> across all devices. 
       Utilizing the latest technologies like <span class="font-bold italic playfair">HTML</span>, 
       <span class="font-bold italic playfair">CSS</span>, <span class="font-bold italic playfair">Bootstrap</span>, 
       and <span class="font-bold italic playfair">Tailwind CSS</span>, I deliver visually appealing and functional websites 
       that enhance your <span class="font-bold italic playfair">online presence</span>. 
       I also provide <span class="font-bold italic playfair">SEO-friendly designs</span> to boost your visibility on search engines.
     `,
   },
   {
     id: 3,
     title: "Graphics Designing",
     subtitle: "Turning Ideas into High-Performance Visuals",
     image: s1, // Update the image path if necessary
     description: `
       I am a professional <span class="font-bold italic playfair">Graphic Designer</span> specializing in creating 
       <span class="font-bold italic playfair">visually impactful designs</span> tailored to effectively communicate your brand’s message. 
       My services include <span class="font-bold italic playfair">custom logo design</span>, <span class="font-bold italic playfair">brochures</span>, 
       <span class="font-bold italic playfair">flyers</span>, and <span class="font-bold italic playfair">social media graphics</span>, 
       all crafted to leave a lasting impression. With expertise in <span class="font-bold italic playfair">branding</span> and 
       <span class="font-bold italic playfair">visual communication</span>, I ensure that every design resonates with your target audience.
     `,
     list: [
       { title: "Logo Design", description: "Developing unique logos that perfectly represent your brand identity." },
       { title: "Brochure and Flyer Design", description: "Designing eye-catching brochures and flyers that promote your products or services with style." },
       { title: "Social Media Graphics", description: "Crafting engaging and tailored visuals optimized for all major social platforms." },
       { title: "Infographics", description: "Simplifying complex information into visually appealing and easy-to-understand infographics." },
       { title: "Business Cards", description: "Creating professional business cards designed to make a memorable first impression." },
     ],
   },
 ];
 
