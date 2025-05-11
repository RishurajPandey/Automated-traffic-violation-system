import { 
    Camera, Shield, Clock, AlertTriangle, 
    BarChart, Map, Smartphone, Lock 
  } from 'lucide-react';
  import { FeatureCard } from '@/components/ui/FeatureCard';
  
  const featuresData = [
    {
      icon: <Camera className="h-8 w-8 text-red-600" />,
      title: "Real-time Detection",
      description: "Advanced AI cameras that monitor traffic flow and identify violations as they occur."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      title: "Violation Classification",
      description: "Automatically categorizes different types of traffic violations with high accuracy."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Enhanced Safety",
      description: "Proactive monitoring to reduce accidents and improve overall road safety."
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Instant Alerts",
      description: "Immediate notification system for law enforcement to respond quickly to violations."
    },
    {
      icon: <BarChart className="h-8 w-8 text-red-600" />,
      title: "Data Analytics",
      description: "Comprehensive reporting tools to analyze traffic patterns and violation hotspots."
    },
    {
      icon: <Map className="h-8 w-8 text-red-600" />,
      title: "Geographic Mapping",
      description: "Visual representation of violation data across different regions and routes."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-red-600" />,
      title: "Mobile Integration",
      description: "Seamless access to the system via mobile devices for officers in the field."
    },
    {
      icon: <Lock className="h-8 w-8 text-red-600" />,
      title: "Secure System",
      description: "End-to-end encryption and role-based access control for maximum data protection."
    }
  ];
  
  const Features = () => {
    return (
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-element">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Key System Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered traffic violation detection system combines cutting-edge 
              technology with practical law enforcement needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="fade-element" style={{ transitionDelay: `${index * 100}ms` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  