import React from "react";
import List from './List';
class GList extends React.Component{
    render(){
        return(
            <div>
                <h2>Grocery List</h2>
                {this.props.groceries.map((list) => {
                    return (
                        !list.isPurchased && (
                        <List list={list} remove={this.props.remove} key={list.id} />
                    ))
                })}
            </div>
        )
    }
}
export default GList;