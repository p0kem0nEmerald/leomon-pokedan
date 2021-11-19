import * as React from "react";

import Flippy, { BackSide, FrontSide } from "react-flippy";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import PokemonIcons from "components/Pokemon/PokemonIcons";
import Typography from "@mui/material/Typography";
import VideoLink from "components/Link/videoLink";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { formatDate } from "lib/utils";
import { getVideoThumbSrc } from "lib/video";

const CardVideo = ({ video, ...props }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }} {...props}>
      <Flippy
        flipOnHover={true}
        flipOnClick={false}
        flipDirection="horizontal"
        isFlipped={isFlipped}
      >
        <FrontSide>
          <CardMedia
            component="img"
            height="194"
            image={getVideoThumbSrc(video)}
            alt={video.name}
          />
        </FrontSide>
        <BackSide className="overflow-y-scroll">
          <CardContent className="w-full flex flex-col items-center">
            {video.getPokemons.length > 0 && (
              <>
                <div className="mr-auto font-bold">【であった】</div>
                <PokemonIcons pokemons={video.getPokemons} />
              </>
            )}

            {video.evoPokemons.length > 0 && (
              <>
                <div className="mr-auto font-bold">【しんか】</div>
                <PokemonIcons pokemons={video.evoPokemons} />
              </>
            )}

            <VideoLink videoNo={video.no}>
              <Button
                color="error"
                variant="contained"
                endIcon={<YouTubeIcon />}
                className="mx-auto mt-4"
              >
                視聴する
              </Button>
            </VideoLink>
          </CardContent>
        </BackSide>
      </Flippy>
    </Card>
  );
};

export default CardVideo;
