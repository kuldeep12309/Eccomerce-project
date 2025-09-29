import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cartSlice";

// FontAwesome Spinner Icon
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import customQueries from "../hooks/customQueries";

const Products = () => {
    const [products, error, loader] = customQueries(
        "https://fakestoreapi.com/products"
    );

    const dispatch = useDispatch();


    if (loader) {
        return (
            <h2 className="text-center text-lg font-semibold mt-8">
                <FontAwesomeIcon icon={faSpinner} spin size="2x" />
            </h2>
        );
    }

    if (error) {
        return (
            <h2 className="text-center text-red-500 font-semibold mt-8">
                Check your internet connection
            </h2>
        );
    }

    return (
        <div className="min-h-screen ">
            <h1 className="text-center light:text-black dark:text-white mt-4 mb-5 ">
                {" "}
                Our Products
            </h1>
            <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:bg-amber-300  gap-3 sm:gap-8 mt-8 sm:max-w-full  mx-auto sm:px-4 px-2 py-2 sm:py-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className=" text-black   dark:text-white rounded-lg  pt-2 pl-2 pr-2 flex flex-col justify-between transition-transform hover:scale-105 duration-200"
                    >
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-32 sm:h-36 object-contain mb-4 transition-transform duration-200 hover:scale-105"
                        />

                        {/* Product Title */}
                        <p className=" text-fuchsia-600 font-semibold text-center text-md sm:text-lg  line-clamp-2">
                            {product.title}
                        </p>

                        {/* Product Price */}
                        <p className="text-green-600 mx-4 dark:text-green-400 font-bold text-lg sm:text-lg  sm:mb-4">
                            ${product.price}
                        </p>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className=" h-10  mb-5 sm:full sm:py-2 sm:px-4 border border-blue-600  rounded bg-amber-900 text-white transition"
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
