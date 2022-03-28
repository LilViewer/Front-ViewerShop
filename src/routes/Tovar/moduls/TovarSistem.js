import React, {useState} from "react";
import classes from './TovarSistem.module.scss'
import classesTwo from '../Tovar.module.scss'
import {Link} from "react-router-dom";
import cn from 'classnames'

const TovarSistem = ({info})=>{

    const Sistem = ['min_OS','min_Processor','min_RAM','min_Video_Card','rec_OS','rec_Processor','rec_RAM','rec_Video_Card','Size']
    const [isActive, setIsActive] = useState(false);

    return(
        <div className={classes.TovarBlock}>
                <p
                    onClick={(e) => (setIsActive(!isActive))}
                    className={classesTwo.Border}
                    style={{width:`100%`,display: isActive!=true?'none':'block',cursor: `pointer`}}
                >
                    Минимальные системные требования
                    <p className={classes.TovarBlock__btn}>{isActive == true ? '▲':'▼'}</p>
                </p>
                <p
                    onClick={(e) => (setIsActive(!isActive))}
                    className={classesTwo.Border}
                    style={{width:`100%`,display: isActive==true?'none':'block',cursor: `pointer`}}
                >
                    Рекомендованные системные требования
                    <p className={classes.TovarBlock__btn}>{isActive == true ? '▲':'▼'}</p>
                </p>
                <div style={{display: isActive!=true?'none':'block'}} className={classes.TovarBlock__Info}>
                    <p>ОС: {info.min_OS}</p>
                    <p>Процессор: {info.min_Processor}</p>
                    <p>RAM: {info.min_RAM}</p>
                    <p>Видеокарта: {info.min_Video_Card}</p>
                    <p>Объем: {info.Size} Гб</p>
                </div>
                <div style={{display: isActive==true?'none':'block'}} className={classes.TovarBlock__Info}>
                    <p>ОС: {info.rec_OS}</p>
                    <p>Процессор: {info.rec_Processor}</p>
                    <p>RAM: {info.rec_RAM}</p>
                    <p>Видеокарта: {info.rec_Video_Card}</p>
                    <p>Объем: {info.Size} Гб</p>
                </div>
        </div>
    )
}

export default TovarSistem