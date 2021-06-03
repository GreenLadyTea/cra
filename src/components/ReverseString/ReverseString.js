import React from 'react';

export default function ReverseString({ text }) {
    function reverseText() {
        return [ ...text].reverse().join('');
    }

    return(
        <>
            <div data-testid="reverse">
                {reverseText()}
            </div>
        </>
    );
}
