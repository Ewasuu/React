import React , { useEffect, useState } from 'react'
import { GetTrends } from '../actions/getGifs'
import { Link } from 'wouter'

function ListOfTrends(){
 
    const [trends, setTrends] = useState([])
    useEffect(function(){
        GetTrends().then(res => setTrends(res))
    }, [])
    return(
        <>
        
            <div className='trends-bar'>        
                <aside>
                        {trends.map(trend => <Link key={trend} to={`/gif/${trend}`} > {trend} </Link >)}
                </aside>
            </div>
          
        </>
        )
}
export default React.memo(ListOfTrends , (prevprops, nextprops) => {
    return prevprops.trend === nextprops.trend
})