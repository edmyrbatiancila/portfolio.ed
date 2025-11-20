import { Code, Globe, Palette, Server, Zap } from "lucide-react";
import { SkillCategory } from "../../types/ISkills";
import htmlLogo from '../../assets/HTML.png';
import cssLogo from '../../assets/css-logo.png';
import javascriptLogo from '../../assets/JavaScript.png';
import bootstrapLogo from '../../assets/bootstrap.png';
import githubLogo from '../../assets/github.png';
import reactLogo from '../../assets/react-logo.png';
import jqueryLogo from '../../assets/jQuery.png';
import socketLogo from '../../assets/socket.png';
import mysqlLogo from '../../assets/mysql.png';
import wampLogo from '../../assets/wamp-logo.png';
import canvaLogo from '../../assets/canva-logo.png';
import sqlLogo from '../../assets/sql-logo.png';
import phpLogo from '../../assets/php.png';
import nodeLogo from '../../assets/nodejs-logo.png';
import laravelLogo from '../../assets/laravel-logo.png';
import xamppLogo from '../../assets/xampp-logo.png';

export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        skills: [
            { name: "HTML", logo: htmlLogo, level: 90, description: "Semantic markup and accessibility" },
            { name: "CSS", logo: cssLogo, level: 85, description: "Modern layouts and animations" },
            { name: "JavaScript", logo: javascriptLogo, level: 80, description: "ES6+ and modern JS concepts" },
            { name: "SQL", logo: sqlLogo, level: 75, description: "Database queries and optimization" },
            { name: "PHP", logo: phpLogo, level: 70, description: "Server-side development" }
        ]
    },
    {
        title: "Frameworks",
        icon: Globe,
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "React", logo: reactLogo, level: 85, description: "Component-based development" },
            { name: "Laravel", logo: laravelLogo, level: 75, description: "Full-stack PHP framework" },
            { name: "Bootstrap", logo: bootstrapLogo, level: 80, description: "Responsive design framework" }
        ]
    },
    {
        title: "Tools & Platforms",
        icon: Server,
        color: "from-emerald-500 to-teal-500",
        skills: [
            { name: "GitHub", logo: githubLogo, level: 85, description: "Version control and collaboration" },
            { name: "Node.js", logo: nodeLogo, level: 70, description: "Server-side JavaScript" },
            { name: "MySQL", logo: mysqlLogo, level: 75, description: "Database management" },
            { name: "WAMP", logo: wampLogo, level: 70, description: "Local development environment" },
            { name: "XAMPP", logo: xamppLogo, level: 80, description: "Cross-platform web server solution" }
        ]
    },
    {
        title: "Libraries",
        icon: Zap,
        color: "from-orange-500 to-red-500",
        skills: [
            { name: "jQuery", logo: jqueryLogo, level: 80, description: "DOM manipulation and AJAX" },
            { name: "Socket.IO", logo: socketLogo, level: 65, description: "Real-time communication" }
        ]
    },
    {
        title: "Design Tools",
        icon: Palette,
        color: "from-pink-500 to-rose-500",
        skills: [
            { name: "Canva", logo: canvaLogo, level: 85, description: "Graphics and design creation" }
        ]
    }
];