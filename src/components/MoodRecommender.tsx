
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Zap, Leaf, Coffee, Moon } from 'lucide-react';

interface MoodOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  gradient: string;
  description: string;
}

interface RecommendedContent {
  id: string;
  title: string;
  image: string;
  genre: string;
  year: number;
  streamingService: string;
}

const MoodRecommender = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedContent[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const moods: MoodOption[] = [
    {
      id: 'feel-good',
      name: 'Feel-Good',
      icon: <Heart className="w-6 h-6" />,
      gradient: 'from-pink-500 to-rose-500',
      description: 'Uplifting and heartwarming'
    },
    {
      id: 'intense',
      name: 'Intense',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-500',
      description: 'Thrilling and action-packed'
    },
    {
      id: 'relaxing',
      name: 'Relaxing',
      icon: <Leaf className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Calm and peaceful'
    },
    {
      id: 'energizing',
      name: 'Energizing',
      icon: <Coffee className="w-6 h-6" />,
      gradient: 'from-yellow-500 to-orange-500',
      description: 'Dynamic and motivating'
    },
    {
      id: 'mysterious',
      name: 'Mysterious',
      icon: <Moon className="w-6 h-6" />,
      gradient: 'from-purple-500 to-indigo-500',
      description: 'Dark and suspenseful'
    }
  ];

const mockRecommendations: Record<string, RecommendedContent[]> = {
  'feel-good': [
    { id: '1', title: 'The Office', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg', genre: 'Comedy', year: 2023, streamingService: 'Apple TV+' },
    { id: '2', title: 'Brooklyn-99', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9AeiA1XtP5sel2tAf9LaGeUjhDb.jpg', genre: 'Comedy', year: 2020, streamingService: 'Netflix' },
    { id: '3', title: 'The Big Bang Theory', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/sccDflItNho4OiHkzpiDxB2fUFw.jpg', genre: 'Comedy', year: 2020, streamingService: 'Netflix' },
    { id: '4', title: 'How I Met Your Mother', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9YteO4VWteiPmEbWYJRAeBTQZPD.jpg', genre: 'Comedy', year: 2021, streamingService: 'NBC' },
    { id: '5', title: 'Modern Family', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/x4lxFIhhrDI4nWtV8osnYwbGESV.jpg', genre: 'Comedy', year: 2020, streamingService: 'NBC' }
  ],
  'intense': [
    { id: '6', title: 'Breaking Bad', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg', genre: 'Drama', year: 2008, streamingService: 'Netflix' },
    { id: '7', title: 'Money Heist', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', genre: 'Action', year: 2017, streamingService: 'Netflix' },
    { id: '8', title: 'Peaky Blinders', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/sccDflItNho4OiHkzpiDxB2fUFw.jpg', genre: 'Crime', year: 2013, streamingService: 'Netflix' },
    { id: '9', title: 'The Boys', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/x4lxFIhhrDI4nWtV8osnYwbGESV.jpg', genre: 'Superhero', year: 2019, streamingService: 'Amazon Prime' },
    { id: '10', title: 'Stranger Things', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg', genre: 'Sci-Fi', year: 2016, streamingService: 'Netflix' }
  ],
  'relaxing': [
    // { id: '11', title: 'Chef’s Table', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/1D3KrMMyQJJpTSGjf83uVChP3uj.jpg', genre: 'Documentary', year: 2015, streamingService: 'Netflix' },
    // { id: '12', title: 'Our Planet', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/w4brGz07hrzpykLT09WNwZ1JPU2.jpg', genre: 'Nature', year: 2019, streamingService: 'Netflix' },
    // { id: '13', title: 'The Great British Bake Off', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/tuFaWiqX0TXoWU2RhHx2n2JK0Hg.jpg', genre: 'Reality', year: 2010, streamingService: 'Netflix' },
    // { id: '14', title: 'Bob Ross: Beauty is Everywhere', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/8zWk8F7m3UsM4Xj6TxJqUJBuFXr.jpg', genre: 'Art', year: 1991, streamingService: 'Netflix' },
    // { id: '15', title: 'Moving Art', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/7XcGJzCyAmYhEuJWv9UmEVFszqZ.jpg', genre: 'Documentary', year: 2015, streamingService: 'Netflix' }
    { id: '6', title: 'Breaking Bad', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg', genre: 'Drama', year: 2008, streamingService: 'Netflix' },
    { id: '7', title: 'Money Heist', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', genre: 'Action', year: 2017, streamingService: 'Netflix' },
    { id: '8', title: 'Peaky Blinders', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/sccDflItNho4OiHkzpiDxB2fUFw.jpg', genre: 'Crime', year: 2013, streamingService: 'Netflix' },
    { id: '9', title: 'The Boys', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/x4lxFIhhrDI4nWtV8osnYwbGESV.jpg', genre: 'Superhero', year: 2019, streamingService: 'Amazon Prime' },
    { id: '10', title: 'Stranger Things', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg', genre: 'Sci-Fi', year: 2016, streamingService: 'Netflix' }
  ],
  'energizing': [
    { id: '16', title: 'The Office', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg', genre: 'Comedy', year: 2023, streamingService: 'Apple TV+' },
    { id: '17', title: 'Parks and Recreation', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/qhUTzM8N0M0zBXXQxIko3v8xG9B.jpg', genre: 'Comedy', year: 2009, streamingService: 'Peacock' },
    { id: '18', title: 'Ted Lasso', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg', genre: 'Comedy', year: 2020, streamingService: 'Apple TV+' },
    { id: '19', title: 'The Marvelous Mrs. Maisel', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/6eY0nHYlWZgprjLkyTn1Hf7ZkzX.jpg', genre: 'Drama', year: 2017, streamingService: 'Amazon Prime' },
    { id: '20', title: 'Unbreakable Kimmy Schmidt', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/7Lbo9kRKH4lsFegMTldWdAiYkY3.jpg', genre: 'Comedy', year: 2015, streamingService: 'Netflix' }
  ],
  'mysterious': [
    { id: '21', title: 'Dark', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg', genre: 'Sci-Fi', year: 2020, streamingService: 'Netflix' },
    { id: '22', title: 'Sherlock', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg', genre: 'Mystery', year: 2017, streamingService: 'Netflix' },
    { id: '23', title: 'The X-Files', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/l3DIpTdf6MdYzBfKYd3Z9xGc5Un.jpg', genre: 'Sci-Fi', year: 2018, streamingService: 'Hulu' },
    { id: '24', title: 'True Detective', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/f8Ng1Sgb3VLiSwAvrfKeQPzvlfr.jpg', genre: 'Crime', year: 2023, streamingService: 'HBO Max' },
    { id: '25', title: 'Westworld', image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg', genre: 'Sci-Fi', year: 2022, streamingService: 'HBO Max' }
  ]
};
  const handleMoodSelection = async (moodId: string) => {
    setSelectedMood(moodId);
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setRecommendations(mockRecommendations[moodId] || []);
      setIsLoading(false);
    }, 1000);
  };

  const resetSelection = () => {
    setSelectedMood(null);
    setRecommendations([]);
  };

  return (
    <div className="mb-10 px-4">
      <div className="glass-effect rounded-xl p-8 max-w-full">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
             <h2 className="text-3xl font-bold text-foreground tracking-tight">Can't Decide What to Watch?</h2>
            <p className="text-muted-foreground text-lg mt-2 font-medium">Pick your mood and get personalized AI recommendations</p>
          </div>
        </div>

        {!selectedMood ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {moods.map((mood) => (
              <Button
                key={mood.id}
                onClick={() => handleMoodSelection(mood.id)}
                variant="ghost"
                className="h-32 flex-col space-y-3 border border-border/50 hover:border-primary/60 transition-all duration-300 group relative overflow-hidden rounded-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${mood.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                <div className={`p-3 rounded-xl bg-gradient-to-br ${mood.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {mood.icon}
                </div>
                <div className="text-center relative z-10">
                  <div className="font-semibold text-base">{mood.name}</div>
                  <div className="text-sm text-muted-foreground">{mood.description}</div>
                </div>
              </Button>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in">
           <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${moods.find(m => m.id === selectedMood)?.gradient} text-white shadow-lg`}>
                  {moods.find(m => m.id === selectedMood)?.icon}
                </div>
                <div>
                   <h3 className="text-2xl font-bold">{moods.find(m => m.id === selectedMood)?.name} Recommendations</h3>
                  <p className="text-muted-foreground text-lg">AI-curated for your current mood</p>
                </div>
              </div>
               <Button onClick={resetSelection} variant="outline" size="lg" className="text-base">
                Try Another Mood
              </Button>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                <span className="ml-4 text-muted-foreground text-lg">Finding perfect matches...</span>
              </div>
            ) : (
               <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {recommendations.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 animate-scale-in hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video relative">
                      <img
                        src={item.image.startsWith('http') ? item.image : `https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 text-xs bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-medium">
                        {item.streamingService}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-base line-clamp-1 mb-2">{item.title}</h4>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span className="font-medium">{item.genre}</span>
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodRecommender;
