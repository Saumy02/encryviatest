import React from 'react';
const WhyTrustUsSection = () => (
  <section className="py-16 lg:py-10 px-6 text-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 lg:mb-16">Why Should You  <span className='text-indigo-400'> Trust Us </span>?</h2>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="md:w-1/2 flex justify-center md:justify-start items-center">
        <img
          src="/image/Why Should You Trust Us.webp"
          alt="Fists Bumping"
          className="rounded-2xl shadow-lg object-cover 
                     w-[300px] h-[340px]   
                     sm:w-[350px] sm:h-[420px] 
                     md:w-[400px] md:h-[450px] 
                     lg:w-[450px] lg:h-[480px]" 
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/516x766/0A0A0A/FFFFFF?text=Image+Error";
          }}
        />
      </div>
        <div className="md:w-1/2 text-left px-4">
  <ul className="list-none space-y-4 mb-8 text-justify">
    <li className="flex items-start">
      <span>
        🛡 We’re a young, agile digital team helping businesses navigate the modern web — with secure platforms, creative marketing, and data-driven strategies that fit real-world budgets and timelines.
      </span>
    </li>
    <li className="flex items-start">
      <span>
       ✅ Built by a passionate in‑house team of developers, data analysts, and cybersecurity specialists — because we believe real impact starts when everything is crafted under one roof.
      </span>
    </li>
    <li className="flex items-start">
      <span>
      🧠 Fresh energy, proven skill: as a startup ourselves, we blend hustle and creativity with experience across SaaS, eCommerce, and enterprise-grade projects.
      </span>
    </li>
    <li className="flex items-start">
      <span>
      📊 Growth-first mindset: from SEO strategies and paid ads to secure, scalable digital products — everything we build is designed to deliver real, trackable results.
      </span>
    </li>
  </ul>
  <p className="text-lg leading-relaxed text-justify">
    Whether you’re launching your first platform, scaling up, or chasing your next big milestone — EncryVia delivers digital solutions built by a startup, for startups.
  </p>
</div>

      </div>
    </div>
  </section>
);

export default WhyTrustUsSection;

