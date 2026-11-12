import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import SEO from '../components/SEO';

// Lazy-loaded components with error handling
const Hero = lazy(() => 
  import('../components/Home/Hero').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load Hero component</div>
  }))
);

const ServicesMarquee = lazy(() => 
  import('../components/Home/ServicesMarquee').catch(() => ({
    default: () => <div className="text-white text-center py-4">Failed to load ServicesMarquee</div>
  }))
);


const HighlightBanner = lazy(() => 
  import('../components/Home/HighlightBanner').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load HighlightBanner</div>
  }))
);

const DrivenByIndependence = lazy(() => 
  import('../components/Home/DrivenByIndependence').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load DrivenByIndependence</div>
  }))
);

const WhyTrustUsSection = lazy(() => 
  import('../components/Home/WhyTrustUsSection').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load WhyTrustUsSection</div>
  }))
);

const SingleServiceHighlight = lazy(() => 
  import('../components/Home/SingleServiceHighlight').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load SingleServiceHighlight</div>
  }))
);

const PricingSection = lazy(() => 
  import('../components/Home/PricingSection').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load PricingSection</div>
  }))
);

const AutoSwappingClientReview = lazy(() => 
  import('../components/Home/AutoSwappingClientReview').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load AutoSwappingClientReview</div>
  }))
);

const ConnectNow = lazy(() => 
  import('../components/Home/ConnectNow').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load ConnectNow</div>
  }))
);

const NewsletterSubscribe = lazy(() => 
  import('../components/Home/NewsletterSubscribe').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load NewsletterSubscribe</div>
  }))
);

// Import JSON data
import testimonials from '../data/testimonials.json';
import services from '../components/Home/services.json';
import slides from '../components/Home/slides.json';

// Loader fallback
const Loader = ({ height = "50vh" }) => (
  <div className={`min-h-[${height}] flex items-center justify-center`}>
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-400 text-lg">Loading...</p>
    </div>
  </div>
);

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="text-center p-8 bg-red-900/20 rounded-lg border border-red-500/30 max-w-md">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
      <p className="text-gray-300 mb-6 text-sm">{error?.message || 'An error occurred'}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
      >
        Try again
      </button>
    </div>
  </div>
);

const AnimatedSection = React.memo(({ children, className = "", delay = 0 }) => {
  return (
    <section className={className}>
      <Suspense fallback={<div className="min-h-[300px]"></div>}>
        {children}
      </Suspense>
    </section>
  );
});

const Home = () => {
  return (
    <>
      <SEO 
        title="EncryVia | Web Development, Security & SEO Services in India"
        description="3-in-1 digital solutions: web development, cybersecurity & AI-driven marketing in India. Fast websites, secure systems, higher rankings. Packages from ₹25K."
        keywords="web development India, cybersecurity services, SEO services India, digital solutions provider, AI-driven marketing, custom website development, integrated IT services"
        ogUrl="https://encryvia.com"
      />

      <div className="min-h-screen bg-transparent overflow-x-clip">
        {/* 1. Hero Section */}
        <AnimatedSection className="pt-0 pb-4 sm:pb-6 lg:pb-8 flex items-center justify-center">
          <Suspense fallback={<Loader />}>
            <Hero />
          </Suspense>
        </AnimatedSection>

        {/* 2. Moving Ticker Marquee Stripe */}
        <div className="relative z-30 my-6 sm:my-8">
          <Suspense fallback={<div className="py-4"></div>}>
            <ServicesMarquee />
          </Suspense>
        </div>

        {/* 4. Highlight Banner */}
        <AnimatedSection className="relative py-4 lg:py-6" delay={0.2}>
          <div className="relative z-10">
            <HighlightBanner slides={slides} />
          </div>
        </AnimatedSection>

        {/* 5. Driven by Independence */}
        <AnimatedSection className="relative pt-4 sm:pt-6 lg:pt-8 pb-3 sm:pb-4 lg:pb-6" delay={0.3}>
          <div className="relative z-10">
            <DrivenByIndependence />
          </div>
        </AnimatedSection>

        {/* 5.5. Why Should You Trust Us */}
        <AnimatedSection className="relative pt-6 sm:pt-8 lg:pt-12 pb-3 sm:pb-4 lg:pb-6" delay={0.4}>
          <div className="relative z-10">
            <WhyTrustUsSection />
          </div>
        </AnimatedSection>

        {/* 6. Our Services Highlight */}
        <AnimatedSection className="relative pt-6 sm:pt-8 lg:pt-12 pb-8 lg:pb-12" delay={0.5}>
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 sm:mb-14">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 font-extrabold">Services</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mt-4 mx-auto leading-relaxed">
                  Comprehensive digital solutions designed to elevate your business presence and drive measurable results
                </p>
              </div>

              <div className="space-y-10 sm:space-y-16">
                {Array.isArray(services) && services.length > 0 ? (
                  services.map((service, index) => (
                    <div key={`service-${index}`} className="relative">
                      <div className="relative z-10">
                        <SingleServiceHighlight
                          title={service.title}
                          highlightWord={service.highlightWord}
                          middleWord={service.middleWord}
                          highlightWord2={service.highlightWord2}
                          titleRest={service.titleRest}
                          hook={service.hook}
                          description={service.description}
                          listTitle={service.listTitle}
                          items={service.items}
                          ctaText={service.ctaText}
                          imageUrl={service.imageUrl}
                          imageAlt={service.imageAlt}
                          link={service.link}
                          imageOnRight={index % 2 === 0}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 text-gray-400">
                    <p>No services data available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 7. Plans & Pricing Section */}
        <AnimatedSection className="relative py-4 lg:py-6" delay={0.6}>
          <div className="relative z-10">
            <PricingSection />
          </div>
        </AnimatedSection>

        {/* 8. Redesigned Client Reviews (Testimonials) */}
        <AnimatedSection className="relative py-4 lg:py-6" delay={0.65}>
          <div className="relative z-10">
            <AutoSwappingClientReview testimonials={testimonials} />
          </div>
        </AnimatedSection>

        {/* 9. Connect Now */}
        <AnimatedSection className="relative py-4 lg:py-6" delay={0.8}>
          <div className="relative z-10">
            <ConnectNow />
          </div>
        </AnimatedSection>

        {/* 10. Newsletter */}
        <AnimatedSection className="relative py-4 lg:py-6" delay={0.85}>
          <div className="relative z-10">
            <NewsletterSubscribe />
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default React.memo(function SmoothScrollHome() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Home />
    </ErrorBoundary>
  );
});
