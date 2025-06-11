
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop&crop=center"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            The <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Matrix</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 mb-6 leading-relaxed">
            When a beautiful stranger leads computer hacker Neo to a forbidding underworld, 
            he discovers the shocking truth about the reality he knows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-3 font-semibold"
            >
              ▶ Play Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border/50 text-lg px-8 py-3 font-semibold hover:bg-card/50"
            >
              + My List
            </Button>
          </div>
          <div className="flex items-center space-x-4 text-sm text-foreground/60">
            <span className="bg-primary/20 text-primary px-2 py-1 rounded font-medium">HD</span>
            <span>1999</span>
            <span>•</span>
            <span>2h 16m</span>
            <span>•</span>
            <span>Action, Sci-Fi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
