import React from 'react';
import { Minus } from 'lucide-react';
import ServicesCards from './common/ServicesCard';

const Services = () => {
  return (
    <section className="min-h-[100vh] bg-white py-20 lg:py-32 flex justify-center items-center" >
      <div className="container" >

        <div className="flex items-center gap-3" >
          <Minus color="#FF0000" size={36} /> 
          <span className="font-ClashGrotesk text-2xl font-semibold" >
            Our Services
          </span>
        </div>
        
        <div className="flex items-end justify-between gap-48 mt-4" >
          <h2 className="font-ClashGrotesk text-6xl font-bold " >
            Discover Our <span className="text-primary" >Digital Solutions</span>
          </h2>
          <p className="border-l-4 border-primary pl-4 mb-0 py-1 text-black hidden lg:block" >
            At <span className="text-primary" >Adruki</span>, we specialize in delivering innovative, high-quality digital solutions tailored to your unique business needs, ensuring your brand thrives in the digital landscape.
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
