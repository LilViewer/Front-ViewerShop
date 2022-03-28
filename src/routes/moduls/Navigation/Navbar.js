import React from "react";
import {Link} from "react-router-dom";
import classes from './navigation.module.scss'
import cn from 'classnames';
import ContextData from "../../../Context/Date/ContextData";

const Navbar = ()=>{

    const Rename =(name)=>{
        var filename = name;
        filename = filename.replace(/[/\\?%*:|"<>]/g, ' ');
        return filename
    }

    const {stateData} = React.useContext(ContextData)
    const tovarDay = stateData.tovars.slice(0,1);

    return(
        <div className={classes.navigation}>
            <Link to='/Keys'  className={cn(classes.navigation__keys, classes.border)} >

                        <h1>КЕЙСЫ С ИГРАМИ</h1>
                        <p>
                            Испытай удачу! Наши самые лучшие рандомы, которые мы улучшали в течение нескольких лет.
                        </p>
                        <button />
            </Link>
            {tovarDay.map((elem,index)=>{
                return(
                    <Link to='/tovar/${elem.name}'  className={cn(classes.navigation__tovarDay, classes.border)} key={index} style={{backgroundImage: `url("/image_tovars/poster_tovar/${Rename(elem.name)}.jpg")` }} >

                            <div className={classes.navigation__tovarDay__names} >
                                <div className={classes.navigation__tovarDay__name}>
                                    <h5>ТОВАР ДНЯ</h5>
                                    <p>{elem.name} </p>
                                </div>
                                <div className={cn(classes.navigation__tovarDay__discount,classes.borderButtonActivated,classes.border)}>
                                    <p style={{display: elem.discount? '':'none'}}>{-elem.discount+'%'}</p>
                                </div>
                            </div>
                            <div className={classes.navigation__tovarDay__botInfp}>
                                <div className={classes.navigation__tovarDay__price}>
                                    {elem.price} ₽
                                </div>
                            </div>
                        <div className={classes.navigation__tovarDay__heart}>
                            <button ></button>
                        </div>
                    </Link>
                )
            })}
            <Link to='/Loterey' className={cn(classes.navigation__lotery, classes.border)}>
                    <div>
                        <div className={classes.navigation__lotery__name}>
                            <h3 >Лотерея</h3>
                        </div>
                        <p className={classes.navigation__lotery__text}>
                            Выигрывай игры покупая товар
                        </p>
                    </div>
                <div>
                    <button />
                </div>
            </Link>
        </div>
    )
}

export default Navbar