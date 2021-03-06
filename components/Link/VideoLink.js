/**
 * @file Videolink Components
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */
 
import * as React from "react";

import Link from "next/link";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";

const VideoLink = ({ children, videoNo, ...props }) => {
  return (
    <div {...props}>
      {videoNo && (
        <Link href={`/video/${videoNo}`}>
          <a>
            <Tooltip title={`#${videoNo}の動画を視聴する。`}>
              <span>{children}</span>
            </Tooltip>
          </a>
        </Link>
      )}
    </div>
  );
};

VideoLink.propTypes = {
  children: PropTypes.node,
  videoNo: PropTypes.number,
};

VideoLink.defaultProps = {};

export default VideoLink;
