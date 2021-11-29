import { useState ,useEffect} from 'react'

const useFetch = (url) => {


    const [data,setData] = useState(null)
    const [isLoding,setLoding] = useState(true)
    const [error,setError] = useState(null)
    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
                .then(response => {
                    if(!response.ok){
                        throw Error('The Data is not Correct')
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data)
                    setLoding(false)
                })
                .catch(err => {
                    setError(err.message)
                    setLoding(false)
                })
        ;},1000)
        
    },[url]);
    return {data,isLoding,error};
}
 
export default useFetch;