import React from 'react';
import Header from './Header';
import Inventory from './Inv';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'



class App extends React.Component{

 state = {
     fishes: {},
     order: {},
 };

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
            <Order fishes={this.state.fishes} order={this.state.order}/>
            <Inventory 
            AddFish={this.AddFish} 
            LoadSampleFishes={this.LoadSampleFishes}
            />
        </div>
        )
    }    
}

export default App;