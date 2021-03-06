import React from 'react';

import PostTag from './PostTag';

const BlogPostPreview = props => {
    return (
        <div className="mb-5">
            {/* ------------------------------------------------------------ */}

            <h3>
                <a href="/" style={{ color: 'black' }}>
                    {props.title}
                </a>
            </h3>

            {/* ------------------------------------------------------------ */}

            <div
                style={{
                    width: '100%',
                    height: '35px',
                }}
            >
                <span
                    style={{ fontWeight: 'bold', float: 'left', }}
                    className="mr-2"
                >
                    {props.date}
                </span>

                {props.tags.map((name, index) => {
                    return <PostTag name={name} key={index.toString()} />;
                })}
            </div>

            <p style={{ marginTop: '7px', }}>{props.description}</p>

            {/* ------------------------------------------------------------ */}

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a
                    href="/"
                    className="font-weight-bold"
                    style={{ textDecoration: 'none' }}
                >
                    Read
                </a>
                <a
                    href="/"
                    className="font-weight-bold ml-3"
                    style={{ textDecoration: 'none' }}
                >
                    View Comments
                </a>
            </div>

            {/* ------------------------------------------------------------ */}
        </div>
    );
};

export default BlogPostPreview;
