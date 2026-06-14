/**
 * Skills Types
 */
export interface SkillItem {
  name: string;
  level: number;
  icon?: string;
  category: string;
  color: string;
}

export interface LanguageSkill {
  language: string;
  level: number;
  description: string;
}

export interface SkillsCategory {
  name: string;
  skills: SkillItem[];
}
