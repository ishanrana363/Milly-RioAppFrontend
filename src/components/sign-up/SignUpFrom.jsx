"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="  flex flex-col lg:flex-row  items-center justify-center lg:gap-16 ">
      <div className=" lg:mt-20 mt-[20%] ">
        <div className="bg-white px-6 rounded-lg shadow-lg lg:w-[496px] w-full py-8  lg:py-16 border border-blue-200">
          {/* Title */}
          <h2 className="lg:text-[28px] text-xl  text-center text-[#000030] font-bold ">
            Sign up
          </h2>
          <p className="text-center text-[#888888] text-xs mt-2 pb-8 lg:pb-16  ">
            Give us some information to create Milly & Rio account.
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

              {/* Password Field */}
              <fieldset
                className={`relative border border-gray-300 rounded-lg mt-4 px-3 py-2 transition-all ${
                  passwordFocused || password ? "border-blue-500" : ""
                }`}
              >
                <legend
                  className={`absolute text-sm transition-all ${
                    passwordFocused || password
                      ? "-top-3 left-2 text-[#000030] px-1 bg-white"
                      : "top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                  }`}
                >
                  Password
                </legend>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="w-full outline-none bg-transparent text-gray-700 py-1"
                  placeholder={passwordFocused ? "Enter your password" : ""}
                  value={password}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={(e) => {
                    setPasswordFocused(e.target.value !== "");
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </fieldset>

              {/* Confirm Password Field */}

              <fieldset
                className={`relative border border-gray-300 rounded-lg mt-4 px-3 py-2 transition-all ${
                  confirmPasswordFocused || password ? "border-blue-500" : ""
                }`}
              >
                <legend
                  className={`absolute text-sm transition-all ${
                    confirmPasswordFocused || password
                      ? "-top-3 left-2 text-[#000030] px-1 "
                      : "top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                  }`}
                >
                  Confiremd Password
                </legend>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="w-full outline-none bg-transparent text-gray-700 py-1"
                  placeholder={confirmPasswordFocused ? "Enter your password" : ""}
                  value={password}
                  onFocus={() => setConfirmPasswordFocused(true)}
                  onBlur={(e) => {
                    setConfirmPasswordFocused(e.target.value !== "");
                  }}
                  onChange={(e) => setConfirmPasswordFocused(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </fieldset>

              
              {/* Login Button */}
              <button className="w-full bg-yellow-500 text-xl text-white font-bold py-3 mt-7 lg:mt-14 cursor-pointer rounded-lg">
              Sign up
              </button>
            </form>

            {/* Signup Link */}
            <p className="text-center text-gray-600 ">
              You have an already account?{" "}
              <Link href="/login" className="text-yellow-500 font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/loginImg.png"
          alt="Milly & Rio logo"
          width={543}
          height={460}
        />
      </div>
    </div>
  );
};

export default SignUpFrom;
