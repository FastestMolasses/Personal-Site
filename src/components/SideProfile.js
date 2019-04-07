import React from 'react';

export default class SideProfile extends React.Component {
    render() {
        return (
            <div>
                <img
                    src={require('../img/profile_pic.jpeg')}
                    style={{
                        height: 80,
                        width: 80,
                        display: 'block',
                    }}
                    className="rounded-circle"
                />
                <div className="my-3 text-left">
                    <h3>Abe Malla</h3>
                </div>
                <p className="text-left pb-3 text-muted">
                    Computer Science student at CSULB. I blog about Python,
                    machine learning, automation, and more.
                </p>
            </div>
        );
    }
}
