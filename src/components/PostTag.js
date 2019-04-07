import React from 'react';

const PostTag = ({ name }) => (
    <p
        style={{
            backgroundColor: 'skyblue',
            color: 'white',
            fontWeight: 'bold',
            padding: '0px 7px',
            margin: '0px 10px',
        }}
        className="rounded"
    >
        {name}
    </p>
);

export default PostTag;
