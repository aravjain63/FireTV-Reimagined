
import React from 'react';

interface StreamingBadgeProps {
  service: string;
}

const StreamingBadge = ({ service }: StreamingBadgeProps) => {
  const getServiceStyles = (service: string) => {
    switch (service.toLowerCase()) {
      case 'netflix':
        return 'bg-red-600 text-white font-bold';
      case 'prime video':
        return 'bg-blue-600 text-white font-medium';
      case 'disney+':
        return 'bg-blue-800 text-white font-bold';
      case 'hulu':
        return 'bg-green-500 text-white font-bold';
      case 'hbo max':
        return 'bg-purple-700 text-white font-bold';
      case 'apple tv+':
        return 'bg-gray-800 text-white font-medium';
      case 'youtube':
        return 'bg-red-500 text-white font-bold';
      case 'twitch':
        return 'bg-purple-600 text-white font-bold';
      default:
        return 'bg-gray-700 text-white font-medium';
    }
  };

  return (
    <div className={`absolute bottom-2 left-2 px-2 py-1 rounded text-xs ${getServiceStyles(service)}`}>
      {service.toUpperCase()}
    </div>
  );
};

export default StreamingBadge;
