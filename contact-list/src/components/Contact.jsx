function Contact(props){
    const{contact} = props
    return(
        <div>
            <img src={contact.picture.thumbnail}></img>
            <p>Name: {contact.name.first} {contact.name.last}</p>
            <p>Home Phone Number: {contact.phone}</p>
            <p>Cell Number: {contact.cell}</p>
        </div>
    )
}
export default Contact;