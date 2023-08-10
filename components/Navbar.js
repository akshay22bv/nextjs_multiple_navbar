"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
  let logo =
    "https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp";

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white">
        <div className="md:flex font-medium justify-around items-center">
          {/* nav logo */}
          <div className="w-full md:w-auto py-8 px-5 flex items-center justify-between border-b drop-shadow">
            <img src={logo} alt="navlogo" className="cursor-pointer h-9" />
            <div
              className="inline-block md:hidden cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {!open ? <AiOutlineMenu /> : <ImCancelCircle />}
            </div>
          </div>

          {/* nav links */}
          <ul className="md:flex items-center gap-8 uppercase hidden">
            <li>
              <Link to="/" href="" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
          {/* mobile links  */}

          <ul
            className={`md:hidden bg-white absolute w-full h-full p-5 duration-300 ${
              !open ? "-left-[100%]" : "left-0"
            }`}
          >
            <li>
              <Link to="/" href="" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
