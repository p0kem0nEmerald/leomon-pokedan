import * as React from "react";

import Link from "next/link";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";

const FriendAreaLink = ({ children, friendArea, ...props }) => {
  return (
    <div {...props}>
      <Link href={`/friend-area/${friendArea.base}`}>
        <a>
          <Tooltip title={`「${friendArea.name}」のページに移動する。`}>
            <span>{children}</span>
          </Tooltip>
        </a>
      </Link>
    </div>
  );
};

FriendAreaLink.propTypes = {
  children: PropTypes.node,
  pokemon: PropTypes.object,
};

FriendAreaLink.defaultProps = {};

export default FriendAreaLink;
