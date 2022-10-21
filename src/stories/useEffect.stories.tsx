import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(0);
    const [counter, setCounter] = useState(0);
//useEffect срабатывает лишь после полной отрисовки JSX
    console.log('SimpleExample');
    useEffect(()=>{
        console.log('UseEffect');
        document.title = counter.toString();
        //API.getusers().then()...
        //setTimeout, setInterval...
        //indexedDB...
        //document.getElementById...
        //document.title = 'User...
    }, [counter])


    useEffect(()=>{
        console.log('UseEffect with every render');
        document.title = counter.toString();
    })

    useEffect(()=>{
        console.log('UseEffect with only first render');
        document.title = counter.toString();
    }, [])//аналог componentDidMount

    useEffect(()=>{
        console.log('UseEffect with first render and counter change');
        document.title = counter.toString();
    }, [counter])
    return(
        <>
            Hello, {counter} {fake}
            <button onClick={()=>{setCounter(fake+1)}}>
                +
            </button>
        </>
    )
}