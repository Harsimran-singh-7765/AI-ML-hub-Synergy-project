export const games = [
  {
    id: '1',
    title: 'Pop and Drop',
    author: 'LogicMaster',
    category: 'Logic',
    description: 'Test your logical thinking with this engaging puzzle game where you pop and drop elements to solve challenges.',
    instructions: 'Click to pop bubbles and solve the logical puzzles. Think carefully about each move!',
    thumbnailUrl: 'https://images.squarespace-cdn.com/content/v1/5cf80e4e43d2a600018fd756/4c1db664-3862-4b83-b42d-0a07958c6bf0/pop+%26+drop+logo+austin+tx.png?auto=format&fit=crop&q=80&w=1200',
    projectId: '279422357',
    featured: true
  },
  {
    id: '2',
    title: 'Riddle Master',
    author: 'PuzzleWhiz',
    category: 'Puzzle',
    description: 'Challenge your mind with an intriguing collection of riddles that will test your wit and creativity.',
    instructions: 'Read each riddle carefully and type your answer. Think outside the box!',
    thumbnailUrl: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=1200',
    projectId: '326163967',
    featured: true
  },
  {
    id: '3',
    title: 'Memory Maze',
    author: 'MazeRunner',
    category: 'Memory',
    description: 'Navigate through a challenging maze while testing your memory skills in this exciting adventure.',
    instructions: 'Remember the path and avoid obstacles as you make your way through the maze.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=1200',
    projectId: '26501005',
    featured: true
  },
  {
    id: '4',
    title: 'Memory Madness',
    author: 'BrainTeaser',
    category: 'Memory',
    description: 'Put your memory to the ultimate test in this fast-paced, challenging memory game.',
    instructions: 'Match pairs and remember patterns to progress through increasingly difficult levels.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&q=80&w=1200',
    projectId: '57765552',
    featured: true
  },
  {
    id: '5',
    title: 'The Heart Monitor',
    author: 'HealthTech',
    category: 'Simulation',
    description: 'Experience the intensity of monitoring vital signs in this unique medical simulation game.',
    instructions: 'Keep track of the heart rate and respond to various medical scenarios.',
    thumbnailUrl: "../../public/heart.jpg",
    projectId: '1083694427',
    featured: true
  },
  {
    id: '6',
    title: 'The Impossible Interview',
    author: 'AIExplorer',
    category: 'AI Challenge',
    description: 'Face off against an AI interviewer in this unique and challenging interview simulation.',
    instructions: 'Answer questions carefully and try to navigate through the impossible interview scenarios.',
    thumbnailUrl: '../../public/devil.png',
    projectId: '1126765653',
    featured: true
  }
];

export type Category = 'Logic' | 'Puzzle' | 'Memory' | 'Simulation' | 'AI Challenge';
