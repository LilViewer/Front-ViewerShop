import React from "react";
import {Link} from "react-router-dom";

const TrailerInfo = ({name,info})=>{
    if(info[0].length>=2){
        info = info[0]
    }
    return (

        <p>
            {name[0]}:
            {info.map((text,id) => {
                return (
                    <p>
                        <b> {text.name}</b>{(id!=info.length-1)?', ':'. '}
                    </p>
                )
            })}
        </p>

    )
}

export default TrailerInfo