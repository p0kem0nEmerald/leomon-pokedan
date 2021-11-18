import * as React from "react";

import CardActionArea from "@mui/material/CardActionArea";
import FriendAreaLink from "components/Link/FriendAreaLink";
import PropTypes from "prop-types";
import { getFriendAreaImgSrc } from "lib/friend-area";

const CardFriendAreaThumbnail = ({
  friendArea,
  imgProps,
  overlayProps,
  ...props
}) => {
  return (
    <FriendAreaLink friendArea={friendArea}>
      <CardActionArea {...props}>
        {/* Thumbnail Images */}
        <img src={getFriendAreaImgSrc(friendArea)} {...imgProps} />
      </CardActionArea>
    </FriendAreaLink>
  );
};

CardFriendAreaThumbnail.propTypes = {
  friendArea: PropTypes.object.isRequired,
  imgProps: PropTypes.object,
};

CardFriendAreaThumbnail.defaultProps = {
  imgProps: {
    className: "object-cover",
  },
};

export default CardFriendAreaThumbnail;
