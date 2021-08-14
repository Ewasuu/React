
const url = `https://api.giphy.com/v1/gifs/search?api_key=R5tFwIw5Ae1kPpVXwVE9pT7n8OohBnK7&q=naruto&limit=10&offset=0&rating=g&lang=en`


export default function getGifs( updater){
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const {data} = res
        const gif = data.map(image => image.images.downsized_medium.url)
        updater(gif)
      }
    )
}