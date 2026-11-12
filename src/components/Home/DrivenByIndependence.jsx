import React from 'react';

const DrivenByIndependence = () => (
  <section className="py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 text-white bg-transparent">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
          Driven by Independence. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">Fueled by Execution</span>.
        </h2>
        <div className="space-y-4 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed text-center lg:text-left">
          <p>
            We like to think creatively; we're not just another corporate clone. Being self-sufficient allows us to think creatively and focus only on the essentials of your project, without any unnecessary delusion.
          </p>
          <p>
            We do it all, from beginning to end. That way, we can maintain our quality, meet our deadlines, and present the results in a way that is easy to understand and of use.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center w-full">
        <div className="relative group w-full max-w-lg flex items-center justify-center">
          {/* Ambient Purple Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>
          <img
            src="/image/Driven by Independence. Fueled by Execution.webp"
            alt="Hands Stacked - Driven by Independence"
            className="rounded-3xl relative shadow-2xl object-cover border border-white/10 w-full max-h-[270px] sm:max-h-[320px] lg:max-h-[350px] aspect-[16/10] sm:aspect-[4/3]"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/516x450/000000/FFFFFF?text=Driven+By+Independence";
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default DrivenByIndependence;