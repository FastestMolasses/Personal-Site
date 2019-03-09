import React from 'react';
import { Container, Row, Col } from 'shards-react';

import SideNav from '../components/SideNav';
import SideProfile from '../components/SideProfile';
import SideNewsletter from '../components/SideNewsletter';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="bg-light fill-height">
                <Container>
                    <Row className="pt-5">
                        <Col
                            sm="12"
                            md="12"
                            lg="3"
                            className="text-center bg-light"
                        >
                            <SideProfile />
                            <SideNav activeTab="Blog" />
                            <SideNewsletter />
                            <p className="text-muted text-center">
                                © Abe Malla 2019
                                <br />
                                <br />
                                Created with React
                                <br />
                                <a href="https://github.com/FastestMolasses/Personal-Site">
                                    View Source
                                </a>
                            </p>
                        </Col>
                        <Col className="text-center">BODY</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
