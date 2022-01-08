function Item(props){
    return(
        <div>
           <p>{props.title}</p>
           <p>{props.desc}</p>
           <img src={props.img}></img>
        </div>
    );
}
export default Item;