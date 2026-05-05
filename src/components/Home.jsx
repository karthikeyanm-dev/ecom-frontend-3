import React, {useEffect, useState} from 'react'
import ProductCards from "./ProductCards.jsx";
import {Link} from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchProductsWithImages = async () => {
            try {
                setLoading(true);

                const res = await fetch("http://localhost:8080/api/products");
                const data = await res.json();

                const updatedProducts = await Promise.all(
                    data.map(async (product) => {
                        try {
                            const imgRes = await fetch(
                                `http://localhost:8080/api/product/${product.id}/image`
                            );
                            const blob = await imgRes.blob();
                            const imageUrl = URL.createObjectURL(blob);

                            return { ...product, imageUrl };
                        } catch {
                            return { ...product, imageUrl: null };
                        }
                    })
                );

                setProducts(updatedProducts);
            } catch (err) {
                setError(true);
                setErrorMessage(err.message);
            } finally {
                setLoading(false);
            }
        };


        fetchProductsWithImages();
        console.log(products)
    }, []);



    if (loading) {
        return (
            <div className="flex justify-center items-center  w-full h-[50%]">
                <img src="/loading.gif" alt="loading" className="w-[50%] h-[50%]" />
            </div>
        );
    }else if (error) {
        return (
            <div className="flex justify-center items-center min-h-[50%] h-100vh w-full">
                <img src="/error.gif" alt="error" className="w-40 h-full object-contain"/>
            </div>
        )
    }

    return (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                <ProductCards key={product.id} product={product}/>
            </Link>
            ))}
        </div>

    )
}
export default Home
