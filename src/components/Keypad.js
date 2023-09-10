// Code Keypad Component Here
import React from 'react';


function Keypad (){
    const handleChange = () => {
        console.log('Entering password...');
    }

    return (
        <div><label htmlFor="password">Enter Password:</label>
      <input
        type="password"
        id="password"
        onChange={handleChange}
        />
        </div>
    )
}

export default Keypad;