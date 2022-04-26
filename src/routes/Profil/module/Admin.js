import React, {useState} from "react";
import classesTwo from "../profile.module.scss";
import classes from '../../../style.module.scss'
import ContextData from "../../../Context/Date/ContextData";
import TovarAdmin from "./AdminModule/TovarAdmin";
import GenreAdmin from "./AdminModule/GenreAdmin";
import NET from "../../../network";
import PublisherAdmin from "./AdminModule/PublisherAdmin";
import DeveloperAdmin from "./AdminModule/DeveloperAdmin";
import RegionAdmin from "./AdminModule/RegionAdmin";
import ActivationAdmin from "./AdminModule/ActivationAdmin";
import TovarAdminInsert from "./AdminModule/TovarAdminInsert";

const Admin = ({isAdmin}) =>{
    const [isTovar,setIsTovar] = useState(true)
    const [isGenre,setIsGenre] = useState(false)
    const [isActivation,setIsActivation] = useState(false)
    const [isDeveloper,setIsDeveloper] = useState(false)
    const [isPublisher,setIsPublisher] = useState(false)
    const [isRegion,setIsRegion] = useState(false)




    const {stateData, dispatchData} = React.useContext(ContextData)
    const tovars = stateData.allTovarsInfo
    const genre = stateData.genres
    const publishers = stateData.publishers
    const developers = stateData.developers
    const activation = stateData.activation
    const region = stateData.region

    const [isGenreName,setIsGenreName] = useState()
    const [isPublisherName,setIsPublisherName] = useState()
    const [isRegionName,setIsRegionName] = useState()
    const [isActivationName,setIsActivationName] = useState()
    const [isDeveloperName,setIsDeveloperName] = useState()

    const createGenre = async () => {
        await fetch(`${NET.APP_URL}/createGenre`, {
            method: 'POST',
            body: JSON.stringify({
                name: isGenreName
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    const createPublisher = async () => {
        await fetch(`${NET.APP_URL}/createPublisher`, {
            method: 'POST',
            body: JSON.stringify({
                name: isPublisherName
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    const createDeveloper = async () => {
        await fetch(`${NET.APP_URL}/createDeveloper`, {
            method: 'POST',
            body: JSON.stringify({
                name: isDeveloperName
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    const createRegion = async () => {
        await fetch(`${NET.APP_URL}/createRegion`, {
            method: 'POST',
            body: JSON.stringify({
                name: isRegionName
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    const createActivation = async () => {
        await fetch(`${NET.APP_URL}/createActivation`, {
            method: 'POST',
            body: JSON.stringify({
                name: isActivationName
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    return(
        isAdmin &&(
            <div className={classesTwo.block__Five}>
                <div className={classesTwo.block__Five__Tovars}>
                    <div
                        className={classesTwo.block__Five__Tovars__Headers}
                        onClick={()=>setIsTovar(!isTovar)}
                    >
                        Товары <p>{isTovar? '▲':'▼'}</p>
                    </div>
                    {
                        isTovar && (
                            <div className={classesTwo.block__Five__Tovars__Tovar}>
                                <TovarAdminInsert />
                                {
                                    tovars.map((elem)=>{
                                            return(
                                                <TovarAdmin elem={elem} />
                                            )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
                <div className={classesTwo.block__Five__Tovars}>
                    <div
                        className={classesTwo.block__Five__Tovars__Headers}
                        onClick={()=>setIsGenre(!isGenre)}
                    >
                        Жанры <p>{isGenre? '▲':'▼'}</p>
                    </div>
                    {
                        isGenre && (
                            <div className={classesTwo.block__Five__Tovars__Tovar}>
                                <div>
                                    <input value={isGenreName} onChange={(e)=>setIsGenreName(e.target.value)} />
                                    <b
                                        onClick={()=>createGenre()}
                                    >
                                    Insert
                                    </b>
                                </div>
                                {
                                    genre.map((elem)=>{
                                        return(
                                            <GenreAdmin elem={elem} />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
                <div className={classesTwo.block__Five__Tovars}>
                    <div
                        className={classesTwo.block__Five__Tovars__Headers}
                        onClick={()=>setIsPublisher(!isPublisher)}
                    >
                        Издатели <p>{isPublisher? '▲':'▼'}</p>
                    </div>
                    {
                        isPublisher && (
                            <div className={classesTwo.block__Five__Tovars__Tovar}>
                                <div>
                                    <input value={isPublisherName} onChange={(e)=>setIsPublisherName(e.target.value)} />
                                    <b
                                        onClick={()=>createPublisher()}
                                    >
                                        Insert
                                    </b>
                                </div>
                                {
                                    publishers.map((elem)=>{
                                        return(
                                            <PublisherAdmin elem={elem} />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
                <div className={classesTwo.block__Five__Tovars}>
                    <div
                        className={classesTwo.block__Five__Tovars__Headers}
                        onClick={()=>setIsDeveloper(!isDeveloper)}
                    >
                        Разработчики <p>{isDeveloper? '▲':'▼'}</p>
                    </div>
                    {
                        isDeveloper && (
                            <div className={classesTwo.block__Five__Tovars__Tovar}>
                                <div>
                                    <input value={isDeveloperName} onChange={(e)=>setIsDeveloperName(e.target.value)} />
                                    <b
                                        onClick={()=>createDeveloper()}
                                    >
                                        Insert
                                    </b>
                                </div>
                                {
                                    developers.map((elem)=>{
                                        return(
                                            <DeveloperAdmin elem={elem} />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
                <div className={classesTwo.block__Five__Tovars}>
                    <div
                        className={classesTwo.block__Five__Tovars__Headers}
                        onClick={()=>setIsRegion(!isRegion)}
                    >
                        Регион активации <p>{isRegion? '▲':'▼'}</p>
                    </div>
                    {
                        isRegion && (
                            <div className={classesTwo.block__Five__Tovars__Tovar}>
                                <div>
                                    <input value={isRegionName} onChange={(e)=>setIsRegionName(e.target.value)} />
                                    <b
                                        onClick={()=>createRegion()}
                                    >
                                        Insert
                                    </b>
                                </div>
                                {
                                    region.map((elem)=>{
                                        return(
                                            <RegionAdmin elem={elem} />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
                <div className={classesTwo.block__Five__Tovars}>
                    <div
                        className={classesTwo.block__Five__Tovars__Headers}
                        onClick={()=>setIsActivation(!isActivation)}
                    >
                        Сервис активации <p>{isActivation? '▲':'▼'}</p>
                    </div>
                    {
                        isActivation && (
                            <div className={classesTwo.block__Five__Tovars__Tovar}>
                                <div>
                                    <input value={isActivationName} onChange={(e)=>setIsActivationName(e.target.value)} />
                                    <b
                                        onClick={()=>createActivation()}
                                    >
                                        Insert
                                    </b>
                                </div>
                                {
                                    activation.map((elem)=>{
                                        return(
                                            <ActivationAdmin elem={elem} />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        )
    )
}

export default Admin