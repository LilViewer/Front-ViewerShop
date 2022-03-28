import classes from './catalog.module.scss'
import React from "react";
import cn from 'classnames';
import ContextData from "../../../Context/Date/ContextData";
import NET from "../../../network";
import {Link} from "react-router-dom";
import {useHistory, useLocation} from "react-router";
import UploadData from "../../../Context/Date/UploadData";



const Catalog = () =>{
    const {stateData, dispatchData} = React.useContext(ContextData)

    UploadData()
    const hist = useHistory()
    if(hist.action === 'PUSH'){
        window.location.reload()
    }

    const genres = stateData.genres

    const publisher = stateData.publishers

    const developer = stateData.developers

    return(
        <div className={classes.blockCatalog}>
            <div className={classes.blockCatalog__personal}>
                <div className={classes.blockCatalog__personal__oneblock}>
                    <Link to='/Filter/'>
                        Лидеры продаж
                    </Link>
                    <Link to='/Filter/'>
                        Новинки
                    </Link>
                    <Link to='/Filter'>
                        Все
                    </Link>
                </div>

                <div className={classes.blockCatalog__personal__twoblock}>

                    <Link to='/Filter'>
                        О компании
                    </Link>
                    <Link to='/Filter'>
                        Поддержка
                    </Link>
                </div>

            </div>
            <div className={classes.blockCatalog__genre}>
                <h3>
                    Жанры
                </h3>
                <div className={classes.blockCatalog__genres}>
                    {genres.slice(0,10).map((elem,index)=>{
                        return(
                            <Link to={{
                                pathname:`/Filter/Genre/${elem.name}`,
                                state: elem,
                                propsSearch: elem
                            }}>
                                {elem.name}
                            </Link>
                        )

                    })}
                </div>
                <Link to='/Filter' className={classes.blockCatalog__genre__next}>
                    Все игры - {genres.length}
                </Link>
            </div>
            <div className={classes.blockCatalog__publisher}>
                <h3>
                    Издатели
                </h3>
                <div className={classes.blockCatalog__genres}>
                    {publisher.slice(0,10).map((elem,index)=>{
                        return(
                            <Link to={{
                                pathname:`/Filter/Publisher/${elem.name}`,
                                state: elem,
                                propsSearch: elem
                            }}>
                                {elem.name}
                            </Link>
                        )

                    })}
                </div>
                <Link to='/Filter' className={classes.blockCatalog__genre__next}>
                    Все издатели - {publisher.length}
                </Link>
            </div>
            <div className={classes.blockCatalog__developer}>
                <h3>
                    Разработчики
                </h3>
                <div className={classes.blockCatalog__genres}>
                    {developer.slice(0,10).map((elem,index)=>{
                        return(
                            <Link to={{
                                pathname:`/Filter/Developer/${elem.name}`,
                                state: elem,
                                propsSearch: elem
                            }}>
                                {elem.name}
                            </Link>
                        )

                    })}
                </div>
                <Link to='/Filter' className={classes.blockCatalog__genre__next}>
                    Все разработчики - {developer.length}
                </Link>
            </div>
        </div>
    )

}

export default Catalog