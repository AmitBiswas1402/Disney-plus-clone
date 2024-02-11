import React,{ useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

function Slider() {
  const [movieList, setmovieList] = useState([])

    useEffect(() => {
        getTrendingMovies()               
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
          setmovieList(resp.data.results)
        })
    }
    
  return (
    <div>
      {movieList.map((item, index) => {
        <img src="" />
      })}      
    </div>
  )
}

export default Slider
