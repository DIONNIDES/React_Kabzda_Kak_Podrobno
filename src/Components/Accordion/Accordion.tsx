import React from 'react';
import {ItemType} from '../../App';


type AccordionPropsType = {
    title: string;
    setCollapsed: ()=>void;
    collapsed:boolean
    items: Array<ItemType>
    onClick:(title:string)=>void
};

export const Accordion = React.memo(AccordionSecret);

function AccordionSecret(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle title={props.title}  setCollapsed={props.setCollapsed} />
            {!props.collapsed && <AccordionBody items={props.items} collapsed={props.collapsed} onClick={props.onClick} />}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string;
    setCollapsed:()=>void


}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');

    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    );
};


export type AccordionBodyPropsType = {
    collapsed: boolean;
    items:ItemType[]
    onClick:(title:string)=>void
};

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return (
        <ul>
            {props.items.map(item=><li onClick={()=>props.onClick(item.title)}>{item.title}</li>)}
        </ul>
    );
}
