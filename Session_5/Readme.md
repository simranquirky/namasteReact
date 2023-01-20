## The entire session reduced to points

- Similar to the component we can move the const data to another js file.
- JS object and JSON are different form each other.
- hooks is a theoretical concept, it basically is a function designed for a specific task.
- state is a snapshot of data in your component.
- Hook - useState
`import {useState} form "react"`
- the useState hook can be used to keep a track of that variable
```
const [searchtext]= useState();

// within the component {searchtext} can be reffered

```
-  the default value for searchtext can be given like `const [searchtext]= useState("default_value");` It can slo be empty string.
- now the first value provided cannot be changed further. So we want to change that. use Onchange method
```
<input
            id="restaurant"
            placeholder="search for restaurant here"
            value={searchtext}>
            onChange= {
                (e)=> {
                        searchtext= e.target.value;
                }
            }
            </input>
```
- The above code does not work, it rather results in broken code. because now the ` searchtext` is not a normal js variable. It will work only if we use the set method.
```
<input
            id="restaurant"
            placeholder="search for restaurant here"
            value={searchtext}>
            onChange= {
                (e)=> {
                        setsearchtext(e.target.value);
                }
            }
            </input>
``` 
along with that u need to modify the declaration as well.
`const [searchtext,setsearchtext] = useState("hello");`
- The `const [searchtext,setsearchtext] = useState("hello");` is pure destructuring , even if u write it like 
```
const  xarray= useState("hello");
const [searchtext,setsearchtext]= xarray;
```