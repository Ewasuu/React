import React  from "react" 


function Gif({id, url, title}){
    
    
    return(<div className='img-container'>
                    <figure>
                        <a href={url} target='_blank' rel='noreferrer' > <img key={id} src={url} alt={title}  /> </a>                    
                    </figure>
            </div>
        )
}

export default React.memo(Gif, (prevprops, nextprops) => {
    return prevprops.id === nextprops.id
})