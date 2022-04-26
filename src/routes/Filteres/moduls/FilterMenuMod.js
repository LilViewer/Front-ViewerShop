import React from "react";

import classes from '../../../style.module.scss'
import classesTwo from './filteresMod.module.scss'
import { useState } from "react";
import ContextData from "../../../Context/Date/ContextData";
import cn from 'classnames';
import FilterSwitch from "./FilterSwitch";




const FilterMenuMod = ({selected,selecteds,setSelected,options}) =>{
    console.log(selecteds)
    const {stateData, dispatchData} = React.useContext(ContextData)

    const [isActive, setIsActive] = useState(false);
    const [isToggled, setIsToggled] = useState(false);


    const [isSearch, setIsSearch] = useState('');


    if((isSearch!=='')){
        let filteredNameOptions = []
        options.filter(name => name.includes(isSearch)).map(filteredName => (
            filteredNameOptions.push(filteredName)
        ))
        options = filteredNameOptions
    }
    return(
        <div style={{zIndex: (isActive==true?100:1 )}} className={classesTwo.dropdown}>
            {isActive &&(
                <div className={classesTwo.dropdown_border} style={{height: `${58+(options.length>6?6:options.length)*18}px`}}>
                    {/*<div className={classesTwo.dropdown_border_line}>*/}

                    {/*</div>*/}
                </div>

            )}
            <div  className={classesTwo.dropdown_btn} onClick={(e) => (setIsActive(!isActive))}>
                {selected} <b>{selecteds.length}</b>
                <div className={classesTwo.dropdown_btn_dop}>
                    <p onClick={(e) => setSelected([])}  className={classesTwo.dropdown_btn_dop_cross}>✖</p>
                    <p>{isActive == true ? '▲':'▼'}</p>
                </div>

            </div>
            <div className={classesTwo.line}></div>
            {isActive && (
                <div className={cn(classesTwo.dropdown_content,classesTwo.border)} style={{height: `${33+(options.length>6?6:options.length)*17}px`,overflowY: options.length<=1?`visible`:`scroll`}}>
                    <div className={classesTwo.dropdown_item}>
                        <input placeholder={'Найти'} value={isSearch} onChange={(e)=>setIsSearch(e.target.value)}/>

                    </div>
                    <div className={classesTwo.line}></div>


                        {options.map((option,index) =>(
                            <div >
                                <div key={index}
                                     onClick={(e) => {
                                         setSelected([...selecteds,option])
                                         if(selecteds[selecteds.indexOf(option)]){
                                             setSelected(selecteds.filter(item=>item!=option))
                                         }
                                         setIsToggled(!isToggled)
                                     }}
                                     className={classesTwo.dropdown_item}
                                >
                                    <FilterSwitch isToggled={selecteds[selecteds.indexOf(option)]?true:false}  />
                                    <p>{option}</p>
                                </div>
                                <div className={isActive == true && index!=(options.length-1) ? classesTwo.line:''}></div>
                            </div>
                        ))}



                </div>
            )}
        </div>

    );

}

export default FilterMenuMod