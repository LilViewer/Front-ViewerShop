import React, {useState} from "react";
import classes from "../../../style.module.scss";
import classesTwo from './TovarReport.module.scss'
import NET from "../../../network";

const TovarReport=({Tovar})=>{
    const Array=[1,2,3,4,5]
    const [isReport,setIsReport]=useState()
    const [count,setCount] = useState(0)
    const token = document.cookie.split(';')[0]
    const addRepotTovar = async () => {
        await fetch(`${NET.APP_URL}/report/add`, {
            method: 'POST',
            body: JSON.stringify({
                token: token,
                idTovar: Tovar[0].id,
                rating: count,
                report: isReport
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            response.json().then(function (resp) {
                console.log(resp)
            })
        })
    }

    return(
        <div className={classesTwo.Border}>
            <textarea
                value={isReport}
                style={{width:`100%`,height: `20vh`}}
                className={classesTwo.Border}
                onChange={(e)=> setIsReport(e.target.value)}
            >
            </textarea>
            <div className={classesTwo.Ocenka}>
                <div className={classesTwo.Ocenka__star}>
                    {/*сделать форму и отправку в бд*/}
                    {Array.map((elem)=>{
                        return(
                            <p
                                onMouseEnter={()=>setCount(elem)}
                                style={{color: elem>count?'':'Green'}}
                            >
                                ★
                            </p>
                            )
                    })}
                </div>
                <div
                    onClick={()=>addRepotTovar()}
                    className={classes.border}
                    style={{padding: `5px`}}
                >
                    Отправить
                </div>
            </div>
        </div>
    )
}

export default TovarReport