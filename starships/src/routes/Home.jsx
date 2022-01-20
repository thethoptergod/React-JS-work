import ShipList from "../components/ShipList";
function Home({shipArray, nUrl, moreShips, getShip}){
    return(
        <div>
            <ShipList shipArray={shipArray} getShip={getShip}/>
            {nUrl && <div><button onClick={moreShips}>More</button></div>}
        </div>
    )
}
export default Home;