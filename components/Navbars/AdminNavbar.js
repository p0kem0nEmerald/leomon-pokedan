/**
 * @file Adminnavbar Components
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */
 
import * as React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="hidden md:flex sticky top-0 left-0 w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 bg-blueGray-800 mb-32">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm hidden lg:inline-block font-semibold"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            LeoTube
          </a>
          {/* User */}
          <ul className="flex-col flex-row list-none items-center hidden md:flex ml-auto">
            <UserDropdown name={"Leomon"} />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
