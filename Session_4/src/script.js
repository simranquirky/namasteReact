import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import CardComponent from "./CardComponent.js";
const title= "Hunger Hub" ;

const HeadingComponent = () => (
    <div id="title" className="title-class" tabIndex="1">
        <h1>{title}</h1>
    </div>
);

const data = [
    {
        img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dql3smhftlkjaqx2hjeb",
        name: "biryani",
        cuisine: "hyderabadi birayni",
        stars: 4

    },
{
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kjbxbuq0x8d8grqohgcp",
    name: "Thali",
        cuisine: "south",
        stars: 4
} ];


const BodyComponent = () => (
    <div className="card-container">
    <CardComponent restaurant={data[0]}/>
    <CardComponent restaurant={data[1]}/>
    </div>
    );
const AppLayout = () => (
    <div>
    <HeadingComponent/>
    <BodyComponent/>
    </div>
    );

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
    