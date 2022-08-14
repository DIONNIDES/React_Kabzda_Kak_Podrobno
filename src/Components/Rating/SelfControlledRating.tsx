import React, {MouseEventHandler, useState} from 'react';
import Star from './Star/Star';


function Rating() {
    let [value, setValue] = useState<1 | 2 | 3 | 4 | 5 | 0>(0);

    const evaluateButton = (value:1 | 2 | 3 | 4 | 5 |0 ) => {
        return ()=>setValue(value);
    }

    return (
        <div>
          {/*  <Star value={1} selected={value>0} evaluate={evaluateButton(1)}/>
            <Star value={2}selected={value>1} evaluate={evaluateButton(2)}/>
            <Star value={3}selected={value>2} evaluate={evaluateButton(3)}/>
            <Star value={4}selected={value>3} evaluate={evaluateButton(4)}/>
            <Star value={5} selected={value>4} evaluate={evaluateButton(5)}/>*/}
        </div>
    );
}
export default Rating;
