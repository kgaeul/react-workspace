import React, { useEffect, useState } from "react";


const Blog = ()=>{

    const savePosts = JSON.parse(localStorage.getItem('posts')) || [];
    const [posts,setPosts] = useState(savePosts);

    const[newPosts,setNewPost]=useState('');

    useEffect(()=>{
        localStorage.setItem('posts',JSON.stringify(posts));
    })

    const addPost=()=>{
        setPosts([...posts,newPosts]);
        setNewPost('');

        localStorage.setItem('posts',JSON.stringify([...posts,newPosts]));
    }

    const removePosts =(index)=>{
        const deletePosts = [...posts];

        deletePosts.splice(index,1);
        setPosts(deletePosts);

        localStorage.setItem('posts',JSON.stringify(removePosts));

    }

    return(
        <div>
         
            <input type="text" value={newPosts} onChange={(e)=>setNewPost(e.target.value)}required />
            <button onClick={addPost}>작성하기</button>
            <ul>
            {posts.map((posts,index)=>(
                <li key={index}>
                {posts}
                <button onClick={removePosts}>삭제하기</button>
            </li>
            ))}
            
          </ul>
        </div>
    )

}

export default Blog;