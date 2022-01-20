import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import ShipPage from './routes/ShipPage';
import Home from "./routes/Home";
function App() {
  const [SWArray, sSWArray] = useState([]);
  const [url, sUrl] = useState("https://swapi.dev/api/starships/");
  const [nUrl, sNUrl] = useState("");
  const [shipId, sShipId] = useState(-1);

  const SWData = (data) =>{    
    sSWArray((pArray) => {
      return [...pArray, ...data.results];
    });
  }

  const moreShips = () =>{
    sUrl(nUrl);
  }

	useEffect(() => {

    const makeFetchCall = (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          SWData(data);
          return data.next;
        })
        .then((next) => {
          if(next !== null){
            sNUrl(next);
          }else{
            sNUrl("");
          }
        })
    }

		makeFetchCall(url);
	}, [url]);

  const getShip = (id) =>{
    sShipId(id);
  }

  return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home shipArray={SWArray} nUrl={nUrl} moreShips={moreShips} getShip={getShip}/>} />
          <Route path={`ship${shipId}`} element={<ShipPage ship={SWArray[shipId]}/>} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
