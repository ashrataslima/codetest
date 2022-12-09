import React, { useState } from "react";
import { Data2 } from "../mockData/data2";

export const Task2 = () => {
  const [maximumArray, setMaximumArray] = useState([]);
  const [minimumArray, setMinimumArray] = useState([]);
  var maxArray = [];
  var minArray = [];
  var max = null;
  var min = null;
  var last = 0;
  Data2.forEach((e, index) => {
    const difference = Math.abs(e.gf - e.ga);
    last = index;
    if (index === 0) {
      min = difference;
    }
    if (difference === max) {
      maxArray.push(e);
    }
    if (difference > max) {
      max = difference;
      maxArray = [];
      maxArray.push(e);
    }
    if (difference === min) {
      minArray.push(e);
    }
    if (difference < min) {
      min = difference;
      minArray = [];
      minArray.push(e);
    }
  });

  if (
    last + 1 === Data2.length &&
    maximumArray.length === 0 &&
    minimumArray.length === 0
  ) {
    setMaximumArray([...maxArray]);
    setMinimumArray([...minArray]);
  }
  return (
    <div>
      <h1> Coding Task #2</h1>
      <div style={{ color: "red" }}>
        <h2>Smallest Goal Difference {min}:</h2>
        {minimumArray.map((e) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              Club Position: {e.POSITION}, Club's Goals for (GF): {e.gf}, Club's
              Goals Against (GA): {e.ga}, Goal difference: {min}
            </div>
          );
        })}
        <br />
        <h2>Largest Goal Difference {max}:</h2>
        {maximumArray.map((e) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              Club Position: {e.POSITION}, Club's Goals for (GF): {e.gf}, Club's
              Goals Against (GA): {e.ga}, Goal difference: {max}
            </div>
          );
        })}
      </div>
    </div>
  );
};
