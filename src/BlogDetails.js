import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogsDetails = () => {
    const {id} = useParams()
    const {data:blogs,error,isLoding} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id , {
            method: 'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className='blogs-details'>
            {isLoding && <h1>Loading....</h1>}
            {error && <h1>{error}</h1>}
            {blogs && (
                <article >
                    <h1>{blogs.title}</h1>
                    <div>{blogs.body}</div>

                </article>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default BlogsDetails;