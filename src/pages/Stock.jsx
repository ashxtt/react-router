import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Stock (props){

    const apiKey = '4439d9e10d109a366e26cd806a9b4d38'

    const params = useParams()
    console.log(params)
    const symbol = params.symbol
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`
    const [stock, setStock] = useState('null')

    const getStock = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setStock(data)
    }

    useEffect (() => {
        getStock()
    }, [])

    return (
        <div className="Price">
        {stock === "null" ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <h1>{stock[0].name}</h1>
            <p>{symbol}</p>
            <p>Current price: ${stock[0].price}</p>
            <p>Changes: {stock[0].changesPercentage}%</p>
            <p>Day Low: ${stock[0].dayLow}</p>
            <p>Day High: ${stock[0].dayHigh}</p>
          </div>
        )}

      </div>
    );
  }
  export default Stock ;