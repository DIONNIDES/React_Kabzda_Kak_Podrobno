import React, {useState} from 'react';
import './App.css';
import Rating from './Components/Rating/Rating';
import {Accordion} from './Components/Accordion/Accordion';
import {OnOff} from './Components/OnOff/OnOff';
import {SelfControlledOnOff} from './Components/OnOff/SelfControlledOnOff';
import {SelFControlledAccordion} from './Components/Accordion/SelfControlledAccordion';
import SelfControlledRating from './Components/Rating/SelfControlledRating';

export type RatingValueType = {
    ratingValue: 0 | 1 | 2 | 3 | 4 | 5
}

function App(props: any) {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<number>(4);
    let [collapsed, setCollapsed] = useState<boolean>(false);
    let [onOffToggle, setOnOffToggle] = useState<boolean>(false);

    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion title={'Users'}  collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)}/>
            {/*<OnOff onOffToggle={onOffToggle} setOnOffToggle={setOnOffToggle} />*/}
            <SelfControlledOnOff onChange={setOnOffToggle} /> {onOffToggle.toString()}
            {/*            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={true}/>
            <SelfControlledAccordion title={'SelfControlledAccordion'} />
            <Rating value={4}/>
            <Rating value={2}/>
            <Rating value={1}/>
            <Rating value={0}/>
            <OnOff isDone={true} />
            <OnOff isDone={false} />
            <SelfControlledOnOff />
            <SelfControlledOnOff />
            <SelfControlledOnOff />
            <SelfControlledRating />*/}
        </div>
    );
};

type AppTitlePropsType = {
    title: string;
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering');

    return (
        <h1>{props.title}</h1>
    );
};


export default App;
