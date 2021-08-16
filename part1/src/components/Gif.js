import React from "react" 

export function Gif({id, url, title}){
    return(<div className='img-container'>
                <img key={id} src={url} alt={title}  />
                
            </div>
        )
}