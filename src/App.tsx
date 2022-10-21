import React, {useState} from 'react';
import './App.css';
import Rating from './Components/Rating/Rating';
import {Accordion} from './Components/Accordion/Accordion';
import {Select} from './Components/Select/Select';

export type RatingValueType = {
    ratingValue: 0 | 1 | 2 | 3 | 4 | 5
}

export type ItemType = {
    value:any
    title:string
}

function App(props: any) {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<number>(4);
    let [collapsed, setCollapsed] = useState<boolean>(false);
    let [onOffToggle, setOnOffToggle] = useState<boolean>(false);


    let[value, setValue] = useState('none');

    let items = [
        {value:1, title:'Dimas'},
        {value:2, title:'Artem'},
        {value:3, title:'Ivan'},
        {value:4, title:'Oleg'},
        {value:5, title:'Alex'},
    ]


    const onClick = (name:string) => {
        alert(`${name} ${'will be happy!'}`)
    }
    const onChange = (textValue:any)=>{
        setValue(textValue)
    }




    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <Rating value={ratingValue} evaluate={setRatingValue}/>
            <Accordion title={'Users'} collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)} items={items} onClick={onClick}/>
            <Select value={value} onChange={onChange} items={items} />
            {/*<OnOff onOffToggle={onOffToggle} setOnOffToggle={setOnOffToggle} />*/}
            {/*<SelfControlledOnOff onChange={setOnOffToggle} /> {onOffToggle.toString()}*/}
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

const AppTitle = React.memo(AppTitleSeret);

function AppTitleSeret(props: AppTitlePropsType) {
    console.log('AppTitle rendering');

    return (
        <h1>{props.title}</h1>
    );
};


export default App;
