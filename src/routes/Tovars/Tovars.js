import React from "react";
import classes from '../../style.module.scss'
import ContextData from "../../Context/Date/ContextData";
import NewItem from "./moduls/Newitem";
import NET from "../../network";
import {Link} from "react-router-dom";



const Tovars = () =>{

    const {stateData, dispatchData} = React.useContext(ContextData)
    const tovars = stateData.allTovarsInfo


    return (
        <div className={classes.main}>

            <div className={classes.tovarsVetrina}>{tovars.map((elem,index)=>{

                return(

                        <NewItem data={elem}  key={index} />



                )
            })}</div>
        </div>
    )
}

export default Tovars