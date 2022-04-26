import classes from "../../style.module.scss";
import Header from "../moduls/Navigation/Header";
import React, {useRef} from "react";
import ContextData from "../../Context/Date/ContextData";
import NET from "../../network";
import {Link} from "react-router-dom";
import { useHistory } from "react-router";
import classesTwo from './filteres.module.scss';
import FilterMenu from "./moduls/FilterMenu";
import FilterMenuMod from './moduls/FilterMenuMod';
import {useState,setState} from "react";
import FilterSwitch from "./moduls/FilterSwitch";
import cn from 'classnames';
import FilterTovars from "./moduls/FilterTovars";
import Footer from "../moduls/Navigation/Footer";




let Filteres = (props) =>{
    const propse = props.location.pathname.split('/')
    const {stateData, dispatchData} = React.useContext(ContextData)



    const [selectedClassic, setSelectedClassic] = useState(stateData.FilterMenuClassic[0]);
    const [selectedPrice, setSelectedPrice] = useState(stateData.FilterMenuPrice[0]);

    // console.log(stateData.FilterMenuDinamic[stateData.FilterMenuDinamic.indexOf(propse)])


    const [selectedGenreArray, setSelectedGenreArray] =  useState(propse[2]=='Genre'?[propse[3]]:[]);
    const ArrayGenre = stateData.genres.map(el=>el.name)
    console.log(selectedGenreArray,ArrayGenre)
    const [selectedPublishersArray, setSelectedPublishersArray] =  useState(propse[2]=='Publisher'?[propse[3]]:[]);
    const ArrayPublishers = stateData.publishers.map(el=>el.name)

    const [selectedDevelopersArray, setSelectedDevelopersArray] =  useState(propse[2]=='Developer'?[propse[3]]:[]);
    const ArrayDevelopers = stateData.developers.map(el=>el.name)

    const [selectedActivationArray, setSelectedActivationArray] =  useState(propse[2]=='Activation'?[propse[3]]:[]);
    const ArrayActivation = stateData.activation.map(el=>el.name)

    const [selectedRegionArray, setSelectedRegionArray] =  useState(propse[2]=='Region'?[propse[3]]:[]);
    const ArrayRegion = stateData.region.map(el=>el.name)

    const [isToggled, setIsToggled] =  useState(false);
    const [isVisible, setIsVisible] =  useState(false);
    return (

        <div className={classes.main}>

            <div className={classes.main__header}><Header /></div>

            <div className={cn(classes.main__block,classesTwo.Filterblock)}>
                <h2>КАТАЛОГ ИГР</h2>
                <div className={classesTwo.FilterMenu}>
                    <FilterMenu selected={selectedClassic} setSelected={setSelectedClassic} options={stateData.FilterMenuClassic} ></FilterMenu>
                    {/*//Убрать избраное и доделать сортировку*/}
                    {/*<FilterMenuMod  selected={'Издатель:'} selecteds={selectedPublishersArray}  setSelected={setSelectedPublishersArray} options={ArrayPublishers} />*/}
                    <FilterMenuMod  selected={'Жанры:'} selecteds={selectedGenreArray}  setSelected={setSelectedGenreArray} options={ArrayGenre}/>
                    <FilterMenu  selected={selectedPrice} setSelected={setSelectedPrice} options={stateData.FilterMenuPrice} ></FilterMenu>
                    <div className={classesTwo.FilterMenu__block}>
                            <div className={classesTwo.FilterMenu__block__available}  onClick={(e)=>setIsToggled(!isToggled)}>
                                <FilterSwitch isToggled={isToggled} />
                                <p>Только в наличии</p>
                            </div>
                            <div  className={cn(classesTwo.FilterMenu__block__clear,classes.border)}
                                  onClick={(e)=>{
                                      setSelectedClassic(stateData.FilterMenuClassic[0])
                                      setSelectedPrice(stateData.FilterMenuPrice[0])
                                      setSelectedGenreArray(propse[2]=='Genre'?[propse[3]]:[])
                                      setSelectedPublishersArray(propse[2]=='Publisher'?[propse[3]]:[])
                                      setSelectedDevelopersArray(propse[2]=='Developer'?[propse[3]]:[])
                                      setSelectedActivationArray(propse[2]=='Activation'?[propse[3]]:[])
                                      setSelectedRegionArray(propse[2]=='Region'?[propse[3]]:[])
                                  }}
                            >
                                ОЧИСТИТЬ
                            </div>
                        <div onClick={(e)=>setIsVisible(!isVisible)} className={cn(classesTwo.FilterMenu__block__allFilters,classes.border,isVisible==true?`${classesTwo.btn_act}`:'')}>
                            ВСЕ ФИЛЬТРЫ
                        </div>
                    </div>
                </div>
                <div style={{visibility: isVisible==true?'visible':'hidden'}} className={classesTwo.FilterMenu_Two}>
                    <FilterMenuMod  selected={'Издатель:'} selecteds={selectedPublishersArray}  setSelected={setSelectedPublishersArray} options={ArrayPublishers} />

                    <FilterMenuMod  selected={'Разработчик:'} selecteds={selectedDevelopersArray}  setSelected={setSelectedDevelopersArray} options={ArrayDevelopers} />
                    <FilterMenuMod  selected={'Активация:'} selecteds={selectedActivationArray}  setSelected={setSelectedActivationArray} options={ArrayActivation} />
                    <FilterMenuMod  selected={'Регион:'} selecteds={selectedRegionArray}  setSelected={setSelectedRegionArray} options={ArrayRegion} />
                    <p></p>
                </div>
            </div>
            <FilterTovars popularity={selectedClassic} genre={selectedGenreArray} price={selectedPrice} developer={selectedDevelopersArray} publisher={selectedPublishersArray} region={selectedRegionArray} activation={selectedActivationArray} onlyStock={isToggled}/>
            <Footer />
        </div>

    )
}

export default Filteres