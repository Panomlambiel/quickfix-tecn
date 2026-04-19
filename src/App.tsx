import { useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import { AuthProvider, useAuth } from './AuthContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { RepairStatus } from './components/RepairStatus';
import { SupportPortal } from './components/SupportPortal';
import { RemotePortal } from './components/RemotePortal';
import { FounderSection } from './components/FounderSection';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const [view, setView] = useState<'home' | 'booking' | 'status' | 'support' | 'remote'>('home');
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Header setView={setView} activeView={view} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onBook={() => setView('booking')} />
              <ServicesGrid />
            </motion.div>
          )}

          {view === 'booking' && (
            <motion.div
              key="booking"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto px-4 py-20"
            >
              <BookingForm onBack={() => setView('home')} onOptimizationBooked={() => setView('remote')} />
            </motion.div>
          )}

          {view === 'status' && (
            <motion.div
              key="status"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto px-4 py-20"
            >
              <RepairStatus onBack={() => setView('home')} />
            </motion.div>
          )}

          {view === 'support' && (
            <motion.div
              key="support"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <SupportPortal onBack={() => setView('home')} />
            </motion.div>
          )}

          {view === 'remote' && (
            <motion.div
              key="remote"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <RemotePortal onBack={() => setView('home')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <FounderSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
