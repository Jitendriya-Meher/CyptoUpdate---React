import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Coin from './Coin';

const Markets = () => {

    const [response, setResponse] = useState([]);
    const [loading,setLoading] =useState(false);

    const getData = async() => {

        setLoading(true);
        try{
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
            // console.log("market",res.data);

            setResponse(res.data);
        }
        catch(err){
            console.log("market",err);
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
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Markets</h1>
      {response && response.map(coin => <Coin key={coin.id} coin={coin} />)}
    </section>
  )
}

export default Markets


