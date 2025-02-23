export interface Game {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  instructions: string;
  thumbnailUrl: string;
  projectId: string;
  featured: boolean;
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}