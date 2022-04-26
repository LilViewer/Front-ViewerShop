import React, {useState} from "react";
import NET from "../../../../network";

const ActivationAdmin = (elem) =>{

    const [isActivation,setIsActivation] = useState(elem.elem.name)

    const DeletActivation = async (id) => {
        await fetch(`${NET.APP_URL}/deletActivation`, {
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
    const UpdateActivation = async (id) => {
        await fetch(`${NET.APP_URL}/updateActivation`, {
            method: 'POST',
            body: JSON.stringify({
                id:id,
                name: isActivation
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    return(
        <div>
            <input value={isActivation} onChange={(e)=>setIsActivation(e.target.value)} />
            <b
                onClick={()=>DeletActivation(elem.elem.id)}
            >
                DELETE
            </b>
            <b
                onClick={()=>UpdateActivation(elem.elem.id)}
            >
                UPDATE
            </b>
        </div>
    )
}

export default ActivationAdmin