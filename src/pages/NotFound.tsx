
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-24">
        <div className="text-center px-6">
          <div className="badge mx-auto mb-4">404 Error</div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-adorzia-midGray mb-10 max-w-xl mx-auto">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Button 
            className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white px-8 py-6 text-lg"
            onClick={() => window.location.href = "/"}
          >
            Return to Home
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
