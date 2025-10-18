import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Binary Blasters | Web & Mobile Development',
  description: 'Transform your ideas into stunning digital solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
