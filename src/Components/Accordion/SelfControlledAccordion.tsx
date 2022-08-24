import React, {useState} from 'react';

type AccordionPropsType = {
    title: string;
};


export function SelFControlledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    const CollapsedToggle = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div>
            <AccordionTitle collapsed={false} collapsedToggle={CollapsedToggle} title={props.title} />
            {collapsed && <AccordionBody collapsed={collapsed} />}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string;
    collapsedToggle: ()=>void
    collapsed:boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {

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

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
