import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center px-4 py-20 pt-32">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-5xl font-bold mb-12 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
          Get In Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-emerald-300 mb-1">Email</h3>
                <p className="text-gray-300">hello@binaryblasters.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-emerald-300 mb-1">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-emerald-300 mb-1">Location</h3>
                <p className="text-gray-300">Global • Remote First</p>
              </div>
            </div>

            <div className="pt-8 border-t border-emerald-500/30">
              <h3 className="font-bold text-emerald-300 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/60 transition-all">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          
          <ContactForm />
        </div>
      </div>
    </div>
  );
}