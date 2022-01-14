import React from "react";
class List extends React.Component {
    remove = () =>{
        this.props.remove(this.props.list.id);
    }
    render(){
        return(
            <div>
                <p>
                    {this.props.list.quantity} {this.props.list.units} {this.props.list.item} <button onClick={() => this.remove()}>Remove</button>
                </p>
            </div>
        )
    }
}
export default List;