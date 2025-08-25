import React from 'react';

// Icons (SVGs)
const OfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-400">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" strokeWidth="2" />
    <path d="M12 22V7M6 17v-1.5a1.5 1.5 0 013 0V17M15 17v-1.5a1.5 1.5 0 013 0V17M7 2h10M12 7h.01" strokeWidth="2" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-400">
    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 19.85a19.5 19.5 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-400">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" strokeWidth="2" />
    <path d="M22 6L12 13 2 6" strokeWidth="2" />
  </svg>
);

const Contact = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-indigo-900">
      
      {/* Hero Section - Enhanced spacing and typography */}
      <section className="flex flex-col items-center justify-center py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-indigo-500">"</span> 
            Our <span className="text-indigo-500">Contact Us</span> Page 
            <span className="text-indigo-500">"</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's build something together — talk to our web, security, or marketing team today.
          </p>
        </div>
      </section>

      {/* Contact Section - Improved layout and spacing */}
      <section className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">

          {/* Heading with Line - Enhanced visual design */}
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-600 flex-grow max-w-xs lg:max-w-sm"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mx-6 text-blue-400">Contact Us</h2>
            <div className="border-t border-gray-600 flex-grow max-w-xs lg:max-w-sm"></div>
          </div>

          {/* Header Image - Enhanced presentation */}
          <div className="w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="https://placehold.co/1203x630/555555/EEEEEE?text=Contact+Us+Header+Image"
                alt="Contact Us"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text + Form Section - Improved layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start">

            {/* Left: Text Content - Enhanced typography and spacing */}
            <div className="flex-1 space-y-8 lg:space-y-10">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Stay Connected with Us
                </h3>

                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Got SEO, international search strategies, web design, or internet marketing issues? Looking for partnership opportunities, need some custom keyword research, or need help with your next campaign? Reach out to us—we're here to help you beat those web goals.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl lg:text-2xl font-semibold text-white">How may we help you?</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                  <li>SEO consulting, keyword research consulting, and competitor analysis consulting</li>
                  <li>Guidelines for international SEO and web design trends</li>
                  <li>Backing for your online marketing plan</li>
                  <li>Professional guidance on cyber security issues for your company</li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-md text-gray-400">
                  We answer all questions within 24 hours. Your goals and privacy are our priorities.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg lg:text-xl font-semibold text-blue-400">Why Contact Us?</h4>
                  <p className="text-md lg:text-lg text-gray-300 leading-relaxed">
                    Instant expert assistance and valuable SEO advice. Support from an experienced analyst in web development and online marketing.
                    <br /><br />
                    Today's tactics are aligned with 2025 and beyond. Let's get connected and drive your business forward!
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form - Enhanced styling and spacing */}
            <div className="flex-1 bg-indigo-950/70 p-8 lg:p-10 rounded-2xl shadow-2xl border border-indigo-500/20">
              <form className="space-y-6">
                {[
                  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
                  { id: 'number', label: 'Number', type: 'tel', placeholder: 'Enter your phone number' },
                  { id: 'location', label: 'Location', type: 'text', placeholder: 'Enter your location' }
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="space-y-2">
                    <label htmlFor={id} className="block text-sm font-medium text-gray-300">{label}</label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                    />
                  </div>
                ))}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Map Section - Enhanced layout */}
      <section className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
          
          {/* Contact Info and Image */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Image - Enhanced presentation */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-[120px] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src="https://placehold.co/480x645/555555/EEEEEE?text=Mobile+Phone+Icon"
                  alt="Mobile Phone"
                  className="w-full h-auto object-cover rounded-[100px]"
                />
              </div>
            </div>

            {/* Contact Information - Enhanced spacing and typography */}
            <div className="w-full lg:w-1/2 space-y-12 text-center lg:text-right">
              {[
                {
                  icon: <OfficeIcon />,
                  title: 'Office Address',
                  lines: ['New Delhi, India']
                },
                {
                  icon: <PhoneIcon />,
                  title: 'Phone Number',
                  lines: ['+911234567890', '+911234567890']
                },
                {
                  icon: <MailIcon />,
                  title: 'Email Address',
                  lines: ['encryvia@gmail.com', 'info@encryvia.com']
                }
              ].map(({ icon, title, lines }, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-center lg:justify-end items-center gap-3">
                    {icon}
                    <h4 className="text-xl lg:text-2xl font-semibold text-white">{title}</h4>
                  </div>
                  {lines.map((line, i) => (
                    <p key={i} className="text-gray-300 text-lg">{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Map - Enhanced presentation */}
          <div className="w-full">
            <div className="rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="https://placehold.co/1138x787/555555/EEEEEE?text=Map+of+New+Delhi"
                alt="Map of New Delhi"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
