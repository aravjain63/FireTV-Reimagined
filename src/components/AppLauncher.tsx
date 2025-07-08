
import React from 'react';
import { Button } from '@/components/ui/button';

interface App {
  id: string;
  name: string;
  icon: string;
  color: string;
  logo?: string;
}

const AppLauncher = () => {
  const apps: App[] = [
    { id: '1', name: 'Netflix', icon: 'NETFLIX', color: 'bg-red-600', logo: 'text-white font-bold text-xs' },
    { id: '2', name: 'Prime Video', icon: 'prime video', color: 'bg-blue-600', logo: 'text-white text-xs' },
    { id: '3', name: 'Disney+', icon: 'Disney+', color: 'bg-blue-800', logo: 'text-white font-bold text-xs' },
    { id: '4', name: 'HBO Max', icon: 'HBO max', color: 'bg-purple-700', logo: 'text-white text-xs font-bold' },
    { id: '5', name: 'Hulu', icon: 'hulu', color: 'bg-green-500', logo: 'text-white font-bold text-xs' },
    { id: '6', name: 'YouTube', icon: 'YouTube', color: 'bg-red-500', logo: 'text-white font-bold text-xs' },
    { id: '7', name: 'Apple TV+', icon: 'tv+', color: 'bg-gray-800', logo: 'text-white text-xs' },
    { id: '8', name: 'Twitch', icon: 'twitch', color: 'bg-purple-600', logo: 'text-white font-bold text-xs' }
  ];

  return (
    <div className="px-4 mb-6">
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
        {apps.map((app) => (
          <Button
            key={app.id}
            variant="ghost"
            className="flex-shrink-0 p-0 hover:scale-105 transition-transform focus:outline-none focus:ring-0 border-0"
            onClick={() => console.log(`Launching ${app.name}`)}
          >
            <div className={`w-16 h-12 rounded ${app.color} flex items-center justify-center shadow-md`}>
              <span className={`${app.logo} leading-tight text-center`}>
                {app.icon}
              </span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AppLauncher;
