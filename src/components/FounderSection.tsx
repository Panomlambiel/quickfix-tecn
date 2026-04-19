import { motion } from 'motion/react';
import { User, Award, ShieldCheck } from 'lucide-react';

export function FounderSection() {
  return (
    <section className="py-24 bg-dark-slate relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Professional Photo Placeholder */}
            <div className="aspect-[4/5] rounded-2xl border-2 border-tech-blue shadow-[0_0_30px_rgba(0,123,255,0.2)] bg-slate-card/20 flex flex-col items-center justify-center relative overflow-hidden group">
              <User className="w-20 h-20 text-tech-blue/20 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-tech-blue/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="h-1 w-12 bg-tech-blue mb-2" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-tech-blue">Vision_Lead</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-tech-blue mb-6">Meet the Founder</h2>
            <h1 className="text-5xl font-black mb-8 tracking-tighter uppercase leading-tight">
              Founded by <br />
              <span className="bg-gradient-to-r from-[#007BFF] to-tech-blue bg-clip-text text-transparent">
                Panom Lam Biel
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary font-medium leading-relaxed max-w-xl">
              With a deep expertise in network security and device optimization, 
              <span className="text-text-primary font-bold"> Panom Lam Biel </span> 
              founded QuickFix-Tech to bridge the gap between complex technical issues 
              and fast, remote solutions.
            </p>

            <div className="mt-10 flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-tech-blue" />
                <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Security Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                <Award className="w-4 h-4 text-emergency-orange" />
                <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Network Specialist</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
