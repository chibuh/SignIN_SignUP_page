import React from 'react'

export default function Profile(props) {
    // console.log(props)

    return (
        <>
            <p>
                {props.person.name}  <b>{props.person.age}</b>
            </p>
        </>
    )
}
