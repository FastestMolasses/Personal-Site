import React from 'react';

import {
    Card,
    Button,
    CardBody,
    FormInput,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
} from 'shards-react';

export default class SideNewsletter extends React.Component {
    render() {
        return (
            <Card className="mt-5 mb-5 card" theme="dark">
                <CardBody>
                    <h4 className="text-white font-weight-bolder">
                        Newsletter
                    </h4>
                    <p className="text-secondary">
                        Subscribe to my newsletter to get notifications on when
                        I make a blog post!
                    </p>
                    <InputGroup>
                        <FormInput placeholder="Email address" />
                        <InputGroupAddon type="append">
                            <Button
                                theme="primary"
                                className="font-weight-bold"
                            >
                                Subscribe
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </CardBody>
            </Card>
        );
    }
}
