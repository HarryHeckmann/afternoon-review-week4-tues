import React from 'react'

function FoodType(props){
    // console.log(props)
    return(
        <button onClick={() => props.changeIndex(props.index)} >{props.type}</button>
    )
}

export default FoodType