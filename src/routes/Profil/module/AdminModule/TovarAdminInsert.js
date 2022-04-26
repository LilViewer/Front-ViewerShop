import React, {createRef, useState} from "react";
import classesTwo from "../../profile.module.scss";
import classes from "../../../../style.module.scss";
import {Link} from "react-router-dom";
import TrailerInfo from "../../../Tovar/moduls/TrailerInfo";
import FilterMenuMod from "../../../Filteres/moduls/FilterMenuMod";
import ContextData from "../../../../Context/Date/ContextData";
import TovarAdminBottomBlock from "./TovarAdminBottomBlock";
import TovarAdminSistem from "./TovarAdminSistem";
import NET from "../../../../network";
import axios from "axios";

const TovarAdminInsert=()=>{
    const {stateData, dispatchData} = React.useContext(ContextData)

    const [isTovarPrice,setIsTovarPrice]=useState('')
    const [isTovarDiscount,setIsTovarDiscount]=useState('')
    const [isTovarName,setIsTovarName]=useState('')
    const [isTovarDescription,setIsTovarDescription]=useState('')
    const [isTovarData,setIsTovarData]=useState('')

    const [isTovarGenre,setIsTovarGenre]=useState([])
    const ArrayGenre = stateData.genres.map(el=>el.name)

    const [isTovarPublisher,setIsTovarPublisher]=useState([])
    const ArrayPublishers = stateData.publishers.map(el=>el.name)

    const [isTovarDeveloper,setIsTovarDeveloper]=useState([])
    const ArrayDevelopers = stateData.developers.map(el=>el.name)

    const [isTovarRegion,setIsTovarRegion]=useState([])
    const ArrayRegion = stateData.region.map(el=>el.name)

    const [isTovarActivation,setIsTovarActivation]=useState('')
    const ArrayActivation = stateData.activation.map(el=>el.name)

    const Rename =(inp)=>{
        var filename = inp;
        filename = filename.replace(/[/\\?%*:|"<>]/g, ' ');
        return filename
    }

    const Statick=[
        ['Жанры','Genre'],
        ['Разработчик','Developer'],
        ['Издатель','Publisher'],
        ['Регион активации','Region'],
        ['Сервис активации','Activation'],
    ]

    const [isSistem,setIsSistem] = useState(true);
    const [isSimilar,setIsSimilar] = useState(false);
    const [isSeries,setIsSeries] = useState(false);
    const [isDLC,setIsDLC] = useState(false);

    const [isMinOS,setIsMinOS]=useState('')
    const [isMinProcessor,setIsMinProcessor]=useState('')
    const [isMinRAM,setIsMinRAM]=useState('')
    const [isMinVideo_Card,setIsMinVideo_Card]=useState('')

    const [isSize,setIsSize]=useState('')

    const [isRecOS,setIsRecOS]=useState('')
    const [isRecProcessor,setIsRecProcessor]=useState('')
    const [isRecRAM,setIsRecRAM]=useState('')
    const [isRecVideo_Card,setIsRecVideo_Card]=useState('')

    const CreateTovar = async () => {
        await fetch(`${NET.APP_URL}/createTovar`, {
            method: 'POST',
            body: JSON.stringify({
                price: isTovarPrice,
                discount: isTovarDiscount,
                name: isTovarName,
                description: isTovarDescription,
                genre: isTovarGenre,
                data: isTovarData,
                publisher: isTovarPublisher,
                developer: isTovarDeveloper,
                activation: isTovarActivation,
                region: isTovarRegion,
                minOs: isMinOS,
                minProcessor: isMinProcessor,
                minRAM: isMinRAM,
                minVideoCard: isMinVideo_Card,
                recOs: isRecOS,
                recProcessor: isRecProcessor,
                recRAM: isRecRAM,
                recVideoCard: isRecVideo_Card,
                size: isSize
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

    const [isSlider,setIsSlider]=useState(1)

    const [isFile,setIsFile] = useState(null)
    var file
    var files = []
    for (var i = 0;i<isFile?.length;i++){
        file = window.URL.createObjectURL(isFile[i])
        // let reader = new FileReader();
        // reader.readAsDataURL(file)
        // reader.onload = function (){
        //     console.log(reader.result)
        // }
        files.push(file)
    }
    return(
        <div style={{paddingTop:`10px`}}>
            <div className={classesTwo.block__Five__Tovars__Tovar__TopBlock}>
                <img src={process.env.PUBLIC_URL + `/image_tovars/poster_tovar/`} />
                <div style={{width:`100%`}}>
                    <div className={classesTwo.block__Five__Tovars__Tovar__TopBlock__head}>
                        <div className={classesTwo.block__Five__Tovars__Tovar__TopBlock__head__One}>
                            <div>
                                Цена:
                                <input
                                    value={isTovarPrice}
                                    onChange={(e)=>setIsTovarPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                Скидка:
                                <input
                                    style={{width:`32px`}}
                                    value={isTovarDiscount}
                                    onChange={(e)=>setIsTovarDiscount(e.target.value)}
                                />
                            </div>

                        </div>
                        <div className={classesTwo.block__Five__Tovars__Tovar__TopBlock__head__Two}>
                            <b
                                onClick={()=>CreateTovar()}
                            >
                                Create
                            </b>
                        </div>
                    </div>
                    <div className={classesTwo.block__Five__Tovars__Tovar__TopBlock__name}>
                        <input
                            value={isTovarName}
                            onChange={(e)=>setIsTovarName(e.target.value)}
                        />
                    </div>
                    <div className={classesTwo.block__Five__Tovars__Tovar__TopBlock__description}>
                        <textarea
                            rows={6}
                            value={isTovarDescription}
                            onChange={(e)=>setIsTovarDescription(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className={classesTwo.block__Five__Tovars__Tovar__MainBlock}>
                <div className={classesTwo.block__Five__Tovars__Tovar__MainBlock__left}>
                    <div className={classesTwo.block__Five__Tovars__Tovar__MainBlock__left__slider}>
                        {
                            files.length!=0?(
                                files.map((item,id)=>{
                                    {console.log(isSlider,id,item)}
                                    return(
                                        <div>
                                            {isSlider == id+1 ? (
                                                <div
                                                    className={classesTwo.block__Five__Tovars__Tovar__MainBlock__left__slider__item}>
                                                    <img src={item}/>
                                                </div>
                                            ) : ''}
                                        </div>
                                    )
                                })
                            ):(
                                [1,2,3,4,5,6].map((item)=>{
                                    return (
                                        <div>
                                            {isSlider == item ? (
                                                <div
                                                    className={classesTwo.block__Five__Tovars__Tovar__MainBlock__left__slider__item}>
                                                    <img
                                                        src={process.env.PUBLIC_URL + `/image_tovars/screan_tovar/`}/>
                                                </div>
                                            ) : ''}
                                        </div>
                                    )
                                })
                            )
                        }
                        <div  className={classesTwo.block__Five__Tovars__Tovar__MainBlock__left__slider__upload}>
                            <input multiple  id={'inp'} type={`file`} onChange={(e)=>setIsFile(e.currentTarget.files)} />
                            <b onClick={()=>setIsFile(null)}>Clear</b>
                        </div>
                        <div className={classesTwo.block__Five__Tovars__Tovar__MainBlock__left__slider__controller}>
                            {
                                [1,2,3,4,5,6].map((item)=>{
                                    return <p style={{background:item==isSlider?`#3FD371`:''}} onClick={()=>setIsSlider(item)}></p>
                                })
                            }
                        </div>
                    </div>
                    <div className={classesTwo.block__Five__Tovars__Tovar__MainBlock__left__pivot}>
                        <div>

                        </div>
                        <div>
                            <FilterMenuMod
                                selected={'Жанры:'}
                                selecteds={isTovarGenre}
                                setSelected={setIsTovarGenre}
                                options={ArrayGenre}
                            />
                            <div style={{marginLeft:`5px`}}>
                                <p>
                                    Дата:
                                    <input
                                        value={isTovarData}
                                        onChange={(e)=>setIsTovarData(e.target.value)}
                                    />
                                </p>
                            </div>
                            <FilterMenuMod
                                selected={'Издатель:'}
                                selecteds={isTovarPublisher}
                                setSelected={setIsTovarPublisher}
                                options={ArrayPublishers}
                            />
                            <FilterMenuMod
                                selected={'Разработчик:'}
                                selecteds={isTovarDeveloper}
                                setSelected={setIsTovarDeveloper}
                                options={ArrayDevelopers}
                            />
                            <FilterMenuMod
                                selected={'Сервис активации:'}
                                selecteds={isTovarActivation}
                                setSelected={setIsTovarActivation}
                                options={ArrayActivation}
                            />
                            <FilterMenuMod
                                selected={'Регион активации:'}
                                selecteds={isTovarRegion}
                                setSelected={setIsTovarRegion}
                                options={ArrayRegion}
                            />
                        </div>
                    </div>
                </div>
                <div className={classesTwo.block__Five__Tovars__Tovar__MainBlock__right}>
                    <img src={process.env.PUBLIC_URL + `/image_tovars/poster_tovar/`} />
                </div>
            </div>
            <div className={classesTwo.block__Five__Tovars__Tovar__BottomBlock}>
                <div className={classesTwo.block__Five__Tovars__Tovar__BottomBlock__head}>
                    <TovarAdminBottomBlock
                        text={'Системные требования'}
                        setIsSimilar={setIsSimilar}
                        setIsDLC={setIsDLC}
                        setIsSeries={setIsSeries}
                        setIsSistem={setIsSistem}
                        act={isSistem}
                        setact={setIsSistem}
                    />
                    <TovarAdminBottomBlock
                        text={'Похожие игры'}
                        setIsSimilar={setIsSimilar}
                        setIsDLC={setIsDLC}
                        setIsSeries={setIsSeries}
                        setIsSistem={setIsSistem}
                        act={isSimilar}
                        setact={setIsSimilar}
                    />
                    <TovarAdminBottomBlock
                        text={'Игры серии'}
                        setIsSimilar={setIsSimilar}
                        setIsDLC={setIsDLC}
                        setIsSeries={setIsSeries}
                        setIsSistem={setIsSistem}
                        act={isSeries}
                        setact={setIsSeries}
                    />
                    <TovarAdminBottomBlock
                        text={'DLC'}
                        setIsSimilar={setIsSimilar}
                        setIsDLC={setIsDLC}
                        setIsSeries={setIsSeries}
                        setIsSistem={setIsSistem}
                        act={isDLC}
                        setact={setIsDLC}
                    />
                </div>
                <div className={classesTwo.block__Five__Tovars__Tovar__BottomBlock__main}>
                    {

                        isSistem && (
                            <TovarAdminSistem
                                isMinOS={isMinOS}
                                isMinProcessor={isMinProcessor}
                                isMinRAM={isMinRAM}
                                isMinVideo_Card={isMinVideo_Card}
                                isRecOS={isRecOS}
                                isRecProcessor={isRecProcessor}
                                isRecRAM={isRecRAM}
                                isRecVideo_Card={isRecVideo_Card}
                                setIsMinOS={setIsMinOS}
                                setIsMinProcessor={setIsMinProcessor}
                                setIsMinRAM={setIsMinRAM}
                                setIsMinVideo_Card={setIsMinVideo_Card}
                                setIsRecOS={setIsRecOS}
                                setIsRecProcessor={setIsRecProcessor}
                                setIsRecRAM={setIsRecRAM}
                                setIsRecVideo_Card={setIsRecVideo_Card}
                                isSize={isSize}
                                setIsSize={setIsSize}
                            />
                        )
                    }
                    {
                        isSimilar && (
                            <div>2</div>
                        )
                    }
                    {
                        isSeries && (
                            <div>3</div>
                        )
                    }
                    {
                        isDLC && (
                            <div>4</div>
                        )
                    }
                    {

                    }
                </div>
            </div>
            <div
                style={{margin:`10px 0`}}
                className={classes.line}
            />
        </div>
    )

}

export default TovarAdminInsert