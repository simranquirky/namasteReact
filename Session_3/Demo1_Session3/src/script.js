// import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading1 = React.createElement("h1",{}, "Hello World!");
// console.log(heading1); // prints the heading object on console 


// React Functional Component
// const HeadingComponent= () => {
//     return React.createElement("h1",{}, "Hello World!");
// }

//valid functional component
const HeadingComponent2= () => (<div><h1> Hi 1</h1></div> );


// React Functional Component with JSX
const HeadingComponent= () => {
        return (<div>
            <HeadingComponent2/>
        <h1> Hi </h1>
        </div> );
    }


const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent/>);
    