import React, {useState} from "react";
import classes from '../../style.module.scss'
import Navbar from "../moduls/Navigation/Navbar";
import Header from "../moduls/Navigation/Header";
import Tovars from "../Tovars/Tovars";
import ContextData from "../../Context/Date/ContextData";
import SliderTovars from "../moduls/SliderTovars/SliderTovars";
import Footer from "../moduls/Navigation/Footer";


const General = () =>{
    const {stateData} = React.useContext(ContextData)
    // document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    console.log(document.cookie.split('').length)
    return(
        <div  className={classes.main}>
            <div className={classes.main__header}>
                <Header
            />
            </div>
            <SliderTovars />
            <div><Tovars /></div>
            <Footer />
        </div>

    )
}

export default General