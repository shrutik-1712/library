import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Book, Users, Eye, Target } from 'lucide-react';
import advisoryCommittee from './data/advisory-committee.json';
import libraryTeam from './data/library-team.json';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center">About Dina Bama Patil Pratishthan Library</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <Book className="mr-2" /> Our Initiative
        </h2>
        <Card className="mb-6 shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed">
              Dina Bama Patil Pratishthan is proud to organize a place of comfort for students preparing for various exams, including 10th, 12th, Degree, IAS, and other competitive exams. This library and study space was inaugurated on the occasion of the birth anniversary of Late Dina Bama Patil.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <section>
          <h2 className="text-3xl font-semibold mb-6 flex items-center">
            <Eye className="mr-2" /> Our Vision
          </h2>
          <Card className="h-full shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                The vision of DBPL is to be an institution of excellence in higher education that continually responds to changing social realities through the development and application of knowledge, towards creating a people-centered, ecologically sustainable and just society that promotes and protects dignity, equality, social justice and human rights for all.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 flex items-center">
            <Target className="mr-2" /> Our Mission
          </h2>
          <Card className="h-full shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                "Provide essential and specialized information support to users by procuring and organizing information resources, providing human and technologically moderated access to knowledge and aiding users to identify, locate, obtain and evaluate information."
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <Separator className="my-12" />

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 flex items-center">
          <Users className="mr-2" /> Library Advisory Committee
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {advisoryCommittee.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
              <p className="font-semibold text-lg">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 flex items-center">
          <Users className="mr-2" /> Library Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {libraryTeam.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
              <p className="font-semibold text-lg">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;