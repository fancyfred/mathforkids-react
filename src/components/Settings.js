import React, {useState} from 'react';
import { Button, Checkbox, Form, Select } from 'semantic-ui-react'


 
const section = {
    // width: '80%',
    // margin: '20px',
    fontSize: '2em'
}

function Settings(props) {
    const {
        equationLength,
        updateEquationLength,
        numberOfOptions,
        setNumberOfOptions
    } = props;
    const equationLengths = [
        {key:2, value:2, text:2},
        {key:3, value:3, text:3},
        {key:4, value:4, text:4},
        {key:5, value:5, text:5},
        {key:6, value:6, text:6}
    ]
    const possibleNumbersOfOptions = [
        {key:2, value:2, text:2},
        {key:3, value:3, text:3},
        {key:4, value:4, text:4},
        {key:5, value:5, text:5},
        {key:6, value:6, text:6}
    ];

    return (
        <div className="settings-options-area" style={section}>
            <label>Equation Length: </label>
            <select
                value={equationLength}
                onChange={e => updateEquationLength(e.target.value)}>
                {equationLengths.map(o => (
                    <option key={o.key} value={o.value}>{o.text}</option>
                ))}
            </select>
            <br/>
            <label>Number of Options </label>
            <select
                value={numberOfOptions}
                onChange={e => setNumberOfOptions(e.target.value)}>
                {possibleNumbersOfOptions.map(o => (
                    <option key={o.key} value={o.value}>{o.text}</option>
                ))}
            </select>
        </div>
    )
}

export default Settings;