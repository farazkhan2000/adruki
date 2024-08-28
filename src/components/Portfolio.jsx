"use client";
import { Minus } from "lucide-react";
import React, { useState } from "react";

// Define technologies as plain text or use icons if you have them
const technologies = [
  "React",
  "Node.js",
  "Tailwind CSS",
  "Firebase",
];

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-background">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Minus color="#EF3733" size={36} />
          <span className="font-ClashGrotesk text-2xl font-semibold text-white">
            Our Recent Projects
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <h2 className="font-ClashGrotesk text-6xl font-bold text-white leading-tight">
            Discover Our{" "}
            <span className="text-primary">Digital Solutions</span>
          </h2>
          <p className="border-l-4 border-primary pl-4 text-gray text-lg leading-relaxed">
            At <span className="text-primary">Adruki</span>, we specialize in
            delivering innovative, high-quality digital solutions tailored to
            your unique business needs, ensuring your brand thrives in the
            digital landscape.
          </p>
        </div>

        <div className="flex justify-start lg:justify-center flex-wrap gap-3 mb-12 space-x-4">
          {["all", "branding", "design", "marketing"].map((category) => (
            <button
              key={category}
              onClick={() => handleProject(category)}
              className={`rounded-full py-3 px-8 text-base font-semibold transition ${
                showCard === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-background hover:bg-primary hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap -mx-4">
          <PortfolioCard
            ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
            category="branding"
            title="Creative Agency"
            description="A branding project focused on creating a unique brand identity."
            technologies={["React", "Tailwind CSS"]}
            buttonHref="#"
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
            category="marketing"
            title="Marketing Strategy"
            description="An integrated marketing strategy to boost online presence."
            technologies={["Node.js", "Firebase"]}
            buttonHref="#"
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
            category="marketing"
            title="Social Media Campaign"
            description="A social media campaign designed to increase engagement."
            technologies={["React", "Tailwind CSS", "Firebase"]}
            buttonHref="#"
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
            category="development"
            title="E-Commerce Platform"
            description="A robust e-commerce platform with advanced features."
            technologies={["React", "Node.js", "Tailwind CSS"]}
            buttonHref="#"
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
            category="design"
            title="Website Redesign"
            description="A modern redesign for a better user experience."
            technologies={["Tailwind CSS"]}
            buttonHref="#"
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
            category="marketing"
            title="SEO Optimization"
            description="A comprehensive SEO optimization for higher search rankings."
            technologies={["React", "Node.js"]}
            buttonHref="#"
          />
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({
  ImageHref,
  category,
  title,
  description,
  technologies,
  buttonHref,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4 mb-12">
      <div className="bg-primary rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
        <img
          src={ImageHref}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <span className="font-ClashGrotesk text-white text-sm font-medium">{category}</span>
          <h3 className="font-ClashGrotesk text-2xl font-bold text-white mt-2">{title}</h3>
          <p className="font-ClashGrotesk text-gray mt-4 mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="text-gray text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={buttonHref}
            className="font-ClashGrotesk block text-center rounded-full bg-white text-black py-3 font-bold transition hover:bg-white hover:text-primary"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
