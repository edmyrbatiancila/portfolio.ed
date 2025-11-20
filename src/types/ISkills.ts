export interface SkillsType {
    name: string;
    logo: string;
    level: number;
    description: string;
}

export interface SkillCategory {
    title: string;
    icon: React.ElementType;
    color: string;
    skills: SkillsType[];
}