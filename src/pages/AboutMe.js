import React from 'react';

import TwoPanel from '../components/TwoPanel';
import { Container, Row, Col } from 'shards-react';

export default class AboutMe extends React.Component
{
    render()
    {
        return (
            <TwoPanel activeTab='About Me'>
                <h1 className="text-left">About Me</h1>
            </TwoPanel>
        );
    }
}
