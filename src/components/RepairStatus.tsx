import React, { useState } from 'react';
import { Search, Loader2, Calendar, ClipboardList, CheckSquare, Clock } from 'lucide-react';
import { Booking } from '../types';

interface RepairStatusProps {
  onBack: () => void;
}

export function RepairStatus({ onBack }: RepairStatusProps) {
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [order, setOrder] = useState<Booking | null>(null);

  const lookupOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    
    setLoading(true);
    setError('');
    setOrder(null);

    try {
      const resp = await fetch(`/api/bookings/${trackingId.toUpperCase()}`);
      if (!resp.ok) throw new Error('Order not found');
      const data = await resp.json();
      setOrder(data);
    } catch (err) {
      setError('No matching repair order found for that ID.');
    } finally {
      setLoading(false);
    }
  };

  const getStepStatus = (step: string) => {
    if (!order) return 'upcoming';
    const statusMap: Record<string, number> = {
      'pending': 1,
      'diagnosing': 2,
      'repairing': 3,
      'completed': 4
    };
    const currentWeight = statusMap[order.status];
    const stepWeight = statusMap[step];
    
    if (currentWeight > stepWeight) return 'complete';
    if (currentWeight === stepWeight) return 'active';
    return 'upcoming';
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Track Your <span className="text-tech-blue">Repair</span></h2>
        <p className="text-slate-400">Enter your 8-digit tracking number from your receipt.</p>
      </div>

      <form onSubmit={lookupOrder} className="flex gap-4 mb-12">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="text-slate-500 font-mono font-bold">#</span>
          </div>
          <input 
            placeholder="ABC123XY"
            className="tech-input w-full pl-8 font-mono tracking-widest uppercase"
            value={trackingId}
            onChange={e => setTrackingId(e.target.value)}
          />
        </div>
        <button 
          disabled={loading}
          className="btn-primary flex items-center gap-2"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          Lookup
        </button>
      </form>

      {error && (
        <div className="hardware-card border-red-500/50 bg-red-500/5 text-red-500 text-sm py-4 px-6 mb-8">
          {error}
        </div>
      )}

      {order && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="hardware-card">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Repair Request</div>
                <h3 className="text-xl font-bold">{order.deviceType}</h3>
              </div>
              <div className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-active-pulse">
                {order.status}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Customer</div>
                <div className="font-medium text-slate-200">{order.customerName}</div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Date Logged</div>
                <div className="font-medium text-slate-200 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(order.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4">Repair Lifecycle</h4>
            <div className="space-y-2">
              <Step 
                icon={<ClipboardList className="w-5 h-5" />} 
                label="Request Logged" 
                desc="Service ticket registered in system" 
                status={getStepStatus('pending')} 
              />
              <Step 
                icon={<Search className="w-5 h-5" />} 
                label="Diagnostic Phase" 
                desc="Hardware inspection and failure analysis" 
                status={getStepStatus('diagnosing')} 
              />
              <Step 
                icon={<Clock className="w-5 h-5" />} 
                label="Repair in Progress" 
                desc="Our technicians are applying the fix" 
                status={getStepStatus('repairing')} 
              />
              <Step 
                icon={<CheckSquare className="w-5 h-5" />} 
                label="Quality Check & Ready" 
                desc="Stress testing complete. Ready for pickup." 
                status={getStepStatus('completed')} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Step({ icon, label, desc, status }: { icon: any, label: string, desc: string, status: 'complete' | 'active' | 'upcoming' }) {
  const statusColors = {
    complete: 'border-green-500/50 bg-green-500/10 text-green-500',
    active: 'border-tech-blue bg-tech-blue/10 text-tech-blue',
    upcoming: 'border-slate-800 bg-slate-800/20 text-slate-600'
  };

  return (
    <div className={`p-4 rounded-xl border transition-colors ${statusColors[status]}`}>
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-lg ${status === 'upcoming' ? 'bg-slate-800' : 'bg-current/10'}`}>
          {icon}
        </div>
        <div>
          <div className="font-bold flex items-center gap-2">
            {label}
            {status === 'complete' && <CheckSquare className="w-3 h-3" />}
          </div>
          <div className={`text-xs ${status === 'upcoming' ? 'text-slate-600' : 'text-current/60'}`}>
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}
