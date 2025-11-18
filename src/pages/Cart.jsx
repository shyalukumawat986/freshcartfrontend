import React, { useState } from "react";
import { X } from "lucide-react";

export default function CartSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Haldiram's Sev Bhujia",
      price: 21.6,
      image: "https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "NutriChoice Digestive",
      price: 24.0,
      image: "https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg",
      quantity: 1,
    },
  ]);

  // Quantity increment/decrement functions
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="font-[Inter] bg-gray-50 min-h-screen">
      {/* 🛒 Open Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="m-5 px-5 py-2 bg-green-600 text-white rounded-md"
      >
        🛒 Open Cart
      </button>

      {/* Cart Slider */}
      <div
        className={`fixed top-0 right-0 w-96 h-screen bg-white shadow-2xl transform transition-transform duration-300 flex flex-col z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Shop Cart</h2>
          <X
            onClick={() => setIsOpen(false)}
            className="text-gray-600 cursor-pointer hover:text-black"
          />
        </div>

        <p className="text-gray-500 text-sm px-5">Location in 382480</p>
        <div className="mx-5 my-3 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          You’ve got <strong>FREE delivery</strong>. Start checkout now!
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5">
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-3 my-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <p
                    onClick={() => removeItem(item.id)}
                    className="text-green-600 text-xs cursor-pointer"
                  >
                    🗑 Remove
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="text-lg"
                  >
                    −
                  </button>
                  <span className="w-5 text-center">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="text-lg"
                  >
                    +
                  </button>
                </div>
                <div className="w-16 text-right font-semibold">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-5 border-t flex justify-between">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Continue Shopping
          </button>
          <button className="bg-[#051c2c] text-white px-4 py-2 rounded-md">
            Checkout (${total.toFixed(2)})
          </button>
        </div>
      </div>
    </div>
  );
}
