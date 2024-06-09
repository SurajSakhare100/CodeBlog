import React from 'react'

function Post() {
    return (
        <div>
            <form action="/api/upload" method="POST" enctype="multipart/form-data"/>
                <input type="file" name="file"/>
                <button type="submit">Upload</button>
            <form/>
        </div>
    )
}

export default Post
