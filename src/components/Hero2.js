
import { useState, useEffect } from 'react';

function Hero2() {
    const [name, setName] = useState('Omnia');
    const [age, setAge] = useState(22);
    const [user, setUser] = useState({
        name: 'Ahmed',
        title: 'Fullstack developer'
    });
    const [isUserAdmin, setIsUserAdmin] = useState(false);

    useEffect(() => {
        //  functionality
        //  Did mount
        console.log("USEEFFECT" , 'DID MOUNT')
        // API CALL 
        return () => {
            // Will unmount 
            // Clean up
        }
    },[])

    useEffect(() => {
        //  functionality
        //  Did mount , update
        console.log("USEEFFECT" , 'DID UPDATE')
    }, [name , user])


    const changeUsername = (name) => {
        // name = name XXXX
        setName(name)
        setUser({
            ...user,
            name
        })
    }

    return (
        <>
            <h1>Hello from hero functional</h1>
            <p>Username : {name}</p>
            <p>Age : {age}</p>
            <p>User 2 : {user.name}</p>
            <p>User 2 title : {user.title}</p>


            <button onClick={() => changeUsername('Omar')}>Change name 1</button>
            <button onClick={() => changeUsername('Salma')}>Change name 2</button>
        </>
    )
}

export default Hero2;