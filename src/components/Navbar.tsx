import React from "react";

const Navbar: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-12 py-6">
                <a href="#" className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent hover:from-gray-700 hover:to-gray-500 transition-all">
                    DW
                </a>

                <nav className="flex gap-10 text-base font-medium">
                    <a href="#about" className="hover:text-gray-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all hover:after:w-full">
                        About
                    </a>
                    <a href="#projects" className="hover:text-gray-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all hover:after:w-full">
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-gray-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all hover:after:w-full">
                        Skills
                    </a>
                    <a href="#contact" className="hover:text-gray-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all hover:after:w-full">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;