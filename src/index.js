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
