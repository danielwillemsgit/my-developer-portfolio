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

            <section className="pt-32 pb-16 px-8 flex flex-col items-center">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-center">
                    SymphonySeat
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl text-center mb-12">
                    Full-stack React/TypeScript event ticketing platform with real-time seat selection and comprehensive management tools.
                </p>

                <div className="w-full max-w-5xl aspect-video mb-16 shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                    <video
                        controls
                        className="w-full h-full"
                        poster="/images/SymphonySeat-HomePage.png"
                    >
                        <source src="/videos/symphonyseat-demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="w-full max-w-6xl grid md:grid-cols-4 gap-6 text-sm md:text-base">
                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Core Tech Stack</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Frontend: React + TypeScript + Tailwind CSS</li>
                            <li>• Backend: Java + Spring Boot + Jpa/Hibernate</li>
                            <li>• Database: MySQL with Flyway migrations</li>
                            <li>• Real-time: WebSockets (STOMP)</li>
                            <li>• State: React Context + JWT authentication</li>
                            <li>• Testing: Vitest + Cypress</li>
                            <li>• Build: Vite + PNPM</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Real-time seat selection with live availability</li>
                            <li>• Role-based access (Admin/Organizer/Customer)</li>
                            <li>• Payment processing & analytics dashboards</li>
                            <li>• Docker containerization for easy deployment</li>
                            <li>• Comprehensive testing suite</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Technical Highlights</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Optimistic locking prevents double-booking</li>
                            <li>• Type-safe throughout with TypeScript</li>
                            <li>• RESTful APIs with JWT authentication</li>
                            <li>• Modern development with fast Vite builds</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">What I Learned</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Real-time WebSocket communication</li>
                            <li>• Optimistic locking for concurrency control</li>
                            <li>• JWT authentication implementation</li>
                            <li>• TypeScript in full-stack applications</li>
                            <li>• Docker containerization and deployment</li>
                            <li>• End-to-end testing with Cypress</li>
                        </ul>
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