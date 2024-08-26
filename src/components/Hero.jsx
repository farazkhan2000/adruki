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
      <div className="max-w-2xl" >
        <div className="mx-auto bg-transparent text-white text-sm text-center" >
          <span className="px-3 py-2 border border-secondaryText-100 text-secondaryText rounded-full" >Shaping the Future of Design ⚡</span>
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-ClashGrotesk font-bold text-center text-white leading-relaxed lg:leading-none  mt-5" >
          Transforming Your Vision Into <span className="text-primary" >Innovating Designs</span>
        </h1>
        <p className="text-secondaryText text-md text-center mt-5" >
          Passionate Product Designer | Crafting Solutions That Delight and Inspire | Over a Decade of Experience in Design Excellence
        </p>
        <div className="flex items-center justify-center gap-2 mt-5">
          <Button color="white" variant="bordered" className="font-semibold rounded-full text-white px-6" >
            Get in Touch 
            <ArrowUpRight size={21} />
          </Button> 
          <Button color="primary" variant="solid" className="font-semibold rounded-full text-white px-6" >
            View Work
            <ArrowUpRight size={21} />
          </Button> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
