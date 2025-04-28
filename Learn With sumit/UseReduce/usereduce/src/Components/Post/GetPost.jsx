import React, { useEffect, useState } from 'react'

const GetPost = () => {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true); 
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setPosts(data);
            setError(null);
        })

        .catch(err =>{
            setLoading(false);
            setPosts([]);
            setError('there is an error');
        })
    },[]);

  return (
    <div>
        
            {loading ? 'Loading...' : posts.map((post)=>(
                <div key = {post.id}>
                    <h1>{post.title}</h1>
                    <h1>Body is here</h1>
                    <p>{post.body}</p>

                </div>
            ))}
            {error || null}
        
    </div>
  )
}

export default GetPost