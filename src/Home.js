import { useState } from 'react'
import Blogs from "./Blogs";

const Home= () => {
    const [blogs,setblogs] = useState([{id : 1,author : 'Ayoub',title : 'mal l7ayat m3aya',body : 'He is a developper'},
    {id : 2,author : 'Ayoubji',title : 'Mbatach Book',body : 'He is a developper '},
    {id : 3,author : 'Nouamanji',title : 'M9awda 3lia omakayan ghar entraiment',body : 'He is a Mbatach'},
    {id : 4,author : 'Hamza',title : 'Trading fih serf ajammi',body : 'He is a Tala9ha'}])
    return ( 
        <div className='home'>
        <div>{blogs.map((blog) => (
            <div className='blogs-preview' key={blog.id}>
                <h1>{blog.title}</h1>
                <p>Written by {blog.author}</p>
            </div>
            ))}
        </div>
        </div>
     );
}
 
export default Home ;