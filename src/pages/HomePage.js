import React from 'react';

import TwoPanel from '../components/TwoPanel';
import BlogPostPreview from '../components/BlogPostPreview';

export default class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            postData: [
                {
                    title: 'Threads and Processes in Python',
                    description:
                        'Avoiding common pitfalls with threads and processes.',
                    date: 'April 30, 2019',
                    tags: ['Python3'],
                },
                {
                    title: 'Protecting and Freezing Python Programs',
                    description:
                        'Learn how to freeze python applications and protect them from reverse-engineering.',
                    date: 'April 29, 2019',
                    tags: ['Python3', 'Cryptography'],
                },
            ],
        };
    }

    render() {
        return (
            <TwoPanel activeTab="Blog">
                {this.state.postData.map((item, index) => {
                    return <BlogPostPreview {...item} key={index.toString()} />;
                })}
            </TwoPanel>
        );
    }
}
