import React, {useMemo, useState} from 'react';

export default {
    title: 'Usememo'
}

export const DificultCounting = () => {

    const [a, setA] = useState<number>(2);
    const [b, setB] = useState<number>(2);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;

        for (let i=1; i<=a; i++)
        {
            let fake = 0;
            while (fake <10000000){
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB *i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>a = {resultA}</div>
            <div>b = {resultB}</div>
        </>
    );
};

export const HelpsToReactMemo = ()=>{
    const [counter, setCounter] = useState(1);
    const [users, setUsers] = useState(['Dima', 'Oleg', 'Victor', 'Ivan']);

    let filteredUsers = useMemo(()=>{
      let  filteredUsers =  users.filter(u=>u.length <5);
      return filteredUsers
    }, [users])

    const addUser = () =>{
        setUsers([...filteredUsers, 'OLEG'])
    }

    return(
        <>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={addUser}>Add user</button>
            {counter}
            <Users users={filteredUsers} />
        </>
    )
}

export const UsersSecret = (props:{users:Array<string>}) =>{
    console.log('USERS RERENDERED');
    return (<div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}
    </div>)
}

export const Users = React.memo(UsersSecret);



