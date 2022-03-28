import React from "react";
import classesTwo from "../profile.module.scss";
import Image from "../../../components/ui/image";
import classes from '../../../style.module.scss'
import {Link} from "react-router-dom";
import NET from "../../../network";
import cn from 'classnames'

const History = ({isHistory,isUsers})=>{
    const Rename =(elem)=>{
        var filename = elem[0].name;
        filename = filename.replace(/[/\\?%*:|"<>]/g, ' ');
        return filename
    }
    const token = isUsers && isUsers[0][0].api_token
    const DelBuy =  async (tovare) => {
        await fetch(`${NET.APP_URL}/buy/del`, {
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
                console.log(resp)
            })
        })
        window.location.href = "/Profil"
    }

    return(
        isHistory &&(
            <div className={classesTwo.block__Three}>
                {

                    isUsers && isUsers[0][2].map((elem,id)=>{
                        return(
                            <div className={classesTwo.block__Three__Tovar}>
                                <div
                                    className={classesTwo.block__Three__Tovar__image}
                                    style={{width:`200px`}}
                                >
                                    <Link to={{
                                        pathname:`/Tovar/${elem[0].name}`,
                                        state: elem,
                                        propsSearch: elem
                                    }}>
                                        <img
                                            src={process.env.PUBLIC_URL + `/image_tovars/poster_tovar/${Rename(elem)}.jpg`}
                                            style={{width:`100%`,height:`300px`,borderRadius: `10px`}}
                                        />
                                    </Link>
                                </div>
                                <div  className={classesTwo.block__Three__Tovar__Info}>
                                    <div  className={classesTwo.block__Three__Tovar__Info__head}>
                                        <div>
                                            Ключ: <b>{isUsers[0][3][id].key}</b>
                                        </div>
                                        <div>
                                            Дата: {isUsers[0][3][id].created_at.split(' ')[0]}
                                        </div>
                                        <div>
                                            <p
                                                onClick={()=>DelBuy(elem)}
                                                style={{cursor: `pointer`}}
                                            >
                                                ✖
                                            </p>
                                        </div>
                                        <b className={classesTwo.block__Three__Tovar__Info__name}>{elem[0].name}</b>
                                    </div>
                                    <div className={classesTwo.block__Three__Tovar__Info__description}>
                                        <p tabIndex={0} >
                                            {elem[0].description}
                                        </p>
                                    </div>
                                </div>
                                <div className={cn(classes.line,classesTwo.line)} />
                            </div>
                        )
                    })
                }
            </div>
        )
    )
}

export default History;