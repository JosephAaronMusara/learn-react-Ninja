import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams();//to grab url parameters, id in this case
    const {data:blog,isLoading,error} =useFetch('http://localhost:8000/blogs/' + id)

    const history = useHistory();

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + id,{
            method : 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {isLoading && <div>Loading.........</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>Writen By : {blog.author}</p>
                <div>{blog.body}</div>
            </article>
            )}
            <button onClick={handleDelete}>delete</button>
        </div>
    );
}
 
export default BlogDetails;