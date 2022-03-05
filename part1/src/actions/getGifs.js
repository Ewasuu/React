import { apiKey, defaultUrlStart } from "./api_key"



export  async function GetGifs({keyword = 'sasuke'} = {}, page){
    const url = `${defaultUrlStart}/gifs/search?${apiKey}&q=${keyword}&limit=50&offset=${page * 50}&rating=r&lang=en}`
        
    return(
        
    await fetch(url)
            .then(res => res.json())
            .then(res => {
                const {data} = res
                const gif = data.map(image => {
                    const { id, title} = image
                    const {url} = image.images.downsized_medium
                    return {id, title, url}
                }
                )
                return gif
                
                }
                
            ))
}

export async function GetTrends(){
    const url = `${defaultUrlStart}/trending/searches?${apiKey}`
    return(
        await fetch(url)
                .then(res => res.json())
                .then(res => {
                    const {data} = res
                    return data
                })
                   
    )}
    