function Order(props){
    const {receipts} = props;
    if (receipts.paid){
    return(
        <div>
            <h2>{receipts.person}</h2>
            <p>Order: <br/>Main: {receipts.order.main}<br/>Protein: {receipts.order.protein}<br/>Rice: {receipts.order.rice}<br/>Sauce: {receipts.order.sauce}<br/>Drink: {receipts.order.drink}<br/>Cost: {receipts.order.cost}<br/></p>
        </div>
    )}
    return(
        <div></div>
    )
}
export default Order;