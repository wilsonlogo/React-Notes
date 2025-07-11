// import {React,useEffect,useState} from 'react'

// function useCurrencyInfo(currency) {
//     const [data,setData]=useState({})
//     useEffect(()=>{
//         fetch(`https://v6.exchangerate-api.com/v6/1e05b4551e430bced870ffac/latest`)
//         .then((res)=>res.json())
//         .then((res)=>{
//           console.log("API Response:", res);
//           setData(res.rates || {})
//         })
//         .catch((error)=>{
//           console.error("Error fetching currency data:", error);
//           setData({})
//         })
//     },[currency])
//   return (
//     data
//   )
// }
// export default useCurrencyInfo;
import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/1e05b4551e430bced870ffac/latest/${currency}`);
        const json = await res.json();

        console.log("Currency data:", json.conversion_rates);

        if (json.conversion_rates) {
          setData(json.conversion_rates);
        } else {
          setData({});
        }
      } catch (error) {
        console.error("Network error:", error);
        setData({});
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;


