import React from 'react'
import Profile from './Profile'

export default function ProductList(props) {
    // console.log(props)
    
    return (
            props.product.map((person)=>{
                    return <Profile person={person}/>
            })
    )
}
