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
    <>
      <Hero />
      <HighlightBanner slides={slides} />
      <DrivenByIndependence />
      <WhyTrustUsSection />
      {/* Our Services Section */}
      <section className="py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative flex items-center justify-center mb-12">
            <div className="flex-grow border-t border-white opacity-20"></div>
            <h2 className="mx-4 text-4xl font-bold text-center">Our <span className="text-indigo-500"> Services</span></h2>
            <div className="flex-grow border-t border-white opacity-20"></div>
          </div>
          {services.map((service, index, hook) => (
  <SingleServiceHighlight
    key={index}
    title={service.title}
    hook={service.hook}
    description={service.description}
    cta={service.cta}
    imageUrl={service.imageUrl}
    imageOnRight={index % 2 === 0}
  />
))}
        </div>
      </section>
      {/* Client Reviews Carousel */}
      <AutoSwappingClientReview reviews={testimonials} />
      {/* CTA & Newsletter */}
      <ConnectNow />
      <NewsletterSubscribe />
    </>
  );
};

export default Home;
