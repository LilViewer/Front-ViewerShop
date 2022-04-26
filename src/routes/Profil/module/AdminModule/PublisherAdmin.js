import React, {useState} from "react";
import NET from "../../../../network";

const PublisherAdmin = (elem) =>{

    const [isPublisher,setIsPublisher] = useState(elem.elem.name)

    const DeletPublisher = async (id) => {
        await fetch(`${NET.APP_URL}/deletPublisher`, {
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
    const UpdatePublisher = async (id) => {
        await fetch(`${NET.APP_URL}/updatePublisher`, {
            method: 'POST',
            body: JSON.stringify({
                id:id,
                name: isPublisher
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    return(
        <div>
            <input value={isPublisher} onChange={(e)=>setIsPublisher(e.target.value)} />
            <b
                onClick={()=>DeletPublisher(elem.elem.id)}
            >
                DELETE
            </b>
            <b
                onClick={()=>UpdatePublisher(elem.elem.id)}
            >
                UPDATE
            </b>
        </div>
    )
}

export default PublisherAdmin