import { useSelector, useDispatch } from "react-redux";
import {
  removeCart,
  clearCart,
  incrementItem,
  dedcrementItem,
} from "../app/features/cartSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-4 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Cart Heading */}
      <div className="flex items-center justify-center mt-5">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-3xl text-blue-600 mr-2"
        />
        <h2 className="text-2xl font-bold text-center">
          Your Cart ({totalItems} items)
        </h2>
      </div>

      {/* Empty Cart */}
      {items.length === 0 ? (
        <p className="text-center text-2xl text-gray-500 mt-10">
          Your cart is empty
        </p>
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 object-contain mx-auto mb-3"
                />
                <p className="font-semibold text-sm line-clamp-2">{product.title}</p>
                <p className="text-green-600 font-bold mt-1">${product.price}</p>
                <p className="mt-1 text-gray-600">Qty: {product.quantity}</p>

                {/* Controls */}
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex gap-1 border rounded overflow-hidden">
                    <button
                      onClick={() => dispatch(incrementItem(product.id))}
                      className="flex-1 px-2 py-1 bg-green-100 text-green-700 font-bold hover:bg-green-200"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(dedcrementItem(product.id))}
                      className="flex-1 px-2 py-1 bg-red-100 text-red-700 font-bold hover:bg-red-200"
                    >
                      -
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeCart(product.id))}
                    className="text-red-600 hover:text-red-800 text-sm font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section (Total + Clear Cart) */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Clear Cart
            </button>

            <div className="text-xl font-bold">
              Total: <span className="text-green-600">${totalPrice}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
