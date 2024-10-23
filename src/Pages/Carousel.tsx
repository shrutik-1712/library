import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Carousel = ({ items }: { items: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <Card className="m-2">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>by {item.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={item.cover} alt={item.title} className="w-full h-64 object-cover mb-4" />
                  <p>{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button variant="outline" className="absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevSlide}>
        <ChevronLeft />
      </Button>
      <Button variant="outline" className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextSlide}>
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Carousel;