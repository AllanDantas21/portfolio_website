import { IconType } from 'react-icons';
import { FaBriefcase, FaBuilding, FaCode, FaLaptopCode } from 'react-icons/fa';

export interface ExperienceItem {
    id: string;
    year: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
    icon: IconType;
    color: string;
    location?: string;
    type?: string;
}

export const workExperiences: ExperienceItem[] = [
    {
        id: 'ciandt-analyst',
        year: 'nov 2025 - presente',
        title: 'Analista de Sistemas Jr',
        company: 'CI&T',
        description: 'Trabalho atual como Analista de Sistemas Jr na CI&T, desenvolvendo soluções com tecnologias modernas.',
        technologies: ['C#', 'AngularJS'],
        icon: FaBriefcase,
        color: '#2D3748', // gray.800
        location: 'Rio de Janeiro, Brasil',
        type: 'Tempo integral'
    },
    {
        id: 'ciandt-intern',
        year: 'mar 2025 - nov 2025',
        title: 'Estagiário em Engenharia de Software',
        company: 'CI&T',
        description: 'Desenvolvi e mantive microsserviços escaláveis utilizando Java e Spring Boot, aplicando práticas de TDD e DDD. Atuei na concepção, desenvolvimento e deploy de agentes de Inteligência Artificial com Python e Prompt Flow. Realizei análise de Métricas Ágeis com Looker Studio e orquestrei extração de dados automatizada com Google Apps Script.',
        technologies: ['Java', 'Spring Boot', 'Python', 'Prompt Flow', 'Looker Studio', 'Google Apps Script', 'TDD', 'DDD'],
        icon: FaLaptopCode,
        color: '#1A202C', // gray.900
        location: 'Rio de Janeiro, Brasil · Remota',
        type: 'Meio período'
    },
    {
        id: 'fortytwo-rio',
        year: 'out 2024 - mar 2025',
        title: 'Desenvolvedor de software',
        company: '42 | RIO',
        description: 'Atuei no desenvolvimento e na automação de processos para ingestão, transformação e validação de dados, otimizando a área de dados de sinistros da Austral seguradora.',
        technologies: ['Python', 'Microsoft SQL Server', 'Dagster', 'Docker', 'Great Expectations', 'Linux', 'Git'],
        icon: FaBuilding,
        color: '#553C9A', // purple mais escuro
        location: 'Rio de Janeiro, Brasil',
        type: 'Estágio'
    },
    {
        id: 'ruminante',
        year: 'jun 2024 - set 2024',
        title: 'Desenvolvedor de software',
        company: 'Ruminante',
        description: 'Desenvolvi e implementei aplicações web utilizando uma stack moderna com React, Next.js, Tailwind CSS e Golang. Esta experiência foi fundamental para aprofundar minhas competências em arquitetura de software, design de sistemas distribuídos e na criação de interfaces responsivas.',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Golang', 'TypeScript'],
        icon: FaCode,
        color: '#C05621', // orange mais escuro
        location: 'Rio de Janeiro, Brasil · Remota',
        type: 'Freelance'
    }
];

