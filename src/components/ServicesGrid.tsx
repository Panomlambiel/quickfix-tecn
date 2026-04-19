import { Laptop, Cpu, Globe, Smartphone, Monitor as LCD, Shield, Wifi, Gauge, RadioTower } from 'lucide-react';
import { Service } from '../types';

const coreServices: Service[] = [
  {
    id: 'lap-01',
    name: 'Laptop Repair',
    description: 'Hardware diagnostics, screen replacements, and battery service for all major brands.',
    icon: 'Laptop',
    price: 'From $49',
    eta: '1-3 Days',
    category: 'laptop'
  },
  {
    id: 'soft-01',
    name: 'Software Refactoring',
    description: 'OS reinstallations, data recovery, and complex troubleshooting.',
    icon: 'Cpu',
    price: 'From $35',
    eta: 'Same Day',
    category: 'software'
  },
  {
    id: 'net-01',
    name: 'Network Infrastructure',
    description: 'Home & office network setup, security hardening, and stable Wi-Fi configuration.',
    icon: 'Globe',
    price: 'From $79',
    eta: '1 Day',
    category: 'network'
  },
  {
    id: 'sm-01',
    name: 'Smartphone Service',
    description: 'Display fixes, battery swaps, and critical component repairs.',
    icon: 'Smartphone',
    price: 'From $59',
    eta: '24 Hours',
    category: 'misc'
  },
  {
    id: 'mon-01',
    name: 'Monitor/LCD Help',
    description: 'Panel repairs, backlight fixes, and professional cleaning.',
    icon: 'Monitor',
    price: 'From $45',
    eta: '1-2 Days',
    category: 'misc'
  },
  {
    id: 'sec-01',
    name: 'Security Shield',
    description: 'Malware removal, firewall setup, and device health audits.',
    icon: 'Shield',
    price: 'From $65',
    eta: '4 Hours',
    category: 'software'
  }
];

const optimizationServices: Service[] = [
  {
    id: 'net-deadzone',
    name: 'Wi-Fi Dead Zone Fix',
    description: 'Mesh network deployment and high-gain router configuration for total coverage.',
    icon: 'RadioTower',
    price: 'From $55',
    eta: '2 Hours',
    category: 'optimization',
    remoteSupportAvailable: true
  },
  {
    id: 'speed-deepclean',
    name: 'Slow Phone/PC Deep Clean',
    description: 'Exhaustive remote system optimization, registry repair, and architecture-specific tuning.',
    icon: 'Gauge',
    price: 'From $39',
    eta: '3 Hours',
    category: 'optimization',
    remoteSupportAvailable: true
  },
  {
    id: 'net-audit',
    name: 'Connectivity Audit',
    description: 'Comprehensive analysis of packet loss, latency spikes, and Wi-Fi interference.',
    icon: 'Wifi',
    price: 'From $65',
    eta: '1 Hour',
    category: 'optimization',
    remoteSupportAvailable: true
  }
];

const iconMap: Record<string, any> = {
  Laptop, Cpu, Globe, Smartphone, Monitor: LCD, Shield, Wifi, Gauge, RadioTower
};

export function ServicesGrid() {
  const renderSection = (title: string, sub: string, items: Service[]) => (
    <div className="mb-20 last:mb-0">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black mb-3 uppercase tracking-tight">{title}</h2>
        <p className="text-text-secondary max-w-lg mx-auto text-sm font-medium">{sub}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <div 
              key={service.id}
              className="hardware-card bg-slate-card/40 border-white/5 group cursor-pointer relative overflow-hidden flex flex-col hover:bg-slate-card/60"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-tech-blue">
                  {service.name}
                </h4>
                {service.remoteSupportAvailable && (
                  <div className="bg-tech-blue/10 text-[9px] font-black tracking-widest text-tech-blue px-2 py-0.5 rounded border border-tech-blue/20 uppercase">
                    Remote Support Available
                  </div>
                )}
              </div>
              
              <p className="text-[13px] text-text-secondary mb-6 leading-relaxed font-medium">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 font-black uppercase tracking-wider text-[11px]">
                <div className="text-text-primary">
                  {service.price}
                </div>
                <div className="text-text-secondary opacity-60">
                  Est. {service.eta}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-tech-blue mb-4">Service Modules</h2>
          <h1 className="text-5xl font-black mb-6 tracking-tighter uppercase">Our Technical <span className="text-tech-blue">Catalog</span></h1>
        </div>

        {renderSection(
          "Core Tech Services", 
          "Fundamental repair solutions for your essential hardware and software modules.",
          coreServices
        )}

        {renderSection(
          "Network & Device Optimization", 
          "Strategic performance tuning to eliminate bottlenecks and bridge connectivity gaps.",
          optimizationServices
        )}
      </div>
    </section>
  );
}
