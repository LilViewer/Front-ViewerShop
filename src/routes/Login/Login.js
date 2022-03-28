import React, {useContext, useEffect, useState} from "react";
import classes from './Login.module.scss'
import classesTwo from '../../style.module.scss'
import cn from 'classnames'
import LogInput from "./moduls/LogInput.js";
import LogFilterOne from "./moduls/LogFilterOne";
import LogFilterTwo from "./moduls/LogFilterTwo";
import NET from "../../network";
import ContextData from "../../Context/Date/ContextData";


const Login = () =>{
    const {stateData, dispatchData} = React.useContext(ContextData)
    const [isActive,setIsActive] = useState(false)
    const [formData,setFormData]= useState({
        email: '',
        name:'',
        password:'',
    })
    // const [isToken,setIsToken]=useContext("")
    const signIn = async ()=>{
         await fetch(`${NET.APP_URL}/login`,{
            method: 'POST',
            body:JSON.stringify(formData),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response){
            response.json().then(function (resp){
                if(resp['token'] && resp['token']!=''){
                    document.cookie = resp['token']
                    window.location.href = "/"

                }
            })
        })
    }
    const RegIn = async ()=>{
        await fetch(`${NET.APP_URL}/register`,{
            method: 'POST',
            body:JSON.stringify(formData),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response){
            response.json().then(function (resp){
                if(resp['token'] && resp['token']!=''){
                    document.cookie = resp['token']
                    window.location.href = "/"
                }

            })
        })

    }

    return(
        <div className={classes.Block}>
            <div className={classes.Block__Login}>
                <div className={classes.BTNS}>
                    <LogFilterOne isActive={isActive} setIsActive={setIsActive} text={'Ввойти'} />
                    <LogFilterTwo isActive={isActive} setIsActive={setIsActive} text={'Регистрация'} />
                </div>
                <div style={{display: isActive==true?'block':'none'}} className={classes.BlockInfo}>
                    <LogInput text={'Почта'} type={'email'} formData={formData} setFormData={setFormData}/>
                    <LogInput text={'Имя'} type={'name'} formData={formData} setFormData={setFormData}/>
                    <LogInput text={'Пароль'} type={'password'} formData={formData} setFormData={setFormData}/>
                    <div className={classes.BlockInfo__Button}>
                        <button onClick={RegIn} type={"submit"} className={classesTwo.border}>Регистрация</button>
                    </div>
                </div>
                <div style={{display: isActive==false?'block':'none'}} className={classes.BlockInfo}>
                    <LogInput text={'Почта'} type={'email'} formData={formData} setFormData={setFormData}/>
                    <LogInput text={'Пароль'} type={'password'} formData={formData} setFormData={setFormData}/>
                    <div className={classes.BlockInfo__Button}>
                        <button onClick={signIn} type={"submit"} className={classesTwo.border}>Ввойти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login