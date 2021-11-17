import * as React from "react";

import CardActionArea from "@mui/material/CardActionArea";
import PropTypes from "prop-types";
import VideoLink from "components/Link/VideoLink";

const CardVideoThumbnail = ({
  id,
  videoNo,
  duration,
  imgProps,
  overlayProps,
  ...props
}) => {
  return (
    <VideoLink videoNo={videoNo}>
      <CardActionArea {...props}>
        {/* Thumbnail Images */}
        <img src={`https://i.ytimg.com/vi/${id}/default.jpg`} {...imgProps} />
        {/* Overlays for Thumbnail */}
        <div {...overlayProps}>
          <div className="absolute bottom-0 right-0 bg-black text-white m-1 p-1 flex flex-row items-center text-xs font-bold h-5 rounded-sm">
            <span>{duration}</span>
          </div>
        </div>
      </CardActionArea>
    </VideoLink>
  );
};

CardVideoThumbnail.propTypes = {
  id: PropTypes.string,
  videoNo: PropTypes.number,
  duration: PropTypes.string,
  imgProps: PropTypes.object,
  overlayProps: PropTypes.object,
};

CardVideoThumbnail.defaultProps = {
  imgProps: {
    width: "100%",
    height: "auto",
  },
  overlayProps: {},
};

export default CardVideoThumbnail;
