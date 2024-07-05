import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('Aaron');
  const [creating, setCreating] =useState(false);
  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title,body,author};
    setCreating(true);

    fetch('http://localhost:8000/blogs',{
        method : 'POST',
        headers :{'Content-Type': 'application/json'},
        body : JSON.stringify(blog)
    }).then(()=>{
        setCreating(false);
        history.push('/')
    });
  }
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog Title : </label>
        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label>Blog Body : </label>
        <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option value="Joseph">Joseph</option>
          <option value="Aaron">Aaron</option>
        </select>
        {creating && <button disabled>Adding Blog</button>}
        {!creating && <button>Add Blog</button>}

        <div>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
        <p>Author: {author}</p>
        </div>
      </form>
    </div>
  );
};

export default Create;
