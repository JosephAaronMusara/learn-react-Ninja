import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Data fetch from the resource failed");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err.message);
          setError(err.message);
        });
    }, 1000); //added a delay to see the effect. Never do this in practice
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading............</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
