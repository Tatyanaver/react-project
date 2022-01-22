import React, {useState} from 'react';
import Myinput from "./Input/Myinput";
import Mybutton from "./Button/Mybutton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title:'', body:''})
    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
    }

    return (
        <div>
            <form>
                <Myinput value = {post.title}
                         type="text"
                         placeholder="Заголовок поста"
                         onChange={e => setPost({...post, title: e.target.value})}/>
                <Myinput
                    value={post.body}
                    type="text"
                    placeholder="Описание поста"
                    onChange={e => setPost({...post, body: e.target.value})}/>
                <Mybutton onClick={addPost}>Создание поста</Mybutton>
            </form>
        </div>
    );
};

export default PostForm;