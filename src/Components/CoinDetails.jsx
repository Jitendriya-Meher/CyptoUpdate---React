import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CoinDetails = () => {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const {id} = useParams();

    const getData = async() => {

        setLoading(true);
        try{
            const res = await axios(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);
            // console.log(res.data);

            setResponse(res.data);
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
            <div className="">
                Loading...
            </div>
        )
    }

  return (
    <div className='my-6'>
      <div className='flex gap-2 items-center'>
        <img src={response.image.small} alt={response.name} />
        <h1 className='text-2xl mb-2 capitalize font-bold'>{response.name}</h1>
      </div>
      <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: response.description.en }}></p>
    </div>
  )
}

export default CoinDetails
