'use client';

import { Heart, Users, Shield, Clock } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Compassionate Care', description: 'We treat every family with dignity and respect' },
  { icon: Users, title: 'Expert Staff', description: 'Trained professionals with years of experience' },
  { icon: Shield, title: 'Secure & Private', description: 'Your information is always protected' },
  { icon: Clock, title: '24/7 Support', description: 'Available whenever you need us' },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <Icon className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
            <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}