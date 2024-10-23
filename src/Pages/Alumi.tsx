import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import alumniData from './Jsons/Alumini.json'; // Assuming this file exists

const Alumni = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4">Alumni / Achievers</h2>
    <p className="mb-4">Celebrating the accomplishments of our library members and supporters.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {alumniData.map((alumni, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{alumni.name}</CardTitle>
            <CardDescription>Class of {alumni.batch}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <img 
                src={alumni.image} 
                alt={alumni.name} 
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <p>{alumni.designation}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Alumni;