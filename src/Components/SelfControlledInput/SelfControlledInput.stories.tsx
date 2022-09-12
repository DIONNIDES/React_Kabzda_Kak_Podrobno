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


export const ControlledInput = ()=>{
    const [parentValue, setParentValue] = useState<string>('');
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }
    return(
        <input value={parentValue} onChange={onChange}/>
    )
}

export const ControlledCheckbox = ()=>{
    const [parentValue, setParentValue] = useState<boolean>(false);
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }
    return(
        <input type='checkbox' onChange={onChange} checked={parentValue}/>
    )
}

export const ControlledSelect = ()=>{
    const [parentValue, setParentValue] = useState<string>('');
    const onChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }
    return(
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option>Mykolaiv</option>
            <option>Kiev</option>
            <option>Vinnica</option>
        </select>
    )
}