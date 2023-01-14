import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{}, "Hello World!");
console.log(heading1); // prints the heading object on console 
const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading1);
    