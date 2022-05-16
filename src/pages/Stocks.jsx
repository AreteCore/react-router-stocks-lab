import {Link} from "react-router-dom"
import stocks from "../data.js"

export default function Stocks() {
// console.log(stocks)
// stocks.forEach(stock => console.log(stock.name))
return (
    <div className="stocks">
        <h1>My Stock Portfolio</h1>
        {stocks.map((stock, index) => {
            return (
                    <Link 
                    key={stock.symbol} 
                    to={`/stock/${stock.symbol}`}>
                        {stock.name} // {stock.symbol}
                    </Link>
            )
        } )
    }
    </div>
    
)
}