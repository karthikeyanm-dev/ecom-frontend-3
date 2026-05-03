import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSelectCategory, onSearch }) => {
    const getInitialTheme = () => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? storedTheme : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme());
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
            <nav className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <div className="text-2xl font-bold text-white">
                            Gopal Cart
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">

                        <Link to="/" className="text-gray-700 dark:text-white hover:text-blue-500">
                            Home
                        </Link>

                        <Link to="/add-product" className="text-gray-700 dark:text-white hover:text-blue-500">
                            Add Product
                        </Link>

                        {/* Category Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="text-gray-700 dark:text-white hover:text-blue-500"
                            >
                                Categories ▼
                            </button>

                            {dropdownOpen && (
                                <div className="absolute mt-2 w-40 bg-white dark:bg-gray-800 shadow rounded">
                                    {["Electronics", "Clothing", "Books"].map((cat) => (
                                        <p
                                            key={cat}
                                            onClick={() => {
                                                onSelectCategory && onSelectCategory(cat);
                                                setDropdownOpen(false);
                                            }}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            {cat}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => onSearch && onSearch(e.target.value)}
                            className="px-3 py-1 rounded border focus:outline-none dark:bg-gray-800 dark:text-white"
                        />

                        {/* Cart */}
                        <Link to="/cart" className="nav-link text-dark">
                            <div className="flex items-center cursor-pointer text-lg dark:text-white">
                                🛒 <span className="ml-1 text-sm">Cart</span>
                            </div>
                        </Link>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="px-2 py-1 border rounded text-sm dark:text-white"
                            >
                                {theme === "dark" ? "🌙" : "☀️"}
                            </button>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
                            ☰
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3">
                    <Link to="/" className="block">Home</Link>
                    <Link to="/add-product" className="block">Add Product</Link>

                    <div>
                        <p className="font-semibold">Categories</p>
                        {["Electronics", "Clothing", "Books"].map((cat) => (
                            <p
                                key={cat}
                                onClick={() => onSelectCategory && onSelectCategory(cat)}
                                className="cursor-pointer"
                            >
                                {cat}
                            </p>
                        ))}
                    </div>
                    <a href="/cart" className="nav-link text-dark">
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => onSearch && onSearch(e.target.value)}
                            className="w-full px-3 py-1 border rounded"
                        />

                        <div>🛒 Cart</div>

                        <button onClick={toggleTheme}>
                            Toggle Theme
                        </button>
                    </a>
                </div>
                )}
        </header>
    );
};

export default Navbar;