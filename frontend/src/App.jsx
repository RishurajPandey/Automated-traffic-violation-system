import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Statistics from '@/components/sections/Statistics';
import Team from '@/components/sections/Team';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function App() {

  useEffect(() => {
    useIntersectionObserver();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Statistics />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;