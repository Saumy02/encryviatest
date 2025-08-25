


import React from 'react';

// Main App Component
function SEOAds() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 selection:bg-blue-500 selection:text-white"
         style={{
           fontFamily: 'Inter, sans-serif',
           background: 'linear-gradient(to bottom right, #000000, #1a202c, #4c51bf)', // from-black via-gray-900 to-indigo-900
           color: '#cbd5e0', // Light gray text for contrast
         }}>
      {/* Main Heading and Subtitle */}
      <section className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-80px)]">
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
      <p className='text-white'><span className="text-indigo-500">"</span>
      Turn clicks into customers — data‑driven <span className="text-indigo-500">SEO</span> & Ads campaigns crafted to outsmart competitors and drive real ROI.
      <span className="text-indigo-500">"</span></p>
    </h1>
  </div>
</section>

      <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl text-center">
        Elevate your digital presence and achieve unparalleled growth with our expert strategies.
      </p>

      {/* SEO & Ads Service section with decorative dots */}
      <div className="flex items-center justify-center w-full mb-10 max-w-[1203px]">
        <div className="w-3 h-3 bg-white rounded-full mx-2"></div>
        <hr className="flex-grow border-t border-gray-600" />
        <h2 className="text-xl sm:text-2xl font-bold text-white mx-4 whitespace-nowrap">SEO & Ads Service</h2>
        <hr className="flex-grow border-t border-gray-600" />
        <div className="w-3 h-3 bg-white rounded-full mx-2"></div>
      </div>

      {/* Image Card for "People Using Website" */}
      <div className="image-card max-w-[1203px] max-h-[630px] rounded-[140px] p-5 shadow-lg flex justify-center items-center overflow-hidden mb-20 md:max-h-[630px] md:max-w-[1203px] sm:max-h-[300px] sm:max-w-full"
           style={{ backgroundColor: '#f7fafc', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)' }}>
        <img src="https://placehold.co/1203x630/38b2ac/ffffff?text=People+Using+Website"
             alt="People collaborating on a website"
             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/700x400/38b2ac/ffffff?text=Image+Not+Found'; }}
             className="w-full h-full object-cover rounded-[140px] sm:rounded-[40px]" />
      </div>

      {/* Growth Section */}
      <div className="section-container mt-16 pb-16 max-w-[1203px] w-full px-5 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight text-center">
          We Don't Do "<span className="text-blue-400">Traffic</span>." We Do <span className="text-blue-400">Growth</span>.
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center">
          Clicks are nice. But conversions? That's way better. We build SEO campaigns and ad programs that actually make people do something—beginning with what your crowd is already seeking out.

        </p>

        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="flex-1">
            {/* Icon for Strategy to Scale */}
            <div className="text-blue-400 mb-4 text-4xl flex justify-center items-center h-16 w-16 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale">
                <path d="m16 16.5 3.5-2L22 17.5 19.5 20.5 16 16.5Z"/><path d="m2 16.5 3.5-2L8 17.5 5.5 20.5 2 16.5Z"/><path d="M12 3v17"/><path d="M18 6V2"/><path d="M6 6V2"/><path d="M12 11h9.5"/><path d="M12 6H2.5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Strategy to Scale</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center md:text-left">
              We handle the full journey: technical fixes, keyword strategy,
              optimized content, smart ad funnels, and results you can
              measure. Every piece is connected because isolated
              tactics don't move the needle.
            </p>
          </div>
          <div className="flex-1">
            {/* Icon for Team of Thinkers and Executors */}
            <div className="text-blue-400 mb-4 text-4xl flex justify-center items-center h-16 w-16 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Team of Thinkers and Executors</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center md:text-left">
              Our specialists cover the full stack: from crawling and
              indexing to CPC optimization and multi-channel campaign
              management. We don't just "run ads" or "write blogs"—we
              scale performance.
            </p>
          </div>
        </div>
      </div>

      {/* Platform & Funnel Section */}
      <div className="section-container mt-16 pb-16 max-w-[1203px] w-full px-5 text-left">
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="flex-1">
            {/* Icon for Platform-Neutral */}
            <div className="text-blue-400 mb-4 text-4xl flex justify-center items-center h-16 w-16 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Platform-Neutral, Performance-Obsessed</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center md:text-left">
              We choose the right channels, not the familiar ones. Whether it's
              organic search, Google Ads, or Facebook retargeting, your
              campaigns are tailored to behavior, not trends.
            </p>
          </div>
          <div className="flex-1">
            {/* Icon for Built Into Your Funnel */}
            <div className="text-blue-400 mb-4 text-4xl flex justify-center items-center h-16 w-16 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel">
                <path d="M6 10L2 4h20L18 10"/><path d="M12 16v5"/><path d="M10 16h4"/><path d="m17 10-3 6H9l-3-6"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Built Into Your Funnel</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center md:text-left">
              We don't work in a vacuum. Your SEO and ads are synced
              with your site structure, analytics, CRM, and email
              flows. We optimize for outcomes—form fills, sales,
              calls, leads—not just impressions.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Strategy Section */}
      <div className="section-container mt-16 pb-16 max-w-[1203px] w-full px-5 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
          Search Engine Strategy That Pays You Back
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="image-card !m-0 !p-0 max-w-[365px] max-h-[568px] rounded-[140px] md:rounded-[140px] sm:rounded-[40px] flex-shrink-0"
               style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)' }}>
            <img src="https://placehold.co/365x568/38b2ac/ffffff?text=SEO+Strategy"
                 alt="SEO Strategy"
                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/365x568/38b2ac/ffffff?text=Image+Not+Found'; }}
                 className="w-full h-full object-cover rounded-[140px] sm:rounded-[40px]" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              We don't chase vanity metrics. We go after
              rankings that convert. With Encryvia, SEO is a
              measurable asset, not a guessing game. Every
              click, link, and page we touch is part of a plan to
              boost visibility and revenue—not just traffic.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Core SEO Focus Areas:</h3>
            <ul className="list-disc ml-5 text-gray-300 text-lg leading-relaxed">
              <li>Full technical audits & error fixes</li>
              <li>Keyword targeting backed by market intent</li>
              <li>On-page SEO for pages that sell</li>
              <li>Structured data and schema markup</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content & Ads Section */}
      <div className="section-container mt-16 pb-16 max-w-[1203px] w-full px-5 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
          Content & Ads That Pull in the Right Audience
        </h2>
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center justify-center"> {/* Changed to row-reverse for image on right */}
          <div className="image-card !m-0 !p-0 max-w-[365px] max-h-[568px] rounded-[140px] md:rounded-[140px] sm:rounded-[40px] flex-shrink-0"
               style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)' }}>
            <img src="https://placehold.co/365x568/38b2ac/ffffff?text=Content+Ads"
                 alt="Content & Ads"
                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/365x568/38b2ac/ffffff?text=Image+Not+Found'; }}
                 className="w-full h-full object-cover rounded-[140px] sm:rounded-[40px]" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              We blend strong content with sharp ads to bring
              qualified traffic to your site. Our SEO-driven blog
              strategy works hand-in-hand with high-
              converting paid ad funnels on Google and Meta
              — so you're not relying on one channel to grow.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">What's Included:</h3>
            <ul className="list-disc ml-5 text-gray-300 text-lg leading-relaxed">
              <li>Blog calendars tied to keywords that matter</li>
              <li>Google Ads (Search, Display, Shopping)</li>
              <li>Facebook/Instagram full-funnel campaigns</li>
              <li>CRO-ready landing pages & A/B testing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Reporting Section */}
      <div className="section-container mt-16 pb-16 max-w-[1203px] w-full px-5 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
          Performance-Driven Reporting You Can Understand
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="image-card !m-0 !p-0 max-w-[365px] max-h-[568px] rounded-[140px] md:rounded-[140px] sm:rounded-[40px] flex-shrink-0"
               style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)' }}>
            <img src="https://placehold.co/365x568/38b2ac/ffffff?text=Performance+Reporting"
                 alt="Performance Reporting"
                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/365x568/38b2ac/ffffff?text=Image+Not+Found'; }}
                 className="w-full h-full object-cover rounded-[140px] sm:rounded-[40px]" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              No vague graphs. No technical fluff. Just clear,
              customized reports that show what's working
              and what needs improvement. Our dashboards
              connect the dots between clicks, conversions,
              and cost—so you can make smarter marketing
              decisions.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Deliverables:</h3>
            <ul className="list-disc ml-5 text-gray-300 text-lg leading-relaxed">
              <li>Custom Looker Studio/GA4 dashboards</li>
              <li>Keyword rank tracking & ad ROI reports</li>
              <li>Monthly growth reviews with strategy shifts</li>
              <li>Slack/email insights for real-time adjustments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SEOAds;
