import React, { Component } from 'react';
import hints_obj from './hints_obj'

function Hints(props) {
    const down = hints_obj['down'];
    const across = hints_obj['across'];

    return (
        <>
            <div className='hints-title'>HINTS</div>
            <div className='hints-container'>
                <div className='across-hints-container'>
                    <div className='across-hints-title'>ACROSS</div>
                    {
                        across.map((hint, idx) => (
                            <div className='hint' key={idx}>{hint}</div>
                        ))
                    }
                </div>
                <div className='down-hints-container'>
                    <div className='down-hints-title'>DOWN</div>
                    {
                        down.map((hint, idx) => (
                            <div className='hint' key={idx}>{hint}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Hints;