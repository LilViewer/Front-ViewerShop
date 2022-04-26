import React from "react";
import classesTwo from "../../profile.module.scss";

const TovarAdminBottomBlock = ({setact,act,text,setIsSistem,setIsDLC,setIsSeries,setIsSimilar}) =>{


    return(
        <div
            onClick={()=>{
                setIsSistem(false)
                setIsDLC(false)
                setIsSeries(false)
                setIsSimilar(false)
                setact(true)
            }}
            style={{
                background:act?`#3FD371`:'',
                color:act?`#000000`:'#FFFFFF'
            }}
            className={classesTwo.borderBut}
        >
            {text}
        </div>
    )
}
export default TovarAdminBottomBlock