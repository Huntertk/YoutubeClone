import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '474d2746b4msh0c1fc9b7e4945e6p1c1c10jsnb0772f22d5f9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data
}