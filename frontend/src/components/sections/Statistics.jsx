import { useState, useEffect } from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { Car, AlertCircle, Gauge, Clock } from 'lucide-react';

const statsData = [
  {
    icon: <Car className="h-8 w-8 text-red-600" />,
    value: 15000,
    label: "Daily Traffic Monitored",
    suffix: "+"
  },
  {
    icon: <AlertCircle className="h-8 w-8 text-red-600" />,
    value: 95,
    label: "Accuracy Rate",
    suffix: "%"
  },
  {
    icon: <Gauge className="h-8 w-8 text-red-600" />,
    value: 500,
    label: "Violations Detected Daily",
    suffix: "+"
  },
  {
    icon: <Clock className="h-8 w-8 text-red-600" />,
    value: 3,
    label: "Second Response Time",
    suffix: "s"
  }
];

const Statistics = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector('#stats-section');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section 
      id="statistics" 
      className="py-20 bg-slate-900"
    >
      <div id="stats-section" className="container mx-auto px-4">
        <div className="text-center mb-16 fade-element">
          <h2 className="text-3xl font-bold text-white mb-4">
            Impact & Performance
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI system is making a significant difference in traffic management 
            and road safety. Here's what we've achieved so far.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="fade-element" style={{ transitionDelay: `${index * 100}ms` }}>
              <StatCard
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                animate={animate}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
