import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: "/api/placeholder/80/80",
    name: "Client Name",
    profession: "Profession"
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/api/placeholder/80/80",
    name: "Jane Doe",
    profession: "Designer"
  },
  {
    id: 3,
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/api/placeholder/80/80",
    name: "John Smith",
    profession: "Developer"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="container mx-auto py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h5 className="text-primary uppercase mb-3 tracking-[5px]">Testimonial</h5>
          <h1 className="text-4xl font-bold">What Say Our Students</h1>
        </div>
        <div className="relative">
          <div className="text-center px-4">
            <Quote className="text-primary w-16 h-16 mx-auto mb-4" />
            <h4 className="font-normal mb-4 text-lg">{currentTestimonial.content}</h4>
            <img className="w-20 h-20 mx-auto mb-3 rounded-full object-cover" src={currentTestimonial.image} alt={currentTestimonial.name} />
            <h5 className="font-medium">{currentTestimonial.name}</h5>
            <span className="text-gray-600">{currentTestimonial.profession}</span>
          </div>
          <button onClick={goToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;