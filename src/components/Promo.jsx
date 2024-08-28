import React from 'react';

const Promo = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="https://ik.imagekit.io/ikmedia/example_video.mp4"
          autoPlay
          loop
          muted
          controls
          style={{ width: '100%', height: 'auto' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-white" style={{ height: '50%' }}></div>
      <div className="absolute inset-0 bg-background" style={{ top: '50%', height: '50%' }}></div>
    </section>
  );
};

export default Promo;
