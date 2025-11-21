export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveUrl: string;
    githubUrl?: string;
    category: string;
    featured: boolean;
}