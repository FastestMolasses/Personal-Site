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
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <h6
                    style={{ fontWeight: 'bold', alignSelf: 'center' }}
                    className="mr-3"
                >
                    {props.date}
                </h6>

                {props.tags.map(i => {
                    return <PostTag name={i} />;
                })}
            </div>
            <p style={{ margin: '10px 0px' }}>{props.description}</p>

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
