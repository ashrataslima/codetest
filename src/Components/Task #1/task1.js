import React, { useState } from "react";
import { Data1 } from "../mockData/data1";

export const Task1 = () => {
  const [maximumArray, setMaximumArray] = useState([]);
  const [minimumArray, setMinimumArray] = useState([]);
  var maxArray = [];
  var minArray = [];
  var max = null;
  var min = null;
  var last = 0;
  Data1.forEach((e, index) => {
    const spread = e.Maximum - e.Minimum;
    last = index;
    if (index === 0) {
      min = spread;
    }
    if (spread === max) {
      maxArray.push(e);
    }
    if (spread > max) {
      max = spread;
      maxArray = [];
      maxArray.push(e);
    }
    if (spread === min) {
      minArray.push(e);
    }
    if (spread < min) {
      min = spread;
      minArray = [];
      minArray.push(e);
    }
  });

  if (
    last + 1 === Data1.length &&
    minimumArray.length === 0 &&
    maximumArray.length === 0
  ) {
    setMaximumArray([...maxArray]);
    setMinimumArray([...minArray]);
  }

  return (
    <div>
      <h1> Coding Task #1</h1>
      <div style={{ color: "red" }}>
        <h2>Smallest Spread {min}:</h2>
        {minimumArray.map((e) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              Date: {e.date}, Maximum Daily Temperature: {e.Maximum}, Minimum
              Daily Temperature: {e.Minimum}, Temperature Spread: {min}
            </div>
          );
        })}
        <br />
        <h2>Largest Spread {max}:</h2>
        {maximumArray.map((e) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              Date: {e.date}, Maximum Daily Temperature: {e.Maximum}, Minimum
              Daily Temperature: {e.Minimum}, Temperature Spread: {max}
            </div>
          );
        })}
      </div>
    </div>
  );
};
