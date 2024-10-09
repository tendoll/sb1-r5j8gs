import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    id: 1,
    name: 'Serengeti National Park',
    country: 'Tanzania',
    description: 'Experience the great wildebeest migration and spot the Big Five.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
  },
  {
    id: 2,
    name: 'Okavango Delta',
    country: 'Botswana',
    description: 'Explore the world\'s largest inland delta by mokoro canoe.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
  },
  {
    id: 3,
    name: 'Masai Mara',
    country: 'Kenya',
    description: 'Witness the incredible wildlife and immerse yourself in Maasai culture.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <Card key={destination.id}>
            <CardHeader>
              <CardTitle>{destination.name}</CardTitle>
              <CardDescription>{destination.country}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 mb-4">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-muted-foreground">{destination.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;