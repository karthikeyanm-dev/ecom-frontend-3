import React from "react";

const ProductCards = ({ product }) => {

    return (
        <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border dark:border-gray-800">

            {/* IMAGE */}
            <div className="h-75  bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {product.imageUrl ? (
                    <img
                        src={product.imageUrl || "/no-image.png"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                ) : (
                    <span className="text-gray-400 text-sm">No Image</span>
                )}
            </div>

            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>

            <div className="p-5">

                {/* Brand */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {product.brand}
                </p>

                {/* Name */}
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-500 transition">
                    {product.name}
                </h2>

                {/* Price */}
                <p className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
                    ₹{product.price}
                </p>

                {/* Buttons */}
                <div className="mt-5 flex justify-between items-center">
                    <button className="px-4 py-1.5 text-sm rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800">
                        View
                    </button>

                    <button className="px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700">
                        Add
                    </button>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        </div>
    );
};

export default ProductCards;