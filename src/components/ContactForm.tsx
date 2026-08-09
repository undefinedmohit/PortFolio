import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate form submission sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl text-left">
      <h3
        className="text-[24px] sm:text-[28px] text-white font-medium tracking-tight mb-2"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Send a Direct Message
      </h3>
      <p className="text-[14px] sm:text-[15px] text-white/70 mb-6">
        Have an opportunity or architectural discussion? Reach out directly via the form or email <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="text-white underline">{PORTFOLIO_DATA.profile.email}</a>.
      </p>

      {isSubmitted ? (
        <div className="p-6 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center animate-fade-in">
          <span className="text-3xl mb-2 block">✅</span>
          <h4 className="text-lg font-semibold text-white mb-1">Message Sent Successfully!</h4>
          <p className="text-sm text-white/80">
            Thank you for reaching out. Mohit will get back to you shortly at <span className="font-semibold text-white">{PORTFOLIO_DATA.profile.email}</span>.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-xs text-white/70 underline hover:text-white"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Smith"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
              Subject / Topic
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Senior Backend Role / Java Spring Boot"
              className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 transition-all text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about the project or role requirements..."
              className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 transition-all text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-200 cursor-pointer shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message →'}
          </button>
        </form>
      )}
    </div>
  );
};
