import * as React from "react";

import Chart from "react-google-charts";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import PokemonData from "data/json/pokemon";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import YouTubeData from "data/json/youtube";

const xAxisData = [
  {
    label: "日時",
    color: "#fad95e",
    getData: (e) => new Date(e.published_at),
  },
  {
    label: "動画数",
    color: "#cb3e33",
    getData: (e) => e.no,
  },
];

const FriendsChart = ({ options, height, ...props }) => {
  const [axisX, setAxisX] = React.useState(xAxisData[0].label);
  const xAxis = xAxisData.find((e) => e.label == axisX);

  var friends = 0;
  const data = [[axisX, "団員数"]].concat(
    YouTubeData.map((e) => [xAxis.getData(e), (friends += e.friends)])
  );

  // xAxisData
  return (
    <div className="relative w-full">
      <div
        className="absolute z-10 bg-gray-900 p-2"
        style={{
          top: height * 0.75 - (39 + 42 * xAxisData.length),
          right: 10,
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">横軸の値</FormLabel>
          <RadioGroup
            value={axisX}
            onChange={(evt) => setAxisX(evt.target.value)}
          >
            {xAxisData.map((e) => (
              <FormControlLabel
                value={e.label}
                control={<Radio />}
                label={e.label}
                className="font-bold"
                style={{
                  color: e.color,
                }}
                key={e.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <Chart
        height={height}
        chartType="AreaChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        options={{
          title: "アヒル団の団員数",
          hAxis: { title: axisX, titleTextStyle: { color: "#1e293b" } },
          vAxis: { title: "団員数", minValue: 0, maxValue: PokemonData.length },

          chartArea: { width: "75%", height: "75%" },
          colors: [xAxis.color],
          // backgroundColor: "transparent",
          ...options,
        }}
        {...props}
      />
    </div>
  );
};

FriendsChart.defaultProps = {
  height: 400,
};

export default FriendsChart;
