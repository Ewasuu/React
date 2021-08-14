import React from "react" 

export function Gif({id, url, title}){
    return(<div key={id} className='giff'>
                <img src={url} alt={title}  />
                <p>{title}</p>
            </div>
        )
}