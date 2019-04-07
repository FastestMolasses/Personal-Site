import React from 'react';

import TwoPanel from '../components/TwoPanel';
import BlogPostPreview from '../components/BlogPostPreview';

export default class HomePage extends React.Component {
    render() {
        return (
            <TwoPanel activeTab="Blog">
                <BlogPostPreview />
                <BlogPostPreview />
            </TwoPanel>
        );
    }
}
