import React from 'react';
import styles from './OnOff.module.css';

export type PropsOnOffType = {
    onOffToggle: boolean
    setOnOffToggle:(onOffToggle:boolean)=>void
}
export const OnOff = (props: PropsOnOffType) => {


    return (
        <div>
           <span onClick={()=>props.setOnOffToggle(true)}>{props.onOffToggle ? <button  className={styles.active}>ON</button> : <button>ON</button>}</span>
            <span onClick={()=>props.setOnOffToggle(false)}>{!props.onOffToggle ? <button onClick={()=>props.setOnOffToggle(false)} className={styles.active}>OFF</button> : <button>OFF</button>}</span>
            <input type="checkbox" checked={props.onOffToggle} />
        </div>
    );
};
