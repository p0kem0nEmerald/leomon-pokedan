import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import FriendAreaLink from "components/Link/FriendAreaLink";
import Typography from "@mui/material/Typography";

const CardFriendArea = ({ friendArea, ...props }) => {
  return (
    <div {...props}>
      <FriendAreaLink friendArea={friendArea}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">{friendArea.num}</Avatar>}
            title={friendArea.name}
          />
          <CardMedia
            component="img"
            height="194"
            image={`/images/friend-areas/${friendArea.base}.png`}
            alt={friendArea.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {friendArea.description}
            </Typography>
          </CardContent>
        </Card>
      </FriendAreaLink>
    </div>
  );
};

export default CardFriendArea;
