import React from 'react';
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post ({ username, caption, imageURL }) {
    return (
        <div className="post">
            <div className="post__header">
                {/* Header: avatar with username */}
                <Avatar
                    classname="post__avatar"
                    alt={use}
            </div>
        </div>
    )
}