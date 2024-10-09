import Link from 'next/link';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Extreme Safari</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Discover your next adventure with AI-powered recommendations.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/destinations" className="text-muted-foreground hover:text-primary">Destinations</Link></li>
              <li><Link href="/trips" className="text-muted-foreground hover:text-primary">Trips</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Extreme Safari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;