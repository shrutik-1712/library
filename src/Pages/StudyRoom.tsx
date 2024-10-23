import { useState } from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StudyRoom = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Example study room images and descriptions
  const studyRoomContent = {
    images: [
      "/api/placeholder/800/400",
      "/api/placeholder/800/400",
      "/api/placeholder/800/400"
    ],
    descriptions: [
      "Individual study carrels for focused learning",
      "Group study rooms equipped with modern facilities",
      "Comfortable seating areas with proper lighting"
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === studyRoomContent.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? studyRoomContent.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Study Room Facilities
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Dedicated spaces for focused learning and group discussions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img
                src={studyRoomContent.images[currentImageIndex]}
                alt={`Study room view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="text-sm md:text-base">
                  {studyRoomContent.descriptions[currentImageIndex]}
                </p>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={previousImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="flex justify-center mt-4 gap-2">
              {studyRoomContent.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

         {/* <div className="mt-8 prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Study Room Amenities</h2>
            <p className="text-gray-700">
              Our study rooms are designed to provide the perfect environment for 
              both individual and group study sessions. With various room sizes and 
              configurations available, students can choose the space that best suits 
              their needs.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Available Facilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Individual study carrels for focused learning</li>
              <li>Group study rooms with whiteboards</li>
              <li>High-speed Wi-Fi connectivity</li>
              <li>Proper lighting and ventilation</li>
              <li>Power outlets at every seat</li>
              <li>Climate-controlled environment</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Usage Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Quiet environment must be maintained</li>
              <li>Advance booking required for group study rooms</li>
              <li>Maximum duration: 4 hours per session</li>
              <li>Please keep the space clean and organized</li>
            </ul>
          </div>*/}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyRoom;