import React from 'react'
import classesTwo from "../../../style.module.scss";
import classes from "../Login.module.scss";
import cn from 'classnames'

const LogFilterOne = ({isActive,setIsActive,text})=>{
    return(
        <div
            onClick={()=>setIsActive(false)}
            className={cn(classesTwo.border,classes.BTN)}
            style={{
                background: isActive==false?"#3FD371":"#000000",
                color: isActive==true?"#FFFFFF":"#000000"
            }}
        >
            {text}
        </div>
    )
}

export default LogFilterOne