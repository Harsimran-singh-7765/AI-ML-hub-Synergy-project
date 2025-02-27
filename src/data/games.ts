export const games = [
  {
    id: '1',
    title: 'Pop and Drop',
    author: 'LogicMaster',
    category: 'Logic',
    description: 'Test your logical thinking with this engaging puzzle game where you pop and drop elements to solve challenges.',
    instructions: 'Click to pop bubbles and solve the logical puzzles. Think carefully about each move! Complete at least 5 levels to clear this game.',
    thumbnailUrl: 'https://images.squarespace-cdn.com/content/v1/5cf80e4e43d2a600018fd756/4c1db664-3862-4b83-b42d-0a07958c6bf0/pop+%26+drop+logo+austin+tx.png?auto=format&fit=crop&q=80&w=1200',
    projectId: '279422357',
    embedType: 'scratch',
    featured: true,
    completionCriteria: 'Complete 5 levels to clear'
  },
  {
    id: '2',
    title: 'AI Warden',
    author: 'PuzzleWhiz',
    category: 'AI Challenge',
    description: 'Challenge your mind with an intriguing collection of riddles that will test your wit and creativity.',
    instructions: 'Read each riddle carefully and type your answer. Think outside the box! Solve as many riddles as you can in the shortest time possible.',
    thumbnailUrl: 'AIWarden.jpeg',
    projectId: '326163967',
    embedUrl: 'https://ai-warden.ascpixi.dev/',
    embedType: 'iframe',
    featured: true,
    completionCriteria: 'Solve as many riddles as possible'
  },
  {
    id: '3',
    title: 'Memory Maze',
    author: 'MazeRunner',
    category: 'Memory',
    description: 'Navigate through a challenging maze while testing your memory skills in this exciting adventure.',
    instructions: 'Remember the path and avoid obstacles as you make your way through the maze. Complete at least 3 levels to clear this game.',
    thumbnailUrl: 'memorymaze.jpeg',
    projectId: '26501005',
    embedType: 'scratch',
    featured: true,
    completionCriteria: 'Complete 3 levels to clear'
  },
  {
    id: '4',
    title: 'Memory Madness',
    author: 'BrainTeaser',
    category: 'Memory',
    description: 'Put your memory to the ultimate test in this fast-paced, challenging memory game.',
    instructions: 'Match pairs and remember patterns to progress through increasingly difficult levels. Complete at least 3 levels to clear this game.',
    thumbnailUrl: 'MemoryMadness.jpeg',
    projectId: '57765552',
    embedType: 'scratch',
    featured: true,
    completionCriteria: 'Complete 3 levels to clear'
  },
  {
    id: '5',
    title: 'Puzzle Mind',
    author: 'Harsimran Singh',
    category: 'Logic',
    description: 'Challenge your brain with this collection of mind-bending puzzles designed to test your problem-solving skills.',
    instructions: 'Solve various puzzles by thinking creatively and using logical reasoning. Complete at least 10 levels to clear this game.',
    thumbnailUrl: 'PuzzleMind.jpeg',
    embedUrl: 'https://ephemeral-unicorn-ad37c6.netlify.app',
    embedType: 'iframe',
    featured: true,
    completionCriteria: 'Complete 10 levels to clear'
  },
  {
    id: '6',
    title: 'The Impossible Interview',
    author: 'AIExplorer',
    category: 'AI Challenge',
    description: 'Face off against an AI interviewer in this unique and challenging interview simulation.',

    instructions: 'Answer questions carefully and try to navigate through the impossible interview scenarios.',
    thumbnailUrl: 'inter.jpeg',
    projectId: '1126765653',
    embedType: 'scratch',
    featured: true,
    completionCriteria: 'Answer as many questions as possible'
  }
];

export type Category = 'Logic' | 'Puzzle' | 'Memory' | 'Simulation' | 'AI Challenge';
