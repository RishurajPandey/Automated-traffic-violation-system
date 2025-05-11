import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      class="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95)), url(https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div 
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Smart Policing with AI
          </h1>
          <h2 className="text-xl md:text-2xl text-red-400 font-medium mb-8">
            Automated Traffic Violation Detection System
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Enhancing public safety through cutting-edge artificial intelligence 
            that detects and reports traffic violations in real-time.
          </p>
          <div>
            <button className="px-8 py-3 bg-red-600 text-white font-medium rounded-md 
              hover:bg-red-700 transition-colors shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-white p-2">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
