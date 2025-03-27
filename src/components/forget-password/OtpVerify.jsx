"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const OtpVefiry = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  // Handle input change
  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Keep only last entered digit
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle key press for backspace navigation
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle submit
  const handleSubmit = () => {
    const enteredOTP = otp.join("");
    console.log("Entered OTP:", enteredOTP);
    alert(`Entered OTP: ${enteredOTP}`);
  };

  return (
    <div className="mt-52">
      <div className=" flex flex-col lg:flex-row  justify-center  ">
        <div className="bg-white py-16 px-6 rounded-lg shadow-lg lg:w-[496px] w-full  relative">
          {/* Close Button */}
          <button className="absolute -top-4 -right-2 text-yellow-500 text-lg font-bold">
            <RxCross2
              className=" text-yellow-400 shadow rounded-full  "
              size={24}
            />
          </button>

          {/* Title */}
          <h2 className="text-[28px] font-bold text-center text-[#000030]">
            Verify OTP
          </h2>
          <p className="text-center text-gray-500 mt-1 pb-16 ">
            We've sent a 6-digit code to milly12***@gmail.com
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-3 mt-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-bold outline-none focus:border-yellow-500"
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-500 text-white font-bold py-3 mt-16 rounded-lg"
          >
            Submit
          </button>
        </div>
        <div>
            <Image
              src="/otpVerifyImg.png"
              alt="Verify OTP"
              width={576}
              height={576}
            />
        </div>
      </div>
    </div>
  );
};

export default OtpVefiry;
