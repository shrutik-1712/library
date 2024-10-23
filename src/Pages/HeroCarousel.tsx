import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const heroImages = [
  {
    url: "/api/placeholder/1200/400",
    title: "Discover a World of Knowledge",
    subtitle: "Explore our vast collection of books and resources",
    cta: "Start Reading",
    ctaLink: "/catalog"
  },
  {
    url: "/api/placeholder/1200/400",
    title: "Join Our Community",
    subtitle: "Participate in events and connect with fellow book lovers",
    cta: "See Events",
    ctaLink: "/events"
  },
  {
    url: "/api/placeholder/1200/400",
    title: "Learning Never Stops",
    subtitle: "Access our digital resources anytime, anywhere",
    cta: "Browse eBooks",
    ctaLink: "/ebooks"
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000); // Change slide every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePointerClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl font-bold mb-4">{image.title}</h1>
            <p className="text-xl mb-8">{image.subtitle}</p>
            <Button asChild>
              <a href={image.ctaLink}>{image.cta}</a>
            </Button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePointerClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;