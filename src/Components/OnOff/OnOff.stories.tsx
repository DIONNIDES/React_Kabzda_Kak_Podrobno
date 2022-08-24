import React, {useState} from 'react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'OnOff',
    component: OnOff
};

const callback = action('on or off clicked')
export const OnMode = () => <OnOff onOffToggle={true}  setOnOffToggle={callback} />
export const OffMode = () => <OnOff onOffToggle={false}  setOnOffToggle={callback} />
export const ModeChanging = () => {
    const[value,setValue] = useState<boolean>(true);
    return <OnOff onOffToggle={value}  setOnOffToggle={setValue} />
}