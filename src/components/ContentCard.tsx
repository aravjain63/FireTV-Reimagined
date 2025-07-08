
import React from 'react';
import { Play, Plus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StreamingBadge from './StreamingBadge';

interface ContentCardProps {
  title: string;
  image: string;
  rating?: number;
  duration?: string;
  year?: number;
  genre?: string;
  size?: 'small' | 'medium' | 'large';
  showWatchedBy?: string[];
  streamingService?: string;
}

const ContentCard = ({ 
  title, 
  image, 
  rating = 4.2, 
  duration = "2h 15m", 
  year = 2023, 
  genre = "Action",
  size = 'medium',
  showWatchedBy = [],
  streamingService = "Netflix"
}: ContentCardProps) => {
  const sizeClasses = {
    small: 'w-48 h-28',
    medium: 'w-56 h-32',
    large: 'w-64 h-36'
  };

  return (
    <div className="group relative rounded overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10">
      <div className={`${sizeClasses[size]} relative bg-gray-900`}>
        <img
          src={image.startsWith('http') ? image : `https://images.Chirag.com/${image}?auto=format&fit=crop&w=400&q=80`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        
        {/* Dark overlay on hover */}
        {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
        
        {/* Streaming Service Badge
        <StreamingBadge service={streamingService} /> */}
        
        {/* Play button overlay */}
        {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" className="bg-white text-black hover:bg-gray-200 font-semibold">
            <Play className="w-4 h-4 mr-1" />
            Play
          </Button>
        </div> */}

        {/* Quick Actions */}
        {/* <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="w-6 h-6 bg-black/50 hover:bg-black/70 border-0">
            <Plus className="w-3 h-3 text-white" />
          </Button>
          <Button size="icon" variant="secondary" className="w-6 h-6 bg-black/50 hover:bg-black/70 border-0">
            <Heart className="w-3 h-3 text-white" />
          </Button>
        </div> */}

        {/* Content quality badge */}
        {/* {rating > 4.5 && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
            4K
          </div>
        )} */}
      </div>

      {/* Content Info - Only visible on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* <h3 className="font-semibold text-sm text-white mb-1 line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between text-xs text-gray-300">
          <span>{year} • {genre}</span>
          <span>★ {rating}</span>
        </div> */}
        
        {/* {showWatchedBy.length > 0 && (
          <div className="mt-2 flex items-center text-xs text-blue-400">
            <div className="flex -space-x-1 mr-2">
              {showWatchedBy.slice(0, 3).map((friend, index) => (
                <div key={index} className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border border-black flex items-center justify-center text-white text-xs font-bold">
                  {friend[0]}
                </div>
              ))}
            </div>
            <span>Watched by friends</span>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ContentCard;