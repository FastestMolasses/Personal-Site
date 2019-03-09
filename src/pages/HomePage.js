import React from 'react';

import TwoPanel from '../components/TwoPanel';

export default class HomePage extends React.Component {
    render() {
        return (
            <TwoPanel activeTab='Blog'>
                <p>BODY</p>
            </TwoPanel>
        );
    }
}
