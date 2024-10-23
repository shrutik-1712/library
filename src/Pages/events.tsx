import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import eventsData from './Jsons/events.json';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  address: string;
  location: string;
  timings: string;
  images: string[];
  logo?: string;
}

const Events: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

  // Sort events in descending order (upcoming first)
  const sortedEvents = [...eventsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const nextImage = (eventId: number) => {
    setCurrentImageIndex(prev => {
      const event = sortedEvents.find(e => e.id === eventId);
      if (!event) return prev;
      return {
        ...prev,
        [eventId]: ((prev[eventId] || 0) + 1) % event.images.length
      };
    });
  };

  const prevImage = (eventId: number) => {
    setCurrentImageIndex(prev => {
      const event = sortedEvents.find(e => e.id === eventId);
      if (!event) return prev;
      return {
        ...prev,
        [eventId]: ((prev[eventId] || 0) - 1 + event.images.length) % event.images.length
      };
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Upcoming Events and Exhibitions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedEvents.map((event: Event) => (
          <Card key={event.id} className="overflow-hidden">
            <div className="relative">
              <img 
                src={event.images[currentImageIndex[event.id] || 0] || "/api/placeholder/400/200"} 
                alt={event.title} 
                className="w-full h-48 object-cover"
              />
              {event.images.length > 1 && (
                <>
                  <button 
                    onClick={() => prevImage(event.id)} 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => nextImage(event.id)} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{new Date(event.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{event.description}</p>
              <div className="flex items-center mb-1">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{event.address}, {event.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{event.timings}</span>
              </div>
              {event.logo && (
                <img src={event.logo} alt={`${event.title} logo`} className="mt-2 h-8 object-contain" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;