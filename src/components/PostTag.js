import React from 'react';

const PostTag = ({ name }) => (
    <p
        style={{
            backgroundColor: 'skyblue',
            color: 'white',
            fontWeight: 'bold',
            padding: '0px 7px',
        }}
        className="rounded mr-1"
    >
        {name}
    </p>
);

export default PostTag;
