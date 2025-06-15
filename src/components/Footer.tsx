
import { Gitlab, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Kleero. Tous droits réservés.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Twitter size={18} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Linkedin size={18} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Gitlab size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
