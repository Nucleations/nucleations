import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/nucleations-main-logo-1.png';

const navLinks = [
  { label: 'ARIA', to: '/aria' },
  { label: 'Services', to: '/#services' },
  { label: 'Courses', to: '/#courses' },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchor = (to: string) => {
    setOpen(false);
    if (to.startsWith('/#')) {
      const id = to.slice(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(to);
    }
  };

  const handleCTA = () => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" aria-label="Nucleations Home" className="flex items-center gap-3">
          <img src={logo} alt="Nucleations" className="h-12 w-auto" />
          <span
            className="text-xl md:text-2xl font-bold tracking-wide text-foreground leading-none"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            NUCLEATIONS
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleAnchor(link.to)}
              className="text-foreground font-semibold hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={handleCTA}
            className="rounded-full shadow-soft hover:shadow-elegant transition-all"
          >
            Book an AI Opportunity Call
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleAnchor(link.to)}
                className="text-left text-foreground font-semibold hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={handleCTA} className="rounded-full w-full">
              Book an AI Opportunity Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
