export interface Game {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  instructions: string;
  thumbnailUrl: string;
  projectId?: string; // Make optional since not all games will be from Scratch
  embedUrl?: string; // Add direct embed URL for non-Scratch games
  embedType: 'scratch' | 'iframe'; // Type of embed
  featured: boolean;
  completionCriteria: string; // Added completion criteria
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}
