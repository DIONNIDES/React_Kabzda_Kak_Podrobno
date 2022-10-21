import React, {useState} from 'react';
import styles from './Select.module.css'

export type ItemType = {
    value: any
    title: string
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export const Select = React.memo(SelectSecret);
function SelectSecret(props:SelectPropsType){
    const [collapsed, setCollapsed] = useState(true);
   const changeItem = (title:string)=>{
       props.onChange(title)
       setCollapsed(true)
   }

   const onBlurHandler = () =>{
       setCollapsed(true)
       props.onChange('none')
    }

    return (
        <div className={styles.select} onBlur={onBlurHandler}>{
            collapsed
                ? <div onClick={() => setCollapsed(false)} ><h3>{props.value}</h3></div>
                : <div className={styles.items}> {props.items.map(item => <div className={styles.item} key={item.value} onClick={()=>changeItem(item.title)} >{item.title}</div>)}</div>
             }
        </div>
    );
};

