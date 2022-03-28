import React from "react";
import classes from '../../style.module.scss'
import Header from "../moduls/Navigation/Header";
import ContextData from "../../Context/Date/ContextData";
import NET from "../../network";
import {Link} from "react-router-dom";
import { useState } from "react";




const Test = () =>{
    const {stateData, dispatchData} = React.useContext(ContextData)

    const Filter = stateData.FilterMenuClassic



    return(
        <div className={classes.main}>
            <div className={classes.main__header}><Header /></div>
            <div className={classes.main__block}>
               <select name="ClassicFilter">
                   {Filter.map((elem,index)=>{
                       return(
                           <option value={elem} key={index}>
                               {elem}
                           </option>
                       )

                   })}
               </select>
            </div>
        </div>
    )
}

export default Test