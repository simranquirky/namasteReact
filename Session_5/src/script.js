import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import CardComponent from "./CardComponent.js";
import data from "./data.json"
import SearchBar from "./SearchBar";
import { useState } from "react";

const title= "Hunger Hub" ;

const HeadingComponent = () => (
    <div id="title" className="title-class" tabIndex="1">
        <h1>{title}</h1>
    </div>
);


const CardContainer = ({filteredresults}) => (
    filteredresults.map((restaurant)=>
     <CardComponent restaurant={restaurant} key={restaurant.name}/>)
);

const BodyComponent = () => {
    const [filteredresults,setfilteredresults] = useState(data);
    return (
        <div className="card-container">
            <SearchBar setfilteredresults={setfilteredresults}/>
        <CardContainer filteredresults={filteredresults}/>
        </div>
        );
}
const AppLayout = () => (
    <div>
    <HeadingComponent/>
    <BodyComponent/>
    </div>
    );

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
    