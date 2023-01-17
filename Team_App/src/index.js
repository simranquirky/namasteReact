

import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import ProfileCard from "./ProfileCard";

const title= "Krishi Portal" ;
const logo_src= "https://png.pngtree.com/element_our/sm/20180411/sm_5ace062b08f53.jpg"

const HeadingComponent = () => (
    <div id="title" className="title-class" tabIndex="1">
        <img class="logo" src={logo_src}/>
        <h1>{title}</h1>
    </div>
);

const data = [
    {
        github: "https://github.com/simranquirky",
        twitter: "" ,
        linkedin: "",
        img: "https://avatars.githubusercontent.com/u/60690997",
        name: "Simran",
        role: "Frontend"

    },
{
    github: "https://github.com/simranquirky",
    twitter: "" ,
    linkedin: "",
    img: "https://avatars.githubusercontent.com/u/60690997",
    name: "Simran",
    role: "Frontend"
} ];


const BodyComponent = () => (
    <div className="card-container">
    <ProfileCard profile={data[0]}/>
    <ProfileCard  profile={data[1]}/>
    </div>
    );
const AppLayout = () => (
    <div >
    <HeadingComponent/>
    <BodyComponent/>
    </div>
    );

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
    