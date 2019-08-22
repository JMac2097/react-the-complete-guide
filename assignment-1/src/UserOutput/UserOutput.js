import React from 'react';

const UserOutput = (props) => {

    const styling = {
        backgroundColor: '#333',
        color: '#fff',
        border: '1px solid #000',
        borderRadius: '30px',
        textAlign: 'center',
        margin: '5px 0'
    }

    return (

        <div style={styling}>
            <p> === Hello, {props.username} === </p>
            <p> == This is {props.username} speaking ==</p>    
        </div>

    )
}

export default UserOutput;