import React from 'react'
import './Post.css'


function Post({username,caption,imageUrl}) {
    return (
        <div className="postCenter">
        <div className="post">
            <div className="post_header">
                <h3>{username}</h3>
            </div>
            <img className="post_image" src={imageUrl} alt=""></img>
            <h4 className="post_text"><strong>{username}</strong>{caption}</h4>
        </div>
        </div>
    )
}

export default Post
