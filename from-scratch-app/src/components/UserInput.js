import React from 'react';

const UserInput = (props) => {

    return <input type="text" onChange={props.nameChange} value={props.val} />
}

export default UserInput;