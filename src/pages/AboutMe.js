import React from 'react';

import TwoPanel from '../components/TwoPanel';
import { Container, Row, Col, Progress } from 'shards-react';

export default class AboutMe extends React.Component {
    render() {
        return (
            <TwoPanel activeTab="About Me">
                {/* ------------------------------------------------------ */}

                <h1>About Me</h1>
                <br />
                <p>I am currently studying Computer Science at CSULB. </p>

                {/* ------------------------------------------------------ */}

                <Row>
                    <Col>
                        <h2>Projects</h2>
                    </Col>
                </Row>

                {/* ------------------------------------------------------ */}
                <hr />
                <Row>
                    <Col sm="12" md="12" lg="6">
                        <h2>Skills</h2>
                        <span>Python</span>
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

                        <span>React / React Native</span>
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
                        <span>JavaScript</span>
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
                        <span>Java</span>
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
                    </Col>

                    <Col sm="12" md="12" lg="6">
                        <h2>Favorite Songs</h2>
                        <iframe
                            src="https://open.spotify.com/embed/track/5MD2QLnFM2ChpKAh33z0zr"
                            width="300"
                            height="80"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        />
                        <iframe
                            src="https://open.spotify.com/embed/track/1dpFMMagx6agdv4I1JxwkK"
                            width="300"
                            height="80"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        />
                        <iframe
                            src="https://open.spotify.com/embed/track/3K0sVapHNSSeJ8o4DLHOJY"
                            width="300"
                            height="80"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        />
                    </Col>
                </Row>

                {/* ------------------------------------------------------ */}

                <Row>
                    <Col>
                        <hr />
                        <h2>Favorite Books</h2>
                    </Col>
                </Row>

                {/* ------------------------------------------------------ */}
            </TwoPanel>
        );
    }
}
