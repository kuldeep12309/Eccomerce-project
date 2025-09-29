import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import customQueries from "../hooks/customQueries";

const Home = () => {
  const dispatch = useDispatch();
  const [products, error, loader] = customQueries(
    "https://fakestoreapi.com/products"
  );

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
      <div>
        <div className="w-full mt-8  mb-20 sm:p-10 md:p-20 md:mb-28 lg:mb-40 xl:mb-56 2xl:mb-64  p-3 light:text-black light:bg-white  sm:text-2xl    ">
          <h1 className="mb-5 text-center ">Your Styles New Destination - Fashion with Premium Quality</h1>
          <p className="lg:text-2xl xl:text-3xl 2xl:text-4xl xl:p-7 ">
            Discover a modern and fashion-forward clothing destination designed
            for every age, every vibe, and every occasion. From laid-back
            casuals to timeless traditional wear and exclusive statement pieces
            — our curated collection blends comfort, quality, and signature
            style. Every piece is handpicked to reflect your personality, so you
            don’t just wear fashion — you wear you.
          </p>
        </div>
        <hr />

        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7   gap-3 sm:gap-8 mt-8 sm:max-w-full  mx-auto sm:px-4 px-2 py-2 sm:py-8">
          {products.map((product) => (
            <div
              key={product.id}
              className=" text-black   dark:text-white rounded-lg  pt-2 pl-2 pr-2 flex flex-col justify-between transition-transform hover:scale-105 duration-200"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 sm:h-36 object-contain mb-4 transition-transform duration-200 hover:scale-105 flex flex-nowrap"
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
    </div>
  );
};

export default Home;
