import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Stock() {
    //api key is in .env file
    //insert your api key here as a string
    const apiKey = process.env.REACT_APP_APIKEY

    //this gets the param from the url
    const symbol = useParams().symbol

    //api quoteUrl
    const quoteUrl = `https://cloud.iexapis.com/v1/stock/${symbol}/quote?token=${apiKey}`
    const infoUrl = `https://cloud.iexapis.com/v1/stock/${symbol}/company?token=${apiKey}`

    //state for stock data
    const [stockQuote, setStockQuote] = useState(null)
    const [stockInfo, setStockInfo] = useState(null)

    // api call to iexapis.com / iexcloud.io
    const getStockQuote = async () => {
        const data = await fetch(quoteUrl).then(res => res.json())
        setStockQuote(data)
        // console.log(data)
    }
    const getStockInfo = async () => {
        const data = await fetch(infoUrl).then(res => res.json())
        setStockInfo(data)
        // console.log(data)
    }

    //run it at page load
    //do not forget to add the [] when using useEffect!
    useEffect(() => {
        getStockQuote()
        getStockInfo()
    }, [])

    //the actual data display
    function displayStock() {
        return (
            <div>
                <h2>{stockQuote.companyName}({stockQuote.symbol})</h2>
                <div>Website: <a href={stockInfo.website}>{stockInfo.website}</a></div>
                <h3> Current Price in {stockQuote.currency}: {stockQuote.latestPrice}</h3>
            </div>
        )
    }

    return stockInfo && stockQuote ? displayStock() : <h2>hold on a sec</h2>

}