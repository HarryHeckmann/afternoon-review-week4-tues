import React from 'react'

function Item(props){
    // console.log(props)
    return(
        <div>
            <h3>{props.name}</h3>
            <div>
                <input name='updateInput' onChange={(e) => props.onChange(e)} placeholder='Update Name'></input>
                <button onClick={() => props.updateItem(props.id)}>Update</button>
            </div>
            <button onClick={() => props.deleteItem(props.id)}>Delete</button>
        </div>
    )
}

export default Item