/**
 * Awards Types
 */
export interface Award {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  date?: string;
  category?: string;
}

export interface Badge extends Award {
  image?: string;
  url?: string;
}
