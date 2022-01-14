import GList from './components/GList';
import './App.css';
import gData from './Data/gData';
import AddForm from './components/AddForm';
import { Component } from 'react';
class App extends Component {
  constructor(){
    super();
    this.state = {
      groceries: gData
    };
  }
  submit = (list) => {
    this.setState((betaGData) => {
      return {
        groceries: [...betaGData.groceries, {...list, id: betaGData.groceries.length + 1}]
      }
    });
  }
  remove = (gId) => {
    this.setState((betaGData) => {
      return{
        groceries: betaGData.groceries.map((list) => {
          return list.id === gId ? {...list, isPurchased: !list.isPurchased} : list;
        })
      }
    })
  }
render() {
  return (
    <div className="App">
      <GList groceries={this.state.groceries} remove={this.remove}/>
      <AddForm submit={this.submit}/>
    </div>
  );
}
}
export default App;
