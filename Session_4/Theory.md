## What is pure function ?

A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

Also, a pure function does not produce any observable side effects such as network requests or data mutation, etc.

Let’s see the below JavaScript Function:


    ```
    function calculateGST( productPrice ) {
    return productPrice * 0.05;
    }
    console.log(calculateGST(15))
    ```
The above function will always return the same result if we pass the same product price. In other words, its output doesn’t get affected by any other values/state changes. So we can call the “calculate GST” function a Pure Function.

## Difference between `console.log(<HeaderComponent/>) and console.log(HeaderComponent())?`

`<HeaderComponent/>` will  call React.createElement behind the scene which will create a JS object. It can have state and lifecycle whereas HeaderComponent() will just call the function and return the value.

## What is React Fragment?
React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.

## What does default mean in export default?
Export default is used when there is only one export to be made from a particular file and when importing this one element, we don't have to worry about giving the same name to our import. This combination of export and import allows us to implement modularity.

## What is Comfig-driven UI?
Traditionally we build applications like this:

- Lead architects design around business requirements
- Application is built and deployed
- Changes are done through additional components (SOLID Principles) or painful refactor

With CDD we build applications like this:

- Independent components are built first, starting at the atomic level
- An interface (usually JSON) is defined to compose the higher level UI
- Combination of reusable components and JSON blueprint allows developers to easily build up and out

## Advantages of Config Driven -UI? 

- Reusability: In Component Driven Development, the development process is in place, components once created can be easily used across as many modules as needed. Reusability helps to provide the development efforts and cost across applications.

- Repetition: An application is often an interface made up of repeating components. Repetition in component developments provides developers to maintain and scale their code on large. Repetition provides familiarity which makes the user feel the symmetric design and helps them to make informed decisions.

- Scalability: Component Driven Development allows for extending the benefits of a modular architecture to the frontend as well. As the React application scales, more no components for the features can be easily added without changing the entire codebase.

- Simpler maintenance: Component Driven Development models in software engineering keep you away from such unwanted situations. CDD decomposes the frontend files into smaller and easily manageable components which are easy to handle, making any upgrade or modification become an easy task.

- Faster development: Component Driven Development reduces development time a lot, furthermore the relationship with the codebase. With the use of shared library accessible, working teams no longer need to build the solutions from scratch. They can use components from this library without worrying about non-functional requirements such as security, usability, performance, etc.

## What if we have given the same id in the array of data objects?
Giving the same id in the array of data objects gives the error “Encountered two children with the same key”. The id should be unique for each element in the array of data objects as it helps in identifying each unique element.

## Index is not a good way to pass as key. Why?
Index is not generally stable. Instead of using the index in the map function for the key prop, it is advisable to add a unique id for each object in the array of data objects. 


