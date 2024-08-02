import { useState, useEffect } from "react";
import "./App.css";
import PostComponent from "./components/PostComponent";

function App() {
  const [posts, setPosts] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const postText = inputText;

    if (inputText !== "") {
      const postId = Date.now();
      const allPostData = { id: postId, text: postText };
      setPosts((prevPosts) => {
        return [...prevPosts, allPostData];
      });
      setInputText("");

      console.log("hello");
    }
  }

  function handleDelete(postId) {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== postId);
    });
  }

  function handleEdit(newText, postId) {
    setPosts((prevPosts) => {
      return prevPosts.map((post) =>
        post.id === postId ? { ...post, text: newText } : post
      );
    });
  }

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className="App">
      <h1>Social Media App</h1>
      <div className="container">
        <div className="left">
          <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="post">Write your post here</label>
            <br />
            <br />
            <textarea
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              placeholder="enter your text"
              name="post"
              id="input"
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <br />
            <div id="msg"></div>
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="right">
          <h3>Your posts here</h3>
          <div id="posts">
            {posts.map((post) => (
              <PostComponent
                key={post.id}
                ownPost={post}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
