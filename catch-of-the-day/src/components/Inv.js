import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className='inventory'>
              <h2>Inventory</h2>
              <AddFishForm AddFish={this.props.AddFish}/>
              <button onClick={this.props.LoadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;