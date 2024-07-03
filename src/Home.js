import { useState } from 'react';

const Home = () => {

    const [name,setName] = useState('Aaron');
    const [age,setAge] = useState(21)

    const handleClick =() =>{
        setName('Tariroyashe');
        setAge(17);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old!</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;