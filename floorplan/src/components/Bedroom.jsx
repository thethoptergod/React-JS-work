function Bedroom(props){
    return(
        <div class='bed' id={`bed${props.bedNum}`}>
            <p>Bedroom {props.bedNum}</p>
        </div>
    )
}
export default Bedroom;