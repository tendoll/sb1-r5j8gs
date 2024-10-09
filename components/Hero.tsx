import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
        <p className="text-xl mb-8">
          Let our AI-powered recommendations guide you to the perfect extreme safari experience.
        </p>
        <Button size="lg" className="mr-4 bg-primary hover:bg-primary/90">
          Explore Destinations
        </Button>
        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
          Plan Your Trip
        </Button>
      </div>
    </div>
  );
};

export default Hero;