import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import SEO from '../components/SEO';

// Lazy-loaded components with error handling
const Hero = lazy(() => 
  import('../components/Home/Hero').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load Hero component</div>
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
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
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
    <section
      className={className}
      style={{ contentVisibility: 'auto', containIntrinsicSize: delay > 0.6 ? '700px' : '900px' }}
    >
      <Suspense fallback={<div className="min-h-[300px]"></div>}>
        {children}
      </Suspense>
    </section>
  );
});

const Home = () => {
  return (
     <>
      {/* Add SEO component here */}
      <SEO 
        title="EncryVia | Web Development, Security & SEO Services in India"
        description="3-in-1 digital solutions: web development, cybersecurity & AI-driven marketing in India. Fast websites, secure systems, higher rankings. Packages from ₹25K."
        keywords="web development India, cybersecurity services, SEO services India, digital solutions provider, AI-driven marketing, custom website development, integrated IT services"
        ogUrl="https://encryvia.com"
      />

    <div className="min-h-screen bg-transparent overflow-x-hidden">
      {/* Hero Section */}
      <AnimatedSection className="min-h-screen flex items-center justify-center">
        <Suspense fallback={<Loader />}>
          <Hero />
        </Suspense>
      </AnimatedSection>

      {/* Highlight Banner */}
      <AnimatedSection className="relative py-8 lg:py-8" delay={0.2}>
        <div className="relative z-10">
          <HighlightBanner slides={slides} />
        </div>
      </AnimatedSection>

      {/* Driven by Independence */}
      <AnimatedSection className="relative" delay={0.3}>
        <div className="relative z-10">
          <DrivenByIndependence />
        </div>
      </AnimatedSection>

      {/* Why Trust Us */}
      <AnimatedSection className="relative" delay={0.4}>
        <div className="relative z-10">
          <WhyTrustUsSection />
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="relative" delay={0.5}>
        <div className="relative z-10 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4 lg:mb-2">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Services</span>
              </h2>
              <p className="text-lg lg:text-2xl text-gray-300 max-w-4xl mt-4 mx-auto leading-relaxed">
                Comprehensive digital solutions designed to elevate your business presence and drive measurable results
              </p>
            </div>

            <div className="space-y-12 lg:space-y-6">
              {Array.isArray(services) && services.length > 0 ? (
                services.map((service, index) => (
                  <div
                    key={`service-${index}`}
                    className="relative"
                  >
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

       {/* Client Reviews */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.7}>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Clients Say</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real feedback from businesses we've helped transform and grow
              </p>
            </div>

            <div>
              {/* Passing testimonials to AutoSwappingClientReview */}
              <AutoSwappingClientReview testimonials={testimonials} />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Connect Now */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.7}>
        <div className="relative z-10">
          <ConnectNow />
        </div>
      </AnimatedSection>

      {/* Newsletter */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.8}>
        <div className="relative z-10">
          <NewsletterSubscribe />
        </div>
      </AnimatedSection>
    </div>
     </>
  );
};

// Final export with SmoothScroll wrapper
// export default React.memo(function SmoothScrollHome() {
//   return (
//     <SmoothScroll>
//       <Home />
//     </SmoothScroll>
//   );
// });

export default React.memo(function SmoothScrollHome() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Home />
    </ErrorBoundary>
  );
});
