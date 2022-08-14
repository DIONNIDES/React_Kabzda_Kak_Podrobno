import React from 'react';
import Star from './Star/Star';
import {RatingValueType} from '../../App';

type RatingPropsType = {
    value: number
    setRatingValue:(value:number)=>void
}

function Rating(props: RatingPropsType) {
    console.log('Rating rendering');
    return (
        <div>
            <Star selected={props.value > 0} setRatingValue={props.setRatingValue} value={1} />
            <Star selected={props.value > 1} setRatingValue={props.setRatingValue} value={2} />
            <Star selected={props.value > 2} setRatingValue={props.setRatingValue} value={3} />
            <Star selected={props.value > 3} setRatingValue={props.setRatingValue} value={4} />
            <Star selected={props.value > 4} setRatingValue={props.setRatingValue} value={5} />
        </div>
    );
}

export default Rating;
