import React from 'react';
import { Container, Row, Col } from 'shards-react';

import SideNav from '../components/SideNav';
import SideProfile from '../components/SideProfile';
import SideNewsletter from '../components/SideNewsletter';

export default class TwoPanel extends React.Component {
    render() {
        return (
            <div className="bg-light fill-height">
                <Container>
                    <Row className="pt-5">
                        <Col
                            sm="12"
                            md="4"
                            lg="3"
                            className="text-center bg-light ml-5"
                        >
                            <SideProfile />
                            <SideNav activeTab={this.props.activeTab} />
                            <SideNewsletter />
                            <p className="text-muted text-center">
                                © Abe Malla 2019
                                <br />
                                <br />
                                Created with React
                                <br />
                                <a
                                    href="https://github.com/FastestMolasses/Personal-Site"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Source
                                </a>
                            </p>
                        </Col>
                        <Col className="text-left ml-5">
                            {this.props.children}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
