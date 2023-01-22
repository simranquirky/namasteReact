import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import ProductCard from "./ProductCard.js";
import data from "./data.json"
import SearchBar from "./SearchBar";
import { useState } from "react";

const title= "Farmer Portal" ;

const HeadingComponent = () => {
    
return (

    <div id="title" className="title-class" tabIndex="1">
        <h1>{title}</h1>
        
    </div>
) };


const CardContainer = ({filteredresults}) => (
    filteredresults.map((product)=>
     <ProductCard product={product} key={product.name}/>)
);

const BodyComponent = () => {
    const [filteredresults,setfilteredresults] = useState(data); 
    // data is the data stored in data.json file
    return (
        <div className="body-content">
        <div className="search-bar">
        <SearchBar setfilteredresults={setfilteredresults}/>
        </div>
        <div className="card-container">
        <CardContainer filteredresults={filteredresults}/>
        </div>
        </div>
        );
}
// all the components of the app are called under the AppLayout component. so that it is easy to render.
const AppLayout = () => (
    <div>
    <HeadingComponent/>
    <BodyComponent/>
    </div>
    );

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
    