import React, { useState } from "react";
import axios from "../axios";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        brand: "",
        description: "",
        price: "",
        category: "",
        stockQuantity: "",
        releaseDate: "",
        available: false,
    });

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const submitHandler = async (e) => {

        e.preventDefault();
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("image", image);
            formData.append(
                "product",
                new Blob([JSON.stringify(product)], {
                    type: "application/json",
                })
            );

            console.log(formData);
            const res = await axios.post("/product", formData);
            alert("✅ Product added successfully");
            console.log(res.data);

            // reset form
            setProduct({
                name: "",
                brand: "",
                description: "",
                price: "",
                category: "",
                stockQuantity: "",
                releaseDate: "",
                available: false,
            });
            setImage(null);
        } catch (err) {
            console.error(err);
            alert("❌ Failed to add product " + err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6">

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Add New Product
                </h2>

                <form onSubmit={submitHandler} className="grid md:grid-cols-2 gap-6">

                    {/* Name */}
                    <div>
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleInputChange}
                            placeholder="Product Name"
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="form-label">Brand</label>
                        <input
                            type="text"
                            name="brand"
                            value={product.brand}
                            onChange={handleInputChange}
                            placeholder="Brand Name"
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="form-label">Description</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleInputChange}
                            placeholder="Product description..."
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="form-label">Price (₹)</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="form-label">Category</label>
                        <select
                            name="category"
                            value={product.category}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
                        >
                            <option value="">Select category</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Toys">Toys</option>
                            <option value="Fashion">Fashion</option>
                        </select>
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="form-label">Stock Quantity</label>
                        <input
                            type="number"
                            name="stockQuantity"
                            value={product.stockQuantity}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="form-label">Release Date</label>
                        <input
                            type="date"
                            name="releaseDate"
                            value={product.releaseDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Image */}
                    <div className="md:col-span-2">
                        <label className="form-label">Product Image</label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="md:col-span-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={product.productAvailable}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    available: e.target.checked,
                                })
                            }
                        />
                        <label>Product Available</label>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                        >
                            {loading ? "Adding..." : "Add Product"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;