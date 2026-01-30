import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';
import { Input } from '../ui/Input';
import { clsx } from 'clsx';

const NAV_ITEMS = [
  { label: 'Store', path: '/' },
  { label: 'Library', path: '/library' },
  { label: 'Community', path: '/community' },
  { label: 'Profile', path: '/profile' },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="h-[60px] bg-bg-secondary flex items-center px-8 justify-between shrink-0 z-50 relative shadow-md">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold tracking-wider text-text-main uppercase">
          Steam
        </Link>
        
        <nav className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'text-sm font-medium uppercase tracking-wide transition-colors duration-150 py-5 border-b-2',
                location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))
                  ? 'text-accent-primary border-accent-primary' 
                  : 'text-text-dim border-transparent hover:text-text-main'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-64">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
           <Input placeholder="Search" className="pl-10 h-9 text-sm bg-bg-main/50 border-none" />
        </div>
        
        <button className="text-text-dim hover:text-text-main transition-colors cursor-pointer">
          <Bell className="w-5 h-5" />
        </button>

        <div className="w-8 h-8 bg-bg-highlight rounded-full flex items-center justify-center text-accent-primary cursor-pointer hover:brightness-110 transition-all">
          <User className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}