import { useState } from "react";
import data from "./data.json";

 const searchRestaurant =(searchtext) => {
    return data.filter((res)=> res.name.toLocaleLowerCase().includes(searchtext.toLocaleLowerCase()))
};

const SearchBar = ({setfilteredresults}) => {
    
    const [searchtext,setsearchtext] = useState("hello");
    return (
    <div  className="search" >
        <form
        onSubmit={(e)=>
        {
            e.preventDefault();
            const filteredresults = searchRestaurant(searchtext);
        setfilteredresults(filteredresults);
        }}>
        <input
            id="restaurant"
            placeholder="search for restaurant here"
            value={searchtext}
            onChange= {
                (e)=> {
                        setsearchtext(e.target.value);
                }
            }>
            </input>
            <button>Submit</button>
        </form>
    </div>
) };

export default SearchBar;