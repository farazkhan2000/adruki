import React from 'react';
import { Code, Video, Briefcase, Phone, Settings, Globe } from 'lucide-react'; // Import icons from Lucide

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building modern and responsive websites.',
    icon: <Code className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
  },
  {
    id: 2,
    title: 'Video Production',
    description: 'Creating high-quality video content.',
    icon: <Video className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
  },
  {
    id: 3,
    title: 'Consulting',
    description: 'Professional business consulting services.',
    icon: <Briefcase className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
  },
  {
    id: 4,
    title: 'Support',
    description: '24/7 customer support for your needs.',
    icon: <Phone className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
  },
  {
    id: 5,
    title: 'Maintenance',
    description: 'Regular updates and maintenance services.',
    icon: <Settings className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
  },
  {
    id: 6,
    title: 'SEO Optimization',
    description: 'Improving your website’s search engine ranking.',
    icon: <Globe className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
  },
  {
    id: 7,
    title: 'Maintenance',
    description: 'Regular updates and maintenance services.',
    icon: <Settings className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
  },
  {
    id: 8,
    title: 'SEO Optimization',
    description: 'Improving your website’s search engine ranking.',
    icon: <Globe className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
  },
];

const ServicesCard = ({ service }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {service.icon}
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {service.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {service.description}
      </p>
    </div>
  );
};

export const ServicesCards = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
