import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-sm text-gray-600 font-medium">
      
      {/* ====== TOP LINKS ====== */}
      <div className="max-w-7xl mx-auto px-6 py-12 
                      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* --- Categories --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Vegetables & Fruits</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Breakfast & Instant Food</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Bakery & Biscuits</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Atta, Rice & Dal</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Sauces & Spreads</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Organic & Gourmet</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Baby Care</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Cleaning Essentials</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Personal Care</li>
          </ul>
        </div>

        {/* --- Column 2 (Merged for small screens) --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">More Items</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Dairy, Bread & Eggs</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Cold Drinks & Juices</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Tea, Coffee & Drinks</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Masala, Oil & More</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Chicken, Meat & Fish</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Paan Corner</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Pharma & Wellness</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Home & Office</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Pet Care</li>
          </ul>
        </div>

        {/* --- Get to Know Us --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Get to Know Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Company</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">About</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Blog</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Help Center</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Our Value</li>
          </ul>
        </div>

        {/* --- For Consumers --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">For Consumers</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Payments</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Shipping</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Product Returns</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">FAQ</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Shop Checkout</li>
          </ul>
        </div>

        {/* --- Become a Shopper --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Become a Shopper</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Shopper Opportunities</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Become a Shopper</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Earnings</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Ideas & Guides</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">New Retailers</li>
          </ul>
        </div>

      </div>

      {/* ====== MIDDLE BAR ====== */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6
                        flex flex-col gap-6 lg:flex-row justify-between items-center">

          {/* Payment Partners */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="font-semibold text-gray-900">Payment Partners</span>
            <img src="https://freshcart-next-js.vercel.app/images/payment/amazonpay.svg" className="h-5" />
            <img src="https://freshcart-next-js.vercel.app/images/payment/american-express.svg" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-5" />
          </div>

          {/* App Badges */}
          <div className="flex items-center gap-4 justify-center">
            <span className="text-gray-900 font-medium">Get deliveries with FreshCart</span>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* ====== BOTTOM BAR ====== */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 
                        flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-center md:text-left">
            © 2022 - 2025 FreshCart eCommerce Template. Powered by{" "}
            <span className="text-[#0AAD0A] font-medium hover:underline cursor-pointer">
              Codescandy
            </span>.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-gray-800">Follow us</span>
            <FaFacebookF className="text-gray-600 hover:text-[#0AAD0A] cursor-pointer transition" />
            <FaTwitter className="text-gray-600 hover:text-[#0AAD0A] cursor-pointer transition" />
            <FaInstagram className="text-gray-600 hover:text-[#0AAD0A] cursor-pointer transition" />
          </div>
        </div>
      </div>

    </footer>
  );
}
