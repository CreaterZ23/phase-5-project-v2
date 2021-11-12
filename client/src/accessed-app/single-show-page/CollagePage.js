import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom'
import SavedShowFetch from './SavedShowFetch'

export default function CollagePage ({ }){
    const [singleShow, setSingleShow] = useState([])
    // const { id } = useParams()
    const [toggle, setToggle] = useState(false)
    const [seasons, setSeasons] = useState([])
    const [episodes, setEpisodes] = useState([])
    const [casts, setCasts] = useState([])
    
    useEffect(() => {
        fetch(`/shows/1`)
        .then(resp => resp.json())
        .then(data => {
            setSingleShow(data)
           
        })

    },[toggle])

    effectOriginal()

    function effectOriginal(){
        console.log(singleShow)
        fetch(`https://api.tvmaze.com/shows/84/episodes`)
        .then(resp => resp.json())
        .then(data=> {
            console.log(data)
            setEpisodes(data)
            effectOne()
            effectTwo()
        })
    }


    function effectOne() {
        fetch(`https://api.tvmaze.com/shows/84/seasons`)
        .then(resp => resp.json())
        .then(data=> {
            console.log(data)
            setSeasons(data)
        })
    }

    function effectTwo(){
        fetch(`https://api.tvmaze.com/shows/84/cast`)
        .then(resp => resp.json())
        .then(data=> {
            console.log(data)
            setCasts(data)
        })
  
    }




    console.log(singleShow)

    return(
    <div>
        {singleShow ? 
        <div>
        <SavedShowFetch singleShow={singleShow} />
        <h2>{singleShow.name}</h2>
        </div>
        : <h2>loading</h2>}
        

    </div>
    )
}