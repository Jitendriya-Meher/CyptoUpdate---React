import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
// import moment from "moment";
// import Skeleton from "./Skeleton";
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const HistoryChat = () => {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [coinData, setCoinData] = useState([]);

    const {id} = useParams();

    const getData = async() => {

        setLoading(true);
        try{
            const res = await axios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`);
            // console.log(res.data);

            setResponse(res.data.prices);

            const data = res.data.prices.map((value) =>(
                {
                    x: value[0],
                    y: value[1].toFixed(2)
                }
            ));

            setCoinData(data);
        }
        catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    useEffect( () => {
        getData();
    },[]);

    console.log(coinData);

    if( loading || !response){
        return (
            <div className="">
                Loading...
            </div>
        )
    }

    const options = {
        responsive:true
    }

    const data = {
        labels:coinData.map((value) =>(
            moment(value.x).format("MMM DD")
        )),
        datasets:[
            {
                fill:true,
                data:coinData.map((value) =>(value.y)),
                label:id,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }

  return (
    <div className=' mt-5'>
      <Line options={options} data={data}></Line>
    </div>
  )
}

export default HistoryChat
