import React from 'react';

class EditFishForm extends React.Component {
    
    handleChange = (event) => {
        console.log(event.currentTarget.value)
        const updatedFish = {...this.props.fish,
        [event.currentTarget.name]: event.currentTarget.value
        }
        this.props.updateFish(this.props.index, updatedFish)
    }
    
    render() {

        let val = this.props.fish
        return (
           <div className='fish-edit'>
           <input 
           name="name" 
           ref={this.nameRef} 
           type="text" 
           value={val.name} 
           placeholder='Name'
           onChange={this.handleChange}
           />
           <input 
           name="price" 
           ref={this.priceRef} 
           type="text" 
           value={val.price} 
           placeholder='Price'
           onChange={this.handleChange}
           />
           <select 
           name="status" 
           ref={this.statusRef} 
           value={val.status} 
           type="text"
           onChange={this.handleChange}>
            <option value='availabe'>Fresh!</option>
            <option value='unavailabe'>Sold Out!</option>
           </select>

           <textarea 
           name="desc" 
           ref={this.descRef} 
           type="text" 
           value={val.desc} 
           placeholder='Desc'
           onChange={this.handleChange}
           />
           <input 
           type='text' 
           name='image' 
           value={val.image} 
           placeholder='Image url' 
           onChange={this.handleChange}
           />
           <button onClick={() => this.props.deleteFish(this.props.index)}>
               Remove Fish
           </button>
           </div>
        )
    }
}

export default EditFishForm;