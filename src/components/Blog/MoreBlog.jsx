//Jason me karna hai........... 



import React, { useState } from 'react';

const MoreBlog = () => {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.comment) {
      setComments([...comments, form]);
      setForm({ name: '', email: '', comment: '' });
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 text-white bg-gradient-to-br from-black via-gray-900 to-indigo-900 font-inter max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-400">
        "AI in Cybersecurity: The Double-Edged Sword"
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        Artificial Intelligence is reshaping cybersecurity — but it’s not just defenders who are benefitting. Hackers are leveraging AI in sophisticated and dangerous new ways. Here’s what you need to know.
      </p>

      {/* Blog Sections */}
      <div className="space-y-8 text-gray-200">
        <section>
          <h2 className="text-2xl font-bold mb-2">1. AI for the Good Guys</h2>
          <p>
            AI helps security teams detect threats faster, automate responses, and reduce human error.
            Tools like anomaly detection can flag suspicious behavior in real time. Machine learning models are trained to identify patterns in large datasets—something humans just can’t do fast enough.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">2. AI for the Bad Guys</h2>
          <p>
            But attackers are using AI too. Deepfake phishing emails can mimic real executives. AI-written code is being used to exploit zero-day vulnerabilities. Even malware is evolving with self-mutation to avoid detection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">3. Deepfake Phishing</h2>
          <p>
            One of the scariest developments is the rise of deepfake phishing. Imagine getting a video call from your CEO asking for sensitive data—it looks and sounds just like them, but it’s an AI-generated fake.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">4. Automated Password Cracking</h2>
          <p>
            AI models trained on password leaks can predict and crack passwords with terrifying speed. This means using strong, unique passwords and MFA isn’t just best practice—it’s essential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">5. Polymorphic Malware</h2>
          <p>
            Traditional antivirus relies on signature-based detection. But AI-powered malware can change its code on the fly, making each instance unique. This polymorphism renders many legacy solutions useless.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Final Thoughts</h2>
          <p>
            AI is the future of cybersecurity—but it’s also the future of cybercrime. The key is to stay ahead of the curve by embracing automation, continuous learning, and strong security hygiene.
          </p>
        </section>

        {/* Tags */}
        <div>
          <h3 className="text-xl font-semibold mt-10 mb-4">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {["AI", "Cybersecurity", "Deepfake", "Phishing", "MFA", "Malware", "Passwords", "Threats"].map((tag) => (
              <span key={tag} className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mt-10 mb-4 text-blue-400">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Q. Can AI stop all cyberattacks?</h4>
              <p>A. No, but it significantly improves detection and response times.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Q. How can businesses protect against AI-powered threats?</h4>
              <p>A. By using layered security, updating systems, and training employees regularly.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Q. What’s the most dangerous use of AI by attackers?</h4>
              <p>A. Deepfake phishing and polymorphic malware are currently the most concerning.</p>
            </div>
          </div>
        </section>

        {/* Comment Form */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Post Your Comment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-gray-800 text-white"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-800 text-white"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your comment..."
              className="w-full p-3 rounded bg-gray-800 text-white"
              rows="4"
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold transition"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Submitted Comments */}
        {comments.length > 0 && (
          <section className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Comments</h3>
            <div className="space-y-4">
              {comments.map((c, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded shadow">
                  <p className="font-bold text-white">{c.name} <span className="text-sm text-gray-400">({c.email})</span></p>
                  <p className="text-gray-300 mt-2">{c.comment}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MoreBlog;
