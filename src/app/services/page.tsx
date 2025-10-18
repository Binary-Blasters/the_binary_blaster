import ServiceCard from '@/components/ServiceCard';
import { services } from '@/constants/data';

export default function Services() {
  return (
    <div className="min-h-screen flex items-center px-4 py-20 pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-5xl font-bold mb-12 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
