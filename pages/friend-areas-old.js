import Admin from "layouts/Admin.js";
import CardFriendArea from "components/Cards/CardFriendArea";
import CardProfile from "components/Cards/CardProfile.js";
import CardSettings from "components/Cards/CardSettings.js";
import FriendAreaData from "data/json/friend-area.json";
import Grid from "@mui/material/Grid";
import React from "react";

export default function FriendAreas() {
  return (
    <div className="flex flex-col relative">
      <div className="flex flex-wrap justify-start mt-6 mx-2">
        <Grid container>
          {FriendAreaData.map((friendArea) => (
            <Grid item xs={6} md={4} lg={3}>
              <CardFriendArea
                key={friendArea.base}
                friendArea={friendArea}
                className="mx-2 mb-10"
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

FriendAreas.layout = Admin;
