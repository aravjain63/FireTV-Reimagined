import React from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fireTVLogo from '@/assets/Firetv.png';

interface HeaderProps {
  onSocialPageToggle: () => void;
  showingSocialPage: boolean;
}

const Header = ({
  onSocialPageToggle,
  showingSocialPage
}: HeaderProps) => {
  return (
<header className="h-20 bg-black/95 backdrop-blur-sm p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Fire TV Image Logo */}
          <div className="w-16 h-16 rounded-full bg-transparent overflow-hidden flex items-center justify-center">
            <img src={fireTVLogo} alt="Fire TV Logo" className="object-contain w-18 h-18 p-1" />
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6">
            {/* Home Button */}
            <Button
              variant="ghost"
              onClick={() => showingSocialPage && onSocialPageToggle()}
              className={`text-lg font-medium px-4 py-2 rounded-none border-b-2 transition-colors ${
                !showingSocialPage
                  ? 'text-white border-white bg-transparent hover:bg-white/10'
                  : 'text-gray-400 border-transparent hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Button>

            {/* Dummy Buttons now toggle social page */}
            <Button
              variant="ghost"
              onClick={() => !showingSocialPage && onSocialPageToggle()}
              className="text-lg font-medium text-gray-400 hover:text-white px-4 py-2 hover:bg-white/10"
            >
              Find
            </Button>

            <Button
              variant="ghost"
              onClick={() => !showingSocialPage && onSocialPageToggle()}
              className="text-lg font-medium text-gray-400 hover:text-white px-4 py-2 hover:bg-white/10"
            >
              Live
            </Button>

            {/* Social Button */}
            <Button
              variant="ghost"
              onClick={() => !showingSocialPage && onSocialPageToggle()}
              className={`text-lg font-medium px-4 py-2 rounded-none border-b-2 transition-colors ${
                showingSocialPage
                  ? 'text-white border-white bg-transparent hover:bg-white/10'
                  : 'text-gray-400 border-transparent hover:text-white hover:bg-white/10'
              }`}
            >
              Social
            </Button>
          </nav>
        </div>

        {/* Right side - Settings */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Settings className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
