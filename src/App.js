// import React from 'react';
import './App.css';
import Post from './Post';
import React, { useState } from 'react';

function App() {
  const [posts] = useState([
    {
    username: "kamp", 
    caption:  " cruel and unusual", 
    imageUrl: "https://i.imgur.com/5DoNdyE.jpg"
  },
  {
    username: "kamp", 
    caption:  " all my shit spectacular", 
    imageUrl: "https://i.imgur.com/7XDfJ9m.jpg"
  },
  {
    username: "lilyvang",
    caption:  " im so pretty", 
    imageUrl: "https://i.imgur.com/QmgvNX5.gif"
  },
  // {
  //   username: "kamp", 
  //   caption:  " the galaxy in janaki", 
  //   imageUrl: "https://i.imgur.com/j4pjw7s.jpg"
  // },
  {
    username: "kamp", 
    caption: " andromeda and the sea monster", 
    imageUrl: "https://i.imgur.com/NYx3laC.jpg"
  },
  {
    username: "kamp", 
    caption:  " im flattered", 
    imageUrl: "https://i.imgur.com/3alzdba.jpg"
  },
  {
    username: "lilyvang", 
    caption:  " oct 25 , 2022", 
    imageUrl: "https://i.imgur.com/j1GE41t.jpg"
  },
  {
    username: "kamp", 
    caption: " chaos is the mask worn by creativity", 
    imageUrl: "https://i.imgur.com/GuUQVxL.jpg"
  }
  ]);


  return (
    <div className="App">
      <div className="app_header">
        <img
        className="app_headerImage"
        src="https://i.imgur.com/7RhhMV2.png"
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
