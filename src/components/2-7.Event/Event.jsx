import React from 'react';

export default function Event() {
    const handleButtonClick = (e) => {
        // console.dir(e);
        console.log('handleButtonClick');
    }
    const handleMouseLeave = (e) => {
        console.dir(e);
        console.log('handleMouseLeave');
    }
    const handleClickCapture = () => {
        console.log('handleClickCapture');
    }

    const hancleClickCapture2 = () => {
        console.log('hancleClickCapture2');
    }

    const handleClickBubble = () => {
        console.log('handleClickBubble');
    }

    return (
        <div onClickCapture={handleClickCapture}>
        <div onClickCapture={hancleClickCapture2} onClick={handleClickBubble}>
            <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>

        </div>
        </div>
    )
}