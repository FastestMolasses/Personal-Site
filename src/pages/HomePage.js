import React from 'react';
import { Container, Row, Col } from 'shards-react';

import SideBar from '../components/SideBar';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="bg-dark">
                <Container>
                    <Row>
                        <Col
                            sm="12"
                            md="12"
                            lg="4"
                            className="text-center bg-light"
                        >
                            <SideBar />
                        </Col>
                        <Col className="text-center bg-primary">2 / 3</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
