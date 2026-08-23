import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle2, Copy, Sparkles, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const emailAddress = 'sudhanshu.ok1802@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
        }),
      });

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      // Fallback to mailto
      window.location.href = `mailto:${emailAddress}?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AContact Email: ${encodeURIComponent(formData.email)}`;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="contact-modal-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            id="contact-modal-dialog"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-2xl bg-[#111111] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              id="close-contact-modal"
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#D7E2EA]/20 bg-[#1A1A1A] flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 sm:mb-8 pr-12">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-medium block mb-2">
                Available for New Commissions & Projects
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight hero-heading">
                Let&apos;s Connect
              </h2>
              <p className="text-sm sm:text-base text-[#D7E2EA]/70 mt-2 font-light">
                Have a 3D vision, brand identity, or commercial animation in mind? Reach out directly.
              </p>
            </div>

            {/* Quick Email Bar */}
            <div className="flex items-center justify-between bg-[#181818] border border-[#D7E2EA]/15 rounded-2xl p-3 sm:p-4 mb-6">
              <div className="flex items-center gap-3 truncate mr-2">
                <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-purple-300" />
                </div>
                <div className="truncate">
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Direct Inbox</p>
                  <p className="text-xs sm:text-sm font-semibold text-white truncate">{emailAddress}</p>
                </div>
              </div>
              <button
                id="copy-email-btn"
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#252525] hover:bg-[#303030] text-xs font-medium text-white transition-colors cursor-pointer shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-white">Message Sent!</h3>
                <p className="text-sm text-gray-300 max-w-md">
                  Thank you for reaching out! Your message has been successfully sent to {emailAddress}. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-gray-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181818] border border-[#D7E2EA]/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-gray-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181818] border border-[#D7E2EA]/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-gray-400 mb-1.5">
                    Project Brief & Idea
                  </label>
                  <textarea
                    id="contact-form-message"
                    rows={3}
                    required
                    placeholder="Tell Jack about your visual vision, reference styles, or deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#181818] border border-[#D7E2EA]/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>Response within 24 hours</span>
                  </div>
                  <button
                    id="submit-contact-form"
                    type="submit"
                    className="rounded-full px-8 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-white cursor-pointer transition-all duration-200 contact-btn-glow flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
