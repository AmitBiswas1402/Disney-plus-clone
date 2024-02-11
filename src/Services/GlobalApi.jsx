import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '0f58f7ddf9b82c3e5ec257d5044198e6'

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key" + api_key)

export default {
    getTrendingVideos
}