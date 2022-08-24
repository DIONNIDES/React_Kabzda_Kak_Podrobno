import React, {useState} from 'react';
import {SelFControlledAccordion} from './SelfControlledAccordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'SelfControlledAccordion',
    component: SelFControlledAccordion
};

const callback = action('collapsed or uncollapsed by click')

export const CollapsedList = () => <SelFControlledAccordion  title={'Menu'}  />
export const UncollapsedList = () => <SelFControlledAccordion  title={'Menu'}   />

/*
export const AccordionCollapsedChanging = () => {

    /!*const[collapsed,setCollapsed] = useState<boolean>(false);*!/
    return <SelFControlledAccordion  title={'Menu'}  /> }*/
