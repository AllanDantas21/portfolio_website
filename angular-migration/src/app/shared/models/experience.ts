/**
 * Experience Types
 */
export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  icon?: string;
  color: string;
  location?: string;
  type?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  color: string;
}
