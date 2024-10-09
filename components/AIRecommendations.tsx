"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const AIRecommendations = () => {
  const [budget, setBudget] = useState([5000]);
  const [duration, setDuration] = useState([7]);
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating AI recommendation
    const aiRecommendation = `Based on your preferences, we recommend a ${duration[0]}-day safari in Tanzania's Serengeti National Park. This trip fits within your $${budget[0]} budget and includes:

1. Luxury eco-lodge accommodations
2. Guided game drives to spot the Big Five
3. Hot air balloon safari over the Serengeti plains
4. Visit to a Maasai village for cultural immersion
5. Photography workshop with a professional wildlife photographer

This adventure offers the perfect blend of wildlife encounters, cultural experiences, and breathtaking landscapes.`;

    setRecommendation(aiRecommendation);
  };

  return (
    <section className="py-12 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">AI-Powered Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Get Personalized Trip Suggestions</CardTitle>
            <CardDescription>Tell us about your preferences, and our AI will recommend the perfect safari experience for you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="destination">Preferred Destination (optional)</Label>
                  <Input id="destination" placeholder="e.g., Tanzania, Kenya, South Africa" />
                </div>
                <div>
                  <Label htmlFor="budget">Budget (USD)</Label>
                  <Slider
                    id="budget"
                    min={1000}
                    max={20000}
                    step={500}
                    value={budget}
                    onValueChange={setBudget}
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    ${budget[0].toLocaleString()}
                  </div>
                </div>
                <div>
                  <Label htmlFor="duration">Trip Duration (days)</Label>
                  <Slider
                    id="duration"
                    min={3}
                    max={30}
                    step={1}
                    value={duration}
                    onValueChange={setDuration}
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    {duration[0]} days
                  </div>
                </div>
                <div>
                  <Label htmlFor="interests">Interests</Label>
                  <Input id="interests" placeholder="e.g., wildlife, photography, culture" />
                </div>
              </div>
              <Button type="submit" className="w-full mt-4">Get Recommendations</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Your Personalized Recommendation</CardTitle>
            <CardDescription>Based on your preferences, our AI suggests the following safari experience:</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              value={recommendation} 
              readOnly 
              className="h-[300px] bg-muted text-muted-foreground"
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book This Trip</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default AIRecommendations;