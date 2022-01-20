import { Link } from "react-router-dom";
function Ships({name, id, getShip}){
    return(
        <div>
            <Link to={`ship${id}`} onClick={() => getShip(id)}>
                <h3>{name}</h3>
            </Link>
        </div>
    )
}
export default Ships;