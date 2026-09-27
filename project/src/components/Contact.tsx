import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { TiltCard } from '@/components/TiltCard';

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'Seif.ahmed2580@gmail.com', href: 'mailto:Seif.ahmed2580@gmail.com', accent: 'from-violet-400 to-violet-600', description: 'Best for project inquiries' },
  { icon: Phone, label: 'WhatsApp', value: '+20 101 296 0231', href: 'https://wa.me/201012960231', accent: 'from-coral-400 to-coral-500', description: 'Quick messages & calls' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/seifahmed1', href: 'https://linkedin.com/in/seifahmed1', accent: 'from-[#0A66C2] to-[#004182]', description: 'Professional network' },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />
      <div className="ambient-orb w-96 h-96 bg-violet-500 top-1/3 left-1/2 -translate-x-1/2 animate-orb-float" />
      <div className="ambient-orb w-72 h-72 bg-coral-400 bottom-1/4 right-1/4 animate-orb-float" style={{ animationDelay: '3s' }} />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's Connect & <span className="text-gradient-vc neon-text-glow">Build Something Extraordinary</span></>}
          subtitle="Have a project, opportunity, or just want to say hello? I'm available 24/7 and ready to help."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {CONTACTS.map((contact) => (
            <TiltCard key={contact.label} className="group rounded-2xl glass-strong border border-violet-500/10 p-6 sm:p-8">
              <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block text-center sm:text-left">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${contact.accent} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 shadow-lg mx-auto sm:mx-0`}>
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-xs text-slate-500 font-mono tracking-widest uppercase mb-1.5">{contact.label}</div>
                <div className="text-sm sm:text-base font-bold text-white-primary break-all group-hover:text-violet-400 transition-colors duration-300">{contact.value}</div>
                <div className="mt-2 text-xs text-slate-500">{contact.description}</div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 group-hover:gap-2.5 transition-all duration-300">
                  <Send className="h-3.5 w-3.5" />
                  Get in touch
                </div>
              </a>
            </TiltCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl glass-strong border border-violet-500/15 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden"
        >
          <div className="absolute inset-0 dot-overlay opacity-20 pointer-events-none" />
          <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 relative">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <span className="text-sm font-bold text-white-primary">Available 24/7</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-violet-500/15" />
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-violet-400" />
              Cairo, Egypt
            </div>
          </div>

          <div className="flex flex-wrap gap-3 relative">
            <a href="mailto:Seif.ahmed2580@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-600 text-white text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 magnetic-btn">
              <Mail className="h-4 w-4" />
              Send Email
            </a>
            <a href="https://linkedin.com/in/seifahmed1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-violet-500/15 hover:border-violet-500/40 text-violet-400 text-sm font-bold transition-all duration-300 hover:scale-105 magnetic-btn">
              <Linkedin className="h-4 w-4 text-[#0A66C2]" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
