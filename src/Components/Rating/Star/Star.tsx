import React from 'react';


type StarPropsType = {
    selected: boolean
    evaluate:(value:number) => void
    value: number
};

function Star(props: StarPropsType) {

    const setRatingValueHandler = () => {
        props.evaluate(props.value);
    }
    return (
        <span onClick={setRatingValueHandler} >
            {props.selected ?
                <b>star </b> :
                'star '}
        </span>

    );
}


export default Star;