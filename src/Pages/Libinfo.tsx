import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LibraryFacilities = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Example library images and descriptions
  const libraryContent = {
    images: [
      "/api/placeholder/800/400",
      "/api/placeholder/800/400",
      "/api/placeholder/800/400",
    ],
    descriptions: [
      "Our main reading area features comfortable seating and natural lighting",
      "The reference section houses our extensive collection of academic materials",
      "Modern computer facilities for digital resource access",
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === libraryContent.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? libraryContent.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Library Facilities
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Explore our modern library facilities and resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img
                src={libraryContent.images[currentImageIndex]}
                alt={`Library view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="text-sm md:text-base">
                  {libraryContent.descriptions[currentImageIndex]}
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
              {libraryContent.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/*<div className="mt-8 prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About Our Library</h2>
            <p className="text-gray-700">
              Our library provides a peaceful and conducive environment for
              learning and research. With extensive collections spanning various
              subjects, modern facilities, and professional staff, we strive to
              support the academic journey of our members.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Extensive collection of books, journals, and digital resources
              </li>
              <li>Quiet reading spaces and discussion areas</li>
              <li>High-speed internet and computer facilities</li>
              <li>Professional librarians for research assistance</li>
              <li>Regular workshops and learning sessions</li>
            </ul>
          </div>*/}
        </CardContent>
      </Card>
    </div>
  );
};

export default LibraryFacilities;
