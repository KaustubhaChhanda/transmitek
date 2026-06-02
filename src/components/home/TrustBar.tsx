import React from 'react';
import { companyStats } from '../../data/company';
import { StatCard } from '../ui/StatCard';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-brand-dark-2 py-10 border-b border-brand-border-dark relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {companyStats.map((stat, idx) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
