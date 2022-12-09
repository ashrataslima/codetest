import React from "react";
import { Data2 } from "../mockData/data2";
import { Data1 } from "../mockData/data1";
import { ReturnFunction } from "./returnFunction";

export const Task3 = () => {
  const gameData = ReturnFunction(Data2, "ga", "gf");
  const tempData = ReturnFunction(Data1, "Maximum", "Minimum");
  return (
    <div>
      <h1> Coding Task #3</h1>
      <h2>Game Data</h2>
      <div style={{ color: "red" }}>
        <h2>Smallest Goal Difference {gameData.min}:</h2>
        {gameData.minimumArray.map((e) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              Club Position: {e.POSITION}, Club's Goals for (GF): {e.gf}, Club's
              Goals Against (GA): {e.ga}, Goal difference: {gameData.min}
            </div>
          );
        })}
        <br />
        <h2>Largest Goal Difference {gameData.max}:</h2>
        {gameData.maximumArray.map((e) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              Club Position: {e.POSITION}, Club's Goals for (GF): {e.gf}, Club's
              Goals Against (GA): {e.ga}, Goal difference: {gameData.max}
            </div>
          );
        })}
      </div>

      <h2>Temperature Data</h2>
      <div style={{ color: "red" }}>
        <h2>Smallest Spread {tempData.min}:</h2>
        {tempData.minimumArray.map((e) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              Date: {e.date}, Maximum Daily Temperature: {e.Maximum}, Minimum
              Daily Temperature: {e.Minimum}, Temperature Spread: {tempData.min}
            </div>
          );
        })}
        <br />
        <h2>Largest Spread {tempData.max}:</h2>
        {tempData.maximumArray.map((e) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              Date: {e.date}, Maximum Daily Temperature: {e.Maximum}, Minimum
              Daily Temperature: {e.Minimum}, Temperature Spread: {tempData.max}
            </div>
          );
        })}
      </div>
    </div>
  );
};
