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
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
    <span className="text-indigo-500">"</span> 
    Our <span className="text-indigo-500">Contact Us</span> Page 
    <span className="text-indigo-500">"</span>
  </h1>
  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl">
    Let’s build something together — talk to our web, security, or marketing team today.
  </p>
</section>



      {/* Contact Section */}
     <section className="py-16 px-4 sm:px-6 lg:px-8 text-white">
  <div className="max-w-6xl mx-auto">

    {/* Heading with Line */}
    <div className="flex items-center justify-center mb-12">
      <div className="border-t border-gray-600 flex-grow" />
      <h2 className="text-2xl sm:text-3xl font-bold mx-4 text-blue-400">Contact Us</h2>
      <div className="border-t border-gray-600 flex-grow" />
    </div>

    {/* Image */}
    <div className="mb-16">
      <div className="rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
        <img
          src="https://placehold.co/1203x630/555555/EEEEEE?text=Contact+Us+Header+Image"
          alt="Contact Us"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

    {/* Text + Form */}
    <div className="flex flex-col lg:flex-row gap-12">

      {/* Left: Text Content */}
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl sm:text-4xl font-bold">Stay Connected with Us</h3>

        <p className="text-lg text-gray-300">
          Got SEO, international search strategies, web design, or internet marketing issues? Looking for partnership opportunities, need some custom keyword research, or need help with your next campaign? Reach out to us—we're here to help you beat those web goals.
        </p>

        <h4 className="text-xl font-semibold text-white">How may we help you?</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>SEO consulting, keyword research consulting, and competitor analysis consulting</li>
          <li>Guidelines for international SEO and web design trends</li>
          <li>Backing for your online marketing plan</li>
          <li>Professional guidance on cyber security issues for your company</li>
        </ul>

        <p className="text-md text-gray-400">
          We answer all questions within 24 hours. Your goals and privacy are our priorities.
        </p>

        <h4 className="text-lg font-semibold text-blue-400">Why Contact Us?</h4>
        <p className="text-md text-gray-300">
          Instant expert assistance and valuable SEO advice. Support from an experienced analyst in web development and online marketing.
          <br />
          Today's tactics are aligned with 2025 and beyond. Let's get connected and drive your business forward!
        </p>
      </div>

      {/* Right: Contact Form */}
      <div className="flex-1 bg-indigo-950/70 p-6 sm:p-8 rounded-lg shadow-lg">
        <form className="space-y-4">
          {[
            { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
            { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
            { id: 'number', label: 'Number', type: 'tel', placeholder: 'Enter your phone number' },
            { id: 'location', label: 'Location', type: 'text', placeholder: 'Enter your location' }
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <div className="text-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Contact Info + Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-[120px] overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://placehold.co/480x645/555555/EEEEEE?text=Mobile+Phone+Icon"
                alt="Mobile Phone"
                className="w-full h-auto object-cover rounded-[100px]"
              />
            </div>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-right">
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
              <div key={idx}>
                <div className="flex justify-center lg:justify-end items-center gap-2 mb-1">
                  {icon}
                  <h4 className="text-xl font-semibold text-white">{title}</h4>
                </div>
                {lines.map((line, i) => (
                  <p key={i} className="text-gray-300">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-[40px] overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 max-w-6xl mx-auto">
          <img
            src="https://placehold.co/1138x787/555555/EEEEEE?text=Map+of+New+Delhi"
            alt="Map of New Delhi"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
