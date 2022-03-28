import React, {useState} from "react";
import classesTwo from './Buy.module.scss'
import classes from '../style.module.scss'
import cn from 'classnames'
import Header from "../routes/moduls/Navigation/Header";
import ContextData from "../Context/Date/ContextData";
import NET from "../network";
import Footer from "../routes/moduls/Navigation/Footer";
const Buy = (props)=>{
    const propse = props.location.state
    const token = document.cookie.split(';')[0]
    const Buy = async () => {
        await fetch(`${NET.APP_URL}/buy`, {
            method: 'POST',
            body: JSON.stringify({
                token: token,
                tovars: test,
                cupon: propse[1],
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
    let test = []
    propse[0]?.map((e)=>{
        test.push(e[0].id)
    })
    const [isOne,setIsOne] = useState("")
    const [isTwo,setIsTwo] = useState("")
    const [isThree,setIsThree] = useState("")
    const [isFour,setIsFour] = useState("")
    function onChangeOne(e){
        setIsOne(e.target.value.replace(/[^0-9\ ]/g, ''))
    }
    function onChangeTwo(e){
        setIsTwo(e.target.value.replace(/[^0-9]/g, ''))
    }
    function onChangeThree(e){
        setIsThree(e.target.value.replace(/[^2-4]/g, ''))
    }
    function onChangeFour(e){
        setIsFour(e.target.value.replace(/[^0-9]/g, ''))
    }
    const {stateData, dispatchData} = React.useContext(ContextData)

    let PriceCupon = 0
    if (propse[1]){
        stateData.cupon.map((elem)=>{
            if(elem.cupon == propse[1]){
                PriceCupon = elem.price
            }
        })
    }
    return(
        <div className={cn(classes.main,classesTwo.main)}>
            <div className={classes.main__header}><Header /></div>
            <div className={classesTwo.main__block}>
                <div className={classesTwo.main__block__price}>
                    <b>{propse[2]-PriceCupon}</b> ₽
                </div>
                <div >
                    <div className={classesTwo.main__block__card}>
                        <div className={classesTwo.main__block__card__number}>
                            <input
                                maxLength={16}
                                placeholder={'Номер карты'}
                                value={isOne}
                                onChange={(e)=>onChangeOne(e)}
                                required
                            />
                        </div>
                        <div className={classesTwo.main__block__card__srock}>
                            <input
                                maxLength={2}
                                placeholder={'ММ'}
                                value={isTwo}
                                onChange={(e)=>onChangeTwo(e)}
                                required
                            />
                            <p>/</p>
                            <input
                                maxLength={2}
                                placeholder={'ГГ'}
                                value={isThree}
                                onChange={(e)=>onChangeThree(e)}
                                required
                            />
                            <p>Три цифры на обороте карты</p>
                            <input
                                maxLength={3}
                                placeholder={'CVC'} pattern="[0 - 9]"
                                value={isFour}
                                onChange={(e)=>onChangeFour(e)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className={classesTwo.main__block__buy}>
                    <button onClick={Buy} className={classes.border}>Оплатить</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Buy