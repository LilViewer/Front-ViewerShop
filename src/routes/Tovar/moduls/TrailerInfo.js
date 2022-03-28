import React from "react";
import {Link} from "react-router-dom";
import classes from './../Tovar.module.scss'

const TrailerInfo = ({name,info})=>{
    if(info[0].length>=2){
        info = info[0]
    }
    return (

            <p>
                {name[0]}:
                {info.map((text,id) => {
                    return (
                        <Link to={{
                            pathname:`/Filter/${name[1]}/${text.name}`,
                            state: text,
                            propsSearch: text
                        }}>
                            <b> {text.name}</b>{(id!=info.length-1)?', ':'. '}

                         </Link>


                    )

                })}
            </p>

    )
}

export default TrailerInfo