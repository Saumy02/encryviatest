import React from 'react';

const DrivenByIndependence = () => (
  <section className="py-20 px-4 text-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
      <div className="md:w-1/2 text-left">
        <h2 className=" text-5xl font-extrabold mb-6 leading-tight">
          Driven by Independence. Fueled by <span className="text-purple-500 underline">Execution</span>.
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          We're not your typical corporate machine; we like to think outside the box. Being independent allows us to be creative and focused on what your project truly needs, without any unnecessary fluff.         </p>
        <p className="text-lg leading-relaxed">
          From the initial discussions to the final rollout, we handle everything ourselves. This approach helps us maintain high quality, stick to deadlines, and ensure that the results are clear and impactful.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-start items-start">
        <img
          src="https://placehold.co/516x573/000000/FFFFFF?text=Hands+Stacked"
          alt="Hands Stacked"
          className="rounded-2xl shadow-lg w-full max-w-sm h-auto object-cover"
          style={{ width: '516px', height: '573px' }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/516x573/000000/FFFFFF?text=Image+Error";
          }}
        />
      </div>
    </div>
  </section>
);

export default DrivenByIndependence;