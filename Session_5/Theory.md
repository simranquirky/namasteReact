
## What is the difference between JSON and javascript object?
- JSON stands for JavaScript Object Notation. 
- JSON is a string representation of an object. 
- The key in key-value pair in JSON should be in double quotes.  Whereas, the key in key-value pair in JavaScript Object can be represented without quotes. 
- JSON cannot contain functions. JSON can be created and used by other programming languages. Whereas JavaScript object can contain functions and it can be used in JavaScript only.


## What is the difference between default export and named export?
- Named exports are used to do multiple exports per file whereas there can be only one default export per file.
- Named exports are useful to export several values. These values can be imported using the same component name.
- There is only a single default export per module. A default export can be a function, class, an object or anything else. 

## What is a higher-order component? Write code for the same.
Higher order components take up the original component then return the enhanced component. They help to avoid writing same logic again and again and makes code more readable. 

```
const EnhancedComponent = HigherOrderComponent(OriginalComponent);

const HigherOrderComponent = (OriginalComponent) => {
	const newValue = 3;
	return () => {
		return <OriginalComponent value={newValue} />
}
}
```
### What are the advantages of using `<form>`?
Forms increase code readability. We can submit the form by either clicking on the submit button or by pressing enter. Hence it increases the keyboard accessibility. Moreover, working with form helps us to use methods direclty like onsubmit(). 

## What is a pure component?
A react component that renders the same output for same state and props is known as a pure component. It is implemented using ‘memo’.

## What is a state?
A state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time and whenever it changes, it re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behaviour of component and how will it render.

## What would happen if we do console.log(useState())?
It returns the array of state variable and dispatcher function to update that variable.

## What is e.preventDefault()?
It prevents the default action of the function and tells it to do only what is defined in the function.

## What is includes()?
It is a function that returns if the given string is present in the string or not.

## What are various ways to add images to your react app?
	
- Adding link to the image in the “src” of image tag.
- Importing the image as:
```
import image_name from image_path
<img src={image_name} />
```
