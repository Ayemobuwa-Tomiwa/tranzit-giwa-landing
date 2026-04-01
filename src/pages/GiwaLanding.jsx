import tranzitLogo from "../assets/tranzit-logo.jpeg";
import giwaLogo from "../assets/giwa-logo.jpeg";
import bg from "../assets/bg-waterpark.jpg";
import bus from "../assets/bus.png";

import { useEffect, useState } from "react";

export default function GiwaLanding() {

  const MAX_USERS = 20;

  const [count, setCount] = useState(0);

  /* Fetch registration count */

  useEffect(() => {

    fetch("http://localhost:5000/count")
      .then(res => res.json())
      .then(data => {

        setCount(data.count);

      })
      .catch(err => {

        console.log("Error fetching count:", err);

      });

  }, []);

  /* Logic */

  const remaining = MAX_USERS - count;

  const showDiscount = count < MAX_USERS;

  return (

    <div
      className="min-h-screen flex justify-center items-center px-3 py-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >

      {/* Poster Container */}

      <div className="w-full max-w-md">

        <div className="bg-white/90 rounded-3xl p-5 shadow-xl">

          {/* Logos */}

          <div className="flex justify-center items-center gap-2 mb-4">

            <img src={tranzitLogo} className="h-8" />

            <span className="font-bold text-lg">
              ×
            </span>

            <img src={giwaLogo} className="h-10" />

          </div>

          {/* Title */}

          <h1 className="text-center text-3xl font-extrabold text-gray-800">
            Giwa Gardens Getaway
          </h1>

          {/* Promo Banner */}

          <div className="mt-3 text-center">

            <span className="bg-yellow-400 px-4 py-2 rounded-lg font-bold text-sm shadow">
              BOOK A TRIP TO THE BIGGEST WATER PARK IN LAGOS!
            </span>

          </div>

          {/* Choose Text */}

          <p className="text-center text-gray-700 mt-4 font-medium">
            Choose One-Way or Two-Way Trip:
          </p>

          {/* Trip Cards */}

          <div className="grid grid-cols-2 gap-3 mt-4">

            {/* One Way */}

            <div className="bg-white rounded-2xl shadow p-3 text-center">

              <h3 className="font-semibold text-sm">
                One-Way Trip
              </h3>

              <img
                src={bus}
                className="h-16 mx-auto my-2"
              />

              <p className="text-xs text-gray-500">
                Jakande → Sangotedo
              </p>

              <p className="text-lg font-bold text-green-600 mt-1">
                ₦2,000
              </p>

              <a
                href="https://paystack.shop/pay/tranzit-giwa"
                target="_blank"
                className="block mt-2 bg-green-600 text-white py-2 rounded-xl text-sm font-semibold"
              >
                Proceed to Pay
              </a>

            </div>

            {/* Two Way */}

            <div className="bg-white rounded-2xl shadow p-3 text-center relative">

              {/* Discount Badge */}

              {showDiscount && (

                <div className="absolute -top-2 right-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow">
                  ₦500 OFF
                </div>

              )}

              <h3 className="font-semibold text-sm">
                Two-Way Trip
              </h3>

              <img
                src={bus}
                className="h-16 mx-auto my-2"
              />

              <p className="text-xs text-gray-500">
                Jakande → Sangotedo
              </p>

              <p className="text-lg font-bold text-green-600 mt-1">
                ₦3,500
              </p>

              <a
                href="https://paystack.shop/pay/tranzit-giwa-return"
                target="_blank"
                className="block mt-2 bg-blue-600 text-white py-2 rounded-xl text-sm font-semibold"
              >
                Proceed to Pay
              </a>

            </div>

          </div>

          {/* Counter */}

          {showDiscount && (

            <div className="text-center mt-3">

              <p className="text-orange-600 font-bold">

                {remaining} slots left for ₦500 discount

              </p>

            </div>

          )}

          {/* Features */}

          <div className="mt-5 text-sm text-gray-700 space-y-2">

            <p>✔ Comfy Transport</p>

            <p>✔ Professional Drivers</p>

            <p>✔ Return Trip with Two-Way Trip</p>

          </div>

        </div>

      </div>

    </div>

  );

}