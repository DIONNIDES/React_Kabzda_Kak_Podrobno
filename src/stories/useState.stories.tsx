import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

const generateDifficultCounting = () =>{
    return 12365478912120901212819821;
}



export const ExampleUseState = () => {
    console.log('ExampleUseState');

    //const generateData = useMemo(generateDifficultCounting, []) -- пример запоминания сложных вычислений при помощи useMemo

    let [counter, setCounter] = useState<number>(generateDifficultCounting);

    // const changer = (state:number) => {
    //     return(
    //         state+1
    //     )
    // }можно и так
    

    return(
     <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        {/*<button onClick={()=>{setCounter(changer)}}>+</button>*/}
         {counter}
     </>
    )
}