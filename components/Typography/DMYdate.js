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
