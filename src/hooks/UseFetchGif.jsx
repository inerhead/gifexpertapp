import { useState, useEffect } from 'react';

const getGifts = async (category) => {
    const apiKey = 'XxDDspefB3j43UUHyWYuFwwkxgJihlRi'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url)
    const {data} = await resp.json()    
    return data
}

const fetchGifts = async ({category, setGifts, setIsLoading}) => {
    const giftResp = await getGifts(category)
    setIsLoading(false)
    setGifts(giftResp.map(({id, title, images}) => {
        return {
            id,
            title,
            url: images?.original.url
        }
    }))
}


const useFetchGifts = (category) => {
    const [gifts, setGifts] = useState([]);  
    const [isLoading, setIsLoading] = useState(true);  
    
    useEffect(() => {
        fetchGifts({category, setGifts, setIsLoading})
    }, [])
    
    return {
        images: gifts,
        isLoading,
    }
};
export default useFetchGifts;