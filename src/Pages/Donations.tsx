import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gift, BookOpen, Wallet, Award } from "lucide-react";

const Donations = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Support Our Mission</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Your donations make a significant impact on our ability to serve the community and maintain
            the Dina Bama Patil Library & Study Room as a center of learning and growth.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Impact Statement */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ways to Make an Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether through books, monetary contributions, or endowments, your support helps us 
            create a better learning environment for our community.
          </p>
        </div>

        {/* Donation Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <CardTitle>Book Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li>• New or gently used books</li>
                <li>• Educational materials</li>
                <li>• Special collections</li>
                <li>• Recognition in library catalog</li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleContactClick}
              >
                Donate Books
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Wallet className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <CardTitle>Monetary Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li>• One-time contributions</li>
                <li>• Monthly giving programs</li>
                <li>• Matching gift opportunities</li>
                <li>• Donor Wall recognition</li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleContactClick}
              >
                Contribute Now
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <CardTitle>Endowments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li>• Named endowments</li>
                <li>• Program sponsorships</li>
                <li>• Legacy giving</li>
                <li>• Dedicated recognition</li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleContactClick}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recognition Section */}
        <div className="bg-white rounded-lg p-8 text-center shadow-md">
          <Gift className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Donor Recognition</h3>
          <p className="text-gray-600 mb-4">
            We're grateful for your support and proud to recognize our donors through various
            programs including our Donor Wall, annual reports, and special events.
          </p>
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={handleContactClick}
          >
            View Donor Benefits
          </Button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need Assistance?</h3>
          <p className="text-gray-600 mb-4">
            Our development team is here to help you make the most meaningful impact
            with your contribution.
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleContactClick}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Donations;