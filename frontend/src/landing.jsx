import React from 'react';

const Landing = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/growbuddyhome.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          DO YOU WANT TO GROW A PLANT?
        </h1>
        <button className="mt-4 px-6 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white rounded-xl text-lg shadow-lg transition-all duration-300">
          TELL US WHERE
        </button>
      </div>
    </div>
  );
};

export default Landing;