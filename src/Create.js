import { useState } from 'react'
import { useHistory } from 'react-router-dom';


const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Ayoub');
    const [isPendding,setPendding] = useState(false);
    const history =  useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title,body,author};
        setPendding(true)

        setTimeout(()=>{
            fetch('http://localhost:8000/blogs',{
                
                method : 'POST',
                headers : {'Content-Type':'application/JSON'},
                body: JSON.stringify(blog)
            }).then(() => {
                setPendding(false)
                history.push('/')
            })
        ;},1000)

        
        
    }

    
    return ( 
        
        <div className="create">
            <h1>Add a New Blog:</h1>
            <form onSubmit={handleSubmit}>
            <label>Blog Title</label>
            <input  
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required>
            </input>
            <label>Blog Body</label>
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required>
            </textarea> 
            <select 
                value= {author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="Ayoub">Ayoub</option>
                <option vlaue="Mehdi">Mehdi</option>
                <option vlaue="Noueman">Noueman</option>
            </select>
            {!isPendding && <button>Add Blog</button>  }       
            {isPendding && <button disabled>Lodding...</button>  }       
            </form>
        </div>
     );
}
 
export default Create;