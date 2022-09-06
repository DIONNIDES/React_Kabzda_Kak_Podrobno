import React from 'react';
import {action} from '@storybook/addon-actions';
import {SelfControlledOnOff} from './SelfControlledOnOff';

export default {
    title: 'SelfControlledOnOff',
    component: SelfControlledOnOff
};

type SelfControlledOnOffPropsType = {
    onChange:(on:boolean)=>void
}

const callback = action('change color by click');
export const ChangingColors = (props:SelfControlledOnOffPropsType) => <SelfControlledOnOff onChange={callback} />


