import { IconType } from 'react-icons';
import {
    SiMicrosoftsqlserver,
    SiPython,
    SiLinux,
    SiCplusplus,
    SiC,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiGit,
    SiDocker,
    SiVim,
    SiGnubash,
    SiRust,
    SiNginx,
    SiMicrosoft
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

export interface SkillItem {
    name: string;
    level: number;
    icon: IconType;
    category: string;
    color: string;
}

export interface LanguageSkillItem {
    language: string;
    level: number;
    description: string;
}

export const programmingSkills: SkillItem[] = [
    { name: 'C', level: 95, icon: SiC, category: 'Systems', color: '#A8B9CC' },
    { name: 'C++', level: 90, icon: SiCplusplus, category: 'Systems', color: '#00599C' },
    { name: 'Python', level: 85, icon: SiPython, category: 'Backend', color: '#3776AB' },
    { name: 'Java', level: 75, icon: FaJava, category: 'Backend', color: '#ED8B00' },
    { name: 'Rust', level: 70, icon: SiRust, category: 'Systems', color: '#CE422B' },
    { name: 'TypeScript', level: 82, icon: SiTypescript, category: 'Frontend', color: '#3178C6' }
];

export const webSkills: SkillItem[] = [
    { name: 'JavaScript', level: 88, icon: SiJavascript, category: 'Frontend', color: '#F7DF1E' },
    { name: 'React', level: 85, icon: SiReact, category: 'Frontend', color: '#61DAFB' },
    { name: 'Next.js', level: 80, icon: SiNextdotjs, category: 'Framework', color: '#000000' }
];

export const toolsSkills: SkillItem[] = [
    { name: 'Linux', level: 92, icon: SiLinux, category: 'OS', color: '#FCC624' },
    { name: 'Git', level: 88, icon: SiGit, category: 'VCS', color: '#F05032' },
    { name: 'Docker', level: 75, icon: SiDocker, category: 'DevOps', color: '#2496ED' },
    { name: 'Nginx', level: 70, icon: SiNginx, category: 'Web Server', color: '#009639' },
    { name: 'Bash', level: 85, icon: SiGnubash, category: 'Shell', color: '#4EAA25' },
    { name: 'Vim', level: 80, icon: SiVim, category: 'Editor', color: '#019733' },
    { name: 'SQL Server', level: 75, icon: SiMicrosoftsqlserver, category: 'Database', color: '#CC2927' },
    { name: 'Prompt Flow', level: 65, icon: SiMicrosoft, category: 'AI/ML', color: '#0078D4' },
    { name: 'MCP', level: 70, icon: FaCode, category: 'Protocol', color: '#6366F1' }
];

export const languageSkills: LanguageSkillItem[] = [
    {
        language: 'portuguese',
        level: 100,
        description: 'nativeDescription'
    },
    {
        language: 'english',
        level: 70,
        description: 'englishDescription'
    }
];

export const softSkillsList = [
    'teamwork',
    'problemSolving',
    'autonomousLearning',
    'adaptability',
    'resilience',
    'communication'
];
