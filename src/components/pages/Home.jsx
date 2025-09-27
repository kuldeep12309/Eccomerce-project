import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

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
    <div className="min-h-screen pt-2">
      <div>
        <img
          src="data:image/jpeg;base64,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e5xsGgdSVF6NmFZ0xFlfT9jPNTGzH99rozuW6m7E2NyNQPUhak1DuzcmYCzAcIjgZ8MLezB+0+95pP4pL/JqkS84I+yhDfAAfcvRTGahaIiLSCIiAiIgIiICIiAqC+kfhrosZgqgDoki7EnoHMeXgHzIef8AKVfq1uYcEhzBhTqeojEjHdDcWI5Frhu0jxCDkzJuaZ8oYx7RTBhcWGNzZAS1zXEEg2IPNoOx6KzeGeF1ObsyOxqvOoh2ijBFmulF7FjekcQufUcyQVuqXgnQU9dreaqVoO0RdE0HydI2xt6EFWfhuHikjb3WtDWhkTGCzImDkxgsPAXNugWLlviNSa7ozxEyGzNuGMAdoliBEbyC5rmmxLHgb82ghw3BHW5BqzB+Ccprv0ypiEYO7acvllcPAXYA394g+i6IX5ZWy+E/tp8CwSPDKKOKOMRQxD3MQ3sftyH6z778zvvcncblF8yAluySaLdqMzrxYdBmGSmw+lhfoeWOkkY6R0j27OLGNIFrg7m97XWtbiuaMbZdrZ4mHldsNKwDyLgx1v4ir1osFho3OMcbI9RLn9k1seok3JLmgOJ87rOjgbGbhoB8bb/epJrtNLv3VAs4aYvjB/SqptjzDnVFSf5gWfzLcYfwSIb72qm9GCKEfg5/9FdVkV1ffz7puelX0vBagYPeCSQ+Mk0jv/mI1uaPhdhtK2wpofmxzz/7nPU3RTo+tNo/SZNo6T4IYx+7FTN/0RhbGPCIYxsHD0fIPwBWeidGPo6qxhQsA5H5uef6lfvsMf2AshFejH0dV9vD2KP7DfuC/RSsHJoHpt/ReyJ0Y+jdeJpWu53+93/K+44hGNvQc19orqJsXyWAncL6RUEREGizvgRzJliWma7S5+lzCb21Me2RodboS0A+qrXhFkisy3jsstQ5o1gR6GPElwJGyGR5bs3ZpaL7987DdXOizlLeFlByREWkEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q=="
          alt="Banner"
          className="w-full object-contain h-64 bg-white  rounded-lg bg-blend-color-burn"
        />


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-w-full mx-auto px-4 py-8">
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
    </div>
  );
};

export default Home;
