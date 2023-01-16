
## What is JSX?
JSX is a way to write “HTML LIKE” code inside JS files. this makes building UI and components super intuitive and easy.

## Superpowers of JSX
- JSX makes it easier to write HTML-like code in React
- It easily converts HTML-like tags to react elements
- It allows us to put HTML elements in DOM without using appendChild() or createElement()
- As JSX is an expression we can use it inside if statements for loops and assign it to variables accept it as arguments or return it from functions
- It prevents XSS (cross-site-scripting) attacks popularly known as injection attacks.

## Role of type attribute in script tag? What options can I use there?
The type attribute specifies the type of the script.
The type attribute identifies the content between the <script> and </script> tags.
IF type is not given it is treated as normal JS script file and hence we cannot use import and export in such file

- Diff types of scripts are
    - **Omitted or a JavaScript MIME type:** This indicates the script is JavaScript. The HTML specification urges authors to omit the attribute rather than provide a redundant MIME type. In earlier browsers, this identified the scripting language of the embedded or imported (via the `src` attribute) code. JavaScript MIME types are [listed in the specification](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#javascript_types).
    - **`module`:** Causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The `charset` and `defer` attributes have no effect. For information on using `module`, see our [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) guide. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.
    - **Any other value:** The embedded content is treated as a data block which won't be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. The `src` attribute will be ignored.

## `{TitleComponent} or {<TitleComponent/>} or  {<TitleComponent></TitleComponent>}` in JSX

Using < /> inside JSX react is expecting a component from us, if do not return a component, and we return a JS expression it gives an error.
and if we call a component with just{ } and not with  {< />} it wont render on the screen.

- `{TitleComponent}`
    
    It does not render on the screen, because it is a function

```const TitleComponent = () => {
  return (
    <div>
      <h1>Namaste JS Bootcamp</h1>
    </div>
  );
};
function Heading3() {
  return (
    <div id="title">
      <h1 id="heading">{TitleComponent}</h1>
      <h2>from zero to hero</h2>
      <h3>in 3 months</h3>
    </div>
  );
}
```
To render a simple expression we should use { } in JSX

```
const TitleComponent = (
  <div>
    <h1>Namaste JS Bootcamp</h1>
  </div>
);

function Heading3() {
  return (
    <div id="title">
      {TitleComponent}
      <h2>from zero to hero</h2>
      <h3>in 3 months</h3>
    </div>
  );
}
```
- `{<TitleComponent/>}`
    
    This renders the Function on the screen

```
const TitleComponent = () => {
  return (
    <div>
      <h1>Namaste JS Bootcamp</h1>
    </div>
  );
};
// const TitleComponent = (
//   <div>
//     <h1>Namaste JS Bootcamp</h1>
//   </div>
// );

function Heading3() {
  return (
    <div id="title">
      {<TitleComponent />}
      <h2>from zero to hero</h2>
      <h3>in 3 months</h3>
    </div>
  );
}
```
But if we run a simple expression it throws an error, 
```
// const TitleComponent = () => {
//   return (
//     <div>
//       <h1>Namaste JS Bootcamp</h1>
//     </div>
//   );
// };
const TitleComponent = (
  <div>
    <h1>Namaste JS Bootcamp</h1>
  </div>
);

function Heading3() {
  return (
    <div id="title">
      {<TitleComponent />}
      <h2>from zero to hero</h2>
      <h3>in 3 months</h3>
    </div>
  );
}
```
- `{<TitleComponent></TitleComponent>}`
    
    This is the same as above 
    
    < /> Renders a function “component” but throws an error when we do not use a function


References used in code assignment:  https://www.freecodecamp.org/news/how-to-use-react-icons/
