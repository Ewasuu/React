import React  from "react" 


export function Gif({id, url, title}){
    
    
    return(<div className='img-container'>
                    <figure>
                        <a href={url} target='_blank' rel='noreferrer' > <img key={id} src={url} alt={title}  /> </a>                    
                    </figure>
            </div>
        )
}

