import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion
};

let items = [
    {value:1, title:'Dimas'},
    {value:2, title:'Artem'},
    {value:3, title:'Ivan'},
    {value:4, title:'Oleg'},
    {value:5, title:'Alex'},
]


const callback = action('collapsed or uncollapsed by click')
const onClickCallback = action('some item was clicked')

export const CollapsedList = () => <Accordion  collapsed={true} title={'Menu'}  setCollapsed={callback} items={items} onClick={onClickCallback} />
export const UncollapsedList = () => <Accordion collapsed={false} title={'Menu'}  setCollapsed={callback} items={items} onClick={onClickCallback} />

export const AccordionCollapsedChanging = () => {
    const[collapsed,setCollapsed] = useState<boolean>(false);
    return <Accordion collapsed={collapsed} title={'Menu'}  setCollapsed={()=>setCollapsed(!collapsed)} items={items} onClick={onClickCallback} />
}