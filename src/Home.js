import { useState ,useEffect} from 'react'
import Blogs from "./Blogs";
import useFetch from './useFetch';

const Home= () => {
    const {data:blogs , isLoding, error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className='home'>
        {error && <h3>{error}</h3>}
        {isLoding && <h3>Loading....</h3>}
        {blogs && <Blogs blogs={blogs} title='All the blogs' />}
        </div>
     );
}
 
export default Home ;