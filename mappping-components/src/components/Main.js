import cities from '../Data';
import City from './City'
function Main(){
    return(
        <div>
            {cities.map((cityData, index) =>{
                return<City cityData={cityData} key={index} />
            })}
        </div>
    )
}
export default Main;
// map through array of objects
// render city components
// pass data down as props