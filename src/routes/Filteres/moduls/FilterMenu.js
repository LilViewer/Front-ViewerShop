import React from "react";

import classes from '../../../style.module.scss'
import classesTwo from '../filteres.module.scss'
import { useState } from "react";
import ContextData from "../../../Context/Date/ContextData";
import cn from 'classnames';



const FilterMenu = ({selected, setSelected,options }) =>{
    const {stateData, dispatchData} = React.useContext(ContextData)

    const [isActive, setIsActive] = useState(false);


    return(
        <div style={{zIndex: (isActive==true?100:1 )}} className={classesTwo.dropdown}>
            {isActive &&(
                <div className={classesTwo.dropdown_border} style={{height: `${options.length * 34}px`}}>

                </div>
            )}
                <div  className={classesTwo.dropdown_btn} onClick={(e) => (setIsActive(!isActive))}>
                    {selected} <p>{isActive == true ? '▲':'▼'}</p>

                </div>
                <div className={classesTwo.line}></div>
                {isActive && (
                    <div className={cn(classesTwo.dropdown_content,classesTwo.border)}>
                        {options.map((option,index) =>(
                            <div >
                                <div
                                    onClick={(e) => {
                                        setSelected(option);
                                        setIsActive(false);
                                    }}
                                    className={classesTwo.dropdown_item}
                                >
                                    {option}
                                </div>
                                <div className={isActive == true && index!=(options.length-1) ? classesTwo.line:''}></div>
                            </div>
                        ))}

                    </div>
                )}
        </div>

    );

}

export default FilterMenu