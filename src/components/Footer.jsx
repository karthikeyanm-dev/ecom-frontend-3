import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 mt-10">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">

                {/* Left */}
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} All rights reserved
                </p>

                {/* Center */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 md:mt-0">
                    Made with ❤️ by <span className="font-semibold text-blue-600">Karthi</span>
                </p>

                {/* Right (optional links) */}
                <div className="flex space-x-4 mt-2 md:mt-0 text-sm">
                    <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                        Home
                    </a>
                    <a href="/add-product" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                        Add Product
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;