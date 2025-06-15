
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background scrollbar-thin">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 texture-grain opacity-30 pointer-events-none" />
      
      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <Header />
      
      <main className="flex-grow relative z-10">
        {children}
      </main>
      
      <Footer />
      
      {/* Floating decorative elements */}
      <div className="fixed top-1/4 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="fixed top-1/3 right-16 w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-1/4 left-20 w-1.5 h-1.5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default Layout;
