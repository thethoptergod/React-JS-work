import Ships from "./Ships";
function ShipList({shipArray, getShip}){
    return(
        <div>
            {shipArray.map((ship, index) => {
                return <Ships name={ship.name} id={index} key={index} getShip={getShip} />
            })}
        </div>
    )
}
export default ShipList;