import React from 'react';

const processes = [
  {
    id: 1,
    processNum: '01',
    title: 'Discovery',
    description: 'We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.',
  },
  {
    id: 2,
    processNum: '02',
    title: 'Planning and Strategy',
    description: 'Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.',
  },
  {
    id: 3,
    processNum: '03',
    title: 'Design',
    description: 'Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.',
  },
  {
    id: 4,
    processNum: '04',
    title: 'Development',
    description: 'Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.',
  },
  {
    id: 5,
    processNum: '05',
    title: 'Testing and Quality Assurance',
    description: 'We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.',
  },
  {
    id: 6,
    processNum: '06',
    title: 'Deployment and Launch',
    description: 'When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.',
  },
  {
    id: 7,
    processNum: '07',
    title: 'Post-Launch Support',
    description: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
  },
  {
    id: 8,
    processNum: '08',
    title: 'Continuous Improvement',
    description: 'We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.',
  },
];

const PrrocessCard = () => {
  return (
    <div className="flex flex-wrap ">
      {processes.map((process) => (
        <div key={process.id} className="w-full md:w-1/2 p-10">
          <div className="flex justify-start items-end gap-4 lg:gap-10">
            <h2 className="font-ClashGrotesk text-8xl lg:text-9xl text-primary ">{process.processNum}</h2>
            <h5 className="font-ClashGrotesk text-secondaryText font-bold border-b border-secondaryText text-xl lg:text-4xl pb-6 mb-4 w-full">
              {process.title}
            </h5>
          </div>
          <p className="text-secondaryText mt-5">{process.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PrrocessCard;
