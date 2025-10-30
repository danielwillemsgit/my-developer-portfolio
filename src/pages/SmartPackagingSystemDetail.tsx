import React from 'react';

const SmartPackagingSystemDetail = () => {
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
                    Smart Packaging System
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl text-center mb-12">
                    Full-stack React/TypeScript package management system with real-time locker tracking and comprehensive distribution tools for Sioux Technologies.
                </p>

                <div className="w-full max-w-5xl aspect-video mb-16 shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                    <img
                        src="/images/Sioux.jpg"
                        alt="SmartPackagingSystem Dashboard"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full max-w-4xl grid md:grid-cols-3 gap-6 text-sm md:text-base">
                    <div className="md:col-start-1 bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Core Tech Stack</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Frontend: React + TypeScript + Tailwind CSS</li>
                            <li>• Backend: Java + Spring Boot + JPA/Hibernate</li>
                            <li>• Database: MySQL with proper schema design</li>
                            <li>• Routing: React Router DOM v7</li>
                            <li>• Build Tool: Vite with fast development</li>
                            <li>• Package Manager: PNPM for efficiency</li>
                            <li>• Testing: Vitest + React Testing Library</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Real-time locker status monitoring</li>
                            <li>• Package registration and tracking system</li>
                            <li>• Interactive locker map with availability</li>
                            <li>• QR code scanning integration</li>
                            <li>• Package search and filtering</li>
                            <li>• Automated expiry date tracking</li>
                            <li>• Department-based package routing</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Technical Highlights</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Type-safe development with TypeScript</li>
                            <li>• Modern React patterns with hooks</li>
                            <li>• Responsive design with Tailwind CSS</li>
                            <li>• RESTful API integration</li>
                            <li>• Component-based architecture</li>
                            <li>• Optimized build process with Vite</li>
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

export default SmartPackagingSystemDetail;