import React from 'react';
import { Cpu, Github, Linkedin, Twitter, ShieldCheck } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-slate border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-[1fr_200px_200px] gap-20 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="font-extrabold text-2xl tracking-tight uppercase">
                <span className="text-emergency-orange mr-1 text-3xl">⚡</span> QUICKFIX<span className="text-tech-blue">-TECH</span>
              </span>
            </div>
            <p className="text-text-secondary max-w-sm mb-10 leading-relaxed font-medium text-sm">
              Next-generation technical repair system. We provide high-precision diagnostics and 
              encrypted remote support modules for professional hardware environments.
            </p>
            <div className="flex items-center gap-5">
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Github />} />
              <SocialIcon icon={<Linkedin />} />
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-text-primary mb-8 opacity-40">Resources</h4>
            <ul className="space-y-4 text-[13px] font-bold text-text-secondary">
              <li><a href="#" className="hover:text-tech-blue transition-colors">Service Modules</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Hardware Audit</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Support Portal</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Status Board</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-text-primary mb-8 opacity-40">Legal & Security</h4>
            <ul className="space-y-4 text-[13px] font-bold text-text-secondary">
              <li><a href="#" className="hover:text-tech-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Security Disclosure</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Bridge Protocol</a></li>
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-black/20 border border-white/5 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between text-center md:text-left">
            <div className="space-y-1">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <ShieldCheck className="w-4 h-4 text-tech-blue" />
                <h5 className="text-[11px] font-black uppercase tracking-wider text-text-primary">Data Integrity Policy</h5>
              </div>
              <p className="text-[12px] text-text-secondary max-w-2xl font-medium">
                Our technicians strictly operate within encrypted secure tunnels. QuickFix-Tech <span className="text-text-primary">never stores user passwords, cached credentials, or personal files</span> during or after remote sessions. All session logs are purged upon completion.
              </p>
            </div>
            <div className="font-mono text-[10px] text-text-secondary opacity-30 uppercase tracking-[0.3em]">
              SHA-256_VERIFIED
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-text-secondary font-black tracking-widest uppercase">
          <div className="opacity-40">© {currentYear} QuickFix-Tech. Created & Found by <span className="text-tech-blue">Panom Lam Biel</span>. All Rights Reserved.</div>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <Cpu className="w-4 h-4 text-tech-blue" />
            <span className="opacity-60 tracking-normal">KERNEL_V.3.1.0-STABLE_ARM64</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: any }) {
  return (
    <a href="#" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-text-secondary hover:bg-tech-blue hover:text-white hover:border-tech-blue transition-all">
      {React.cloneElement(icon, { size: 18 })}
    </a>
  );
}
