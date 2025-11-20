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
import tailwindLogo from '../../assets/tailwind-css-logo.png';
import expressLogo from '../../assets/express-js.png';
import codeIgniterLogo from '../../assets/codeigniter.png';
import playLogo from '../../assets/play-logo.png';
import scalaLogo from '../../assets/scala-logo.png';
import typeScriptLogo from '../../assets/typescript-logo.png';
import gitlabLogo from '../../assets/gitlab-logo.png';
import gitLogo from '../../assets/git-logo.png';
import netlifyLogo from '../../assets/netlify-logo.png';
import nextjsLogo from '../../assets/nextjs-logo.png';
import supabaseLogo from '../../assets/supabase-logo.png';
import inertiaJsLogo from '../../assets/inertiajs-logo.png';
import balsamiqLogo from '../../assets/balsamiqLogo.png';
import figmaLogo from '../../assets/figma-logo.png';
import jiraLogo from '../../assets/jira-logo.png';
import trelloLogo from '../../assets/trello-logo.png';
import visualStudioLogo from '../../assets/visual-studio-code-logo.png';
import shadcnLogo from '../../assets/shadcn-logo.png';


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
            { name: "PHP", logo: phpLogo, level: 70, description: "Server-side development" },
            { name: "Scala", logo: scalaLogo, level: 60, description: "Functional programming" },
            { name: "TypeScript", logo: typeScriptLogo, level: 80, description: "Typed superset of JavaScript" }
        ]
    },
    {
        title: "Frameworks",
        icon: Globe,
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "React", logo: reactLogo, level: 85, description: "Component-based development" },
            { name: "Laravel", logo: laravelLogo, level: 75, description: "Full-stack PHP framework" },
            { name: "Bootstrap", logo: bootstrapLogo, level: 80, description: "Responsive design framework" },
            { name: "Tailwind CSS", logo: tailwindLogo, level: 95, description: "Utility-first CSS framework" },
            { name: "Express JS", logo: expressLogo, level: 70, description: "Web application framework for Node.js" },
            { name: "CodeIgniter", logo: codeIgniterLogo, level: 70, description: "Lightweight PHP framework" },
            { name: "Play Framework", logo: playLogo, level: 65, description: "Scala web framework" },
            { name: "Next.js", logo: nextjsLogo, level: 80, description: "React framework for server-side rendering" }
        ]
    },
    {
        title: "Tools & Platforms",
        icon: Server,
        color: "from-emerald-500 to-teal-500",
        skills: [
            { name: "GitHub", logo: githubLogo, level: 85, description: "Version control and collaboration" },
            { name: "GitLab", logo: gitlabLogo, level: 80, description: "DevOps platform" },
            { name: "Git", logo: gitLogo, level: 90, description: "Distributed version control system" },
            { name: "Node.js", logo: nodeLogo, level: 70, description: "Server-side JavaScript" },
            { name: "MySQL", logo: mysqlLogo, level: 75, description: "Database management" },
            { name: "WAMP", logo: wampLogo, level: 70, description: "Local development environment" },
            { name: "XAMPP", logo: xamppLogo, level: 80, description: "Cross-platform web server solution" },
            { name: "Netlify", logo: netlifyLogo, level: 75, description: "Web hosting and automation" },
            { name: "Supabase", logo: supabaseLogo, level: 70, description: "Backend as a Service" },
            { name: "Jira", logo: jiraLogo, level: 80, description: "Project management and issue tracking" },
            { name: "Trello", logo: trelloLogo, level: 85, description: "Task management and collaboration" },
            { name: "Visual Studio Code", logo: visualStudioLogo, level: 90, description: "Source-code editor" }
        ]
    },
    {
        title: "Libraries",
        icon: Zap,
        color: "from-orange-500 to-red-500",
        skills: [
            { name: "jQuery", logo: jqueryLogo, level: 80, description: "DOM manipulation and AJAX" },
            { name: "Socket.IO", logo: socketLogo, level: 65, description: "Real-time communication" },
            { name: "Inertia.js", logo: inertiaJsLogo, level: 85, description: "Modern monoliths with server-driven SPA" },
            { name: "Shadcn UI", logo: shadcnLogo, level: 80, description: "Component library for building accessible React apps" }
        ]
    },
    {
        title: "Design Tools",
        icon: Palette,
        color: "from-pink-500 to-rose-500",
        skills: [
            { name: "Canva", logo: canvaLogo, level: 85, description: "Graphics and design creation" },
            { name: "Balsamiq", logo: balsamiqLogo, level: 70, description: "Wireframing and prototyping" },
            { name: "Figma", logo: figmaLogo, level: 80, description: "Interface design and collaboration" }
        ]
    }
];