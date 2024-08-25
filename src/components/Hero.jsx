import React from 'react';
import heroBackground from '../../public/heroBackground.svg'; 
import { ArrowUpRight } from 'lucide-react';
import { Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const Hero = () => {
  return (
    <section
      className="min-h-[80vh] py-32 bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${heroBackground.src})` }} 
    >
      <div className="max-w-3xl" >
        <div className="mx-auto bg-transparent text-white text-sm text-center" >
          <span className="px-3 py-2 border border-gray-100 rounded-full" >Shaping the Future of Design ⚡</span>
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-white leading-relaxed lg:leading-none  mt-5" >
          Transforming Your Vision Into <span className="text-light-secondary" >Innovating Designs</span>
        </h1>
        <p className="font-urbanist text-light-text text-lg text-center mt-5 " >
          Passionate Product Designer | Crafting Solutions That Delight and Inspire | Over a Decade of Experience in Design Excellence
        </p>
        <div className="flex items-center justify-center gap-2 mt-5">
          <Button color="secondary" variant="solid" className="rounded-full text-light-background px-6" >
            Get in Touch 
            <ArrowUpRight size={21} />
          </Button> 
          <Button color="primary" variant="flat" className="rounded-full text-light-background px-6" >
            View Work
            <ArrowUpRight size={21} />
          </Button> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
