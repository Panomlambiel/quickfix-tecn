import { motion } from 'motion/react';
import { Terminal, Cpu, Loader2, ExternalLink, ShieldCheck, ArrowLeft, Wifi } from 'lucide-react';

interface RemotePortalProps {
  onBack: () => void;
}

export function RemotePortal({ onBack }: RemotePortalProps) {
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
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-tech-blue mb-1">Live Bridge</h2>
          <h1 className="text-4xl font-black tracking-tighter uppercase">Support Session</h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="hardware-card bg-black/40 border-white/5 min-h-[400px] flex flex-col p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-tech-blue" />
                <span className="text-[10px] font-mono text-text-secondary uppercase tracking-[0.2em]">Bridge_Log_Initialize</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse" />
                <span className="text-[10px] font-mono text-tech-blue uppercase">Pending</span>
              </div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-tech-blue/20 blur-3xl rounded-full animate-pulse" />
                <Loader2 className="w-16 h-16 text-tech-blue animate-spin relative z-10" />
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tight underline decoration-tech-blue decoration-4 underline-offset-8">
                Waiting for Technician
              </h3>
              <p className="text-sm text-text-secondary font-medium max-w-[280px] leading-relaxed">
                A certified QuickFix engineer is reviewing your system logs. Do not close this bridge.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 font-mono text-[10px] text-text-secondary/40 space-y-1">
              <p>{'>'} HANDSHAKE_PROTOCOL: SECURE</p>
              <p>{'>'} TUNNEL_ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
              <p>{'>'} STATUS: LISTENING_FOR_REMOTE_ACCEPT</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hardware-card border-tech-blue/30 bg-tech-blue/5 p-8"
          >
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-tech-blue mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Secure Launch Control
            </h4>
            <p className="text-sm text-text-secondary font-medium mb-8">
              Once the technician accepts, use the button below to bridge your desktop. We use AnyDesk or Google Meet for secure screen sharing.
            </p>

            <button 
              className="btn-primary w-full flex items-center justify-center gap-3 py-6"
              onClick={() => window.open('https://anydesk.com/en/downloads', '_blank')}
            >
              <ExternalLink className="w-5 h-5" />
              Launch Secure Link
            </button>
            
            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <Wifi className="w-4 h-4 text-text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-text-primary tracking-wider">Bandwidth Check</p>
                  <p className="text-[9px] text-text-secondary">Excellent: 85 Mbps stable</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <Cpu className="w-4 h-4 text-text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-text-primary tracking-wider">Host Signature</p>
                  <p className="text-[9px] text-text-secondary">Verified ARM64 Optimization Active</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="p-6 rounded-2xl bg-dark-slate border border-white/5">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-3">Session Security</h4>
            <ul className="text-[11px] text-text-secondary/70 space-y-2 list-disc pl-4">
              <li>Video streams are end-to-end encrypted.</li>
              <li>You can terminate the bridge at any time.</li>
              <li>Support ID is valid for 15 minutes.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
