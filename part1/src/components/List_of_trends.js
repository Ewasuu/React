import React , { useEffect, useState } from 'react'
import { GetTrends } from '../actions/getGifs'
import { Link } from 'wouter'
import { useGif } from '../customHooks/useGif'
export function ListOfTrends(){
    const {loader} = useGif()
    const [trends, setTrends] = useState([])
    useEffect(function(){
        GetTrends().then(res => setTrends(res))
    }, [])
    return(
        <>
        {loader ? null : (
            <div className='trends-bar'>        
                <aside>
                        {trends.map(trend => <Link key={trend} to={`/gif/${trend}`} > {trend} </Link >)}
                </aside>
            </div>
          )}
        </>
        )
}