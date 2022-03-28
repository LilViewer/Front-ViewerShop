import React from 'react'
import classes from "../Login.module.scss";

const LogInput = ({text,type,formData,setFormData})=>{
    return(
        <div className={classes.BlockInfo__info}>
            <p>
                {text}
            </p>
            <input onChange={(e)=>{
                setFormData({
                    ...formData,
                    [type]: e.target.value
                })

            }}
                   type={type} />
        </div>
    )
}

export default LogInput