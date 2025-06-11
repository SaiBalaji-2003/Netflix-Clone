
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ContentRow from '@/components/ContentRow';
import Footer from '@/components/Footer';
import { trendingMovies, popularSeries, newReleases, actionMovies } from '@/data/contentData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      
      <main className="py-8">
        <ContentRow title="Trending Now" items={trendingMovies} />
        <ContentRow title="Popular on StreamFlix" items={popularSeries} />
        <ContentRow title="New Releases" items={newReleases} />
        <ContentRow title="Action Movies" items={actionMovies} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
