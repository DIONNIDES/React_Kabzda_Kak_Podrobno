import React from 'react';


type StarPropsType = {
    selected: boolean
    evaluate:(value:number) => void
    value: number
};



function StarSecret(props: StarPropsType) {

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

const Star = React.memo(StarSecret)

export default Star;