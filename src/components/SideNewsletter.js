import React from 'react';
import queryString from 'query-string';

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
    state = {
        status: null,
        message: null,
    };

    subscribe = data => {
        // Make sure we have a proper email first
        if (this.input.value.indexOf('@') === -1) return;

        const params = queryString.stringify({ EMAIL: this.input.value });
        console.log('PARAMS:' + params);
        const getAjaxUrl = url => url.replace('/post?', '/post-json?');
        const url =
            // TODO: ADD PROPER MAILCHIMP MAIL LINK
            getAjaxUrl(
                '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn',
            ) +
            '&' +
            params;

        console.log(url);

        this.setState(
            {
                status: 'sending',
                message: null,
            },
            () =>
                jsonp(url, (err, data) => {
                    if (err) {
                        this.setState({
                            status: 'error',
                            message: err,
                        });
                    } else if (data.result !== 'success') {
                        this.setState({
                            status: 'error',
                            message: data.msg,
                        });
                    } else {
                        this.setState({
                            status: 'success',
                            message: data.msg,
                        });
                    }
                }),
        );
    };

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
                        <input
                            type="text"
                            ref={i => (this.input = i)}
                            style={{ width: '100%' }}
                            name="EMAIL"
                            placeholder="Email address"
                            className="text-center rounded"
                        />
                    </InputGroup>

                    <Button
                        theme="primary"
                        className="font-weight-bold rounded"
                        onClick={this.subscribe}
                    >
                        Subscribe
                    </Button>
                </CardBody>
            </Card>
        );
    }
}

const jsonp = (url, callback) => {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src =
        url + (url.indexOf('?') >= 0 ? '&' : '?') + 'c=' + callbackName;
    document.body.appendChild(script);
};
