import { useState , useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({});
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((result)=> result.json())
        .then((result)=>setData(result[currency]))
    },[currency])
    return data;
}

export default useCurrencyInfo;