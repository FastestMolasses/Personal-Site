import React from 'react';
import { Container, Row, Col } from 'shards-react';

import SideNav from '../components/SideNav';
import SideBar from '../components/SideBar';
import SideNewsletter from '../components/SideNewsletter';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="bg-light">
                <Container>
                    <Row className="pt-5">
                        <Col
                            sm="12"
                            md="12"
                            lg="4"
                            className="text-center bg-light"
                        >
                            <SideBar />
                            <SideNav activeTab='Blog' />
                            <SideNewsletter />
                        </Col>
                        <Col className="text-center">BODY</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
