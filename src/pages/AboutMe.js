import React from 'react';

import TwoPanel from '../components/TwoPanel';
import { Container, Row, Col, Progress } from 'shards-react';

export default class AboutMe extends React.Component {
    render() {
        return (
            <TwoPanel activeTab="About Me">
                <h1>About Me</h1>
                <br />
                <p>I am currently studying Computer Science at CSULB. </p>

                {/* ------------------------------------------------------ */}

                <div style={{ width: '50%' }}>
                    <h2>Skills</h2>
                    <p>Python</p>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <Progress bar value={80} className="rounded mb-3" />
                        <p className="ml-2">80%</p>
                    </div>

                    <p>React / React Native</p>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <Progress bar value={70} className="rounded mb-3" />
                        <p className="ml-2">70%</p>
                    </div>
                    <p>JavaScript</p>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <Progress bar value={70} className="rounded mb-3" />
                        <p className="ml-2">70%</p>
                    </div>
                    <p>Java</p>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <Progress bar value={60} className="rounded mb-3" />
                        <p className="ml-2">60%</p>
                    </div>
                </div>

                {/* ------------------------------------------------------ */}

                <hr />
                <h2>Projects</h2>
            </TwoPanel>
        );
    }
}
