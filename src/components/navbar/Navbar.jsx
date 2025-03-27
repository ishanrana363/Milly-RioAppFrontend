"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Switch, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const pathname = usePathname();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Switch background color state
  const [bgColor, setBgColor] = useState("yellow");

  const handleChange = (checked) => {
    setBgColor(checked ? "white" : "yellow");
  };

  // Refs for dropdowns
  const exploreRef = useRef(null);
  const shopRef = useRef(null);

  const handleExploreMenuToggle = () => {
    setIsExploreOpen(!isExploreOpen);
    setIsShopOpen(false);
  };

  const handleShopMenuToggle = () => {
    setIsShopOpen(!isShopOpen);
    setIsExploreOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target) &&
        shopRef.current &&
        !shopRef.current.contains(event.target)
      ) {
        setIsExploreOpen(false);
        setIsShopOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className=" bg-[#6CAEEB] shadow  " >
        <div className=" max-w-7xl mx-auto px-4  lg:px-4 lg:py-4 py-2  flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={56}
                height={56}
                style={{ borderRadius: "8px" }}
              />
            </Link>
            <h1 className="text-[20px] lg:text-[28px] text-[#000030]">
              Milly & Rio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex font-medium items-center gap-8 text-[#000030]">
              <li>
                <Link href="/" className="hover:text-gray-700">
                  Home
                </Link>
              </li>

              {/* Explore Dropdown */}
              <li ref={exploreRef} className="relative">
                <button
                  className="hover:text-gray-700 cursor-pointer flex items-center"
                  onClick={handleExploreMenuToggle}
                >
                  Explore <span className="text-[12px] ml-1">▼</span>
                </button>
                {isExploreOpen && (
                  <ul className="absolute top-full left-0 w-[216px] py-4 text-[#000030] rounded-2xl  mt-8 bg-white shadow-md">
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/explore1">Fun Activities</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/explore1">Books & Stories</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/explore1">Games</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/explore1">Meet Milly & Rio</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/explore1">Educational Resources</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/explore1">Community & Events</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Shop Dropdown */}
              <li ref={shopRef} className="relative">
                <button
                  className="hover:text-gray-700 flex items-center cursor-pointer"
                  onClick={handleShopMenuToggle}
                >
                  Shop <span className="text-[12px] ml-1">▼</span>
                </button>
                {isShopOpen && (
                  <ul className="absolute top-full left-0 w-[216px] text-[#000030] rounded-2xl py-4  mt-8 bg-white shadow-md">
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop1">Gift Sets</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop1">All Products</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop1">T-Shirts</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop1">Hoodies & Sweatshirts</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop1">Kids’ Collection</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop1">Diabetes Awareness</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop1">Accessories</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop1">Limited Edition</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link href="/about" className="hover:text-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-gray-700">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-700">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Switch
              style={{ backgroundColor: bgColor }}
              defaultChecked
              onChange={handleChange}
            />
            <Link
              className="bg-[#F6BB09] px-8 py-3 font-bold text-white rounded-2xl"
              href={"/login"}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsDrawerOpen(true)}>
            <MenuOutlined className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Ant Design Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
