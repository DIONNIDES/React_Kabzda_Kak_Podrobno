import React, {useState} from 'react';
import styles from './OnOff.module.css';
type SelfControlledOnOffPropsType = {
    onChange:(on:boolean)=>void
}

export const SelfControlledOnOff = (props:SelfControlledOnOffPropsType) => {
    let [on, setOn] = useState(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        background: on ? 'green' : 'white',
        cursor:'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        background: on ? 'white' : 'red',
        cursor:'pointer'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        background: on ? 'green' : 'red'
    }

    const setOnHandler = ()=>{
        setOn(true);
        props.onChange(true);
    }
    const setOFFHandler = ()=>{
        setOn(false);
        props.onChange(false);
    }

    return (
        <div>
            <div style={onStyle} onClick={setOnHandler}>On</div>
            <div style={offStyle} onClick={setOFFHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
