import React from "react";
import ContextData from "../../../Context/Date/ContextData";
import classes from "../../../style.module.scss";
import {Link} from "react-router-dom";
import NewItem from "../../Tovars/moduls/Newitem";

const FilterTovars=({popularity, genre, price, developer,publisher,region,activation, onlyStock})=>{
    const {stateData, dispatchData} = React.useContext(ContextData)
    const tovars = stateData.allTovarsInfo
    console.log(tovars)
    let filteredNameOptions = []
    //доделать сортировку по popilatity
    const propsFilter=[ genre, developer,publisher,region,activation,onlyStock,price,popularity]
    let count=0

    tovars.map((elem)=>{
        count=0

        elem.map((filter,index)=>{

            if (filter!=elem[0] && filter!=elem[6]){
                if(filter!==[]){
                    filter.map((filterElem)=>{
                        if(propsFilter[index-1].length>1){
                            propsFilter[index-1].map((propsFilterElem)=>{
                                count+= filterElem.name==propsFilterElem?1:0
                            })
                        }
                        count+= filterElem.name==propsFilter[index-1]?1:0
                    })


                }
            }
        })


        if(onlyStock===true && elem[6].length>=1 && count>=1){
            filteredNameOptions.push(elem)
        }
        else if(onlyStock===false && count>=1){
            filteredNameOptions.push(elem)
        }
    })
    if(filteredNameOptions.length==0
        && genre.length==0
        && developer.length==0
        && publisher.length==0
        && region.length==0
        && activation.length==0
        && onlyStock==false
    ){
        filteredNameOptions=tovars
    }
    if(price!=='Все цены'){
        filteredNameOptions = filteredNameOptions.filter((elem)=>elem[0].price<=(price==='До 100 ₽'?100:300))
    }
    // СОРТИРОВКА ПО Популярности/Цене/ДАте
    if(popularity==='По популярности'){
        let test = []
        filteredNameOptions.map((elem)=>{
            test.push({'rating':Number(elem[0].Rating),'id':elem[0].id})
        })
        test.sort((a,b)=>a.rating<b.rating?1:-1)
        let Suptest = []
        test.map((elem)=>{
            Suptest.push(filteredNameOptions.filter((elems)=>elems[0].id==elem.id))
        })
        filteredNameOptions = Suptest.flat()
    }
    if(popularity==='Сначала дешовые'){
        let test = []
        filteredNameOptions.map((elem)=>{
            test.push({'price':Number(elem[0].price),'id':elem[0].id
        })
        })
        test.sort((a,b)=>a.price>b.price?1:-1)
        let Suptest = []
        test.map((elem)=>{
            Suptest.push(filteredNameOptions.filter((elems)=>elems[0].id==elem.id))
        })
        filteredNameOptions = Suptest.flat()
    }
    if(popularity==='Сначала дорогие'){
        let test = []
        filteredNameOptions.map((elem)=>{
            test.push({'price':Number(elem[0].price),'id':elem[0].id
            })
        })
        test.sort((a,b)=>a.price<b.price?1:-1)
        let Suptest = []
        test.map((elem)=>{
            Suptest.push(filteredNameOptions.filter((elems)=>elems[0].id==elem.id))
        })
        filteredNameOptions = Suptest.flat()
    }
    if(popularity==='По дате выхода'){
        let test = []
        filteredNameOptions.map((elem)=>{
            test.push({'data':elem[0].data,'id':elem[0].id})
        })
        test.sort((a,b)=>a.data<b.data?1:-1)
        let Suptest = []
        test.map((elem)=>{
            Suptest.push(filteredNameOptions.filter((elems)=>elems[0].id==elem.id))
        })
        filteredNameOptions = Suptest.flat()
    }
    return(
        <div className={classes.main}>

            <div className={classes.tovarsVetrina}>{filteredNameOptions.map((elem,index)=>{
                return(
                    <Link to={{
                        pathname:`/Tovar/${elem[0].name}`,
                        state: elem,
                        propsSearch: elem
                    }}>
                        <NewItem data={elem} key={index} />

                    </Link>

                )
            })}</div>
        </div>
    )
}

export default FilterTovars