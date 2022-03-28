import React from "react";
import classesTwo from "../profile.module.scss";
import classes from "../../../style.module.scss";
import {Link} from "react-router-dom";
import NewItem from "../../Tovars/moduls/Newitem";

const Profils = ({isUsers,isProf})=>{
    const test = isUsers?isUsers[0][4][0].url:`ProfAvatar/1.svg`
    return(
        isProf &&(
            <div>
                <div className={classesTwo.block__Two}>
                    <div className={classesTwo.block__Two__head}>
                        <div className={classesTwo.block__Two__head__Raiting}>
                            <b>35251/23125125</b> {/*заглушка*/}
                            <b>Рейтинг: 0</b> {/*заглушка*/}
                        </div>
                        <div className={classesTwo.block__Two__head__Avatar}>

                            <img src={process.env.PUBLIC_URL + test} />
                            <b className={classesTwo.block__Two__head__Avatar__circle}>1</b>
                        </div>
                        <div className={classesTwo.block__Two__head__Lotery}>
                            <b>Лотерейный билет: 25 шт.</b> {/*заглушка*/}
                        </div>
                    </div>
                    <div className={classesTwo.block__Two__Names}>
                        <p>{isUsers?isUsers[0][0].name:''}</p>
                        <b>Баланс 5125 ₽</b> {/*заглушка*/}
                        <div className={classes.line}>

                        </div>
                    </div>
                    <div className={classesTwo.block__Two__Statictick}>
                        <div>
                            <b>{isUsers?isUsers[0][1].length:0}</b>
                            <p>Игр куплено</p>
                        </div>
                        <div>
                            <b>{isUsers?isUsers[0][2].length:0}</b>{/*заглушка*/}
                            <p>Лотерей выйгранно</p>
                        </div>
                        <div>
                            <b>{isUsers?isUsers[0][2].length:0}</b>{/*заглушка*/}
                            <p>Отзывов оставленно</p>
                        </div>
                        <div>
                            <b>{isUsers?isUsers[0][2].length:0}</b>{/*заглушка*/}
                            <p>Кейсов открыто</p>
                        </div>
                    </div>
                </div>
                <div className={classesTwo.block__TwoTwo}>
                    <div className={classesTwo.block__TwoTwo__header}>
                        <p>ИЗБРАННЫЕ ТОВАРЫ</p>
                        <Link
                            to={{
                                pathname:`/Basket`
                            }}
                            className={classes.borderButtonActivated}
                        >
                            Смотреть все
                        </Link>
                    </div>
                    <div className={classesTwo.block__TwoTwo__main}>
                        {
                            isUsers?isUsers[0][1].map((elem)=>{
                                    return <NewItem data={elem}  />
                                })
                                :''
                        }
                    </div>
                </div>
            </div>

        )
    )
}

export default Profils