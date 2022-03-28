import React, {useEffect, useState} from "react";
import classes from '../../style.module.scss'
import classesTwo from './Basket.module.scss'
import classesThree from '../Tovars/tovars.module.scss'
import Navbar from "../moduls/Navigation/Navbar";
import Header from "../moduls/Navigation/Header";
import NET from "../../network";
import {Link} from "react-router-dom";
import cn from 'classnames'
import Image from "../../components/ui/image";
import NameTovar from "../../components/ui/NameTovar";
import TovarDemoInfo from "../../components/ui/TovarDemoInfo";
import Discount from "../../components/ui/Discount";
import Price from "../../components/ui/Price";
import FilterSwitch from "../Filteres/moduls/FilterSwitch";
import Footer from "../moduls/Navigation/Footer";

const Basket = () =>{
    const [isCupon,setIsCupon] = useState()
    const [isCuponState,setIsCuponState] = useState(false)
    const [isGoodness,setIsGoodness] = useState(true)
    const token = document.cookie.split(';')[0]
    const [isArray, setIsArray] = useState();
    React.useEffect(() => {
        const Basket = async () => {
            await fetch(`${NET.APP_URL}/basket`, {
                method: 'POST',
                body: JSON.stringify({
                    token: token
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                response.json().then(function (resp) {
                    setIsArray(resp)
                    setIsBuyTovar(resp?.filter(e => e[6].length !== 0))
                })
            })
        }
        Basket();
    },[])

        const DelBasket =  async (tovare) => {
                 await fetch(`${NET.APP_URL}/basket/del`, {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token,
                        tovar: tovare,
                    }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                     response.json().then(function (resp) {
                         // setIsArray(resp)
                     })
                 })
            window.location.href = "/Basket"
        }

    const Rename =(elem)=>{
        var filename = elem.name;
        filename = filename.replace(/[/\\?%*:|"<>]/g, ' ');
        return filename
    }

    let allPrice = 0;
    const [isBuyTovar,setIsBuyTovar] = useState()
    console.log(isCupon)
    return(
        <div className={classes.main}>
            <div className={classes.main__header}><Header /></div>
            <div className={classesTwo.MainBlock}>
                <div className={classesTwo.MainBlock__Basket}>
                    <div className={classesTwo.MainBlock__Basket__Header}>
                        <h2>МОЙ ЗАКАЗ: </h2>
                        <p className={classes.colorP}>{isArray?.length}</p>
                    </div>
                    <div className={classes.line} style={{marginTop: `10px`, marginBottom: `20px`}} />
                    {isArray?.map((elem,nums)=>{
                        return(
                            <div style={{filter: elem[6].length==0?'sepia(100%) ':''}}>
                                <div className={classesTwo.MainBlock__Basket__Tovar}>
                                    <div className={classesTwo.prevTovar}>
                                        <Link to={{
                                            pathname:`/Tovar/${elem[0].name}`,
                                            state: elem,
                                            propsSearch: elem
                                        }}>
                                            <div style={{width:`200px`}}>
                                                <img
                                                    src={process.env.PUBLIC_URL + `/image_tovars/poster_tovar/${Rename(elem[0])}.jpg`}
                                                    style={{width:`100%`,height:`300px`,borderRadius: `10px`}}
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={classesTwo.MainBlock__Basket__Tovarinfo}>
                                        <div className={classesTwo.MainBlock__Basket__Tovarinfo__CrossName}>
                                            <p>{elem[0].name}</p>
                                            <p
                                                onClick={()=>DelBasket(elem[0].id)}
                                                style={{cursor: `pointer`}}
                                            >
                                                ✖
                                            </p>
                                        </div>
                                        <div className={classesTwo.MainBlock__Basket__Tovarinfo__Price}>
                                            <Price>{elem[0].price} ₽</Price>
                                            <p
                                                style={{display: (elem[0].discount != 0) ? '' : 'none'}}
                                                className={classesTwo.MainBlock__Basket__Tovarinfo__Price__DisPrice}
                                            >
                                                {(Number(elem[0].price) + ((elem[0].price/100)*Number(elem[0].discount))).toFixed(2) } ₽
                                            </p>
                                            <p
                                                className={classesTwo.MainBlock__Basket__Tovarinfo__Discount}
                                                style={{display: (elem[0].discount != 0) ? '' : 'none'}}
                                            >
                                                -{elem[0].discount? elem[0].discount+'%' : ''}
                                            </p>
                                        </div>
                                        <div className={classesTwo.MainBlock__Basket__Tovarinfo__Description}>
                                            <p tabIndex={0} className={classesTwo.MainBlock__Basket__Tovarinfo__Description__desc}>
                                                {elem[0].description}
                                            </p>
                                        </div>
                                        <div className={classes.line} style={{marginTop: `10px`, marginBottom: `20px`}} />
                                        <div className={classesTwo.MainBlock__Basket__Tovarinfo__DopInfo}>
                                            <div className={classesTwo.MainBlock__Basket__Tovarinfo__DopInfo__Reg}>
                                                <p> Регион активации:
                                                {
                                                    elem[4].map((elems,id)=>{
                                                        return  (
                                                            <Link to={{
                                                                pathname:`/Filter/Activation/${elems.name}`,
                                                                state: elem,
                                                                propsSearch: elem
                                                            }}
                                                            >
                                                                <b> {elems.name}</b>{(id!=elem[4].length-1)?', ':'. '}
                                                            </Link>
                                                        )
                                                    })
                                                }
                                                </p>
                                            </div>
                                            <div className={classesTwo.MainBlock__Basket__Tovarinfo__DopInfo__Act}>

                                                <p> Сервис активации:
                                                {
                                                    elem[5].map((elems,id)=>{
                                                        return  (

                                                            <Link to={{
                                                                pathname:`/Filter/Genre/${elems.name}`,
                                                                state: elem,
                                                                propsSearch: elem
                                                            }}
                                                            >
                                                                <b> {elems.name}</b>{(id!=elem[5].length-1)?', ':'. '}
                                                            </Link>
                                                        )
                                                    })
                                                }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    isArray.length-1 == nums?(''):(
                                        <div className={classes.line} style={{marginTop: `10px`, marginBottom: `20px`}} />
                                    )
                                }
                            </div>

                            )


                    })}
                </div>
                <div className={classesTwo.MainBlock__Cupon}>
                    <div className={classesTwo.cupon}>
                        <p>ИТОГО: {isArray?.map((elems)=>{
                            allPrice+=Number(elems[6].length>0?elems[0].price:0)

                        })}
                            <b>{allPrice} ₽</b>
                        </p>
                        <div className={classesTwo.cupon__Switch}>
                            <FilterSwitch isToggled={isCuponState?true:false}/>
                            <p onClick={()=>setIsCuponState(!isCuponState)}>У меня есть купон</p>
                        </div>
                        {isCuponState &&(
                            <div className={classesTwo.cupon__input}>
                                <input
                                    placeholder={'Купон'}
                                    value={isCupon}
                                    onChange={(e)=>setIsCupon(e.target.value)}
                                    maxLength={12}
                                    required
                                />
                                <div className={classesTwo.cupon__goodness}>
                                    <FilterSwitch isToggled={isGoodness?true:false}/>
                                    <p onClick={()=>setIsGoodness(!isGoodness)}>
                                        Я ознакомился с условиями
                                        <Link to={`/Goodness`} >
                                        <b> договора </b>
                                        </Link>
                                        и я согласен с ним
                                    </p>
                                </div>
                            </div>

                        )}
                        <div className={classesTwo.BuyBlock}>
                            <Link to={{
                                pathname:`/Buy`,
                                state: [isBuyTovar,isCupon,allPrice],
                                propsSearch: [isBuyTovar,isCupon,allPrice]
                            }}
                                  className={cn(classes.border,classesTwo.BuyBlock__Buy)}
                                  style={{pointerEvents: allPrice==0?`none`:''}}

                            >
                                Оплатить {allPrice} ₽
                            </Link>
                        </div>
                        <div className={classesTwo.dopInfo}>
                            {
                                isArray?.map((elems)=>{
                                    return (
                                        elems[6].length ==0?(
                                            <p>Один или больше товаров <b>не возможно</b> купить</p>
                                        ):('')
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Basket