import React from 'react';
import { Minus } from 'lucide-react';
import ServicesCards from './common/ServicesCard';

const Services = () => {
  return (
    <section className="min-h-[100vh] py-32 flex justify-center items-center" >
      <div className="container" >

        <div className="flex items-center gap-3" >
          <Minus color="#FF0000" size={36} /> 
          <span className="text-2xl font-bold" >
            Our Services
          </span>
        </div>
        
        <div className="flex items-end justify-between mt-4" >
          <h2 className="text-6xl font-bold " >
            Discover Our Digital Solutions
          </h2>
          <p className="border-l-4 border-[#FF0000] pl-4 mb-0 py-2 rounde-l-lg" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius explicabo animi, nihil dignissimos sequi quos a autem itaque amet?
          </p>
        </div>

        <div className="mt-20" >
          <ServicesCards />
        </div>

      </div>
    </section>
  )
}

export default Services;
