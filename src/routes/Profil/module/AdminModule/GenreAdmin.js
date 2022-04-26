import React, {useState} from "react";
import NET from "../../../../network";

const GenreAdmin = (elem) =>{

    const [isGenre,setIsGenre] = useState(elem.elem.name)

    const DeletGenre = async (id) => {
        await fetch(`${NET.APP_URL}/deletGenre`, {
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
    const UpdateGenre = async (id) => {
        await fetch(`${NET.APP_URL}/updateGenre`, {
            method: 'POST',
            body: JSON.stringify({
                id:id,
                name: isGenre
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    return(
        <div>
            <input value={isGenre} onChange={(e)=>setIsGenre(e.target.value)} />
            <b
                onClick={()=>DeletGenre(elem.elem.id)}
            >
                DELETE
            </b>
            <b
                onClick={()=>UpdateGenre(elem.elem.id)}
            >
                UPDATE
            </b>
        </div>
    )
}

export default GenreAdmin