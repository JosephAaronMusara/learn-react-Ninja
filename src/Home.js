import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setBlogs(data);
            setIsLoading(false);
        });
    },1000);//added a delay to see the effect. Never do this in practice
  },[]);

  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter(blog => blog.id !== id);
  //     setBlogs(newBlogs);
  // }

  //const [name,setName] = useState('Aaron');
  //const [age,setAge] = useState(21)

  // const handleClick =() =>{
  //     setName('Tariroyashe');
  //     setAge(17);
  // }

  // useEffect(()=>{
  //     //another built-in hook
  //     // This runs at initial runtime or whenever new data is rendered
  //     //UseCases: Fetch Data, Communicating with other services to notify about such changes

  //     console.log('useEffect has been invoked');

  // },[age] //We can run it conditionally by giving it a secont argument as an array, which we can implement sensibly through states
  // );

  return (
    <div className="home">
        {isLoading && <div>Loading............</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}

      {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> */}
      {/* <div className='cherandom'>
                <p>The number is {age}</p>
                <button onClick={()=>setAge(Math.random)}>Change number</button>
            </div> */}
      {/* <BlogList blogs={blogs.filter((blog)=>blog.author ==='mario')}  title="Mario's Blogs" handleDelete={handleDelete}/> */}

      {/* <h2>Home Page</h2>
            <p>{name} is {age} years old!</p>
            <button onClick={handleClick}>Click Me</button> */}
    </div>
  );
};

export default Home;
