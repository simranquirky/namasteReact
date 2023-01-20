## The entire session reduced to points

- `console.log(<HeadingComponent />)` in this the `<HeadingComponent />` is used to call the functional component `HeadingComponent`. 
- The above is similar to `console.log(HeadingComponent())` , behind the scene they render the same object by executing the function.
- passing props to a function is similar to passing arguments to a function.
- Everything you see repeating in an app is made using component.
- We need to build just one component and use it in iteration for any number of times needed.
- the code below throws an error:
```
const AppLayout = () => (
<HeadingComponent/>
<BodyCoomponent/>
);
``` 
Because the function expects only one object to be returned, so that it can render it well.
- We can resolve this error if we write:
```
const AppLayout = () => (
<div>
<HeadingComponent/>
<BodyCoomponent/>
</div>
);
``` 
- But using the above would show an additional `div` tag. Instead we habe `React.Fragement` which can be used without any extra div added to our DOM.
```
const AppLayout = () => (
<React.Fragement>
<HeadingComponent/>
<BodyCoomponent/>
</React.Fragement>
);
``` 
- But writing `React.Fragement` everytime can be cumbersome, so instead JSX provides us facilityy, we can use empty tags, which behind the scene works same as `React.Fragement`.
```
const AppLayout = () => (
    <>
    <HeadingComponent/>
    <BodyCoomponent/>
    </>
    );
```
- today config driven UI is sed in market under which based on JSON data, UI will be rendered.
    - It can be managed by backend
    - prevents frequent app releases: say we have some offer for some short duration of time after which we wwant to hide the corousel, then we have to make new release of application code if we are not using config driven UI. 
    - It helps you to easily hide some part of the UI when needed.
    - suppose we want to remove the dela at 12.am., we dont,t need to visit our code at 12, rather we can write some logic in backend and the corousel part will not get displayed.
    - it allows other part of the Ui to get renedered easily even if other parts are not getting rendered.
- In real life data would be an array of objects, so we need to design our code accordingly. Our code will look like
```
const data = 
    {
        img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dql3smhftlkjaqx2hjeb",
        name: "biryani",
        cuisine: "hyderabadi birayni",
        stars: 4

    };

const CardComponent = () => (
    <div id="card" className="card" >
        <img src={data.img} />
        <h1>{data.name}</h1>
        <h2>{data.cuisine}</h2>
        <h3>{data.stars} star</h3>
    </div>
);
```
- Now, we don't want a single data, we want other data as well, how to include that?
- Whenever we create a functional component, react creates a default arguments know as props

under props you can define any value like `restauratnt= abcd` or anything as such.
when we used `React.createElement("h1",{}, "Hello World!")`, the `{}` is replaced by any props which we add.
If we write something as this `<CardComponent restaurant="abcd" tag="new" id="new-id"/>
then behind the scene 
```
const props= {
     restaurant:"abcd",
      tag:"new" ,
      id:"new-id"
}
```
- Having understood above, we can have our code like this
```
const CardComponent = (props) => (
    <div id="card" className="card" >
        <img src={props.restaurant.img} />
        <h1>{props.restaurant.name}</h1>
        <h2>{props.restaurant.cuisine}</h2>
        <h3>{props.restaurant.stars} star</h3>
    </div>
);

const BodyComponent = () => (
    <div className="card-container">
    <CardComponent restaurant={data[0]}/>
    <CardComponent restaurant={data[1]}/>
    </div>
    );
```
- to improve readability and to increase usability, we can take the component to separate file. this separate file becomes a module and is independent, now we need to import this component if we want to use it.
- `import CardComponent from "./CardComponent.js";` and `import CardComponent from "./CardComponent";` are same.
- Writing `props.restaurant.img` each time is cumbersome, so we can do something like
```
const CardComponent = (props) => {
    const restaurant= props.restaurant;
    const {img,name,cuisine,stars} = restaurant;
    return (
    <div id="card" className="card" >
        <img src={img} />
        <h1>{name}</h1>
        <h2>{cuisine}</h2>
        <h3>{stars} star</h3>
    </div>
) };
```
Or we can have it the other way removing the word `props` entirely like:
```
const CardComponent = ({restaurant}) => {
    const {img,name,cuisine,stars} = restaurant;
    return (
    <div id="card" className="card" >
        <img src={img} />
        <h1>{name}</h1>
        <h2>{cuisine}</h2>
        <h3>{stars} star</h3>
    </div>
) };
```
Or we could also write it like this

```
const CardComponent = ({img,name,cuisine,stars}) => {

    return (
    <div id="card" className="card" >
        <img src={img} />
        <h1>{name}</h1>
        <h2>{cuisine}</h2>
        <h3>{stars} star</h3>
    </div>
) };
```
But then when calling the component we have to write it like `<CardComponent {...data[1]}/>`
- Now, what if we want to add 500 card components, should I copy paste or rather we should think of how to write a loop.
- instead of for loop we can make use of map as well.
```
const CardContainer = () => {
    const cards= data.map((restaurant)=> {
        return <CardComponent restaurant={restaurant} /> )
        }
        return cards;
        }
```
- every card needs to have a unique id for easy identification, otherwise the performance will get impacted when we have 100s of card components.

```
const CardContainer = () => {
    const cards= data.map((restaurant)=> {
        return <CardComponent restaurant={restaurant} keys={restaurant.id} /> )
        }
        return cards;
        }
```




