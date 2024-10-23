import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import picture1 from "../assets/ER-images/Picture1.jpg"
import picture2 from "../assets/ER-images/Picture2.jpg"
import picture3 from "../assets/ER-images/Picture3.jpg"
import picture4 from "../assets/ER-images/Picture4.jpg"
import picture5 from "../assets/ER-images/Picture5.jpg"
import picture6 from "../assets/ER-images/Picture6.jpg"
import picture7 from "../assets/ER-images/Picture7.jpg"
import picture8 from "../assets/ER-images/Picture8.jpg"
import picture9 from "../assets/ER-images/Picture9.png"

interface Resource {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-none">
        <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
          <img
            src={resource.imageUrl}
            alt={resource.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/api/placeholder/400/225";
            }}
          />
        </div>
        <CardTitle className="text-xl line-clamp-2">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-justify leading-relaxed">
          {resource.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-none pt-4">
        <Button asChild className="w-full">
          <a 
            href={resource.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Access Resource
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const resources: Resource[] = [
  {
    id: 1,
    title: "National Digital library of India",
    description: "The National Digital library of India is a project under Ministry of Human Resource Development, India.",
    imageUrl: picture1,
    link: "https://ndl.iitkgp.ac.in/",
  },
  {
    id: 2,
    title: "SWAYAM",
    description: "The Swayam is a programmed initiated by Government of India and designed to achieve the three cardinal principles of Education Policy viz., access, equity and quality. The objective of this effort is to take the best teaching learning resources to all, including the most disadvantaged.",
    imageUrl: picture2,
    link: "https://swayam.gov.in/",
  },
  {
    id: 3,
    title: "e-PG Pathshala",
    description: "The e-PG Pathshala is an initiative of the MHRD under its National Mission on Education through ICT (NME-ICT) being executed by the UGC. It is a gateway to all PG Courses.",
    imageUrl: picture3,
    link: "https://epgp.inflibnet.ac.in/Home",
  },
  {
    id: 4,
    title: "e-Pathshala",
    description: "The e-Pathshala, a joint initiative of Ministry of Education, Govt. of India and National Council of Educational Research and Training (NCERT), has been developed for showcasing and disseminating all educational e-resources including textbooks, audio, video, periodicals, and a variety of other print and non-print materials for Students, Teachers, Parents, researchers and educators.",
    imageUrl: picture4,
    link: "https://epathshala.nic.in/",
  },
  {
    id: 5,
    title: "e-Balbharati",
    description: "e-Balbharati learn is elearning material design for SSC board students to learn the concepts on their computer, laptops, Mobiles and Tablets . e-Balbharati envisions to provide quality digital learning material to all the students at affordable price.",
    imageUrl: picture5,
    link: "https://books.ebalbharati.in/",
  },
  {
    id: 6,
    title: "National Council of Educational Research and Training",
    description: "NCPRT eBooks",
    imageUrl: picture6,
    link: "https://ncert.nic.in/textbook.php",
  },
   {
    id: 7,
    title: "Indian Culture Portal",
    description: "The Indian Culture Portal is a government initiative launched by the Ministry of Culture, in collaboration with the Indian Institute of Technology (IIT) Bombay. It serves as a digital repository of India’s cultural heritage. ",
    imageUrl: picture7,
    link: "https://indianculture.gov.in",
  },
  {
    id: 8,
    title: "PDF Drive",
    description: "PDF Drive is your search engine for PDF files. As of today we have 75,124,785 eBooks for you to download for free. No annoying ads, no download limits, enjoy it and don't forget to bookmark and share the love!",
    imageUrl: picture8,
    link: "https://www.cbse.gov.in/",
  },
  {
    id: 9,
    title: "eGyanKosh",
    description: "eGyanKosh is a digital repository developed by the Indira Gandhi National Open University (IGNOU) to store, manage, and provide open access to educational resources. It contains a vast collection of digital learning materials, including course modules, e-books, audio-visual content, and academic resources from various disciplines.",
    imageUrl: picture9,
    link: "https://egyankosh.ac.in/",
  },

  // ... rest of your resources array
];

const EResource: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">E-Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default EResource;