import { motion } from 'motion/react';
import { ShieldCheck, Lock, Globe, ArrowLeft, Terminal, Cpu } from 'lucide-react';

interface SupportPortalProps {
  onBack: () => void;
}

export function SupportPortal({ onBack }: SupportPortalProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors text-text-secondary hover:text-text-primary"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-tech-blue mb-1">Secure Gateway</h2>
          <h1 className="text-4xl font-black tracking-tighter uppercase">Remote Support Portal</h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_350px] gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="hardware-card border-white/5 bg-slate-card/40 backdrop-blur-xl">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
              <Lock className="w-6 h-6 text-emergency-orange" />
              Encrypted Session Protocol
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed font-medium">
              Our remote assistance framework utilizes end-to-end encrypted tunnels. 
              Once you initiate a request, our system generates a strictly <span className="text-text-primary font-bold">one-time secure link</span> 
              sent directly to your verified contact method.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-tech-blue mb-3" />
                <h4 className="text-[11px] font-black uppercase tracking-wider mb-1">Verified Tunnel</h4>
                <p className="text-[12px] text-text-secondary">AES-256 Bit Encryption standard on all streams.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                <Globe className="w-5 h-5 text-tech-blue mb-3" />
                <h4 className="text-[11px] font-black uppercase tracking-wider mb-1">Global Node Exit</h4>
                <p className="text-[12px] text-text-secondary">Low-latency routing via our dedicated support mesh.</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-tech-blue/5">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-tech-blue mb-4">How it works</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-tech-blue/20 text-tech-blue flex items-center justify-center font-black text-xs shrink-0">01</div>
                <div>
                  <p className="text-sm font-bold text-text-primary mb-1">Submit Order</p>
                  <p className="text-xs text-text-secondary">Submit a repair order and select "Remote Assistance" if applicable.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-tech-blue/20 text-tech-blue flex items-center justify-center font-black text-xs shrink-0">02</div>
                <div>
                  <p className="text-sm font-bold text-text-primary mb-1">Receive Token</p>
                  <p className="text-xs text-text-secondary">A unique session token will be generated for your specific hardware ID.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-tech-blue/20 text-tech-blue flex items-center justify-center font-black text-xs shrink-0">03</div>
                <div>
                  <p className="text-sm font-bold text-text-primary mb-1">Launch Session</p>
                  <p className="text-xs text-text-secondary">Open the encrypted link to bridge your device with our technician's terminal.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="hardware-card bg-black/40 border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-text-secondary" />
              <span className="text-[10px] font-mono text-text-secondary opacity-50 uppercase tracking-widest">Support Terminal</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-wider text-text-secondary">
                <span>Core Status</span>
                <span className="text-green-500">OPERATIONAL</span>
              </div>
              <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-wider text-text-secondary">
                <span>Encryption</span>
                <span className="text-tech-blue">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-wider text-text-secondary">
                <span>Link TTL</span>
                <span>15:00m</span>
              </div>
            </div>

            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4" />
              Join Session
            </button>
            <p className="text-[10px] text-center mt-4 text-text-secondary opacity-50 px-4">
              Requires valid Session Token provided via Repair Ticket.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emergency-orange/5 border border-emergency-orange/20">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-emergency-orange mb-2">Notice</h5>
            <p className="text-[12px] text-text-secondary font-medium leading-relaxed">
              Never share your one-time link with anyone. QuickFix-Tech employees will only ever contact you through the verified platform dashboard.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
