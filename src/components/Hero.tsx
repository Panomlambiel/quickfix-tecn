import { motion } from 'motion/react';
import { ArrowRight, Drill as Tool, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onBook: () => void;
}

export function Hero({ onBook }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-24 min-h-[calc(100vh-80px)] flex items-center">
      {/* Background Glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(234,88,12,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-7xl xl:text-8xl font-black leading-[0.95] tracking-[-0.04em] mb-8 uppercase">
              Fast, Reliable<br />
              Tech <span className="text-tech-blue tracking-tighter">Repairs</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-10 max-w-xl leading-relaxed font-medium">
              Next-generation technical support for ARM64 architecture, Chromebooks, and high-performance server stacks. 
              Modular, transparent, and built for speed.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={onBook}
                className="btn-primary"
              >
                Book a Repair
              </button>
              <button className="btn-secondary">
                View Services
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hardware-card border-white/5 bg-slate-card/80 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emergency-orange animate-active-pulse" />
                  <span className="text-[11px] font-black uppercase tracking-[0.15em] text-emergency-orange">
                    Active Repair
                  </span>
                </div>
                <span className="text-[11px] font-mono text-text-secondary opacity-60">#QX-88291</span>
              </div>

              <div className="h-40 border border-dashed border-text-secondary/20 rounded-xl mb-8 flex items-center justify-center relative bg-black/20 overflow-hidden">
                <div className="absolute w-[60%] h-[1px] bg-tech-blue shadow-[0_0_15px_var(--color-tech-blue)]" />
                <Tool className="w-12 h-12 text-tech-blue/20" />
                
                {/* Visual tech lines */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black tracking-tight mb-1">MacBook Pro M2</h3>
                  <p className="text-sm text-text-secondary font-medium">Diagnostic: Kernel Panic Analysis</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-[12px] font-black uppercase tracking-wider">
                    <span>Progress</span>
                    <span className="text-tech-blue">72%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-tech-blue"
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
