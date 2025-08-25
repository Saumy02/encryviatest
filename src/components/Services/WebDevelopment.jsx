import React from 'react';

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.8-2.2 2-3.4a10 10 0 0 0-2.3-2.6C16.4 5.3 15 4 11 4 7 4 5.6 5.3 4.5 6.5A10 10 0 0 0 2 9.4c.2 1.2 1 2.5 2 3.4.8.8 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M11 17v5"></path>
  </svg>
);

const LayoutGridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <rect x="16" y="2" width="6" height="6" rx="1"></rect>
    <rect x="2" y="16" width="6" height="6" rx="1"></rect>
    <path d="M16 8v3a1 1 0 0 0 1 1h3"></path>
    <path d="M8 16h3a1 1 0 0 1 1 1v3"></path>
    <path d="M12 12v.01"></path>
    <path d="M22 16c0 1.1-9 6-9 6s-9-4.9-9-6V8c0-1.1 9-6 9-6s9 4.9 9 6Z"></path>
  </svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <path d="m12.83 2.18-.3.9a4.37 4.37 0 0 0-4.65 6.36l.51.53c.8-.08 1.45-.63 1.6-1.4.3-.9-1.2-2.13-2.1-3-.8.74-1.3 1.68-1.64 2.76-.52 1.57-.96 4.41-.96 7.07 0 4.07.82 5.67 3.02 6.78.38.19.78.33 1.18.45"></path>
    <path d="M12.83 2.18c-.85-.43-1.65-.67-2.33-.67-2.73 0-5.71 1.76-7.38 5.76C1.45 10.74 1.45 15.2 5.16 20.25c.38.52.82 1.0 1.29 1.44"></path>
    <path d="m21.5 7.12-3.87-3.87a2 2 0 0 0-2.83 0L12.5 9.5l4.66 4.66 4.34-4.34a2 2 0 0 0 0-2.83Z"></path>
  </svg>
);

function WebDevelopment() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-indigo-900">
      <section className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-80px)]">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-indigo-500">"</span> Our <span className='text-indigo-500'> Web Development</span>  that works as hard as you do — secure, scalable, and built for growth from day one. <span className="text-indigo-500">"</span>
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow border-t border-gray-600"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mx-4 text-blue-400">Web Development Service</h2>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Image 1 */}
          <div className="w-full flex justify-center mb-16">
            <div className="bg-gray-800 rounded-3xl p-6 shadow-xl w-full max-w-4xl h-96 flex items-center justify-center text-gray-400 text-lg overflow-hidden">
              <img
                src="https://placehold.co/1000x500/555555/EEEEEE?text=Web+Development+Service+Image"
                alt="Web Development Service"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Extraordinary digital products */}
<section className="py-16">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-left mb-6">
      Extraordinary digital products
    </h3>
    <p className="text-lg sm:text-xl leading-relaxed text-gray-300 max-w-4xl mb-12">
      We play to our strengths: For over years we've been ideating, creating and
      shipping wonderful things on the internet.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
        <div className="flex items-center gap-3">
          <LightbulbIcon className="w-6 h-6 text-indigo-400" />
          <h4 className="text-2xl font-bold">Vision‑driven</h4>
        </div>
        <p className="text-gray-300 text-lg mt-3">
          Great Technology, Designed to Grow — We build digital solutions that grow businesses.
          Every plan, line of code, and campaign is tailored to help you simplify, secure, and scale.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
        <div className="flex items-center gap-3">
          <LayoutGridIcon className="w-6 h-6 text-indigo-400" />
          <h4 className="text-2xl font-bold">Problem‑solving Focus</h4>
        </div>
        <p className="text-gray-300 text-lg mt-3">
          Solving Real Business Problems — Technology should solve, not cause problems.
          That’s why we offer robust security, transparent solutions, and campaigns that deliver results.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
        <div className="flex items-center gap-3">
          <NetworkIcon className="w-6 h-6 text-indigo-400" />
          <h4 className="text-2xl font-bold">Human + Data</h4>
        </div>
        <p className="text-gray-300 text-lg mt-3">
          Where Data and Human Insight Converge — From cybersecurity audits to ROI-focused marketing,
          we blend data with creativity to build solutions that work better for your business.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
        <div className="flex items-center gap-3">
          <LayersIcon className="w-6 h-6 text-indigo-400" />
          <h4 className="text-2xl font-bold">Your Growth Partner</h4>
        </div>
        <p className="text-gray-300 text-lg mt-3">
          Not just an agency — EncryVia acts as an extension of your team.
          We build, protect, and grow with transparency, speed, and your success in mind.
        </p>
      </div>
    </div>
  </div>
</section>



          {/* Section: Tailored Websites */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center mb-6 mt-10">
             Custom Websites That Do More for Your Business
          </h3>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-24">
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="bg-gray-800 rounded-[140px] p-6 shadow-xl w-full max-w-[365px] h-[568px] flex items-center justify-center overflow-hidden">
                <img
                  src="https://placehold.co/365x568/555555/EEEEEE?text=Laptop+User"
                  alt="Laptop User"
                  className="w-full h-full object-cover rounded-[130px] transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            </div>
            <div className="flex-1 w-full mt-16">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-6">
                We don't just throw up websites to look pretty—we build digital workhorses. Each website is handcrafted to highlight your brand, guide your users around, and deliver actual results.
From mobile responsiveness to high-conversion design, we transform your site into an asset, not an address.
              </p>
              <h4 className="text-xl font-bold text-white mb-3">What we deliver:</h4>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
  <li>Personalized UI/UX tailored to fit your brand and objectives</li>
  <li>Mobile-first responsive design</li>
  <li>SEO-friendly organization with clean, scalable code</li>
  <li>Built on WordPress, Shopify, or custom stacks as needed</li>
</ul>

            </div>
          </div>

          {/* Section: Built with Security */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight r mb-6">
           Built with security, performance, and scalability in its design
          </h3>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-24">
            <div className="flex-1 w-full mt-16">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-6">
               Websites today have to face real-world pressures—from performance expectations to security threats. We code with purpose and attention, using the best tech stack to get your site to load fast, stay secure, and grow with your business.
              </p>
              <h4 className="text-xl font-bold text-white mb-3">How we do it:</h4>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
  <li>Enterprise-grade security features (SSL, firewalls, input validation)</li>
  <li>Front-end and back-end optimization for quick and stable speeds</li>
  <li>Cloud-enabled configurations and API-first integrations</li>
  <li>Periodic maintenance and technical support plans</li>
</ul>

            </div>
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="bg-gray-800 rounded-[140px] p-6 shadow-xl w-full max-w-[365px] h-[568px] flex items-center justify-center overflow-hidden">
                <img
                  src="https://placehold.co/365x568/555555/EEEEEE?text=Code+Security"
                  alt="Code Security"
                  className="w-full h-full object-cover rounded-[130px] transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Section: Smarter Process */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight  mb-6">
            A Smarter Development Process That Keeps You In the Loop
          </h3>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="bg-gray-800 rounded-[140px] p-6 shadow-xl w-full max-w-[365px] h-[568px] flex items-center justify-center overflow-hidden">
                <img
                  src="https://placehold.co/365x568/555555/EEEEEE?text=Development+Process"
                  alt="Development Process"
                  className="w-full h-full object-cover rounded-[130px] transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            </div>
            <div className="flex-1 w-full mt-16">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-6">
                It's all simple, no gimmicks. We keep our development process straightforward and simple, with check-ins along the way so you're in control at every step. From the beginning through to after going live, you're part of everything—and we're accountable for every click, line, and deadline.
              </p>
              <h4 className="text-xl font-bold text-white mb-3">What to expect:</h4>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
  <li>Weekly progress reports and collaborative dashboards</li>
  <li>Transparent timelines, not vague deliverables</li>
  <li>CMS training for your staff</li>
  <li>Post-launch support, patches, and optimization routes</li>
</ul>

            </div>
          </div>
        </div>
      </section>

      {/* New Section: Superb digital offerings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center mb-8 ">
            Superb digital offerings
          </h3>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-10 text-center">
            We play to our strengths: For over years we've been ideating, creating and shipping wonderful things on the internet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
              <h4 className="text-2xl font-bold mb-2">Idea to Implementation</h4>
              <p className="text-gray-300 text-lg">
                An entire product designed in-house, from initial strategy to end product. That is, everything we do is designed with a purpose, built to the best standards.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
              <h4 className="text-2xl font-bold mb-2">Full Stack</h4>
              <p className="text-gray-300 text-lg">
                We have experts and generalists all under one roof, from UI development to interaction design, CMS installation and technical development.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
              <h4 className="text-2xl font-bold mb-2">Technology Neutral</h4>
              <p className="text-gray-300 text-lg">
                The greatest tech is the tech that does the job, in fact. We're always listening and observing, so we can recommend the perfect solution to your business problem.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
              <h4 className="text-2xl font-bold mb-2">Integrated</h4>
              <p className="text-gray-300 text-lg">
                We place your site at the center of your online universe, with safe API connections and automated processes in your business infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;
