import React, {useState} from "react";
import NET from "../../../../network";

const DeveloperAdmin = (elem) =>{

    const [isDeveloper,setIsDeveloper] = useState(elem.elem.name)

    const DeletDeveloper = async (id) => {
        await fetch(`${NET.APP_URL}/deletDeveloper`, {
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
    const UpdateDeveloper = async (id) => {
        await fetch(`${NET.APP_URL}/updateDeveloper`, {
            method: 'POST',
            body: JSON.stringify({
                id:id,
                name: isDeveloper
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    return(
        <div>
            <input value={isDeveloper} onChange={(e)=>setIsDeveloper(e.target.value)} />
            <b
                onClick={()=>DeletDeveloper(elem.elem.id)}
            >
                DELETE
            </b>
            <b
                onClick={()=>UpdateDeveloper(elem.elem.id)}
            >
                UPDATE
            </b>
        </div>
    )
}

export default DeveloperAdmin