import React from 'react';

export default class SideBar extends React.Component {
    render() {
        return (
            <div>
                <div className="vertical-align-container">
                    <img
                        src={require('../img/profile_pic.jpeg')}
                        style={{
                            height: 100,
                            width: 100,
                            float: 'left',
                            display: 'block',
                        }}
                        className="rounded-circle"
                    />
                    <div className="ml-3">
                        <h1>Abe Malla</h1>
                        <h6 className="text-secondary">
                            Computer Science Student
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}
