import React from 'react';
import { Play, Brain, Sparkles, Award } from 'lucide-react';
import { Game } from '../types';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: Game;
  index: number;
}

export function GameCard({ game, index }: GameCardProps) {
  const animations = [
    'hover:-translate-y-2',
    'hover:translate-x-2',
    'hover:-translate-x-2',
    'hover:scale-105',
    'hover:rotate-1'
  ];

  // Determine the game type icon
  const GameTypeIcon = () => {
    if (game.embedType === 'iframe') {
      return <Sparkles className="w-3 h-3 mr-1" />;
    }
    return <Brain className="w-3 h-3 mr-1" />;
  };

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-500 ${animations[index % animations.length]}`}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={game.thumbnailUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white mb-2">
              <GameTypeIcon />
              {game.category}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/game/${game.id}`}
            className="transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 rounded-full p-3 shadow-lg hover:scale-110"
          >
            <Play className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{game.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
              <Sparkles className="w-4 h-4 mr-1" />
              by {game.author}
            </p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 flex items-center">
              <Award className="w-3 h-3 mr-1" />
              {game.completionCriteria}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
