
import React from 'react';
import ContentCard from './ContentCard';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AppRowProps {
  title: string;
  subtitle?: string;
  isAI?: boolean;
  content: Array<{
    id: string;
    title: string;
    image: string;
    rating?: number;
    duration?: string;
    year?: number;
    genre?: string;
    watchedBy?: string[];
    streamingService?: string;
  }>;
}

const AppRow = ({
  title,
  subtitle,
  isAI = false,
  content
}: AppRowProps) => {
  return (
    <div className="mb-10 px-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-foreground tracking-tight">{title}</h2>
            {isAI && (
              <div className="flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-3 py-1 rounded-md text-xs font-bold shadow-lg">
                <Sparkles className="w-3 h-3 mr-1" />
                AI
              </div>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1 font-light">{subtitle}</p>
          )}
        </div>
        
        <div className="flex space-x-1">
          
          
        </div>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {content.map((item, index) => (
          <div 
            key={item.id} 
            className="flex-shrink-0 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ContentCard 
              title={item.title} 
              image={item.image} 
              rating={item.rating} 
              duration={item.duration} 
              year={item.year} 
              genre={item.genre} 
              showWatchedBy={item.watchedBy} 
              streamingService={item.streamingService} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppRow;