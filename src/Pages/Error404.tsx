import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-primary">
          4<span className="text-muted-foreground">0</span>4
        </h1>
        
        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Oops! Page not found
          </h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="default" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <Home size={20} />
            Back to Home
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </Button>
        </div>

        {/* Optional: Additional Help Links */}
        <div className="text-sm text-muted-foreground pt-8">
          <p>Need help? Try these:</p>
          <div className="flex gap-4 justify-center mt-2">
            <button 
              onClick={() => navigate('/contact')}
              className="hover:text-primary underline underline-offset-4"
            >
              Contact Support
            </button>
            <button 
              onClick={() => navigate('/sitemap')}
              className="hover:text-primary underline underline-offset-4"
            >
              View Sitemap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;