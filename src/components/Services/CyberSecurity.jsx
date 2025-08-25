import React from 'react';

const CyberSecurity = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white font-inter">
            {/* Top Section */}
            <section className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-80px)]">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        <span className="text-indigo-500 Bold">"</span> Our <span className="text-indigo-500"> Cybersecurity</span> for startups & SMEs — proactive audits, 24/7 managed protection, and peace of mind baked into your stack. <span className="text-indigo-500 bold">"</span>
                    </h1>
                </div>
            </section>

            {/* Middle Section */}
            <div className="flex flex-col items-center max-w-4xl w-full px-4 mb-12">
                <div className="flex items-center justify-center w-full mb-8">
                    <div className="w-4 h-4 rounded-full bg-white mx-2"></div>
                    <div className="flex-grow h-px bg-gray-500"></div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-500 whitespace-nowrap mx-4">
                        Cyber-Security Service
                    </h2>
                    <div className="flex-grow h-px bg-gray-500"></div>
                    <div className="w-4 h-4 rounded-full bg-white mx-2"></div>
                </div>

                <img
                    src="https://placehold.co/700x400/0a0a0a/00ffff?text=Cyber+Security+Image"
                    alt="Cyber Security Display"
                    className="rounded-xl shadow-lg mx-auto w-full max-w-2xl border-2 border-cyan-700/50 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/700x400/0a0a0a/ffffff?text=Image+Not+Found";
                    }}
                />
            </div>

            {/* Real-Time Protection Section */}
            <div className="max-w-4xl w-full px-4 text-center mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-xl lg:text-6xl font-extrabold text-indigo-500 bold boldmb-4 leading-tight">
                    Confident Cybersecurity, No Compromises<br />
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    We don't overpromise or oversimplify. Our cybersecurity offerings are grounded in real-world situations and tested response. From audits to endpoint protection, we protect the infrastructure that keeps your business running.
                </p>
            </div>

            {/* Four Feature Blocks */}
            <div className="max-w-5xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-10">
                {[
                    {
                        title: "Audit to Action",
                        icon: (
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        ),
                        text: (
                            <>
                                Security begins with visibility. Each interaction starts with a thorough risk assessment—no guesswork. Next, we deploy real-world defenses based on your digital infrastructure, not theory.
                            </>
                        ),
                    },
                    {
                        title: "Tech-Agnostic, Risk-Centric",
                        icon: (
                            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        ),
                        text: (
                            <>
                                Whether you host WordPress or custom cloud stacks, our security is optimized for your unique risk profile. We don't impose tools—we select the appropriate ones for your platform, workflows, and threat environment.
                            </>
                        ),
                    },
                    {
                        title: "Comprehensive Coverage",
                        icon: (
                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 4.016A11.955 11.955 0 002 12c0 2.909 1.023 5.669 2.876 7.765L12 22l7.124-2.235A11.955 11.955 0 0022 12c0-2.909-1.023-5.669-2.876-7.765z" />
                        ),
                        text: (
                            <>
                                Our solution protects all levels of defense—network, data, individuals, and policies. We offer security planning, threat identification, vulnerability patching, and response planning integrated into a single system.
                                <ul className="list-disc list-inside mt-3 text-gray-300">
                                    <li className="whitespace-nowrap">Risk Assessments</li>
                                    <li className="whitespace-nowrap">Firewall and Network Hardening</li>
                                    <li className="whitespace-nowrap">Encryption & Secure Storage</li>
                                    <li className="whitespace-nowrap">Staff Awareness & Policy Templates</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Connected and Vigilant",
                        icon: (
                            <path d="M3.055 11H5.06a4.002 4.002 0 013.921 3.491L9 14.5m1.5-.5a.5.5 0 00-1 0v1a.5.5 0 001 0V14zm0-3a.5.5 0 00-1 0v1a.5.5 0 001 0V11zm-4-3a.5.5 0 00-1 0v1a.5.5 0 001 0V8zM3 11a9 9 0 0118 0M3 11v2m18-2v2" />
                        ),
                        text: (
                            <>
                                Security is not independent. We integrate threat monitoring with your hosting, email, and other business applications. From real-time alerts to systems that prevent breaches, our protection adapts and evolves with your online presence.
                                <ul className="list-disc list-inside mt-3 text-gray-300">
                                    <li className="whitespace-nowrap">DNS and Email Security</li>
                                    <li className="whitespace-nowrap">Web App Firewall</li>
                                    <li className="whitespace-nowrap">24/7 Monitoring (optional)</li>
                                    <li className="whitespace-nowrap">Monthly Reporting with Recommendations</li>
                                </ul>
                            </>
                        ),
                    },
                ].map((block, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start border border-gray-700"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <svg
                                className="w-6 h-6 text-blue-400 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {block.icon}
                            </svg>
                            <h3 className="text-2xl font-bold text-white">{block.title}</h3>
                        </div>
                        <div className="text-gray-300 text-lg leading-relaxed">
                            {block.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Repeatable Section Template */}
            {[
                {
                    title: "Everyday Protection Embedded within Your Digital Stack",
                    imageAlt: "Digital Stack Image",
                    imageUrl: "https://placehold.co/400x300/0a0a0a/00ffff?text=Digital+Stack+Image",
                    listTitle: "Included:",
                    points: [
                        "Threat and vulnerability analyses",
                        "Penetration testing & firewall configuration",
                        "Secure DNS, SPF/DKIM/DMARC email protocols",
                        "Scheduled risk reporting and patch plans",
                    ],
                    paragraph:
                        "Cybersecurity isn't a plug-in. It's infrastructure. At Encryvia, we bake security into the foundation—at your sites, APIs, and operations. Our audits are deeper than surface scans. We measure real-world risk and fill in the gaps most agencies miss.",
                },
                {
                    title: "Enterprise-Class Defense Without the Complexity",
                    imageAlt: "Enterprise Defense Image",
                    imageUrl: "https://placehold.co/400x300/0a0a0a/00ffff?text=Enterprise+Defense+Image",
                    listTitle: "Capabilities:",
                    points: [
                        "Network hardening and endpoint protection",
                        "Encrypted data and backup infrastructure",
                        "User security and access control regulations",
                        "24/7 monitoring (optional in high-risk environments)",
                    ],
                    paragraph:
                        "We apply the same business principles—but at scale for expanding businesses. That is, multi-tiered security, threat monitoring in real time, and best practices implementation without the hefty price tag or red tape.",
                },
                {
                    title: "Security Culture: It's Not Just Code",
                    imageAlt: "Security Culture Image",
                    imageUrl: "https://placehold.co/400x300/0a0a0a/00ffff?text=Security+Culture+Image",
                    listTitle: "Support Comprises:",
                    points: [
                        "Staff training in phishing/social engineering",
                        "Policy deployment packages (BYOD, password hygiene, etc.)",
                        "Regular audits with executive-level reporting",
                        "Compliance documentation (GDPR, HIPAA, etc.)",
                    ],
                    paragraph:
                        "Most of the attacks start with a human click. That's why our security service is accompanied by training, policy templates, and hands-on assistance for your internal team. Because security shouldn't break when you scale—it should scale with you.",
                },
            ].map((section, idx) => (
                <div key={idx} className="max-w-4xl w-full px-4 text-center mb-14">
                    {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8"> */}
                              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center mb-6 mt-10">

                        {section.title}
                    </h3>
                    <div className={`flex flex-col items-center gap-12 md:gap-16 ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src={section.imageUrl}
                                alt={section.imageAlt}
                                className="rounded-full shadow-lg w-full max-w-[385px] h-auto aspect-[2/3] border-2 border-cyan-700/50 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/400x300/0a0a0a/ffffff?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="md:w-1/2 text-left flex flex-col justify-center">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">{section.paragraph}</p>
                            <h3 className="text-2xl font-bold text-gray-100 mb-4">{section.listTitle}</h3>
                            <ul className="list-disc list-inside text-gray-300 text-base sm:text-lg space-y-2">
                                {section.points.map((point, i) => (
                                    <li key={i} className="whitespace-nowrap">{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}

            {/* CTA */}
            <div className="max-w-4xl w-full px-4 text-center py-12 bg-purple-600/80 backdrop-blur-md border border-white/30 rounded-lg shadow-xl mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white bold boldmb-6 leading-tight">
                    Ready to Secure Your Digital Future?
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
                    Connect with our experts today to assess your needs and build a robust cybersecurity strategy.
                </p>
                <button className="px-8 py-4 bg-cyan-600 text-white font-bold text-lg sm:text-xl rounded-full shadow-lg hover:bg-cyan-700 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-75">
                    Get a Free Consultation
                </button>
            </div>

            {/* Custom CSS */}
            <style>{`
                .font-inter {
                    font-family: "Inter", sans-serif;
                }
            `}</style>
        </div>
    );
};

export default CyberSecurity;
