import React, {useEffect, useState} from "react";
import classes from '../../style.module.scss'
import Navbar from "../moduls/Navigation/Navbar";
import Header from "../moduls/Navigation/Header";
import classesTwo from './profile.module.scss'
import cn from 'classnames'
import NET from "../../network";
import ContextData from "../../Context/Date/ContextData";
import StateData from "../../Context/Date/StateData";
import NewItem from "../Tovars/moduls/Newitem";
import {Link} from "react-router-dom";
import Profils from "./module/Profils";
import History from "./module/History";
import ProfData from "./module/ProfData";
import Footer from "../moduls/Navigation/Footer";

const Profil = () =>{
    const [isUsers,setIsUsers]=useState()
    const {stateData, dispatchData} = React.useContext(ContextData)
    const token = document.cookie.split(';')[0]
    useEffect(()=>{
        const Users = async () => {
            await fetch(`${NET.APP_URL}/users`, {
                method: 'POST',
                body: JSON.stringify({
                    token: token,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                response.json().then(function (resp) {
                    console.log(resp)
                    setIsUsers(resp)
                })
            })
        }
        Users()
    },[])

    const LeaveAkk=()=>{
        document.cookie ='2'
        // document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        console.log(document.cookie)
            window.location.href = "/"
    }

    const [isProf,setIsProf] = useState(true);
    const [isHistory,setIsHistory] = useState(false);
    const [isProfData,setIsProfData] = useState(false);
    return(
        <div className={classes.main}>
            <div className={classes.main__header}><Header /></div>
            <div className={classesTwo.block}>
                <div className={classesTwo.block__One}>
                    <div
                        className={classesTwo.border}
                        style={{
                            background:isProf?`#3FD371`:'',
                            color:isProf?`#000000`:'',
                            border:isProf?`2px solid white`:''
                        }}
                        onClick={()=>{
                            setIsProf(true)
                            setIsHistory(false)
                            setIsProfData(false)
                        }}
                    >
                        Профиль
                    </div>
                    <div
                        className={classesTwo.border}
                        style={{
                            background:isHistory?`#3FD371`:'',
                            color:isHistory?`#000000`:'',
                            border:isHistory?`2px solid white`:''
                        }}
                        onClick={()=>{
                            setIsProf(false)
                            setIsHistory(true)
                            setIsProfData(false)
                        }}
                    >
                        История покупок
                    </div>
                    <div
                        className={classesTwo.border}
                        style={{
                            background:isProfData?`#3FD371`:'',
                            color:isProfData?`#000000`:'',
                            border:isProfData?`2px solid white`:''
                        }}
                        onClick={()=>{
                            setIsProf(false)
                            setIsHistory(false)
                            setIsProfData(true)
                        }}
                    >
                        Личные данные
                    </div>
                    <div
                        className={classesTwo.border}
                        onClick={()=> {
                            LeaveAkk()
                        }}
                    >
                        Выйти
                    </div>
                </div>
                {
                    <Profils isUsers={isUsers} isProf={isProf} />
                }
                {
                    <History isUsers={isUsers} isHistory={isHistory} />
                }
                {
                    <ProfData isUsers={isUsers} isProfData={isProfData} />
                }
            </div>
            <Footer />
        </div>
    )
}

export default Profil