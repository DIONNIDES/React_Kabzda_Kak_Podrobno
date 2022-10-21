import {action} from '@storybook/addon-actions';
import {Select} from './Select';
import {ChangeEvent, useState} from 'react';


export default {
    title:'Select component',
    component: Select
}

const callback = action('Selected item is showing');




let items = [
    {value:1, title:'Dimas'},
    {value:2, title:'Artem'},
    {value:3, title:'Ivan'},
    {value:4, title:'Oleg'},
    {value:5, title:'Alex'},
]

let value:any = items[0].title
let filteredItems = items.filter(item =>item.title!==value)


export const UncollapsedListOfNames = ()=> <Select value={value} onChange={callback} items={filteredItems} />
export const CollapsedListOfNames = ()=> <Select value={value} onChange={callback} items={[]} />

export const ModeChanging = ()=>{

    const [value, setValue] = useState<any>('none');

    const onChange = (textValue:string) =>{
        setValue(textValue)
    }
 return  <Select value={value} onChange={onChange} items={items} />
}

