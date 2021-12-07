// import React from 'react';
import './App.css';
import Post from './Post';
import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
    username: "kamp ", 
    caption: "cruel and unusual", 
    imageUrl: "https://i.imgur.com/5DoNdyE.jpg"
  },
  {
    username: "lilyvang ",
    caption: "im so pretty", 
    imageUrl: "https://i.imgur.com/zyxBGQw.png"
  },
  {
    username: "kamp ", 
    caption: "the galaxy in janaki", 
    imageUrl: "https://i.imgur.com/73CQFu2.jpg"
  }
  ]);


  return (
    <div className="App">
      <div className="app_header">
        <img
        className="app_headerImage"
        src="https://i.imgur.com/42V44NP.pnggit "
        alt=""   
       />  
      </div>

      <h1><br></br></h1>

      {
        posts.map(post => ( 
          <Post username = {post.username} caption = {post.caption} imageUrl = {post.imageUrl}/>
        ))
      }

      {/* <Post username ="kamp " caption="cruel and unusual" imageUrl="https://i.imgur.com/5DoNdyE.jpg"/>
      <Post username ="lilyvang " caption="im so pretty" imageUrl="https://i.imgur.com/zyxBGQw.png" /> */}
    
      
    </div>
  );
}

export default App;
