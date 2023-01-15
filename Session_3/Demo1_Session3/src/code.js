//  This file is part of the first half of session 3 code demos, it is not referenced in the html file.
import ReactDOM from "react-dom/client";
import React from "react";

// 1. nested header using react.createElement()

const heading1 = React.createElement("div",{id:"title"}, [
    React.createElement("h1",{}, "Hello World!"),
     React.createElement("h2",{}, "Hi World!"),
      React.createElement("h3",{}, "Bye World!")
 ]
 );

 // 2. create nested element using JSX

 const heading = (<div>
<h1>Hello World!</h1>
<h2>Hi World!</h2>
<h3>Bye World!</h3>
</div> ) ;

// 3. create functional component of nested element in JSX

const TitleComponent = () => {
  return (
    <div>
      <h1>Hello World!</h1>
        <h2>Hi World!</h2>
        <h3>Bye World!</h3>
    </div>
  );
};

// 4. pass attributes into tags in JSX

const heading2 = (
  <div id="title">
    <h1 id="heading">Namaste JS Bootcamp</h1>
    <h2>from zero to hero</h2>
    <h3>in 3 months</h3>
  </div>
);

// composition of components : Add a component inside another

const TitleComponent1 = (
  <div>
    <h1>Namaste JS Bootcamp</h1>
  </div>
);

function Heading3() {
  return (
    <div id="title">
      <TitleComponent1 />
      <h2>from zero to hero</h2>
      <h3>in 3 months</h3>
    </div>
  );
}

