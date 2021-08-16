import React from 'react'
import {Link} from 'wouter'


export function home(){
    const trend = ['kakashi', 'Naruto', 'Sasuke', 'Sakura', 'Boruto']
    return(
        <div className='Home-Link-section' >
            <h2>Trending Gifs:</h2>
            {trend.map(trendingGif => {
                return <Link className='Home-Link' to={`/gif/${trendingGif}`}> Gif de {trendingGif} </Link>
            })}

        </div>


    )
}