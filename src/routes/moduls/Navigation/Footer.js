import React from "react";
import logo from './../../.././Content/image_site/Logo.png'
import classes from './navigation.module.scss'
import classesTwo from '../../../style.module.scss'
import {Link} from "react-router-dom";
const Footer = ()=>{
    let url = [
        ['Личный кабинет','Profil'],
        ['Новинки',''],
        ['О компании',''],
        ['Лотерея','Loterey'],
        ['Лидеры продаж',''],
        ['Все',''],
        ['Поддержка',''],
        ['Кейсы','']
    ]
    return(
        <div >
            <div className={classes.Block}>
                <div className={classesTwo.line} />
                <div className={classes.Block__head}>
                    <Link
                        className={classes.Block__Logo}
                        to={{pathname: `/`}}
                    >
                        <img src={logo}/>
                    </Link>
                    <div className={classes.Block__Url}>
                        {url.map((elem)=>{
                            return(
                                <Link
                                    to={{
                                        pathname:`/${elem[1]}`
                                    }}
                                >
                                    {elem[0]}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className={classes.Block__Description}>
                    Платформа для продажи цифровых товаров. Торговый агрегатор по оказанию услуг в сфере торговли. Все закупаемые ключи приобретаются у официальных поставщиков. Все названия продуктов, компаний и марок, логотипы и товарные знаки являются собственностью соответствующих владельцев.
                </div>
            </div>
        </div>
    )

}
export default Footer