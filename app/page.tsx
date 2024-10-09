import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import AIRecommendations from '@/components/AIRecommendations';
import TravelPlanner from '@/components/TravelPlanner';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedDestinations />
      <AIRecommendations />
      <TravelPlanner />
    </div>
  );
}