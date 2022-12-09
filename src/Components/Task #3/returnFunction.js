import React, { useState } from "react";

export const ReturnFunction = (data, maxKey, minKey) => {
  console.log(data, maxKey, minKey);
  const [maximumArray, setMaximumArray] = useState([]);
  const [minimumArray, setMinimumArray] = useState([]);
  var maxArray = [];
  var minArray = [];
  var max = null;
  var min = null;
  var last = 0;
  data.forEach((e, index) => {
    const difference = Math.abs(e[maxKey] - e[minKey]);
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
    last + 1 === data.length &&
    minimumArray.length === 0 &&
    maximumArray.length === 0
  ) {
    setMaximumArray([...maxArray]);
    setMinimumArray([...minArray]);
  }
  return { maximumArray, minimumArray, min, max };
};
