import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {imageUrl, ApiKey} from '../../Constants/Constants'
import Youtube from 'react-youtube'
import './RowPost.css'
function RowPost(props) {
    const [Movie, setMovie] = useState([])
    const [urlId, seturlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovie(response.data.results)
            
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie =(id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${ApiKey}&language=en-US`).then((response) => {
            if(response.data.results.length!==0){
                seturlId(response.data.results[0])
            } else {
                console.log('Array Empty');
            }
        })
      }
    return ( 
        <div className='row' >
            <h2>{props.title}</h2>
            <div className="posters">
                {Movie.map((obj)=>

                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small-poster' :  'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                )}
                


            </div>
           {urlId && <Youtube videoId={urlId.key} opts={opts}/> }
        </div>
    )
}

export default RowPost
