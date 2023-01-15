## The entire session reduced to points

- npx and npm are different , downloading songs and then listening to it (npm) and listening to songs directly on web (npx).
- npm allows you to run packages after installing them, whereas `npx` allows to execute without downloading the package. The main keyword which makes the difference is `without installing`.
- when we want to move our code to production, we need bundler. It helps in tree-shaking, hot reloading, minifying, caching, etc.
- component is a theoretical concept. It is categorised into `functional component` and `class component`.
- js does not undertsnad the word `import`.  so it gives a build error when we ran without specifying `type=module` The bundler understands it and uses it for importing packages from node_modules.
- Component can be understood as a composition of react elements. Functional component is always a funtcion. 
- By convention, everyone uses arrow function for creating components.
- First letter of component name should be capital by convention.
- JSX is javascript XML.
- If we try to write a statement
```
JSX: const heading1 = <h1>Hello Worle!</h1>
JS: const heading1 = React.createElement("h1",{}, "Hello World!");
```
Both the above statement yeild the same output on the browser.
- Babel decodes the JSX, behind the scene while create the javascript object it makes use of createElement() itself.
- JSX is not HTMl, it has HTML like syntax.
- Upperhand given by JSX
    - Readability
    - Fast
- Code in JS
```
const heading1 = React.createElement("div",{id:"title"}, [
   React.createElement("h1",{}, "Hello World!");
    React.createElement("h2",{}, "Hi World!");
     React.createElement("h3",{}, "Bye World!");
]
);
```
- Code in JSX
```
<div>
<h1>Hello World!</h1>
<h2>Hi World!</h2>
<h3>Bye World!</h3>
</div>
```
- JSX is an expression, it should end in one line.
```
//Not jsx
const heading= <div>
<h1> Hi </h1>
</div>
// jsx
const heading= <div><h1> Hi </h1></div>;
```
- But it is not possible to write long html codes in single line so `()` is used.
```
// jsx
const heading= ( 
<div>
<h1> Hi </h1>
</div> );
```
- There will be no performance impact on using JSX. Jsx is just to improve the developer experience, it behind the scene converts the code into js itself , so no impact.Babel has to do some work, but it is so fast that no impact is experienced.
- when you install parcel, babel is also downloaded as dependency.
- In html we write class="class_name", but in jsx `className="class_name"`
- jsx uses camelcasing.
- in jsx expression we can write any peice of js code inside curly braces.
```const heading= ( 
<div>
<h1> Hi {var_name} </h1>
</div> );
```
- jsx prevent xss injection attack. code sanitization/DOM sanitization 
- with jsx you have everything in one place.
- if you use tailwind css, you don't need to move to other file for css also. It helps in using css within react.
- `<HeadingComponent/>` is same as `<HeadingComponent></HeadingComponent>`
