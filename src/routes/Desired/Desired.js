import React from "react";
import classes from '../../style.module.scss'
import Navbar from "../moduls/Navigation/Navbar";
import Header from "../moduls/Navigation/Header";

const General = () =>{
    return(
        <div className={classes.main}>
            <div className={classes.main__header}><Header /></div>
            <div>Список желаемого</div>
        </div>
    )
}

export default General