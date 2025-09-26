import React from 'react';

const DrivenByIndependence = () => (
  <section className="py-4 lg:py-32 px-4 text-white bg-transparent">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
      <div className="lg:w-1/2 text-left ">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Driven by Independence. <span className="text-purple-500">Fueled by Execution</span>.
        </h2>
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
           We like to think creatively; we're not just another corporate clone. Being self-sufficient allows us to think creatively and focus only on the essentials of your project, without any unnecessary delusion.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
          We do it all, from beginning to end. That way, we can maintain our quality, meet our deadlines, and present the results in a way that is easy to understand and of use.

          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center  lg:justify-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
          <img
            src="/image/Driven by Independence. Fueled by Execution.webp"
            alt="Hands Stacked"
            className="rounded-2xl relative shadow-lg object-cover w-full max-w-sm lg:max-w-md"
            style={{ maxHeight: '573px' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/516x573/000000/FFFFFF?text=Image+Error";
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default DrivenByIndependence;