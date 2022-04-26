import React, {useEffect, useState} from "react";
import classes from "../moduls/SliderTovars/slider.module.scss";
import classesTwo from './sliderTovar.module.scss'
import cn from 'classnames'
import NET from "../../network";

const NabvarTovar =({TovarInfo})=>{
    const token = localStorage.getItem('token')
    const addBasket = async ()=>{
        // const response = await fetch(`${NET.APP_URL}/basket/add/${token}/${data.id}`)
        // console.log(response)
        await fetch(`${NET.APP_URL}/basket/add`,{
            method: 'POST',
            body:JSON.stringify({
                token: token,
                id: TovarInfo[0].id
            }),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response){
            response.json().then(function (resp){
                // console.log(resp)
            })
        })
    }
    const [isData,setIsData] = useState()
    useEffect(()=>{
        const BuyData = async ()=>{
            await fetch(`${NET.APP_URL}/buydata`,{
                method: 'POST',
                body:JSON.stringify({
                    id: TovarInfo[0].id
                }),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response){
                response.json().then(function (resp){
                    console.log(resp)
                    if(resp!='error'){
                        setIsData(resp)
                    }
                })
            })
        }
        BuyData()
    },[])

    return(
        // <p>asd</p>
        <div className={classesTwo.SliderBlock}>
            <div className={classes.SliderBlock__TovarSlider__Name}>
                {TovarInfo[0].name}
            </div>
            {/*Сделать издания игры, pivot table*/}
            <div className={classesTwo.Keys}>
                <div className={classesTwo.Keys__Stock}>
                    <div style={{background: TovarInfo[6].length>0?`#3FD371`:`#F05A45` }} className={classesTwo.Keys__Circle}>

                    </div>
                    <p>{TovarInfo[6].length>0? "В наличии":"Ждите пополнения"}</p>
                </div>
                {/*Создать таблицу покупок, дата, время, пользователь*/}
                <div className={classesTwo.Keys__Stock}>
                    <div style={{background:isData?`#3FD371`:`#F05A45`}} className={classesTwo.Keys__Circle}>

                    </div>
                    <p>
                        {isData?isData.created_at.split(' ')[0]:'Еще не покупали'}
                    </p>
                </div>
            </div>
            <div className={classes.SliderBlock__TovarSlider__TovarInfo}>
                <button onClick={addBasket} className={classes.borderButtonActivated}>В КОРЗИНУ</button>
                <p className={classes.SliderBlock__TovarSlider__TovarInfo__Price}>{TovarInfo[0].price} ₽</p>
                <p style={{display: TovarInfo[0].discount!=0? '':'none'}} className={cn(classes.SliderBlock__TovarSlider__TovarInfo__Discount,classes.discount)}>{-TovarInfo[0].discount+'%'}</p>
            </div>
        </div>
    )
}

export default NabvarTovar