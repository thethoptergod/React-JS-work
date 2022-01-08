
function Product(props) {
    return(
        <>
        <img src={props.image}></img>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        </>
    );
}
export default Product;