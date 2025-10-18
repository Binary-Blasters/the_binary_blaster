import { Service } from '@/types';
import * as Icons from 'lucide-react';

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className: string }>;

  return (
    <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-8 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/20 transition-all group">
      <div className="text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors">
        {IconComponent && <IconComponent className="w-12 h-12" />}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-300">{service.description}</p>
    </div>
  );
}