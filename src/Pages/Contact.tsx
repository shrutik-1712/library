import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Youtube, Send, Phone } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 19.1437404, // Replace with your latitude
  lng: 72.9376728 // Replace with your longitude 
  //4WVQ+F3 Mumbai, Maharashtra
};

const Contact = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <p className="mb-4">Get in touch with us for any inquiries or feedback.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardContent className="pt-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={14}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
          <p className="text-sm text-gray-600 my-4">Dina Patil Estate, Station Road,<br/> Bhandup (W) <br/>Mumbai 400078</p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <Facebook size={24} />
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-red-600 hover:text-red-800">
              <Youtube size={24} />
              <span>YouTube</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-500 hover:text-blue-700">
              <Send size={24} />
              <span>Telegram</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-green-600 hover:text-green-800">
              <Phone size={24} />
              <span>WhatsApp</span>
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2">Instagram QR</p>
              <img src="/api/placeholder/150/150" alt="Instagram QR Code" className="w-full" />
            </div>
            <div>
              <p className="font-bold mb-2">WhatsApp QR</p>
              <img src="/api/placeholder/150/150" alt="WhatsApp QR Code" className="w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Contact;