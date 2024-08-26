import React from 'react';
import { Minus } from 'lucide-react';
import PrrocessCard from './common/PrrocessCard';

const Process = () => {
  return (
    <section className="min-h-[100vh] bg-[#191919] flex justify-center items-center py-32" >
      <div className="container">

        <div className="flex items-center justify-center gap-3" >
          <Minus color="#FF0000" size={36} /> 
          <span className="font-ClashGrotesk text-2xl font-bold text-white" >
            Our Work Process
          </span>
        </div>

        <div>

          <div className="mt-10" >
            <h2 className="text-2xl text-secondaryText" >
              At <span className="font-ClashGrotesk ms-2 text-primary text-4xl  font-bold" > Adruki</span>
            </h2>
            <p className="text-secondaryText max-w-6xl text-ms mt-4" >
              We follow a structured and collaborative process to ensure the successfull delivery of exceptional digital products. Our process combines
              industry best practices, creative thinking, and a client-centric approach.
            </p>
            <p className="w-fit py-2 px-4 rounded-lg bg-slate-800 text-white mt-10" >
              Here's an overview of out typical process:
            </p>
          </div>

          <div className="border border-dark-secondaryText flex items-center justify-between mt-20">
            
            <div className="">
              <PrrocessCard />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Process;
