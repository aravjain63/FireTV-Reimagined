import React from 'react';
import HeroSection from './HeroSection';
import ContentRow from './ContentRow';
import AppLauncher from './AppLauncher';
import HeroBackdrop from './HeroBackdrop'; // or adjust path
import MoodRecommender from './MoodRecommender';
import FadeInOnScroll from './FadeInOnScroll';
import AppRow from './AppRow'; // Adjust the import path as necessary
import { Description } from '@radix-ui/react-toast';

const MainPage = () => {
  const continueWatchingContent = [
    {
      id: '1',
      title: 'The Bear',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/4pfXAnWxOfEJsUgDPW0zqzs5UWv.jpg',
      rating: 4.8,
      duration: '30 min episodes',
      year: 2023,
      genre: 'Comedy-Drama',
      watchedBy: ['Arav', 'Aryan'],
      streamingService: 'Prime Video'
    },
    {
      id: '2',
      title: 'Succession',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/zZ3Cv1lz61V9OXXvtCPVtCFTVP7.jpg',
      rating: 4.7,
      duration: '1h episodes',
      year: 2023,
      genre: 'Drama',
      watchedBy: ['Anvesh'],
      streamingService: 'Netflix'
    },
    {
      id: '3',
      title: 'Ted Lasso',
      image: 'https://wallpapercat.com/w/full/8/c/f/124601-3840x2160-desktop-4k-stranger-things-wallpaper-image.jpg',
      rating: 4.6,
      duration: '45 min episodes',
      year: 2023,
      genre: 'Comedy',
      watchedBy: ['Divyanshu', 'Chirag', 'Aryan'],
      streamingService: 'Apple TV+'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mSyQoValhBsJdq3JNGXJww2Q5yL.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: [],
      streamingService: 'HBO Max'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/4pfXAnWxOfEJsUgDPW0zqzs5UWv.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9YteO4VWteiPmEbWYJRAeBTQZPD.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'Prime Video'
    }
    ,
    {
      id: '4',
      title: 'Silicon Valley',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/sccDflItNho4OiHkzpiDxB2fUFw.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
  ];
  const apps = [
    {
      id: '1',
      title: 'The Bear',
      image: 'https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png',
      rating: 4.8,
      duration: '30 min episodes',
      year: 2023,
      genre: 'Comedy-Drama',
      watchedBy: ['Arav', 'Aryan'],
      streamingService: 'Prime Video'
    },
    {
      id: '2',
      title: 'Succession',
      image: 'https://static.vecteezy.com/ti/vetor-gratis/p3/19040346-editorial-do-logotipo-do-amazon-prime-video-gratis-vetor.jpg',
      rating: 4.7,
      duration: '1h episodes',
      year: 2023,
      genre: 'Drama',
      watchedBy: ['Anvesh'],
      streamingService: 'HBO Max'
    },
    {
      id: '3',
      title: 'Ted Lasso',
      image: 'https://lumiere-a.akamaihd.net/v1/images/disney_logo_march_2024_050fef2e.png?region=0,0,1920,1080',
      rating: 4.6,
      duration: '45 min episodes',
      year: 2023,
      genre: 'Comedy',
      watchedBy: ['Divyanshu', 'Chirag', 'Aryan'],
      streamingService: 'Apple TV+'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://logos-marcas.com/wp-content/uploads/2022/01/HBO-Max-Emblema.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
    ,
    {
      id: '20',
      title: 'The Menu',
      image: 'https://images.pond5.com/youtube-logo-screen-loading-youtube-footage-118932210_iconl.jpeg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
    ,
    {
      id: '9',
      title: 'The Menu',
      image: 'https://logos-world.net/wp-content/uploads/2020/11/Hulu-Emblem.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'Prime Video'
    }
    ,
    {
      id: '21',
      title: 'Silicon Valley',
      image: 'https://i.pinimg.com/736x/0a/f1/1c/0af11cb589b175aedf0e38b159113943.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
  ];

  const trendingContent = [
    {
      id: '1',
      title: 'The Bear',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9AeiA1XtP5sel2tAf9LaGeUjhDb.jpg',
      rating: 4.8,
      duration: '30 min episodes',
      year: 2023,
      genre: 'Comedy-Drama',
      watchedBy: ['Arav', 'Aryan'],
      streamingService: 'Prime Video'
    },
    {
      id: '2',
      title: 'Succession',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/zZ3Cv1lz61V9OXXvtCPVtCFTVP7.jpg',
      rating: 4.7,
      duration: '1h episodes',
      year: 2023,
      genre: 'Drama',
      watchedBy: ['Anvesh'],
      streamingService: 'HBO Max'
    },
    {
      id: '3',
      title: 'Ted Lasso',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/8rDij8tYynUfu2hMVXynAp2pSjY.jpg',
      rating: 4.6,
      duration: '45 min episodes',
      year: 2023,
      genre: 'Comedy',
      watchedBy: ['Divyanshu', 'Chirag', 'Aryan'],
      streamingService: 'Apple TV+'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mSyQoValhBsJdq3JNGXJww2Q5yL.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/4pfXAnWxOfEJsUgDPW0zqzs5UWv.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9YteO4VWteiPmEbWYJRAeBTQZPD.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'Prime Video'
    }
    ,
    {
      id: '4',
      title: 'Silicon Valley',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/sccDflItNho4OiHkzpiDxB2fUFw.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
  ];

  const friendsRecommendations = [
    {
      id: '1',
      title: 'The Bear',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/v6f9FUDDQfGIv8MLRQwlL0zvRjI.jpg',
      rating: 4.8,
      duration: '30 min episodes',
      year: 2023,
      Description: 'A young chef returns home to Chicago to run his family’s sandwich shop after a tragic loss.',
      genre: 'Comedy-Drama',
      watchedBy: ['Arav', 'Aryan'],
      streamingService: 'Prime Video'
    },
    {
      id: '2',
      title: 'Succession',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
      rating: 4.7,
      duration: '1h episodes',
      year: 2023,
      genre: 'Drama',
      watchedBy: ['Anvesh'],
      streamingService: 'HBO Max'
    },
    {
      id: '3',
      title: 'Ted Lasso',
      image: 'https://wallpapercat.com/w/full/8/c/f/124601-3840x2160-desktop-4k-stranger-things-wallpaper-image.jpg',
      rating: 4.6,
      duration: '45 min episodes',
      year: 2023,
      genre: 'Comedy',
      watchedBy: ['Divyanshu', 'Chirag', 'Aryan'],
      streamingService: 'Apple TV+'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/r0Q6eeN9L1ORL9QsV0Sg8ZV3vnv.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mAXOCbZzvmDa6PCh5dcIPOB51Qc.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9YteO4VWteiPmEbWYJRAeBTQZPD.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'Prime Video'
    }
    ,
    {
      id: '4',
      title: 'Silicon Valley',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/sccDflItNho4OiHkzpiDxB2fUFw.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'HBO Max'
    }
  ];

  const amazonOriginalsContent = [
    {
      id: '1',
      title: 'The Bear',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/4pfXAnWxOfEJsUgDPW0zqzs5UWv.jpg',
      rating: 4.8,
      duration: '30 min episodes',
      year: 2023,
      genre: 'Comedy-Drama',
      watchedBy: ['Arav', 'Aryan'],
      streamingService: 'Prime Video'
    },
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/9YteO4VWteiPmEbWYJRAeBTQZPD.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'Prime Video'
    }
    ,
    {
      id: '4',
      title: 'Silicon Valley',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/x4lxFIhhrDI4nWtV8osnYwbGESV.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'Prime Video'
    },
    {
      id: '2',
      title: 'Succession',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/zZ3Cv1lz61V9OXXvtCPVtCFTVP7.jpg',
      rating: 4.7,
      duration: '1h episodes',
      year: 2023,
      genre: 'Drama',
      watchedBy: ['Anvesh'],
      streamingService: 'Prime Video'
    },
    {
      id: '3',
      title: 'Ted Lasso',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/8rDij8tYynUfu2hMVXynAp2pSjY.jpg',
      rating: 4.6,
      duration: '45 min episodes',
      year: 2023,
      genre: 'Comedy',
      watchedBy: ['Divyanshu', 'Chirag', 'Aryan'],
      streamingService: 'Prime Video'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/mSyQoValhBsJdq3JNGXJww2Q5yL.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'Prime Video'
    }
    ,
    {
      id: '4',
      title: 'The Menu',
      image: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/4pfXAnWxOfEJsUgDPW0zqzs5UWv.jpg',
      rating: 4.3,
      duration: '1h 47m',
      year: 2022,
      genre: 'Thriller',
      watchedBy: ['Arav'],
      streamingService: 'Prime Video'
    }
    
  ];
    return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <HeroBackdrop /> {/* <--- add this at the top */}
        <HeroSection />
      <FadeInOnScroll>

      <AppRow
        title="My Apps"
        content={apps}
      />
        {/* <AppLauncher /> */}
      </FadeInOnScroll>

      <FadeInOnScroll>  
      <div className="space-y-8 pb-8">
        
      <ContentRow
        title="Continue Watching"
        content={continueWatchingContent}
      />
      <MoodRecommender />
      <ContentRow
        title="Based on what you watched"
        content={trendingContent}
        isAI={true}
      />
      <ContentRow
        title="Because Your Friends Watched"
        subtitle="Popular with your circle"
        isAI={true}
        content={friendsRecommendations}
      />


      <ContentRow
        title="Amazon Originals"
        content={amazonOriginalsContent}
      />

    </div>
    </FadeInOnScroll>
    </div >
  );
};

export default MainPage;
