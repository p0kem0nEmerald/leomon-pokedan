import GithubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const SNS = [
  {
    name: "youtube",
    icon: (props) => {
      return <YouTubeIcon {...props} />;
    },
    base: "https://youtube.com/",
    brandColor: "#ff0000",
  },
  {
    name: "twitter",
    icon: (props) => {
      return <TwitterIcon {...props} />;
    },
    base: "https://twitter.com/",
    brandColor: "#4da7de",
  },
  {
    name: "github",
    icon: (props) => {
      return <GithubIcon {...props} />;
    },
    base: "https://github.com/",
    brandColor: "#333333",
  },
];
