import React, { useState, useEffect } from "react";
import {Redirect, useLocation} from 'react-router-dom';
import classes from "../../style.module.scss";
import classesTwo from './Tovar.module.scss'
import Header from "../moduls/Navigation/Header";
import ContextData from "../../Context/Date/ContextData";
import NET from "../../network";
import SliderTovar from "../moduls/SliderTovars/SliderTovar";
import NabvarTovar from "./NabvarTovar";
import ReactPlayer from 'react-player'
import {Link} from "@mui/material";
import TrailerInfo from "./moduls/TrailerInfo";
import TovarSistem from "./moduls/TovarSistem";
import TovarReport from "./moduls/TovarReport";
import Footer from "../moduls/Navigation/Footer";




const Tovar = (props) =>{
    const Tovar=  props.location.state
    const [isReports,setIsReports] = useState()
    const token = localStorage.getItem('token')
    useEffect(()=>{
        const RepotTovar = async () => {
            await fetch(`${NET.APP_URL}/report/tovar`, {
                method: 'POST',
                body: JSON.stringify({
                    token: token,
                    idTovar: Tovar[0].id
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                response.json().then(function (resp) {
                    console.log(resp)
                    setIsReports(resp)
                })
            })
        }
        RepotTovar()
    },[])

    const Statick=[
        ['Разработчик','Developer'],['Издатель','Publisher'],['Регион активации','Region'],['Сервис активации','Activation'],
    ]

    return (
        <div className={classes.main}>
            <div className={classes.main__header}><Header /></div>
            <NabvarTovar TovarInfo={Tovar} />
            <SliderTovar NameTovar={Tovar[0].name}  />
                <div className={classesTwo.BlockTovar}>
                    <div className={classesTwo.BlockTovar__Trailer}>
                        <div className={classesTwo.Border}>
                            ТРЕЙЛЕН
                        </div>
                        <div className={classesTwo.BlockTovar__Trailer__Film}>
                            <ReactPlayer  volume={0} controls={true} playing={true} url={process.env.PUBLIC_URL + `/image_tovars/treiler_tovar/${Tovar[0].name}.webm`} />
                        </div>
                        <div className={classesTwo.BlockTovar__Trailer__Info}>
                                <TrailerInfo name={['Жанр','Genre']} info={Tovar.slice(1,2).map((elem)=>elem)} />
                                <p>Платформа: PC</p>
                                <p>Дата выхода: {Tovar.slice(0, 1).map((elem) => elem.data)}</p>
                                {Tovar.slice(2,6).map((elem,index)=>{
                                   return <TrailerInfo name={Statick[index]} info={elem} />
                                })}
                        </div>
                    </div>
                    <div className={classesTwo.BlockTovar__Line}>

                    </div>
                    <div className={classesTwo.BlockTovar__Description}>
                        <div className={classesTwo.Border}>
                            ОПИСАНИЕ
                        </div>
                        <div className={classesTwo.Description} >
                            {Tovar[0].description}
                        </div>
                    </div>
                </div>
                <div className={classesTwo.BlockTovar__TwoBlock}>
                    <div className={classesTwo.BlockTovar__Sistem}>
                        <div>
                            <div  className={classesTwo.Border}>
                                Системные требования
                            </div>
                            {/*<div  className={classesTwo.Border}>*/}
                            {/*    Состав набора*/}
                            {/*</div>*/}
                            <TovarSistem info={Tovar[0]} />
                        </div>
                        <div>
                            <div  className={classesTwo.Border}>
                                Отзвывы
                            </div>
                            <TovarReport Tovar={Tovar} />
                        </div>
                    </div>
                    <div className={classesTwo.BlockTovar__Report}>
                        {
                            isReports?.map((elem)=>{
                                console.log(process.env.PUBLIC_URL + elem[2][0].url)
                                let test = elem[2][0].url
                                return(
                                    <div className={classesTwo.BlockTovar__Report__Block}>
                                        <img className={classesTwo.avatar} src={process.env.PUBLIC_URL +'/'+ elem[2][0].url} />
                                        <div className={classesTwo.BlockTovar__Report__Head}>
                                                <div className={classesTwo.BlockTovar__Report__Head__names}>
                                                    <b>
                                                        {elem[1].name}
                                                    </b>
                                                    <p>
                                                        {elem[0].created_at.split(' ')[0]}
                                                    </p>
                                                </div>
                                                <div className={classesTwo.BlockTovar__Report__Head__like}>
                                                {/*    <p>{elem[0].like}</p>*/}
                                                {/*    <img src={process.env.PUBLIC_URL+ `/imageSite/Likes/4.svg`} />*/}
                                                {/*    <p>{elem[0].diz_like}</p>*/}
                                                {/*    <img  src={process.env.PUBLIC_URL+`/imageSite/Likes/3.svg`} />*/}
                                                    {/*Заглушка пока не сделаю Pivot таблицу (диз)лайкаов*/}
                                                </div>
                                        </div>
                                        <div className={classesTwo.BlockTovar__Report__Comment}>
                                            {elem[0].report}
                                        </div>
                                        <div className={classes.line} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            <Footer />
        </div>

    )
}

export default Tovar