import { Link } from 'react-router-dom';
import { Book, Users, Calendar, Gift, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Carousel from './Carousel';
import HeroCarousel from './HeroCarousel';
import Testimonials from './Testimonials';
import newArrivals from './Jsons/newArrivals.json';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center">
        <Icon className="mr-2" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Home = () => (
  <div>
    <HeroCarousel />
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">New Arrivals</h3>
        <Carousel items={newArrivals} />
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard 
            icon={Book} 
            title="Extensive Collection" 
            description="Access thousands of books, journals, and research papers."
          />
          <FeatureCard 
            icon={Users} 
            title="Community Events" 
            description="Join book clubs, workshops, and literary discussions."
          />
          <FeatureCard 
            icon={Calendar} 
            title="Easy Reservations" 
            description="Reserve books online and pick them up at your convenience."
          />
          <FeatureCard 
            icon={Gift} 
            title="Special Programs" 
            description="Enjoy reading programs for all ages and interests."
          />
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">What Our Community Says</h3>
        <Testimonials />
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <Card>
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  </div>
);

export default Home;