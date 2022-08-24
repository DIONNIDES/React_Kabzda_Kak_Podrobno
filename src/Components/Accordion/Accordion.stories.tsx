import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action('collapsed or uncollapsed by click')

export const CollapsedList = () => <Accordion  collapsed={true} title={'Menu'}  setCollapsed={callback} />
export const UncollapsedList = () => <Accordion collapsed={false} title={'Menu'}  setCollapsed={callback} />

export const AccordionCollapsedChanging = () => {
    const[collapsed,setCollapsed] = useState<boolean>(false);
    return <Accordion collapsed={collapsed} title={'Menu'}  setCollapsed={()=>setCollapsed(!collapsed)} />
}