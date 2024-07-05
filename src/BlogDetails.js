import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
    const {id} = useParams();//to grab url parameters, id in this case
    const {data:blog,isLoading,error} =useFetch('http://localhost:8000/blogs/' + id)
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
        </div>
    );
}
 
export default BlogDetails;