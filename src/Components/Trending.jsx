import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CoinTrending from './CoinTrending';

const Trending = () => {

    const [response, setResponse] = useState([]);
    const [loading,setLoading] = useState(false);

    const getData = async() => {

        setLoading(true);
        try{
            const res = await axios.get("https://api.coingecko.com/api/v3/search/trending");
            // console.log(res.data);

            setResponse(res.data.coins);
        }
        catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    useEffect( () => {
        getData();
    },[]);

    if( loading || !response){
        return (
            <div className=" mt-2">
                Loading...
            </div>
        )
    }
    
  return (

    <div className='mt-8'>
      
      <h1 className="text-2xl mb-2">Trending</h1>
      {
        response.length>0 && 
        (
               response.map( (coin) => (
                    <CoinTrending key={coin.item.coin_id} coin={coin.item} ></CoinTrending>
                ))
        )
      }

    </div>
  )
}

export default Trending
