import React from 'react';

const CustomCarDetail = () => {
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
                    CustomCar
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl text-center mb-12">
                    Car parts e-commerce platform with advanced sales forecasting and inventory management system built on ASP.NET Core.
                </p>

                <div className="w-full max-w-5xl aspect-video mb-16 shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                    <img
                        src="/images/CustomCarHomePage.png"
                        alt="CustomCar E-commerce Platform"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full max-w-6xl grid md:grid-cols-4 gap-6 text-sm md:text-base">
                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Core Tech Stack</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Frontend: ASP.NET Core Razor Pages</li>
                            <li>• Backend: C# .NET with Multi-layer Architecture</li>
                            <li>• Database: SQL Server with Entity Framework</li>
                            <li>• Architecture: Business Layer + Data Access Layer</li>
                            <li>• Session Management: Custom cart session handling</li>
                            <li>• UI: Bootstrap with custom CSS styling</li>
                            <li>• Serialization: JSON for cart data</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Advanced sales forecasting algorithms</li>
                            <li>• Real-time inventory management</li>
                            <li>• Shopping cart with session persistence</li>
                            <li>• Order processing and tracking</li>
                            <li>• Product search and catalog management</li>
                            <li>• Customer order history</li>
                            <li>• Depot inventory tracking</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Technical Highlights</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Strategy pattern for forecasting algorithms</li>
                            <li>• Factory pattern for strategy creation</li>
                            <li>• Multi-layer architecture separation</li>
                            <li>• Custom session management for cart data</li>
                            <li>• Exponential smoothing and Holt-Winters methods</li>
                            <li>• Time series decomposition forecasting</li>
                            <li>• Seasonal trend analysis</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">What I Learned</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Advanced forecasting algorithm implementation</li>
                            <li>• Design patterns in real-world applications</li>
                            <li>• ASP.NET Core Razor Pages development</li>
                            <li>• Session management and data persistence</li>
                            <li>• Time series analysis and smoothing techniques</li>
                            <li>• Multi-layer architecture best practices</li>
                            <li>• Inventory management system design</li>
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

export default CustomCarDetail;