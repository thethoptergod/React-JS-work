import Bath from './Bath';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';
function Floorplan(){
    return(
        <div id="plan">
        <Bedroom bedNum='One'/>
        <Bedroom bedNum='Two'/>
        <Kitchen />
        <Bath size="Half"/>
        <LivingRoom />
        <Bedroom bedNum='Three' />
        <Bath size='Full' />
        </div>
    )
}
export default Floorplan;