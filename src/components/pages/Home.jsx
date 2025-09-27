import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      setLoader(true);
      setError(false);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Network Error:", error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchProducts();
  }, []);

  if (loader) {
    return (
      <h2 className="text-center text-lg font-semibold mt-8">  <FontAwesomeIcon icon={faSpinner} spin size="2x" /></h2>
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
    <div className=" min-h-screen pt-2   ">

      <div>
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6cbfac6f1b2702a4.jpg?q=60"
          alt="Banner"
          className="w-full object-cover  h-72   rounded-lg"
        />



        <div className="  grid  grid-cols-1 text-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  mt-10 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="  bg-white text-black rounded-lg shadow-md p-4 flex flex-col justify-between transition-transform hover:scale-105 duration-200"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-36 object-contain mb-4 transition-transform duration-200 hover:scale-105"
              />
              <h6 className="text-sm md:text-base font-semibold mb-2 line-clamp-2 dark:text-white">
                {product.title}
              </h6>
              <p className="text-green-600 dark:text-green-400 font-bold text-lg mb-4">
                ${product.price}
              </p>
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

    </div>
  );
};

export default Home;
