function Header(props) {
   return(
   <div id='header'>
    <h1 id="title">{props.title}</h1>
    <ul id="nav">
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
    </ul>
    </div>
   );
}
export default Header;