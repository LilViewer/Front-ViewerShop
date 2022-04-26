import React, {useState} from "react";
import NET from "../../../../network";

const RegionAdmin = (elem) =>{

    const [isRegion,setIsRegion] = useState(elem.elem.name)

    const DeletRegion = async (id) => {
        await fetch(`${NET.APP_URL}/deletRegion`, {
            method: 'POST',
            body: JSON.stringify({
                id:id
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    const UpdateRegion = async (id) => {
        await fetch(`${NET.APP_URL}/updateRegion`, {
            method: 'POST',
            body: JSON.stringify({
                id:id,
                name: isRegion
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    return(
        <div>
            <input value={isRegion} onChange={(e)=>setIsRegion(e.target.value)} />
            <b
                onClick={()=>DeletRegion(elem.elem.id)}
            >
                DELETE
            </b>
            <b
                onClick={()=>UpdateRegion(elem.elem.id)}
            >
                UPDATE
            </b>
        </div>
    )
}

export default RegionAdmin