import { UserCircle } from 'lucide-react';
import { TeamMember } from '@/components/ui/TeamMember';

const teamData = [
  {
    name: "Lakshay Bajaj",
    role: "AI Engineer",
    image: null
  },
  {
    name: "Kanavpreet Singh",
    role: "Backend Developer",
    image: null
  },
  {
    name: "Rishuraj Pandey",
    role: "Frontend Developer",
    image: null
  },
  {
    name: "Dheeraj Kumar",
    role: "UI/UX Designer",
    image: null
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-element">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The brilliant minds behind our AI-powered traffic violation detection system.
            We're committed to enhancing public safety through innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div key={index} className="fade-element" style={{ transitionDelay: `${index * 100}ms` }}>
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
