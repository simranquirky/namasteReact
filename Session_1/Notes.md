
## The entire session reduced to points

- React is a library not a framework
- Every browser has browser engine which decodes the JS code
- CDN in official react documentaion has 2 files.
    - react : core-react file. This is a shared file. React is not just limited to browsers, other areas like applications, react 320 , react 3d also uses this file.
    - react-dom : this contains helper functions
- `const heading1 = React.createElement("h1",{}, "Hello World!");`. In this given statement the `{}` can have any value we want to add as property like id,class etc, or it can also be null.
- the process of putting JS objects into browser is done by React DOM.
- ` root.render(heading1);` . `render` is used to put objects in browser.