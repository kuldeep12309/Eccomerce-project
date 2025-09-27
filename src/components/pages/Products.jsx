import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cartSlice";

// FontAwesome Spinner Icon
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = () => {
    const [products, setProducts] = useState([]); // Holds list of products
    const [error, setError] = useState(false); // Tracks error state
    const [loader, setLoader] = useState(true); // Shows loading spinner

    const dispatch = useDispatch(); // To dispatch Redux actions (e.g. addToCart)

    // Fetch products from API when component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            setLoader(true);
            setError(false);
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data); // Set product data to state
            } catch (error) {
                console.error("Network Error:", error);
                setError(true); // Show error message
            } finally {
                setLoader(false); // Hide spinner in all cases
            }
        };

        fetchProducts();
    }, []);

    // Show spinner while loading
    if (loader) {
        return (
            <h2 className="text-center text-lg font-semibold mt-8 text-black dark:text-white">
                <FontAwesomeIcon icon={faSpinner} spin size="2x" />
            </h2>
        );
    }

    // Show error message if API call fails
    if (error) {
        return (
            <h3 className="text-center text-red-500 font-semibold mt-10 dark:text-red-400">
                Check your internet connection
            </h3>
        );
    }

    return (
        <div className="max-w-full mx-auto px-4 py-8">
            {/* Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-black dark:text-white">
                Products
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md p-4 flex flex-col justify-between transition-transform hover:scale-105 duration-200"
                    >
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-36 object-contain mb-4 transition-transform duration-200 hover:scale-105"
                        />

                        {/* Product Title */}
                        <h6 className="text-sm md:text-base font-semibold mb-2 line-clamp-2">
                            {product.title}
                        </h6>

                        {/* Product Price */}
                        <p className="text-green-600 dark:text-green-400 font-bold text-lg mb-4">
                            ${product.price}
                        </p>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                        >
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
