import React, {useState,useEffect, useRef} from "react";
import classes from './navigation.module.scss'
import logo from './../../.././Content/image_site/Logo.png'
import search from './../../.././Content/image_site/Search.png'
import basket from './../../.././Content/image_site/Basket.png'
import heart from './../../.././Content/image_site/Heart.png'
import {Link} from "react-router-dom";
import cn from 'classnames';
import Catalog from "../Catalog/Catalog";
import ContextData from "../../../Context/Date/ContextData";
import NET from "../../../network";
import profil from '../../../Content/image_site/Group 169.png'

const Header = () =>{

    const {stateData, dispatchData} = React.useContext(ContextData)
    const token = localStorage.getItem('token')
    React.useEffect(() => {
        const fetchGenre = async () => {

            const response = await fetch(`${NET.APP_URL}/basket/num/${token}`)

            if (response.status === 200) {
                const result = await response.json()
                dispatchData({
                    type: "FETCH_NUMBASKET",
                    payload: result
                })
            }
        }
        fetchGenre()
    },[])
    const num = stateData.numBasket
    const [overflow, setOverflow] = useState('auto');
    const [theme, setTheme] = useState('hidden');
    const [color, setColor] = useState('bntNone');
    document.body.style.overflow = overflow;
    const bnt = document.querySelector('#btnAkt');
    const catalog = document.getElementsByClassName(classes.catalog)

    const handleMouseClick = (e: MouseEvent) =>     {
        let Childres = []
        var children = catalog[0].childNodes;
        for (var i = 0; i < children.length; ++i) {
            Childres.push(children[i])
            let childrenTwo = children[i].childNodes
            for (var u = 0; u < childrenTwo.length; ++u) {
                Childres.push(childrenTwo[u])
                let childrenThree = childrenTwo[u].childNodes
                for (var y = 0; y < childrenThree.length; ++y) {
                    Childres.push(childrenThree[y])
                }
            }
        }


        if (
            //надо будет передалать нормально
            console.log(Childres.map((elem)=>{
                return `${e.target !== elem} &&`
            }) &&

            e.target !== bnt && e.target !== catalog[0])
        )

        {
            overflow === 'auto'?setOverflow('auto'): setOverflow('auto')
            theme === 'visible' ? setTheme('hidden') : setTheme('hidden')
            bnt.classList.remove(classes.bntAkt)
            setColor('bntNone')
        }
    }

    const themeToggler = () => {

        theme === 'hidden' ? setTheme('visible') : setTheme('hidden')
        overflow === 'auto'?setOverflow('hidden'): setOverflow('auto')

        if(color==='bntNone'){
            bnt.classList.add(classes.bntAkt)
            setColor('btnAkt')
        }
        else{
            bnt.classList.remove(classes.bntAkt)
            setColor('bntNone')
        }

    }
    console.log(stateData.allTovarsInfo)
    let test = stateData.allTovarsInfo
    const [isSearchAct,setIsSearchAct] = useState(false)
    const [isArray,setIsArray] = useState(stateData.allTovarsInfo)
    const [isSearch,setIsSearch] = useState('')
    if((isSearch!=='')){
        let filteredNameOptions = []
        test.filter(name => name[0].name.includes(isSearch)).map(filteredName => (
            filteredNameOptions.push(filteredName)
        ))
        test = filteredNameOptions
    }
    return(
        <div onClick={handleMouseClick} className={classes.header}>
            <Link to='/'>
                <img width='120' src={logo}  />
            </Link>
            <div  className={classes.menu}>
                <button id={'btnAkt'} onClick={themeToggler} className={classes.border} >КАТАЛОГ</button>
                <div
                    className={classes.menu__InpSearch}
                >
                    <input
                        type='text'
                        className={classes.header__search}
                        placeholder={'Найти'}
                        value={isSearch}
                        onChange={(e)=> {
                            setIsSearch(e.target.value)
                            setIsSearchAct(true)
                            if(e.target.value==''){
                                setIsSearchAct(false)
                            }
                        }}

                    />
                    {
                        isSearchAct &&(
                            <div className={classes.menu__InpSearch__Search}>
                                {
                                    test?.map((elem)=>{
                                        return(
                                            <div>
                                                <Link to={{
                                                    pathname:`/Tovar/${elem[0].name}`,
                                                    state: elem,
                                                    propsSearch: elem
                                                }}
                                                >
                                                    {elem[0].name}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
                <div
                    style={{background: `url(${search}) no-repeat 50% 50%`  } }
                    type='submit'
                    className={classes.menu__searchbut}
                />
            </div>
            <div className={classes.menu}>
                {!token || token.length<80 ?
                    <Link
                        to={{
                            pathname: `/Login`
                        }}
                        className={classes.border}
                        style={{paddingTop: '10px'}}
                    >
                        ВОЙТИ
                    </Link>:
                    <Link
                        to={{
                            pathname: `/Profil`
                        }}
                        className={classes.imgBut}
                        style={{paddingTop: '2px'}}
                    >
                        <img src={profil}/>
                    </Link>
                }
                <Link className={classes.imgBut}>
                    <img  src={basket} />

                </Link>
                <Link
                    to={{
                        pathname:`/Basket`
                    }}
                    className={classes.imgBut}>
                    <img src={heart} />
                    {

                         num>0 && num<=9?(
                            <div className={classes.numBasket}>
                                {num}
                            </div>
                        ):num>=9?(
                            <div className={classes.numBasket}>
                                9+
                            </div>
                        ):(
                            <p></p>
                         )
                    }

                </Link>
            </div>
            <div style={{visibility : theme}}  className={cn(classes.menu,classes.catalog)}>
                <Catalog></Catalog>
            </div>
            <div className={classes.History}>
                {console.log(history)}
            </div>
        </div>
    )

}

export default Header