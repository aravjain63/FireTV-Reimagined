
import React from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] mb-8 overflow-hidden mx-4">
      {/* Main Featured Banner */}
      {/* <div className="absolute inset-0">
        <img
          src="https://wallpapercat.com/w/full/8/c/f/124601-3840x2160-desktop-4k-stranger-things-wallpaper-image.jpg"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div> */}
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-8">
        <div className="max-w-2xl animate-fade-in">
          {/* Service Badge */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-semibold tracking-wide">
              NETFLIX
            </div>
            <div className="text-yellow-400 text-sm font-medium flex items-center">
              <span className="text-yellow-300 mr-1">★</span>
              Trending #1 in TV Shows
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
            Stranger
            <br />
            <span className="text-red-500">Things</span>
          </h1>
          
          {/* Metadata */}
          <div className="flex items-center space-x-4 mb-6 text-white">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium">TV-14</span>
            <span className="font-medium">2022</span>
            <span className="font-medium">4 Seasons</span>
            <span className="text-muted-foreground">Drama, Horror, Sci-Fi</span>
          </div>
          
          {/* Description */}
          <p className="text-lg text-gray-200 mb-8 max-w-xl leading-relaxed font-light">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 hover:border-white px-6 py-3 text-lg backdrop-blur-sm transition-all duration-200">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
