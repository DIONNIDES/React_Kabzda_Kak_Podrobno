import React, {useState} from 'react';
import {SelFControlledAccordion} from './SelfControlledAccordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'SelfControlledAccordion',
    component: SelFControlledAccordion
};

const callback = action('collapsed or uncollapsed by click')

export const ModeChanging = () => <SelFControlledAccordion  title={'Menu'}  />


