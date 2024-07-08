import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const BlogList = ({ blogs, title }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Form>
        <InputGroup className="my-3">
          {/* onChange for search */}
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search blog"
          />
        </InputGroup>
      </Form>
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs
          .filter((blog) => {
            return search.toLowerCase() === "" ? blog : blog.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Writen by : {blog.author}</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default BlogList;
