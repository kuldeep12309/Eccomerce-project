import { useSelector, useDispatch } from "react-redux";
import {
  removeCart,
  clearCart,
  incrementItem,
  decrementItem,
} from "../../app/features/cartSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4 min-h-screen">
      <div className="flex items-center justify-center mt-5">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-3xl text-blue-600 mr-2"
        />
        <h1>Cart</h1>
      </div>
      <hr />
      {items.length === 0 ? (
        <p className="text-center text-2xl text-gray-500 mt-10">
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-8 mt-8 mx-auto sm:px-4 px-2 py-2 sm:py-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="text-black dark:text-white rounded-lg pt-2 pl-2 pr-2 flex flex-col justify-between transition-transform hover:scale-105 duration-200 border"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 sm:h-36 object-contain mb-4 transition-transform duration-200 hover:scale-105"
                />
                <p className="text-fuchsia-600 font-semibold text-center text-md sm:text-lg line-clamp-2">
                  {item.title}
                </p>
                <p className="text-green-600 mx-4 dark:text-green-400 font-bold text-lg sm:mb-4">
                  ${item.price}
                </p>
                <div className="flex justify-center items-center gap-2 mt-2  ">
                  <button
                    onClick={() => dispatch(decrementItem(item.id))}
                    className="px-2 py-1 bg-red-200 rounded w-32"
                  >
                    -
                  </button>

                  <button
                    onClick={() => dispatch(incrementItem(item.id))}
                    className="px-2 py-1 bg-green-200 rounded w-32"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeCart(item.id))}
                  className="mt-2 text-md hover:text-blue-600  text-red-600  mb-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <hr />
          {/* Bottom Section */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
