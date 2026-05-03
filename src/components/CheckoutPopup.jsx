import React from "react";

const CheckoutPopup = ({
                           show,
                           handleClose,
                           cartItems,
                           totalPrice,
                           handleCheckout,
                       }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white dark:bg-gray-900 w-full max-w-2xl mx-4 rounded-2xl shadow-xl p-6 z-10">

                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Checkout
                    </h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-red-500 text-lg"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="mt-4 max-h-[400px] overflow-y-auto space-y-4">

                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500">
                            Your cart is empty
                        </p>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.productId}
                                className="flex gap-4 items-center border-b pb-3"
                            >
                                {/* Image */}
                                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-400">
                    Image
                  </span>
                                </div>

                                {/* Details */}
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800 dark:text-white">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Qty: {item.quantity}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="font-semibold text-blue-600">
                                    ₹{item.price * item.quantity}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Total */}
                <div className="mt-4 flex justify-between items-center border-t pt-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Total
                    </h3>
                    <span className="text-xl font-bold text-blue-600">
            ₹{totalPrice}
          </span>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 flex justify-end gap-3">

                    <button
                        onClick={handleClose}
                        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        Close
                    </button>

                    <button
                        onClick={handleCheckout}
                        className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Confirm Purchase
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPopup;