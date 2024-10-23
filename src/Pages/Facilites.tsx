import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from "@/components/ui/card";
import { Book, Settings } from 'lucide-react';

const InfoSection = ({ title, content }) => (
  <div className="mb-8">
    <h4 className="text-xl font-semibold mb-3 text-primary">{title}</h4>
    {Array.isArray(content) ? (
      <ul className="list-disc pl-6 space-y-2">
        {content.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-700">{content}</p>
    )}
  </div>
);

const facilities = () => (
  <section className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">Dina Bama Patil Library & Study Room</h2>
      <Tabs defaultValue="rules" className="w-full">
        <TabsList className="w-full mb-8 grid grid-cols-2 gap-4">
          <TabsTrigger value="rules" className="py-4 text-lg font-semibold flex items-center justify-center">
            <Settings className="mr-2 h-5 w-5" />
            Rules & Regulations
          </TabsTrigger>
          <TabsTrigger value="facilities" className="py-4 text-lg font-semibold flex items-center justify-center">
            <Book className="mr-2 h-5 w-5" />
            Facilities
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="rules">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-3xl font-semibold mb-6 text-primary">Rules & Regulations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InfoSection
                  title="Library Hours"
                  content={[
                    "Open from 06:00 AM to 10:00 PM on Weekdays",
                    "Open from 06:00 AM to 10:00 PM on Weekends"
                  ]}
                />
                <InfoSection
                  title="Membership & Conduct"
                  content={[
                    "Membership required for borrowing books and accessing study rooms",
                    "Present membership card upon entry",
                    "Maintain silence and respect other patrons",
                    "No loud conversations, phone calls, or disruptive behavior",
                    "Set mobile phones to silent mode"
                  ]}
                />
                <InfoSection
                  title="Borrowing Books"
                  content={[
                    "Each member can borrow up to 2 books at a time",
                    "Books can be borrowed for a period of 15 days",
                    "Late returns incur a fine of 10Rs per day"
                  ]}
                />
                <InfoSection
                  title="Study Rooms & Internet Use"
                  content={[
                    "Available on a first-come, first-served basis",
                    "Bookings for a maximum of 12 hours per session",
                    "No eating or drinking in study rooms",
                    "Free Wi-Fi for members",
                    "Internet use for educational and research purposes only"
                  ]}
                />
              </div>
              <InfoSection
                title="General Rules"
                content={[
                  "No eating or drinking in the library, except in designated areas",
                  "Maintain cleanliness of study spaces and library areas",
                  "Report any suspicious activity or damaged items to library staff",
                  "Members are responsible for personal belongings and any damage to library property",
                  "Children under a certain age must be accompanied by an adult"
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="facilities">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-3xl font-semibold mb-6 text-primary">Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InfoSection
                  title="Resources"
                  content={[
                    "Extensive collection of academic textbooks, reference materials, journals, and e-books",
                    "Access to rare manuscripts and archives",
                    "Digital learning tools and online databases",
                    "Multimedia resources including educational DVDs and audiobooks"
                  ]}
                />
                <InfoSection
                  title="Study Areas"
                  content={[
                    "Private and group study rooms available for reservation",
                    "Quiet areas for uninterrupted reading and research",
                    "Air-conditioned study areas with comfortable seating",
                    "Designated relaxation zones"
                  ]}
                />
                <InfoSection
                  title="Technology & Services"
                  content={[
                    "High-speed internet and free Wi-Fi throughout the library",
                    "Computer workstations with latest software",
                    "Printing, photocopying, and scanning facilities",
                    "Multimedia stations for viewing educational content"
                  ]}
                />
                <InfoSection
                  title="Academic Support"
                  content={[
                    "On-site tutors and academic support staff",
                    "Regular workshops, seminars, and guest lectures",
                    "Book clubs and reading groups",
                    "Peer mentoring programs"
                  ]}
                />
                <InfoSection
                  title="Special Features"
                  content={[
                    "Sections for career development and competitive exams",
                    "Special collections on local history and culture",
                    "Access to mindfulness and stress-relief programs",
                    "Ergonomically designed study spaces"
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default facilities;