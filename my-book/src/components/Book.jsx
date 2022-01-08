function Book(props) {
    return(
        <div id="book">
        <img id='img' src={props.image}></img>
        <h2 id='booktitle'>{props.name}</h2>
        <h3 id='bookdesc'>{props.description}</h3>
        </div>
    );
}
export default Book;