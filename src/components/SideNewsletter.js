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
            <Card className="my-3 card" theme="dark">
                <CardBody>
                    <h4 className="text-white font-weight-bolder">
                        Newsletter
                    </h4>
                    <p className="text-secondary">
                        Subscribe to my newsletter to get notifications on when
                        I make a blog post!
                    </p>
                    <InputGroup size="sm" className="mb-2">
                        <FormInput
                            placeholder="Email address"
                            className="text-center"
                        />
                    </InputGroup>
                    <Button
                        theme="primary"
                        className="font-weight-bold rounded"
                    >
                        Subscribe
                    </Button>
                </CardBody>
            </Card>
        );
    }
}
