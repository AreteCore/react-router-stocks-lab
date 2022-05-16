import {Link} from "react-router-dom"
import stocks from "../data.js"

export default function Stocks() {
//do not forgeet that each <Link> needs a to={`/some/:thing`}
// i.e. <Link to={`/some/place/:new`}></Link>
return (
    <div className="stocks bg">
        <h1>My Stock Portfolio</h1>
        <div className="columns">
            <div>Company Name</div>
            <div>Price</div>
            <div>Change</div>
        </div>
        {stocks.map((stock, index) => {

            let color = null
            stock.change < 0 ? color = "red" :  color = "green"
            
            return (
                    <Link 
                    key={stock.symbol} 
                    to={`/stock/${stock.symbol}`}
                    className={`link columns`}>
                        <div>{stock.name} ({stock.symbol})</div>
                        <div>${stock.lastPrice}</div>
                        <div className={color}>{stock.change}</div>
                    </Link>
            )
        } )
    }
    </div>
    
)
}