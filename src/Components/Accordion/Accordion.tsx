import React from 'react';

type AccordionPropsType = {
    title: string;
    setCollapsed: ()=>void;
    collapsed:boolean
};


export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle title={props.title}  setCollapsed={props.setCollapsed} />
            {!props.collapsed && <AccordionBody collapsed={props.collapsed} />}
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
};

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
