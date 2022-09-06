import React from 'react';
import Star from './Star/Star';

type RatingPropsType = {
    value: number
    evaluate:(value:number)=>void
}

function Rating(props: RatingPropsType) {
    console.log('Rating rendering');
    return (
        <div>
            <Star selected={props.value > 0} evaluate={props.evaluate} value={1} />
            <Star selected={props.value > 1} evaluate={props.evaluate} value={2} />
            <Star selected={props.value > 2} evaluate={props.evaluate} value={3} />
            <Star selected={props.value > 3} evaluate={props.evaluate} value={4} />
            <Star selected={props.value > 4} evaluate={props.evaluate} value={5} />
        </div>
    );
}

export default Rating;
