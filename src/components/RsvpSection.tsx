import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Heart, User, Users, Phone, MessageSquare } from 'lucide-react';

interface RsvpFormData {
  fullName: string;
  guestsCount: string;
  phone: string;
  attendance: 'accept' | 'decline';
  message: string;
}

export const RsvpSection: React.FC = () => {
  const [formData, setFormData] = useState<RsvpFormData>({
    fullName: '',
    guestsCount: '1',
    phone: '',
    attendance: 'accept',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RsvpFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof RsvpFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory golden confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#0F382C', '#F4ECE1', '#E5C378'],
      });

      // Save to localStorage for demo persistence
      try {
        const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
      } catch {
        // storage fallback
      }
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      guestsCount: '1',
      phone: '',
      attendance: 'accept',
      message: '',
    });
  };

  return (
    <section id="rsvp" className="relative py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#D4AF37]/10 via-[#164E3D]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6412] font-semibold">
            Response Requested
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F382C] font-bold mt-2 tracking-wide">
            Kindly RSVP
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-cormorant italic text-base sm:text-lg text-[#2C332E]/80 mt-3">
            Your presence will grace our celebration and bring immense joy to our families.
          </p>
        </div>

        {/* RSVP Card */}
        <div className="w-full p-8 sm:p-12 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-luxury relative overflow-hidden">
          
          {submitted ? (
            /* Success State */
            <div className="py-10 flex flex-col items-center text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#0F382C] text-[#D4AF37] flex items-center justify-center mb-6 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <p className="font-arabic text-3xl sm:text-4xl text-[#0F382C] font-bold">
                جَزَاكُمُ اللَّهُ خَيْرًا
              </p>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#0F382C] font-bold mt-3">
                JazakAllahu Khairan
              </h3>

              <p className="font-cormorant italic text-lg text-[#2C332E]/90 mt-2 max-w-md">
                Thank you, <span className="font-semibold text-[#0F382C]">{formData.fullName}</span>. Thank you for being part of our special day.
              </p>

              <div className="mt-8 pt-6 border-t border-black/5 w-full flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-[#D4AF37] text-xs uppercase tracking-widest text-[#0F382C] hover:bg-[#FAF7F2] transition-colors"
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          ) : (
            /* RSVP Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0F382C] mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mohamed Tariq & Family"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border ${
                    errors.fullName ? 'border-red-400' : 'border-[#D4AF37]/40'
                  } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 text-sm text-[#1F2421]`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Attendance Toggle */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0F382C] mb-2">
                  Will You Be Attending? *
                </label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                    className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      formData.attendance === 'accept'
                        ? 'bg-[#0F382C] text-[#FAF7F2] border-[#0F382C] shadow-md'
                        : 'bg-[#FAF7F2] text-[#2C332E] border-[#D4AF37]/40 hover:bg-[#F3ECE1]'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${formData.attendance === 'accept' ? 'fill-current' : ''}`} />
                    <span>Joyfully Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                    className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      formData.attendance === 'decline'
                        ? 'bg-[#1F2421] text-[#FAF7F2] border-[#1F2421] shadow-md'
                        : 'bg-[#FAF7F2] text-[#2C332E] border-[#D4AF37]/40 hover:bg-[#F3ECE1]'
                    }`}
                  >
                    <span>Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Number of Guests & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0F382C] mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Number of Guests</span>
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 text-sm text-[#1F2421]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ (Family)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0F382C] mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +94 77 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border ${
                      errors.phone ? 'border-red-400' : 'border-[#D4AF37]/40'
                    } focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 text-sm text-[#1F2421]`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Message for Couple */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0F382C] mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Leave a message for the couple (Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Share your prayers, warm wishes, or congratulations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 text-sm text-[#1F2421]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#0F382C] hover:bg-[#164E3D] text-[#FAF7F2] font-serif text-sm uppercase tracking-[0.25em] font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-[#D4AF37]/50 cursor-pointer disabled:opacity-70 mt-2"
              >
                {isSubmitting ? (
                  <span>Sending Response...</span>
                ) : (
                  <>
                    <span>Confirm RSVP</span>
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
