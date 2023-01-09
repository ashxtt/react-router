import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const Stock = (props) => {
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
      <div className="Stock">
          {!stock ? <h1>loading</h1> :
          <div>
              <h2>{stock[0].name}</h2>
              <h2>{stock[0].price}</h2>
          </div>
          }
      </div>
  )
  }
  
  export default Stock 