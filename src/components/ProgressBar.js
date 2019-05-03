import React from 'react';

const ProgressBar = (props) =>
{
    return (
        <div style={{
            width: '200px',
            backgroundColor: 'grey',
            borderRadius: '10%',
            padding: '3px',
        }}>
            <div style={{
                backgroundColor: 'lightblue',
                width: '80%',
                height: '20px',
                borderRadius: '10%',
            }}></div>
        </div>
    );
}

export default ProgressBar;
