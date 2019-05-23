import React, {Component} from 'react'
import axios from 'axios'

import Item from './Item'
import FoodType from './FoodType'


class Main extends Component {
    constructor(){
        super()
        this.state = {
            food: [],
            newInput: '',
            updateInput: '',
            index: ''
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.onChange = this.onChange.bind(this)
        this.changeIndex = this.changeIndex.bind(this)
    }

    componentDidMount(){
        axios
            .get('http://localhost:5050/api/food/')
            .then(response => {
                this.setState({food: response.data})
                // console.log(this.state.tacos)
            })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.newInput)
    }
    changeIndex(index){
        this.setState({index: index})
        console.log(this.state.index)
    }

    addItem(name, index){
        axios
            .post('http://localhost:5050/api/food/', {name, index})
            .then(response => {
                this.setState({food: response.data, newInput: ''})
            })
    }
    deleteItem(id){
        const index = this.state.index
        axios
            .delete(`http://localhost:5050/api/food/${id}?index=${index}`)
            .then(response => {
                this.setState({food: response.data})
            })
    }
    updateItem(id){
        const index = this.state.index
        const name = this.state.updateInput
        axios
            .put(`http://localhost:5050/api/food/${id}?index=${index}`, {name})
            .then(response => {
                this.setState({food: response.data, updateInput: ''})
            })
    }

    render(){
        return(
            <div>
                <h1>Mexican Food API</h1>
                {this.state.food.map((element, index) => {
                    return(
                        <FoodType 
                            key={index}
                            type = {element.type}
                            index={index}
                            changeIndex={this.changeIndex}
                        />
                    )
                })}
                {this.state.index !== ''
                    ?
                    <div>
                        <input name='newInput' value={this.state.newInput} onChange={(e) => this.onChange(e)}></input>
                        <button onClick={() => this.addItem(this.state.newInput, this.state.index)}>Add Item</button>
                        {
                            this.state.food[this.state.index].items.map((item, index) => {
                                return(
                                    <Item key={index}
                                        name={item.name}
                                        id={item.id}
                                        updateInput = {this.state.updateInput}
                                        deleteItem={this.deleteItem}
                                        updateItem = {this.updateItem}
                                        onChange = {this.onChange}
                                    />
                                )
                            })
                        }
                    </div>
                    :
                        null
            }   
            </div>
        )
    }
}

export default Main