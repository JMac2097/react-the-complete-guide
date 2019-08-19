import React from 'react';

const UserInput = (props) => {
    return (

        <div className="userInput">
            <input type="text" onChange={props.textEntered} />
        </div>

    )
}

export default UserInput;