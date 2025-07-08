import React from 'react';
import { Play, Plus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import StreamingBadge from './StreamingBadge';

interface HoverContentCardProps {
  title: string;
  image: string;
  rating?: number;
  duration?: string;
  year?: number;
  genre?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  showWatchedBy?: string[];
  streamingService?: string;
}

const HoverContentCard = ({ 
  title, 
  image, 
  rating = 4.2, 
  duration = "2h 15m", 
  year = 2023, 
  genre = "Action",
  description = "An engaging story that captivates audiences with its compelling characters and stunning visuals.",
  size = 'medium',
  showWatchedBy = [],
  streamingService = "Netflix"
}: HoverContentCardProps) => {
  const sizeClasses = {
    small: 'w-48 h-28',
    medium: 'w-56 h-32',
    large: 'w-64 h-36'
  };

  return (
    <HoverCard openDelay={300} closeDelay={150}>
      <HoverCardTrigger asChild>
        <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer">
          <div className={`${sizeClasses[size]} relative bg-gray-900`}>
            <img
              src={image.startsWith('http') ? image : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=400&q=80`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Streaming Service Badge */}
            <StreamingBadge service={streamingService} />
            
            {/* Play button overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button size="sm" className="bg-white text-black hover:bg-gray-200 font-semibold">
                <Play className="w-4 h-4 mr-1" />
                Play
              </Button>
            </div> */}

            {/* Quick Actions */}
            <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button size="icon" variant="secondary" className="w-6 h-6 bg-black/50 hover:bg-black/70 border-0">
                <Plus className="w-3 h-3 text-white" />
              </Button>
              <Button size="icon" variant="secondary" className="w-6 h-6 bg-black/50 hover:bg-black/70 border-0">
                <Heart className="w-3 h-3 text-white" />
              </Button>
            </div>

            {/* Content quality badge */}
            {rating > 4.5 && (
              <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                Top Rated
              </div>
            )}
          </div>

          {/* Content Info - Only visible on hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-semibold text-sm text-white mb-1 line-clamp-1">{title}</h3>
            <div className="flex items-center justify-between text-xs text-gray-300">
              <span>{year} • {genre}</span>
              <span>★ {rating}</span>
            </div>
            
            {showWatchedBy.length > 0 && (
              <div className="mt-2 flex items-center text-xs text-blue-400">
                <div className="flex -space-x-1 mr-2">
                  {showWatchedBy.slice(0, 3).map((friend, index) => (
                    <div key={index} className="w-4 h-4 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 border border-black flex items-center justify-center text-white text-xs font-bold">
                      {friend[0]}
                    </div>
                  ))}
                </div>
                <span>Watched by friends</span>
              </div>
            )}
          </div>
        </div>
      </HoverCardTrigger>
      
      <HoverCardContent className="w-80 bg-card border border-border rounded-lg shadow-2xl overflow-hidden" align="center" side="top">
        <div className="relative">
          {/* Larger thumbnail */}
          <div className="w-full h-48 relative bg-gray-900">
            <img
              src={image.startsWith('http') ? image : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=400&q=80`}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Streaming Service Badge */}
            <StreamingBadge service={streamingService} />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold shadow-lg">
                <Play className="w-5 h-5 mr-2" />
                Play Now
              </Button>
            </div>
          </div>
          
          {/* Content details */}
          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-lg text-foreground mb-1">{title}</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{year}</span>
                  <span>•</span>
                  <span>{genre}</span>
                  <span>•</span>
                  <span>{duration}</span>
                  <span>•</span>
                  <span className="flex items-center">
                    ★ {rating}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            
            {/* Friends who watched */}
            {showWatchedBy.length > 0 && (
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex -space-x-1">
                  {showWatchedBy.slice(0, 3).map((friend, index) => (
                    <div key={index} className="w-6 h-6 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-card flex items-center justify-center text-white text-xs font-bold">
                      {friend[0]}
                    </div>
                  ))}
                  {showWatchedBy.length > 3 && (
                    <div className="w-6 h-6 rounded-xl bg-muted border-2 border-card flex items-center justify-center text-xs font-bold text-muted-foreground">
                      +{showWatchedBy.length - 3}
                    </div>
                  )}
                </div>
                <span className="text-blue-400 text-sm">Watched by friends</span>
              </div>
            )}
            
            {/* Action buttons */}
            <div className="flex items-center space-x-2 pt-2">
              <Button size="sm" className="flex-1">
                <Play className="w-4 h-4 mr-2" />
                Watch
              </Button>
              <Button size="sm" variant="outline" className="flex items-center">
                <Plus className="w-4 h-4 mr-1" />
                List
              </Button>
              <Button size="sm" variant="outline" className="flex items-center">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverContentCard;