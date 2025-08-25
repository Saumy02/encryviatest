import React from 'react';
import Hero from '../components/Home/Hero';
import HighlightBanner from '../components/Home/HighlightBanner';
import DrivenByIndependence from '../components/Home/DrivenByIndependence';
import WhyTrustUsSection from '../components/Home/WhyTrustUsSection';
import SingleServiceHighlight from '../components/Home/SingleServiceHighlight';
import AutoSwappingClientReview from '../components/Home/AutoSwappingClientReview';
import ConnectNow from '../components/Home/ConnectNow';
import NewsletterSubscribe from '../components/Home/NewsletterSubscribe';
import testimonials from '../data/testimonials.json';
import services from '../components/Home/services.json';
import slides from '../components/Home/slides.json';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Highlight Banner Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10">
          <HighlightBanner slides={slides} />
        </div>
      </section>

      {/* Driven by Independence Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/10 to-transparent"></div>
        <div className="relative z-10">
          <DrivenByIndependence />
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"></div>
        <div className="relative z-10">
          <WhyTrustUsSection />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16 lg:mb-24">
              <div className="inline-flex items-center justify-center mb-8">
                <div className="flex-grow border-t-2 border-indigo-500/30 max-w-xs"></div>
                <h2 className="mx-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Services</span>
                </h2>
                <div className="flex-grow border-t-2 border-indigo-500/30 max-w-xs"></div>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions designed to elevate your business presence and drive measurable results
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-24 lg:space-y-32">
              {services.map((service, index) => (
                <div key={index} className="relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-3xl transform -skew-y-1"></div>
                  <div className="relative z-10">
                    <SingleServiceHighlight
                      title={service.title}
                      hook={service.hook}
                      description={service.description}
                      cta={service.cta}
                      imageUrl={service.imageUrl}
                      imageOnRight={index % 2 === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/10 to-transparent"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Clients Say</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real feedback from businesses we've helped transform and grow
              </p>
            </div>
          </div>
          <AutoSwappingClientReview reviews={testimonials} />
        </div>
      </section>

      {/* Connect Now Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent"></div>
        <div className="relative z-10">
          <ConnectNow />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        <div className="relative z-10">
          <NewsletterSubscribe />
        </div>
      </section>
    </div>
  );
};

export default Home;
