import React from 'react';
import { Users, MessageSquare, Calendar, Star, Play, Plus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContentCard from './ContentCard';
import FriendActivity from './FriendActivity';
import SocialCollections from './SocialCollections';
import FadeInOnScroll from './FadeInOnScroll';
import HoverContentCard from './HoverContentCard';


const SocialPage = () => {
  const friendsRecommendations = [
    {
      id: '1',
      title: 'The Mandalorian',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9YteO4VWteiPmEbWYJRAeBTQZPD.jpg',
      rating: 4.6,
      duration: '45 min episodes',
      year: 2023,
      genre: 'Sci-Fi',
      watchedBy: ['Arav', 'Aryan', 'Anvesh'],
      streamingService: 'Disney+'
    },
    {
      id: '2',
      title: 'House of the Dragon',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/zZ3Cv1lz61V9OXXvtCPVtCFTVP7.jpg',
      rating: 4.4,
      duration: '1h episodes',
      year: 2022,
      genre: 'Fantasy',
      watchedBy: ['Divyanshu', 'Chirag'],
      streamingService: 'HBO Max'
    },
    {
      id: '3',
      title: 'Euphoria',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/sccDflItNho4OiHkzpiDxB2fUFw.jpg',
      rating: 4.3,
      duration: '1h episodes',
      year: 2022,
      genre: 'Drama',
      watchedBy: ['Aryan', 'Arav', 'Divyanshu', 'Anvesh'],
      streamingService: 'HBO Max'
    },
    {
      id: '4',
      title: 'Top Gun: Maverick',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg',
      rating: 4.7,
      duration: '2h 10m',
      year: 2022,
      genre: 'Action',
      watchedBy: ['Chirag', 'Anvesh'],
      streamingService: 'Prime Video'
    }
  ];

  const watchParties = [
    {
      id: '1',
      title: 'Marvel Movie Marathon',
      host: 'Arav',
      participants: ['Aryan', 'Anvesh', 'You'],
      time: 'Tonight 8:00 PM',
      movie: 'Avengers: Endgame'
    },
    {
      id: '2',
      title: 'Horror Night',
      host: 'Divyanshu',
      participants: ['Chirag', 'You'],
      time: 'Fri 9:00 PM',
      movie: 'The Conjuring'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FadeInOnScroll>

      <div className="flex">
        {/* Main Social Content */}
        <div className="flex-1 p-4">
          <div className="max-w-5xl mx-auto">
            {/* Social Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-6 h-6 text-primary" />
                <h1 className="text-3xl font-bold">Social Hub</h1>
              </div>
              <p className="text-muted-foreground">Connect with friends and discover what’s trending together. Get personalized picks and watchlist suggestions powered by smart AI — your social hub for shared entertainment on Fire TV.</p>
            </div>

            {/* Social Collections */}
            <SocialCollections />

            {/* Watch Parties Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Upcoming Watch Parties
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {watchParties.map((party) => (
                  <div key={party.id} className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/30">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{party.title}</h3>
                        <p className="text-sm text-muted-foreground">Hosted by {party.host}</p>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Join
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{party.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <Play className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{party.movie}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Participants:</span>
                        <div className="flex -space-x-1">
                          {party.participants.map((participant, index) => (
                            <div key={index} className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border border-background flex items-center justify-center text-white text-xs font-bold">
                              {participant[0]}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Create Watch Party
              </Button>
            </div>

            {/* Friends' Recommendations */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-400 text-primary" />
                Recommended by Friends
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {friendsRecommendations.map((item) => (
                  <HoverContentCard
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                    duration={item.duration}
                    year={item.year}
                    genre={item.genre}
                    showWatchedBy={item.watchedBy}
                    streamingService={item.streamingService}
                    size="medium"
                  />
                ))}
              </div>
            </div>

            {/* Social Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">127</h3>
                <p className="text-sm text-muted-foreground">Hours watched together</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">23</h3>
                <p className="text-sm text-muted-foreground">Shows discovered via friends</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">8</h3>
                <p className="text-sm text-muted-foreground">Active friends this week</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Friend Activity Sidebar */}
        <div className="w-80 p-4 hidden lg:block">
          <FriendActivity />
        </div>
      </div>
                    </FadeInOnScroll>
    </div>
  );
};

export default SocialPage;
