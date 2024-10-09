"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const TravelPlanner = () => {
  const [date, setDate] = useState<Date>();

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Plan Your Adventure</h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create Your Itinerary</CardTitle>
          <CardDescription>Start planning your dream safari adventure with our easy-to-use travel planner.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div>
                <Label htmlFor="tripName">Trip Name</Label>
                <Input id="tripName" placeholder="e.g., Serengeti Adventure 2023" />
              </div>
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="duration">Duration (days)</Label>
                <Input id="duration" type="number" min="1" placeholder="e.g., 7" />
              </div>
              <div>
                <Label htmlFor="destinations">Destinations</Label>
                <Input id="destinations" placeholder="e.g., Serengeti, Ngorongoro Crater" />
              </div>
              <div>
                <Label htmlFor="activities">Planned Activities</Label>
                <Textarea id="activities" placeholder="List your planned activities and experiences" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Save Itinerary</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default TravelPlanner;