import React from "react";

import classes from '../tovars.module.scss'
import Image from "../../../components/ui/image";
import NameTovar from "../../../components/ui/NameTovar";
import TovarDemoInfo from "../../../components/ui/TovarDemoInfo";
import Discount from "../../../components/ui/Discount";
import Price from "../../../components/ui/Price";
import NET from "../../../network";
import ContextData from "../../../Context/Date/ContextData";
import {Link} from "react-router-dom";

const NewItem = ({data}) =>{
    const {stateData, dispatchData} = React.useContext(ContextData)
    const token = document.cookie
    const addBasket = async ()=>{
        // const response = await fetch(`${NET.APP_URL}/basket/add/${token}/${data.id}`)
        // console.log(response)
        await fetch(`${NET.APP_URL}/basket/add`,{
            method: 'POST',
            body:JSON.stringify({
                token: token,
                id: data[0].id
            }),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response){
            response.json().then(function (resp){
                // console.log(resp)
            })
        })
    }


    const Rename =()=>{
        var filename = data[0].name;
        filename = filename.replace(/[/\\?%*:|"<>]/g, ' ');
        return filename
    }

    return(
        <div className={classes.prevTovar}>
            <div onClick={addBasket} className={classes.borderButtonActivated}>
                КУПИТЬ
            </div>
            <Link to={{
                pathname:`/Tovar/${data.name}`,
                state: data,
                propsSearch: data
            }}>
                <Image sizeWidth='100%'>
                    <img src={process.env.PUBLIC_URL + `/image_tovars/poster_tovar/${Rename()}.jpg`} />
                </Image>
                <div className={classes.prevTovar__blockShadow}>

                </div>
                <div className={classes.prevTovar__blockInfoTovar}>
                    <NameTovar>{data[0].name}</NameTovar>
                    <TovarDemoInfo>
                        <Discount  display={(data[0].discount!=0)? '' : 'none'}>-{data[0].discount? data[0].discount+'%' : ''}</Discount>
                        <Price>{data[0].price} ₽</Price>
                    </TovarDemoInfo>
                </div>
            </Link>
        </div>

    );

}

export default NewItem