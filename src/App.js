import React, { useRef, useState } from "react";
import ClassCounter from "./Components/ClassCounter";
import Counter from "./Components/Counter";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import "./style/App.css";

function App() {
  const [posts, usePosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
   const newPost = {
    id: Date.now(),
    title,
    body
   }
   setPost([...posts, newPost])
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput 
         value={body}
         onChange={(e) => setBody(e.target.value)}
        type="text" 
        placeholder="Опиасние поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
