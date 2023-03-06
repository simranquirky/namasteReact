#### Best practices while working with hooks
- Try to write your component in a pure way
- we can use the `usestate` hook any number of times.
```
const [searchtext, setsearchtext]=usestate("hi");
const [variable_2, setvariable_2]=usestate("hi");
```
- never use a hook in a condition
```
if(){
    const [searchtext, setsearchtext]=usestate("hi");
}
```
- Why should we not use condition?
Internally react maintains an order in which the variables are created, now if we have something like this:
```
const [variable_1, setvariable_1]=usestate("hi");
if(){
    const [searchtext, setsearchtext]=usestate("hi");
}
const [variable_2, setvariable_2]=usestate("hi");
```
In the above peice of code, it becomes difficult to maintain the order. it can mesh it up sometimes.
- never use hooks inside for loops or nested function.
- 55 min