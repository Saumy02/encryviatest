import React, { useState } from 'react';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() && email.includes("@")) {
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="relative w-full px-2 sm:px-4 md:px-6 py-8 sm:py-12">
      <div className="bg-purple-500/60 backdrop-blur-md border border-white/30 p-4 sm:p-6 md:p-10 lg:p-12 rounded-3xl shadow-2xl w-full max-w-4xl mx-auto flex flex-col items-center space-y-4 sm:space-y-6">
       <h3 className="text-center text-white text-xl sm:text-2xl md:text-3xl">
  <span className="block font-bold mb-2">
    Stay ahead of threats, trends & tech.
  </span>
  <span className="font-normal">
    Join our newsletter for practical tips, real-world case studies, and growth strategies built for startups & SMEs.
  </span>
</h3>


        <div className="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
            className="w-full sm:flex-grow p-3 sm:p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
          />
          <button
            onClick={handleSubscribe}
            className="w-full sm:w-auto bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out text-base sm:text-lg"
          >
            Subscribe
          </button>
        </div>

        {success && (
          <p className="text-green-300 font-medium text-xs sm:text-sm md:text-base text-center">
            You have successfully subscribed!
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscribe;







