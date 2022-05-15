import './App.css';
import {Route, Routes} from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import Stock from "./pages/Stock"
import Stocks from "./pages/Stocks"

// {/* Route	Renders	Component
// /	"This is the Homepage page"	Home
// /about	"This is theAabout page"	About
// /stocks/:symbol	A single stock	Stock
// /stocks	All stocks	Dashboard */}

function App() {
  return (
    <div className="App">
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/stocks" element={<Stocks/>}/>
<Route path="/stocks/:symbol" element={<Stock/>}/>
</Routes>
    </div>
  );
}

export default App;
