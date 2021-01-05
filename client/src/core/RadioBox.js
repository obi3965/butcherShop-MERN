import React, { useState } from "react";
import '../css/card.css'
const RadioBox = ({ prices,handleFilters }) => {
    const [value, setValue] = useState(0);

    const handleChange = event => {
        handleFilters(event.target.value);
        setValue(event.target.value);
    };

    return prices.map((p, i) => (
        // <div key={i} className="radio">
        //     <input id="box"
        //         onChange={handleChange}
        //         value={`${p._id}`}
        //         name={p}
        //         type="radio"
        //         className="mr-2 ml-4 form-check-input"
        //     />
        //     <label for="box" className="form-check-label">{p.name}
            
        //     </label>
            
        // </div>
       <div classname="form-check" key={i}>
        <input  onChange={handleChange}
                value={`${p._id}`}
                name={p} classname="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label classname="form-check-label" htmlFor="flexRadioDefault1">
           {p.name}
        </label>
      </div>
       
     
    ));
};

export default RadioBox;