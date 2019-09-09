import React from 'react';

const UserOutput = (props) => {

    return (
        <div>
            <p>My name is: {props.nameValue}</p>
            <p>... and I am a total {props.swearValue}</p>
        </div>
    )

}

export default UserOutput;