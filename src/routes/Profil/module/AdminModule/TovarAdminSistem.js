import React, {useState} from "react";
import classes from '../../../Tovar/moduls/TovarSistem.module.scss'
import classesTwo from '../../../Tovar/Tovar.module.scss'
import {Link} from "react-router-dom";
import cn from 'classnames'

const TovarAdminSistem = ({
                         info,isMinOS,setIsMinOS,isMinProcessor,setIsMinProcessor,isMinRAM,setIsMinRAM,
                         isMinVideo_Card,setIsMinVideo_Card,isRecOS,setIsRecOS,isRecProcessor,setIsRecProcessor,
                         isRecRAM,setIsRecRAM,isRecVideo_Card,setIsRecVideo_Card,isSize,setIsSize
})=>{

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
                <p>ОС: <input value={isMinOS} onChange={(e)=>setIsMinOS(e.target.value)} /></p>
                <p>Процессор: <input value={isMinProcessor} onChange={(e)=>setIsMinProcessor(e.target.value)}/></p>
                <p>RAM: <input value={isMinRAM} onChange={(e)=>setIsMinRAM(e.target.value)}/></p>
                <p>Видеокарта: <input value={isMinVideo_Card} onChange={(e)=>setIsMinVideo_Card(e.target.value)}/></p>
                <p>Объем: <input value={isSize} onChange={(e)=>setIsSize(e.target.value)}/> Гб</p>
            </div>
            <div style={{display: isActive==true?'none':'block'}} className={classes.TovarBlock__Info}>
                <p>ОС: <input value={isRecOS} onChange={(e)=>setIsRecOS(e.target.value)}/></p>
                <p>Процессор: <input value={isRecProcessor} onChange={(e)=>setIsRecProcessor(e.target.value)}/></p>
                <p>RAM: <input value={isRecRAM} onChange={(e)=>setIsRecRAM(e.target.value)}/></p>
                <p>Видеокарта: <input value={isRecVideo_Card} onChange={(e)=>setIsRecVideo_Card(e.target.value)}/></p>
                <p>Объем: <input value={isSize} onChange={(e)=>setIsSize(e.target.value)}/> Гб</p>
            </div>
        </div>
    )
}

export default TovarAdminSistem