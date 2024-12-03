"use client";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {

  return (
    <>
      <nav className="sticky top-0 bg-white z-50 flex h-[15vh] justify-between pr-8 pl-8 items-center below-sm:pr-2 below-sm:pl-3 shadow-md below-sm:h-auto below-sm:p-[1rem] ">
        <div className="w-[7%]  below-tab:w-[15%]  ">
          <Image className="w-full" src={Logo} alt="Visra" />
        </div>

        <div className="navlinks flex gap-9 text-[1.1rem]  below-tab:text-[1rem] below-tab:gap-5 ">
          <Link className="hover:text-red-400" href={"/"}>Orders</Link>
          <Link className="hover:text-red-400" href={"/cancelorder"}>Complete Orders</Link>
          <Link className="hover:text-red-400" href={"/cancelorder"}>Cancel Orders</Link>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
