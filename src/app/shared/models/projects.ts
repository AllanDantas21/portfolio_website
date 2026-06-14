/**
 * Project Types
 */
export type BadgeColor = 'gold' | 'silver' | 'bronze' | 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'purple' | 'pink' | 'yellow' | 'orange' | 'cyan';

export interface Project {
  id: string;
  badgeLabel: string;
  badgeColor: BadgeColor;
  difficulty: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  date: string;
  img?: string;
  image1?: string;
  image2?: string;
  description1: string;
  description2: string;
  description3?: string;
  description4?: string;
  description5?: string;
  repoLink: string;
  badge?: Project;
}

export interface ProjectGridItem {
  id: string;
  title: string;
  category?: string;
  badgeLabel?: string;
  badgeColor?: BadgeColor;
  difficulty?: string;
}
