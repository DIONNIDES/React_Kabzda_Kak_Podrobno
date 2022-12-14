import React, {useState} from 'react';
import Star from '../Rating/Star/Star';

export type SelfControlledRatingPropsType = {
    defaultValue?: number
    onChange?: (value: number) => void
}


function SelfControlledRating(props: SelfControlledRatingPropsType) {
    let [value, setValue] = useState<number>(props.defaultValue ? props.defaultValue : 0);

    const evaluateButton = (value: number) => {
        return () => {
            setValue(value);
            props.onChange && props.onChange(value)
        }

    }

    return (
        <div>
            <Star value={1} selected={value > 0} evaluate={evaluateButton(1)}/>
            <Star value={2} selected={value > 1} evaluate={evaluateButton(2)}/>
            <Star value={3} selected={value > 2} evaluate={evaluateButton(3)}/>
            <Star value={4} selected={value > 3} evaluate={evaluateButton(4)}/>
            <Star value={5} selected={value > 4} evaluate={evaluateButton(5)}/>
        </div>
    );
}

export default SelfControlledRating;