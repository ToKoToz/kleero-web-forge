
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'À Propos', path: '/about' },
  { name: 'Automatisations', path: '/automations' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <NavLink to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg" style={{color: '#0098b1'}}>Kleero</span>
        </NavLink>
        <nav className="flex items-center gap-6 text-sm flex-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors hover:text-foreground/80 ${
                  isActive ? 'text-foreground' : 'text-foreground/60'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center justify-end">
          <Button asChild>
            <NavLink to="/contact">Contactez-nous</NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
