
import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentItem {
  id: number;
  title: string;
  image: string;
  year?: number;
  rating?: string;
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
}

const ContentRow: React.FC<ContentRowProps> = ({ title, items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8 animate-fade-in">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 px-4 sm:px-6 lg:px-8">
        {title}
      </h2>
      
      <div className="relative group">
        {/* Scroll Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2"
          onClick={() => scroll('left')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2"
          onClick={() => scroll('right')}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>

        {/* Content Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 content-fade"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 sm:w-56 group/item cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg hover-scale">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 sm:h-36 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover/item:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm mb-1 text-white">{item.title}</h3>
                  <div className="flex items-center space-x-2 text-xs text-white/80">
                    {item.rating && (
                      <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded text-xs">
                        {item.rating}
                      </span>
                    )}
                    {item.year && <span>{item.year}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
