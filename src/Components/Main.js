import React, {Component} from 'react'
import axios from 'axios'

import Taco from './Taco'


class Main extends Component {
    constructor(){
        super()
        this.state = {
            tacos: [],
            newInput: '',
            updateInput: ''
        }

        this.deleteTaco = this.deleteTaco.bind(this)
        this.updateTaco = this.updateTaco.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        axios
            .get('http://localhost:5050/api/tacos/')
            .then(response => {
                this.setState({tacos: response.data})
                // console.log(this.state.tacos)
            })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.newInput)
    }

    addTaco(name){
        axios
            .post('http://localhost:5050/api/tacos/', {name})
            .then(response => {
                this.setState({tacos: response.data, newInput: ''})
            })
    }
    deleteTaco(id){
        axios
            .delete(`http://localhost:5050/api/tacos/${id}`)
            .then(response => {
                this.setState({tacos: response.data})
            })
    }
    updateTaco(id){
        const name = this.state.updateInput
        axios
            .put(`http://localhost:5050/api/tacos/${id}`, {name})
            .then(response => {
                this.setState({tacos: response.data, updateInput: ''})
            })
    }

    render(){
        return(
            <div>
                <h1>Taco API</h1>
                <div>
                    <input name='newInput' value={this.state.newInput} onChange={(e) => this.onChange(e)}></input>
                    <button onClick={() => this.addTaco(this.state.newInput)}>Add Taco</button>
                </div>
                {
                    this.state.tacos.map((taco, index) => {
                        return(
                            <Taco key={index}
                                name={taco.name}
                                id={taco.id}
                                updateInput = {this.state.updateInput}
                                deleteTaco={this.deleteTaco}
                                updateTaco = {this.updateTaco}
                                onChange = {this.onChange}
                            />
                        )
                    })
                }
                
            </div>
        )
    }
}

export default Main