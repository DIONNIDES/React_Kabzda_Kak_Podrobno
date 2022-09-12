import React, {ChangeEvent, useRef, useState} from 'react';

export default{
    title:'input'
}

export const SelfControlledInput = ()=><input/>
export const TrackValueOfSelfControlledInput = ()=>{
    const[value, setValue] = useState('');
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }
    return <><input onChange={onChangeHandler}/> - {value}</>

}

export const TrackValueOfSelfControlledInputByButtonPress = ()=>{
    const[value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const saveValue = ()=>{
        const element = inputRef.current as HTMLInputElement
        setValue(element?.value)
    }

    return <><input ref={inputRef} /><button onClick={saveValue}>Save</button> - actual value{value}</>
}

export const ControlledInputWithFixedValue = ()=><input value={'in-camasutra.com'}/>