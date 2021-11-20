/**
 * @file Title Components
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */
 
import * as React from "react";

function Title({ children }) {
  return <h1 className="text-3xl font-semibold text-gray-700">{children}</h1>;
}

export default Title;
