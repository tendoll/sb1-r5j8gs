"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/mode-toggle';
import { Compass, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Compass className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">Extreme Safari</span>
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/destinations" className="text-foreground hover:text-primary">Destinations</Link>
          <Link href="/trips" className="text-foreground hover:text-primary">Trips</Link>
          <Link href="/about" className="text-foreground hover:text-primary">About</Link>
          <Input type="search" placeholder="Search..." className="w-64 bg-muted text-muted-foreground" />
          <ModeToggle />
          <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4">
          <nav className="flex flex-col space-y-4 items-center">
            <Link href="/destinations" className="text-foreground hover:text-primary">Destinations</Link>
            <Link href="/trips" className="text-foreground hover:text-primary">Trips</Link>
            <Link href="/about" className="text-foreground hover:text-primary">About</Link>
            <Input type="search" placeholder="Search..." className="w-64 bg-muted text-muted-foreground" />
            <ModeToggle />
            <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;