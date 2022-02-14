import React from 'react';
import Header from './Header';
import Inventory from './Inv';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';



class App extends React.Component{

 state = {
     fishes: {},
     order: {},
 };

 componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }


componentDidUpdate(){
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
}

componentWillUnmount(){
    base.removeBinding(this.ref);
}

updateFish = (key, updatedFish) => {
const fishes = {...this.state.fishes}
fishes[key] = updatedFish
this.setState({fishes})
}

deleteFish = (key) => {
    const fishes = {...this.state.fishes}
    fishes[key] = null
    this.setState({fishes})
}

 AddFish = fish => {
     const fishes = { ...this.state.fishes };
     fishes[`fish${Date.now()}`] = fish;
     this.setState({ fishes });
 };


LoadSampleFishes = () => {
    this.setState({ fishes : sampleFishes});
};

AddToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
}
deleteFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({order});
}


 render() {
     return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Axel is cool" age={500} cool={true}/>
                <ul className='fishes'>
                    {Object.keys(this.state.fishes).map(key => (
                    <Fish 
                    key={key} 
                    index={key}
                    details={this.state.fishes[key]}
                    AddToOrder={this.AddToOrder}
                    />))}
                </ul>
            </div>
            <Order 
            fishes={this.state.fishes} 
            order={this.state.order}
            deleteFromOrder={this.deleteFromOrder}
            />
            <Inventory 
            AddFish={this.AddFish} 
            deleteFish={this.deleteFish}
            updateFish={this.updateFish}
            LoadSampleFishes={this.LoadSampleFishes}
            fishes={this.state.fishes}
            />
        </div>
        )
    }    
}

export default App;