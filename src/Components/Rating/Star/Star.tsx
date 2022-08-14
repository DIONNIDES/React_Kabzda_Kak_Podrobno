import React, {MouseEventHandler} from 'react';
import {RatingValueType} from '../../../App';


type StarPropsType = {
    selected: boolean
    setRatingValue:(value:number) => void
    value: number
};

function Star(props: StarPropsType) {

    const setRatingValueHandler = () => {
        props.setRatingValue(props.value);
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