import React, {useEffect, useState} from "react";
import classesTwo from "../profile.module.scss";
import classes from '../../../style.module.scss'
import {Link} from "react-router-dom";
import NET from "../../../network";
import cn from 'classnames'

const ProfData = ({isUsers,isProfData}) =>{
    const [isAvatar,setIsAvatar] = useState(false);
    const [isAvatars,setIsAvatars] = useState();
    const test = isUsers?isUsers[0][4][0].url:`ProfAvatar/1.svg`
    const token = isUsers && isUsers[0][0].api_token
    useEffect(()=>{
        const Avatars = async () => {
            await fetch(`${NET.APP_URL}/avatar`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                response.json().then(function (resp) {
                    console.log(resp)
                    setIsAvatars(resp)
                })
            })
        }
        Avatars()
    },[])
    const [isName,setIsName]= useState(isUsers && isUsers[0][0].name)
    const [isEmail,setIsEmail]= useState(isUsers && isUsers[0][0].email)
    const [isPassActual,setIsPassActual]= useState()
    const [isPassNow,setIsPassNow]=useState()
    console.log(isName)
    const SvapAvatar = async (avatarid) => {
        await fetch(`${NET.APP_URL}/svap/avatar`, {
            method: 'POST',
            body: JSON.stringify({
                token: token,
                avatar: avatarid,
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

    const AppData = async () => {
        await fetch(`${NET.APP_URL}/appData`, {
            method: 'POST',
            body: JSON.stringify({
                token: token,
                name: isName,
                email: isEmail,
                passActual:isPassActual,
                passNow: isPassNow,
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
        isProfData && (
            <div className={classesTwo.block__Four}>
                <div className={classesTwo.block__Four__ProfData}>
                    <div className={classesTwo.block__Four__ProfData__LocPas}>
                        <h2>Личные данные</h2>
                        <div className={classesTwo.block__Four__ProfData__int}>
                            <p>Name</p>
                            <input
                                value={isName}
                                onChange={(e)=>setIsName(e.target.value)}
                            />
                        </div>
                        <div className={classesTwo.block__Four__ProfData__int}>
                            <p>Email</p>
                            <input
                                value={isEmail}
                                onChange={(e)=>setIsEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={classesTwo.block__Four__ProfData__LocPas}>
                        <h2>Смена пароля</h2>
                        <div className={classesTwo.block__Four__ProfData__int}>
                            <p>Текущий</p>
                            <input
                                value={isPassActual}
                                onChange={(e)=>setIsPassActual(e.target.value)}
                            />
                        </div>
                        <div className={classesTwo.block__Four__ProfData__int}>
                            <p>Новый</p>
                            <input
                                value={isPassNow}
                                onChange={(e)=>setIsPassNow(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={classesTwo.block__Four__ProfData__Save}>
                        <button
                            onClick={()=>AppData()}
                            className={classes.border}
                        >
                            Сохранить
                        </button>
                        <p>
                            Нажимая на кнопку "Сохранить" вы соглашаетесь на обработку персональных данных и принимаете условия Пользовательского соглашения.
                        </p>
                    </div>
                </div>
                <div className={classesTwo.block__Four__Avatar}>
                    <img
                        className={classesTwo.block__Four__Avatar__personal}
                        src={process.env.PUBLIC_URL + test}
                    />
                    <div>
                        <d
                        >
                            Изменить аватар
                        </d>
                        <div className={classesTwo.block__Four__Avatar__spisock}>
                            {
                                isAvatars[0]?.map((elem)=>{
                                    return(
                                        <div
                                            onClick={()=> {
                                                SvapAvatar(elem.id)
                                            }}
                                            style={{cursor:`pointer`}}
                                        >
                                            <img src={elem.url}/>
                                        </div>
                                        )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default ProfData