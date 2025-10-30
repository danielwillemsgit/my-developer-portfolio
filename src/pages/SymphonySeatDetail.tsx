import React from 'react';

const SymphonySeatDetail = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                    <a href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                        ← Back to Portfolio
                    </a>
                </div>
            </nav>

            <section className="pt-32 pb-16 px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                        SymphonySeat
                    </h1>
                    <p className="text-2xl text-gray-600 font-light max-w-3xl">
                        Full-stack React/TypeScript event ticketing platform with real-time seat selection and comprehensive management tools.
                    </p>
                </div>
            </section>

            <section className="pb-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-12">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Core Tech Stack</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900 mb-2">Frontend</h3>
                                        <p className="text-gray-700">React 19 + TypeScript + Tailwind CSS</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900 mb-2">Real-time</h3>
                                        <p className="text-gray-700">WebSockets (STOMP) for live seat updates</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900 mb-2">State</h3>
                                        <p className="text-gray-700">React Context + JWT authentication</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900 mb-2">Testing</h3>
                                        <p className="text-gray-700">Vitest + Cypress</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900 mb-2">Build</h3>
                                        <p className="text-gray-700">Vite + PNPM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Features</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-900 font-bold mt-1">•</span>
                                        <span className="text-gray-700">Real-time seat selection with live availability</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-900 font-bold mt-1">•</span>
                                        <span className="text-gray-700">Role-based access (Admin/Organizer/Customer)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-900 font-bold mt-1">•</span>
                                        <span className="text-gray-700">Payment processing & analytics dashboards</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-900 font-bold mt-1">•</span>
                                        <span className="text-gray-700">Mobile-responsive design</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-900 font-bold mt-1">•</span>
                                        <span className="text-gray-700">Comprehensive testing suite</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Technical Highlights</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-900 font-bold mt-1">•</span>
                                        <span className="text-gray-700">Optimistic locking prevents double-booking</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-900 font-bold mt-1">•</span>
                                        <span className="text-gray-700">Type-safe throughout with TypeScript</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-900 font-bold mt-1">•</span>
                                        <span className="text-gray-700">RESTful APIs with JWT authentication</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-900 font-bold mt-1">•</span>
                                        <span className="text-gray-700">Modern development with fast Vite builds</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 space-y-8">
                            <div className="bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
                                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                                    <video
                                        controls
                                        className="w-full h-full"
                                        poster="/images/SymphonySeat-HomePage.png"
                                    >
                                        <source src="/videos/symphonyseat-demo.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="mt-4 px-2">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Workflow</h3>
                                    <p className="text-gray-600 text-sm">
                                        Watch the complete walkthrough of SymphonySeat from a customer’s perspective, including seat selection and purchase.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
                                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                                    <video
                                        controls
                                        className="w-full h-full"
                                        poster="/images/SymphonySeat-Admin.png"
                                    >
                                        <source src="/videos/symphonyseat-demo2.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="mt-4 px-2">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Admin Workflow</h3>
                                    <p className="text-gray-600 text-sm">
                                        Explore the admin panel workflow and management features in SymphonySeat.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <footer className="py-12 px-8 border-t border-gray-200">
                <div className="max-w-7xl mx-auto text-center text-gray-600">
                    <p>© 2025 Daniel Willems. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default SymphonySeatDetail;