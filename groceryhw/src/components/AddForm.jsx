import { Component } from "react";

class Form extends Component {

	constructor(){
		super();
		this.state = {
			item: "",
			units: "",
			quantity: 0,
			isPurchased: false
		}
	}

	add = (event)  =>{
		const { name, value } = event.target;
		this.setState((betaForm) => {
			return {
				...betaForm,
				[name]: value,
			};
		});
	}

	submit = (event) => {
		event.preventDefault();
		this.props.submit(this.state);
		this.setState({
			item: "",
			units: "",
			quantity: 0,
			isPurchased: false
		});}

	render(){
		return (
			<div>
				<h3>Add Item</h3>
				<form onSubmit={(event) => this.submit(event)}>
                <label htmlFor="quantity">Quantity</label>
				<input type="number" name="quantity" id="quantity" min="0" className="input" value={this.state.quantity} onChange={this.add}/>					
                <label htmlFor="item" className="label">Item</label>
				<input type="text" name="item" id="item" className="input" value={this.state.item} onChange={this.add}/>
				<label htmlFor="units" className="label">Units</label>
				<input type="text" name="units" id="units" className="input" value={this.state.units} onChange={this.add}/>
				<button>Add Item</button>
				</form>
			</div>
		);}}
export default Form;