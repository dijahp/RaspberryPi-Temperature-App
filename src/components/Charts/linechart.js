import React from "react";
import { GEOMS } from "react-d3-ggplot";
import { XAxis } from "react-d3-ggplot";
import { YAxis } from "react-d3-ggplot";
import { Line } from "react-d3-ggplot";
import { tsla } from "./data";

const data = tsla.chart.map(day => ({
  ...day,
  date: new Date(day.date)
}));

const aes = ["date", "close"];

const dimensions = { width: window.innerWidth, height: 400, padding: 50 };

const LineChart = () => {
  return (
    <div className="card">
      <GEOMS data={data} aes={aes} dimensions={dimensions}>
        <XAxis />
        <YAxis />
        <Line />
      </GEOMS>
    </div>
  );
};

export default LineChart;
