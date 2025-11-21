import { PortfolioItem } from "../../types/IWorks";
import Portfolio1 from '../../assets/can_i_use_clone.JPG';
import Portfolio2 from '../../assets/contact-list.JPG';
import Portfolio3 from '../../assets/python-website-clone.JPG';
import Portfolio4 from '../../assets/portfolio-first-attempt.JPG';
import Portfolio5 from '../../assets/moneybutton-game.JPG';
import Portfolio6 from '../../assets/fortune-cookies.JPG';
import Portfolio7 from '../../assets/crm-lite.png';
import Portfolio8 from '../../assets/inventrack.PNG';


export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: "Can I Use Clone",
        description: "A responsive clone of the popular Can I Use website, showcasing browser compatibility data with modern web technologies and clean UI design.",
        technologies: [
            "HTML5", 
            "CSS3", 
            "JavaScript", 
            "Responsive Design"
        ],
        imageUrl: Portfolio1,
        liveUrl: "https://edmyrbatiancila.github.io/Can_I_Use_Clone/",
        githubUrl: "https://github.com/edmyrbatiancila/Can_I_Use_Clone",
        category: "Web Designing",
        featured: true
    },
    {
        id: 2,
        title: "Contact Management App",
        description: "A comprehensive contact management application with CRUD operations, search functionality, and modern UI components for efficient contact organization.",
        technologies: [
            "React", 
            "JavaScript", 
            "CSS3",
        ],
        imageUrl: Portfolio2,
        liveUrl: "https://contactlistv2.netlify.app/",
        githubUrl: "https://github.com/edmyrbatiancila/contactListv2_with_localStorage",
        category: "React",
        featured: true
    },
    {
        id: 3,
        title: "Python Website Clone",
        description: "A pixel-perfect clone of the official Python website, demonstrating advanced CSS skills and responsive design principles.",
        technologies: [
            "HTML5", 
            "CSS3", 
            "JavaScript", 
            "Flexbox", 
            "Grid"
        ],
        imageUrl: Portfolio3,
        liveUrl: "https://edmyrbatiancila.github.io/Python_Website_Clone/",
        githubUrl: "https://github.com/edmyrbatiancila/Python_Website_Clone",
        category: "Web Designing",
        featured: false
    },
    {
        id: 4,
        title: "Portfolio V1",
        description: "My first portfolio attempt showcasing early development skills and design sensibilities with clean layouts and interactive elements.",
        technologies: [
            "HTML5", 
            "CSS3", 
            "JavaScript", 
            "Bootstrap"
        ],
        imageUrl: Portfolio4,
        liveUrl: "https://edmyr-portfolio.netlify.app/",
        githubUrl: "https://github.com/edmyrbatiancila/portfolio",
        category: "Portfolio",
        featured: false
    },
    {
        id: 5,
        title: "Money Button Game",
        description: "An interactive web game featuring engaging gameplay mechanics, score tracking, and responsive design for entertainment purposes only.",
        technologies: [
            "JavaScript", 
            "HTML5", 
            "CSS3", 
            "Canvas API"
        ],
        imageUrl: Portfolio5,
        liveUrl: "https://money-button-game.netlify.app/",
        githubUrl: "https://github.com/edmyrbatiancila/Money_Button_Game_ReactJS_Version",
        category: "Games",
        featured: true
    },
    {
        id: 6,
        title: "Fortune Cookies App",
        description: "A delightful fortune cookie application with random quote generation, smooth animations, and an intuitive user experience.",
        technologies: [
            "JavaScript", 
            "HTML5", 
            "CSS3", 
            "Animations"
        ],
        imageUrl: Portfolio6,
        liveUrl: "https://edmyrbatiancila.github.io/fortune_cookies/",
        githubUrl: "https://github.com/edmyrbatiancila/fortune_cookies",
        category: "Web Apps",
        featured: false
    },
    {
        id: 7,
        title: "CRM-Lite",
        description: "A lightweight Customer Relationship Management (CRM) tool designed to help small businesses manage customer interactions and data efficiently.",
        technologies: [
            "React", 
            "TypeScript", 
            "Laravel", 
            "MySQL", 
            "Inertia.js"
        ],
        imageUrl: Portfolio7,
        liveUrl: "https://crm-lite-production-d24e.up.railway.app/",
        githubUrl: "https://github.com/edmyrbatiancila/crm-lite",
        category: "Full Stack Practice Projects",
        featured: true,
    },
    {
        id: 8,
        title: "InvenTrack",
        description: "An inventory management system that streamlines stock tracking, order management, and reporting for small to medium-sized businesses.",
        technologies: [
            "Laravel", 
            "React", 
            "TypeScript", 
            "MySQL", 
            "Inertia.js", 
            "Tailwind CSS"
        ],
        imageUrl: Portfolio8,
        liveUrl: "#",
        githubUrl: "https://github.com/edmyrbatiancila/inventory-management",
        category: "Full Stack Practice Projects",
        featured: false,
        isOngoing: true
    }
];