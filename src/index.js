//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import reactDom from "react-dom";

const nowTime = new Date();
const time = nowTime.getHours();
console.log(time);

let msg = "";
let myStyle = {
  color: "black",
};

if (0 < time && time < 12) {
  msg = "morning";
  myStyle.color = "red";
} else if (12 <= time && time < 18) {
  msg = "Afternoon";
  myStyle.color = "green";
} else if (18 <= time && time < 24) {
  myStyle.color = "blue";
  msg = "evening";
}

reactDom.render(
  <div>
    <h1 style={myStyle}>Good {msg}!</h1>
  </div>,
  document.getElementById("root")
);
