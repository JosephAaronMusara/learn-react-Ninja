import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState([
        { title: 'My First blog Post', body: 'Demo body ......', author: 'Joseph', id: 1 },
        { title: 'Welcome party!', body: ' Demo body2 ......', author: 'Aaron', id: 2 },
        { title: 'Web dev top tips', body: 'Demo body 3 ......', author: 'Joseph', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    //const [name,setName] = useState('Aaron');
    const [age,setAge] = useState(21)

    // const handleClick =() =>{
    //     setName('Tariroyashe');
    //     setAge(17);
    // }

    useEffect(()=>{
        //another built-in hook
        // This runs at initial runtime or whenever new data is rendered
        //UseCases: Fetch Data, Communicating with other services to notify about such changes

        console.log('useEffect has been invoked');

    },[age] //We can run it conditionally by giving it a secont argument as an array, which we can implement sensibly through states
    );


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <div className='cherandom'>
                <p>The number is {age}</p>
                <button onClick={()=>setAge(Math.random)}>Change number</button>
            </div>
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author ==='mario')}  title="Mario's Blogs" handleDelete={handleDelete}/> */}

            {/* <h2>Home Page</h2>
            <p>{name} is {age} years old!</p>
            <button onClick={handleClick}>Click Me</button> */}
        </div>
    );
}
 
export default Home;