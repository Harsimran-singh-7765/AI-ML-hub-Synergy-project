import React from 'react';
import { GameCard } from '../components/GameCard';
import { games } from '../data/games';
import { ArrowRight, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="h-full w-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 opacity-20">
              {[...Array(9)].map((_, i) => (
                <Brain
                  key={i}
                  className="w-24 h-24 text-white transform rotate-45 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Brain Games Arcade
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Challenge your mind with our collection of engaging puzzle and memory games
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="#games"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Play Games
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <Sparkles className="w-8 h-8 mr-2 text-indigo-600" />
            Featured Games
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of mind-bending puzzles, memory challenges, and brain teasers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}