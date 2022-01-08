//  Functional and/or class based components

function Event(props) {
    // return some ui
    return(
        <>
            <h2>{props.title }</h2>
            {/* curly renders the result of js expression */}
            {/* <h2>Favorite Foods</h2>
            <ul>
                <li>Food 1</li>
                <li>Chicken</li>
                <li>Food 3</li>
            </ul> */}
        </>
    );
}
export default Event;

// When you name components, naming is PascalCase
// camelCase => hotDog
// PascalCase => HotDog