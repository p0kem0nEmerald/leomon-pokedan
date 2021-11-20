/**
 * @file Admin Layout
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */

import * as React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Sidebar from "components/Sidebar/Sidebar.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <div
          className="px-4 md:px-10 mx-auto w-full overflow-y-scroll py-2"
          style={{ height: "calc(100vh - 160px)" }}
        >
          {children}
        </div>
        <FooterAdmin />
      </div>
    </>
  );
}
