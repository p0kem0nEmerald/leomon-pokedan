/**
 * @file Dmydate Components
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */
 
import * as React from "react";

import Moment from "react-moment";

function DMYdate({ children }) {
  return (
    <Moment format="D MMM YYYY" withTitle>
      {children}
    </Moment>
  );
}

export default DMYdate;
