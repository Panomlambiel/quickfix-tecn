import { ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';

interface BookingFormProps {
  onBack: () => void;
  onOptimizationBooked?: () => void;
}

export function BookingForm({ onBack, onOptimizationBooked }: BookingFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | { trackingId: string }>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    deviceType: 'Laptop (Mac/PC)',
    issueCategory: 'Slow Performance',
    remoteConsent: false,
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const resp = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await resp.json();
      if (data.success) {
        setSuccess({ trackingId: data.trackingId });
      }
    } catch (err) {
      console.error('Booking failed', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="hardware-card text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Request Submitted!</h2>
        <p className="text-slate-400 mb-8">
          Our technicians have received your request. Save your tracking ID below.
        </p>
        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl mb-8 max-w-sm mx-auto">
          <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Tracking Number</div>
          <div className="text-3xl font-mono text-tech-blue font-bold tracking-tight">
            #{success.trackingId}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onBack} className="btn-secondary">
            Return to Dashboard
          </button>
          {form.deviceType === 'Speed Optimization' && (
            <button 
              onClick={onOptimizationBooked}
              className="btn-primary animate-pulse"
            >
              Launch Session
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors text-text-secondary hover:text-text-primary"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight">New Repair Request</h2>
          <p className="text-sm text-text-secondary font-medium">Please provide device details for initial diagnosis.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-text-secondary">Contact Person</label>
            <input 
              required
              placeholder="John Doe"
              className="tech-input w-full"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-text-secondary">Email Address</label>
            <input 
              required
              type="email"
              placeholder="john@example.com"
              className="tech-input w-full"
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">Device Category</label>
            <select 
              className="tech-input w-full appearance-none pr-10"
              value={form.deviceType}
              onChange={e => setForm({...form, deviceType: e.target.value})}
            >
              <option>Laptop (Mac/PC)</option>
              <option>Smartphone</option>
              <option>Networking Gear</option>
              <option>Speed Optimization</option>
              <option>Custom Build/PC</option>
              <option>Console/Gaming</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">Issue Category</label>
            <select 
              className="tech-input w-full appearance-none pr-10"
              value={form.issueCategory}
              onChange={e => setForm({...form, issueCategory: e.target.value})}
            >
              <option>Slow Performance</option>
              <option>Wi-Fi/Internet</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">Issue Description</label>
          <textarea 
            required
            rows={4}
            placeholder="Please describe the symptoms (e.g., won't boot, blue screen, flickering display...)"
            className="tech-input w-full resize-none"
            value={form.description}
            onChange={e => setForm({...form, description: e.target.value})}
          />
        </div>

        <div className="flex items-start gap-3 p-4 bg-black/20 rounded-xl border border-white/5">
          <div className="flex items-center h-5">
            <input
              id="consent"
              type="checkbox"
              required
              className="w-4 h-4 rounded border-white/10 bg-dark-slate text-tech-blue focus:ring-tech-blue cursor-pointer"
              checked={form.remoteConsent}
              onChange={e => setForm({...form, remoteConsent: e.target.checked})}
            />
          </div>
          <label htmlFor="consent" className="text-[12px] text-text-secondary leading-normal cursor-pointer select-none">
            I authorize QuickFix-Tech to access my device for this session. 
            I understand that <span className="text-text-primary font-bold">I can terminate the link at any time</span>.
          </label>
        </div>

        <div className="pt-4 space-y-4">
          <button 
            disabled={loading || !form.remoteConsent}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Initiate Diagnosis
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 text-text-secondary opacity-50">
            <ShieldCheck className="w-4 h-4 text-tech-blue" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">256-bit Encrypted Sessions</span>
          </div>
        </div>
      </form>
    </div>
  );
}
