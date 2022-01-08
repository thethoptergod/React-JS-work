function Footer(props){
    return(
        <div>
            <h1>{props.hours}</h1>
            <h1>{props.location}</h1>
            <h1>{props.phone}</h1>
        </div>
    );
}
export default Footer;