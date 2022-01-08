function Header(props){
    return(
        <div>
        <h1>{props.name}</h1>
        <h2>{props.event}</h2>
        <h3>{props.date}</h3>
        <img src={props.img}></img>
        </div>
    );
}
export default Header;