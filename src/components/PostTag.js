import React from 'react';

const PostTag = ({ name }) => (
    <p
        style={{
            backgroundColor: '#81c784',
            color: 'white',
            fontWeight: 'bold',
            padding: '1px 7px',
            float: 'left',
        }}
        className="rounded mr-1"
    >
        {name}
    </p>
);

export default PostTag;
