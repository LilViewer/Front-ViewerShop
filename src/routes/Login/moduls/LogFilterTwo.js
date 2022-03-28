import React from 'react'
import classesTwo from "../../../style.module.scss";
import classes from "../Login.module.scss";
import cn from 'classnames'

const LogFilterOne = ({isActive,setIsActive,text})=>{
    return(
        <div
            onClick={()=>setIsActive(true)}
            className={cn(classesTwo.border,classes.BTN)}
            style={{
                background: isActive==true?"#3FD371":"#000000",
                color: isActive==true?"#000000":"#FFFFFF"
            }}
        >
            {text}
        </div>
    )
}

export default LogFilterOne