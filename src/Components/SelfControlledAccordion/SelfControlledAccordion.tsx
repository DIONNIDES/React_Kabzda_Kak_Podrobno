import React, {useReducer, useState} from 'react';
import {accordionReducer, TOGGLE_COLLAPSED} from './accordionReducer';

type AccordionPropsType = {
    title: string;
};

export const SelFControlledAccordion = React.memo(SelFControlledAccordionSecret);

export function SelFControlledAccordionSecret(props: AccordionPropsType) {

    let [state, dispatch] = useReducer(accordionReducer, {collapsed:false});

    const CollapsedToggle = () => {
        dispatch({type:TOGGLE_COLLAPSED});
    };

    return (
        <div>
            <AccordionTitle collapsed={false} collapsedToggle={CollapsedToggle} title={props.title} />
            {state.collapsed && <AccordionBody collapsed={state.collapsed} />}
        </div>
    );
};


type AccordionTitlePropsType = {
    title: string;
    collapsedToggle: ()=>void
    collapsed:boolean
}

export const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionTitleSecret(props: AccordionTitlePropsType) {

    const onCollapsedToggleHandler = () => {
        props.collapsedToggle();
    }
    return (
        <h3 onClick={onCollapsedToggleHandler}>{props.title}</h3>
    );
};


export type AccordionBodyPropsType = {
    collapsed:boolean
};
export const AccordionBody = React.memo(AccordionBodySecret)
function AccordionBodySecret(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
