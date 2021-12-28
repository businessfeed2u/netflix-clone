import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {ApiKey, imageUrl} from '../../Constants/Constants'
import './Banner.css'
function Banner() {
    const [Movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${ApiKey}&language=en-US`).then((response) => {
            
            const results = response.data.results
            const newIndex = Math.floor(Math.random() * results.length)
            console.log(response.data.results[newIndex]);
            setMovie(response.data.results[newIndex])
            
        })
    }, []) 
    return (
        <div
        style={{backgroundImage: `url(${Movie ? imageUrl+Movie.backdrop_path : ""})`}}
         className='banner'>
            <div className="content">
                <h1 className='movie-name' >{Movie ? Movie.title : ""}</h1>
                <div className="banner-buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My List</button> 
                </div>
                <h1 className="description">{Movie ? Movie.overview :""}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
