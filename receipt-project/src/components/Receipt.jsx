import Order from './Order'
import receipts from '../data/receipts'
function Receipt(){
    return(
    <div>
        <div>
        {receipts.map((receipts, index) =>{
        return<Order receipts={receipts} key={index} />
    })}
        </div>
    </div>
    )
}
export default Receipt;