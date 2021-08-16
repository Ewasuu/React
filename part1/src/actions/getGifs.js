const apiKey = 'api_key=R5tFwIw5Ae1kPpVXwVE9pT7n8OohBnK7'


export  function getGifs(updater, {keyword = 'sasuke'} = {}){
    console.log(keyword)
    const url = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${keyword}&limit=21&offset=0&rating=r&lang=en`

    return(
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const {data} = res
        const gif = data.map(image => {
            const { id, title} = image
            const {url} = image.images.downsized_medium
            return {id, title, url}
        }
        )
        console.log(gif)
        updater(gif)
        }
        
    ))
}