import React from 'react';

const ZooBazaarDetail = () => {
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
                    Zoo Bazaar
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl text-center mb-12">
                    Comprehensive zoo management system with automated scheduling, feeding management, and employee administration built on WinForms architecture.
                </p>

                <div className="w-full max-w-5xl aspect-video mb-16 shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                    <img
                        src="/images/ZooBazaar.png"
                        alt="Zoo Bazaar Management System"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full max-w-4xl grid md:grid-cols-3 gap-6 text-sm md:text-base">
                    <div className="md:col-start-1 bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Core Tech Stack</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Frontend: Windows Forms (WinForms)</li>
                            <li>• Backend: C# .NET with Multi-layer Architecture</li>
                            <li>• Database: SQL Server with Entity Framework</li>
                            <li>• Architecture: Business Layer + Data Access Layer</li>
                            <li>• Email: MailKit for SMTP communications</li>
                            <li>• QR Codes: QRCoder library generation</li>
                            <li>• Validation: Comprehensive input validation</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Automated employee shift planning system</li>
                            <li>• Comprehensive feeding schedule management</li>
                            <li>• Animal tracking with taxonomy and enclosure data</li>
                            <li>• Employee management with contract validation</li>
                            <li>• Email notifications with QR code tickets</li>
                            <li>• Multi-zoo animal transfer system</li>
                            <li>• Real-time schedule conflict detection</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3 text-gray-900">Technical Highlights</h2>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Clean architecture with separation of concerns</li>
                            <li>• Automated shift planning algorithm</li>
                            <li>• Database transaction management</li>
                            <li>• Comprehensive business rule validation</li>
                            <li>• Email service with QR code integration</li>
                            <li>• Contract-based employee scheduling</li>
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

export default ZooBazaarDetail;