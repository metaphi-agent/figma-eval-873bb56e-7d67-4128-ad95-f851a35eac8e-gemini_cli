import { ReactNode } from 'react';
import { Header } from './blocks/Header';
import { Footer } from './blocks/Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-main text-text-main font-sans selection:bg-accent-primary selection:text-bg-main">
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}