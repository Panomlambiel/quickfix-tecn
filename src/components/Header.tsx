import { Monitor, Smartphone, Wrench, Search, Menu, Sun, Moon, LogIn, LogOut, Terminal } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { useAuth } from '../AuthContext';

interface HeaderProps {
  setView: (view: 'home' | 'booking' | 'status' | 'support' | 'remote') => void;
  activeView: string;
}

export function Header({ setView, activeView }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-dark-slate/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setView('home')}
        >
          <span className="font-extrabold text-xl tracking-tight flex items-center">
            <span className="text-emergency-orange mr-1">⚡</span> QUICKFIX<span className="text-tech-blue">-TECH</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => setView('home')}
            className={`text-[13px] font-extrabold uppercase tracking-[1px] transition-colors hover:text-text-primary ${activeView === 'home' ? 'text-text-primary' : 'text-text-secondary'}`}
          >
            Hardware
          </button>
          <button 
            onClick={() => setView('booking')}
            className={`text-[13px] font-extrabold uppercase tracking-[1px] transition-colors hover:text-text-primary ${activeView === 'booking' ? 'text-text-primary' : 'text-text-secondary'}`}
          >
            Software
          </button>
          <button 
            onClick={() => setView('status')}
            className={`text-[13px] font-extrabold uppercase tracking-[1px] transition-colors hover:text-text-primary ${activeView === 'status' ? 'text-text-primary' : 'text-text-secondary'}`}
          >
            Network
          </button>
          <button 
            onClick={() => setView('support')}
            className={`text-[13px] font-extrabold uppercase tracking-[1px] transition-colors hover:text-text-primary ${activeView === 'support' ? 'text-text-primary' : 'text-text-secondary'}`}
          >
            Join Support
          </button>
          {user && (
            <button 
              onClick={() => setView('remote')}
              className={`text-[13px] font-extrabold uppercase tracking-[1px] flex items-center gap-2 transition-colors hover:text-text-primary ${activeView === 'remote' ? 'text-text-primary' : 'text-text-secondary'}`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Join Session
            </button>
          )}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block font-mono text-[11px] text-text-secondary opacity-50">
            SYS_ARM64_READY
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-black uppercase tracking-widest text-text-secondary hidden xl:block">{user.displayName?.split(' ')[0]}</span>
              <button 
                onClick={logout}
                className="p-2 text-text-secondary hover:text-emergency-orange transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={login}
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-text-primary hover:text-tech-blue transition-colors px-4 py-2 bg-white/5 rounded-lg border border-white/5"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
          )}
          
          <button 
            onClick={() => setView('booking')}
            className="btn-primary py-2 px-4 text-sm"
          >
            Get Help
          </button>

          <button className="md:hidden p-2 text-slate-400">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
