import React, {useEffect, useState} from 'react';
import './App.css'
import Count from "./Components/Count";
import PostDescription from "./Components/PostDescription";
import Postlist from "./Components/Postlist";
import Mybutton from "./Components/Button/Mybutton";
import Myinput from "./Components/Input/Myinput";
import PostForm from "./Components/PostForm";
import axios from "axios";
import PostService from "./API/PostService";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'Description 1'},
        {id: 2, title: 'Java 2', body: 'Description 2'},
        {id: 3, title: 'Java 3', body: 'Description 3'},]
    )
const createPost=(newPost) => {
        setPosts([...posts, newPost])
}

   async function fetchPosts() {
        const postsResponse = await PostService.getAll();
        setPosts(postsResponse)
}

useEffect(()=> {
    fetchPosts()},[])

//     async function fetchComments() {
//         const newResponse = await axios.get('http://jsonplaceholder.typicode.com/comments')
//     setPosts(newResponse.data)
// }

const removePost = (post)=> {
        setPosts(posts.filter(p=>p.id !==post.id))
}
   return (
      <div className={'main'}>
          <button onClick={fetchPosts}>Get posts</button>

          {/*<button onClick={fetchComments}>Get comments</button>*/}
          <PostForm create={createPost}/>
          <hr/>
          <div>
              <select>
                  <option value="value1">По названию</option>
                  <option value="value1">По описанию</option>
              </select>
          </div>
          {/*Условная отрисовка*/}

          {/*posts.length !==0*/}
           <Postlist remove={removePost} posts={posts} title="Пости про Джаву"/>
          {/*// : <div>Посты не найдены</div>*/}
      </div>
  );
}

export default App
