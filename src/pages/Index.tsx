
import React, { useState } from 'react';
import Header from '@/components/Header';
import MainPage from '@/components/MainPage';
import SocialPage from '@/components/SocialPage';

const Index = () => {
  const [showingSocialPage, setShowingSocialPage] = useState(false);

  const handleSocialPageToggle = () => {
    setShowingSocialPage(!showingSocialPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      <Header 
        onSocialPageToggle={handleSocialPageToggle}
        showingSocialPage={showingSocialPage}
      />
      
      {showingSocialPage ? <SocialPage /> : <MainPage />}
    </div>
  );
};

export default Index;
