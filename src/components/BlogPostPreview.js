import React from 'react';

import PostTag from './PostTag';

export default class BlogPostPreview extends React.Component {
    render() {
        return (
            <div className="mb-5">
                <h3>
                    <a href="/" style={{ color: 'black' }}>
                        Threads and Processes In Python
                    </a>
                </h3>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h6 style={{ fontWeight: 'bold' }}>April 6, 2019</h6>
                    <PostTag name={'Python3'} />
                </div>
                <p style={{ margin: '10px 0px' }}>
                    Avoiding common pitfalls and bad-practices with threads and
                    processes.
                </p>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="/" className="font-weight-bold" style={{textDecoration: 'none'}}>
                        Read
                    </a>
                    <a href="/" className="font-weight-bold ml-3" style={{textDecoration: 'none'}}>
                        View Comments
                    </a>
                </div>
            </div>
        );
    }
}
