import React from "react";
import classesTwo from "./filteresMod.module.scss";


const FilterSwitch = ({isToggled}) =>{
    return(
        <label className={classesTwo.dropdown_item_conteiner_switch}>
            <input type='checkbox' checked={isToggled} />
            <span className={classesTwo.dropdown_item_slider} />
        </label>
    )
}

export default FilterSwitch