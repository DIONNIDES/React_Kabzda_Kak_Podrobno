import React, {useState} from 'react';

export default {
    title: 'React.memo demo',
}


export const Example = ()=>{
    const [counter, setCounter] = useState(1);
    const [users, setUsers] = useState(['Dima', 'Oleg', 'Victor', 'Ivan']);

    const addUser = () =>{
        setUsers([...users, 'DIMASTA'])
    }

    return(
        <>
           <button onClick={()=>setCounter(counter+1)}>+</button>
           <button onClick={addUser}>ADD USER</button>
            <NewMessagesCounter counter={counter} />
            <Users users={users} />
        </>
    )
}

export const  NewMessagesCounter = (props:any) =>{
    return <div>{props.counter}</div>
}

export const UsersSecret = (props:{users:Array<string>}) =>{
    console.log('Rendering');
    debugger
    return (<div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}
    </div>)
}

export const Users = React.memo(UsersSecret);




