import {Link} from "react-router-dom"
import stocks from "../data.js"

export default function Stocks() {
//do not forgeet that each <Link> needs a to={`/some/:thing`}
// i.e. <Link to={`/some/place/:new`}></Link>
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