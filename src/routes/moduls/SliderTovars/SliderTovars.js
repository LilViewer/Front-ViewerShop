import React, { useState,useRef } from "react"
import classes from "./slider.module.scss";
import ContextData from "../../../Context/Date/ContextData";
import cn from 'classnames';
import Navbar from "../Navigation/Navbar";


const SliderTovars = () =>{



    //получения массива товаров
    const {stateData} = React.useContext(ContextData)
    const tovars = stateData.tovars.slice(0,6);

    //изменение имени в соотвествие с допустимым для файлов
    const Rename =(name)=>{
        var filename = name;
        filename = filename.replace(/[/\\?%*:|"<>]/g, ' ');
        return filename
    }



    //картинка показывается
    let step =0;

    //получение детей от слайдера(блок с картинкой) и линии(плавающий ползунок)
    const slider = useRef(null);



    // метод перемещения картинок в слайдере

    const NextHendler = () =>{
        //возвращение к началу слайдера после полной прокрутки
        if(step+1 === tovars.length){
            step=0

            //появление сверху 1-го слайда
            slider.current.childNodes[step].style = `transform: translateY(+${step}vh); z-index:2`
            console.log(slider.current.childNodes[step].childNodes[1])
            slider.current.childNodes[step].childNodes[1].style=`animation: 1s textTovarNext 1s`



            //вычленение в новый массив слайдер без 1-го элемента
            let sliders = []
            for(let i=1;i<=5;i++){
                sliders.push(slider.current.childNodes[i])
            }

            //перемещение с 2 по 6 слайда в начальное положение
            sliders.forEach((element) => {

                setTimeout(function (){
                    element.style = `transform: translateY(${step}vh) `
                },2000)
            })

            //востоновление кострукции при помощи постановки 1-го слайда
            setTimeout(function (){
                slider.current.childNodes[step].childNodes[1].style=`opacity:1`
                slider.current.childNodes[step].style = `transform: translateY(${step}vh) `;
            },3900)

            //перемещение ползунка
            minuslines(step-1)
        }
        else{

            //перемещение слейдущего слайда, так чтобы перекрывал предыдущий
            slider.current.childNodes[step+1].style = `transform: translateY(-${step *100+100}vh); z-index: 4;`
            //анимированное появление информации о товаре
            slider.current.childNodes[step+1].childNodes[1].style=`animation: 1.5s textTovarNext 3s`


            //перемещение всех слайдов
            slider.current.childNodes.forEach((element) => {
                //перемещение всех слайдов
                setTimeout(function (){
                    element.childNodes[1].style=`opacity:1`
                    element.style = `transform: translateY(-${step *100}vh)`
                },2000)
            })
            //перемещение ползунка
            minuslines(step)

            //повыщение позиции слайда
            step++
        }


    }


    const PrevHendler = () =>{
        if(step-1 < 0){
            step=5
            slider.current.childNodes[step].style=`transform: translateY(-${step*100}vh);z-index:18`
            slider.current.childNodes[step].childNodes[1].style=`animation: 1.5s textTovarNext 3s`
            slider.current.childNodes.forEach((element) => {
                setTimeout(function () {
                    element.childNodes[1].style=`opacity:1`
                    element.style = `transform: translateY(-${step*100}vh);z-index:1`

                }, 2000)
            })

            minuslines(step-1)
        }
        else{
            slider.current.childNodes[step-1].style=`transform: translateY(-${step*100-100}vh);z-index:18`
            slider.current.childNodes[step-1].childNodes[1].style=`animation: 1.5s textTovarNext 3s`

            slider.current.childNodes.forEach((element) => {
                setTimeout(function () {
                    element.childNodes[1].style=`opacity:1`
                    element.style = `transform: translateY(-${step * 100}vh);z-index:1`

                }, 2000)
            })

            minuslines(step-2)
            step--
        }
    }


    const btnPrev = useRef(null);
    const btnNext = useRef(null);

    const blockButton = ()=>{
        btnPrev.current.setAttribute('disabled','disable')
        btnNext.current.setAttribute('disabled','disable')
        setTimeout(function (){
            btnPrev.current.removeAttribute('disabled')
            btnNext.current.removeAttribute('disabled')
        },4300)
    }
    const prevHendler =()=>{
        PrevHendler()
        blockButton()
    }
    const nextHendler =()=>{
        NextHendler()
        blockButton()
    }

    //метод перемещения линии на слайдере
    const minuslines = (step)=>{
        let height = 100/6;
      let lines = document.getElementsByClassName(classes.SliderBlock__line)[0]
            setTimeout(function (){
                lines.style.top = `${(step+2)*height - height}%`
        }, 3600)
    }







    return(
        <div className={classes.SliderBlock}>
            <div className={classes.SliderBlock__track} ref={slider}  >
                {tovars.map((elem,index)=>{
                    return(
                            <div className={classes.SliderBlock__item} >
                                <img className={classes.SliderBlock__image} src={process.env.PUBLIC_URL + `/image_tovars/poster_tovar/${Rename(elem.name)}.jpg`}/>
                                <div className={classes.SliderBlock__TovarSlider}>
                                    <div className={classes.SliderBlock__TovarSlider__Name}>
                                        {elem.name}
                                    </div>
                                    <div className={classes.SliderBlock__TovarSlider__TovarInfo}>
                                        <button className={classes.borderButtonActivated}>В КОРЗИНУ</button>
                                        <p className={classes.SliderBlock__TovarSlider__TovarInfo__Price}>{elem.price} ₽</p>
                                        <p style={{display: elem.discount!=0? '':'none'}} className={cn(classes.SliderBlock__TovarSlider__TovarInfo__Discount,classes.discount)}>{-elem.discount+'%'}</p>
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </div>
            <div >
                <button className={cn(classes.SliderBlock__button,classes.SliderBlock__button__prev)} ref={btnPrev} onClick={prevHendler} />
                <div className={classes.SliderBlock__lines}>
                    <div className={classes.SliderBlock__line}></div>
                </div>
                <button className={cn(classes.SliderBlock__button,classes.SliderBlock__button__next)} ref={btnNext} onClick={nextHendler}/>
                <div className={classes.SliderBlock__shadow}></div>
            </div>
            <div className={classes.SliderBlock__Navbar}>

                <Navbar />
            </div>
        </div>
    )


}

export default SliderTovars;
