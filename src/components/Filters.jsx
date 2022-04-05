import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, CheckboxGroup } from 'rsuite';
import {setFilters} from "../states/mangasSlice";

const Filtres = () => {
    const [value, setValue] = useState([]);
    const mangas = useSelector((store) => store.mangas);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilters(event))
    }
    return (
      <CheckboxGroup
        inline
        name="checkboxList"
        value={value}
        onChange={value => {
            if (value[value.length-1] === "Finished") { 
                delete value[value.indexOf("Publishing")];
            } else if (value[value.length-1] === "Publishing") {
                delete value[value.indexOf("Finished")];
            }
            /* if (value[value.length-1] === "alphabetical order") {
                delete value[value.indexOf("reverse alphabetical order")];
                delete value[value.indexOf("rank order")];
            } else if (value[value.length-1] === "reverse alphabetical order") {
                delete value[value.indexOf("alphabetical order")];
                delete value[value.indexOf("rank order")];
            } else if (value[value.length-1] === "rank order") {
                delete value[value.indexOf("alphabetical order")];
                delete value[value.indexOf("reverse alphabetical order")];
            } */
            let newValue = [];
            for (let i = 0; i < value.length; i++) {
                const element = value[i];
                if (element !== undefined) {
                    newValue.push(element);
                }
                
            }
            value = newValue;
            console.log(value);
            setValue(value);
            handleChange(value);
        }}
      >
        {/* <Checkbox value="alphabetical order">Sort by alphabetical order</Checkbox>
        <Checkbox value="reverse alphabetical order">Sort by reverse alphabetical order</Checkbox>
        <Checkbox value="rank order">Sort by rank order</Checkbox> */}
        <Checkbox value="Finished">Filter by status "Finished"</Checkbox>
        <Checkbox value="Publishing">Filter by status "Publishing"</Checkbox>
      </CheckboxGroup>
    );
  };

export default Filtres;
