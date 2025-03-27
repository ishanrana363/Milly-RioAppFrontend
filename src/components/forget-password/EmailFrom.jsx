"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation'



const EmailFrom = () => {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate email
    // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //   alert("Invalid email address");
    //   return;
    // }
    // send email to server for verification
    //...
    alert("Email sent successfully. Please check your email for further instructions.");
    setEmail("");
    setEmailFocused(false);
    router.push("/otp-verify")
    
  };

  return (
    <div className="flex flex-col lg:flex-row  items-center justify-center lg:gap-16 ">
      <div className=" lg:mt-20 mt-[20%] relative rounded-4xl  ">
        <div className="  " >
          <span className=" absolute -right-[7%] -top-2 w-14 h-14 rounded-full  cursor-pointer " >
          <RxCross2 className=" text-yellow-400 shadow rounded-full  " size={24} />
          </span>
        </div>
        <div className="bg-white px-6 rounded-lg shadow-lg lg:w-[496px] w-full py-8  lg:py-16  ">
          {/* Title */}
          <h2 className="lg:text-[28px] text-xl  text-center text-[#000030] font-bold ">
            Forget password?
          </h2>
          <p className="text-center text-[#888888] text-xs mt-2 pb-8 lg:pb-16  ">
            You have to verify your email id for reset your password.
          </p>

          <div className="   ">
            <form action="">
              {/* Email Field */}
              <fieldset
                className={`relative border border-gray-300 rounded-lg  px-3 py-2 transition-all ${
                  emailFocused || email ? "border-blue-500" : ""
                }`}
              >
                <legend
                  className={`absolute text-sm transition-all ${
                    emailFocused || email
                      ? "-top-3 left-2 text-[#000030] px-1 text-[16px] bg-white"
                      : "top-1/2 left-3 transform -translate-y-1/2 text-[#000030] px-1 text-[16px]"
                  }`}
                >
                  Email
                </legend>
                <input
                  type="email"
                  className="w-full outline-none bg-transparent text-gray-700 py-1"
                  placeholder={emailFocused ? "Enter your email" : ""}
                  value={email}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={(e) => {
                    setEmailFocused(e.target.value !== "");
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>

              {/* verify Button */}
              <button onClick={handleSubmit} className="w-full text-xl bg-yellow-500 text-white font-bold py-3 mt-7 lg:mt-14 cursor-pointer rounded-lg">
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/emailVerifyImg.png"
          alt="Milly & Rio logo"
          width={596}
          height={350}
        />
      </div>
    </div>
  );
};

export default EmailFrom;
