import React from 'react';
import { gif } from '../../assets'
import './guide.css'

export default function Guide({ setGuide }) {

    function handleClick() {
        localStorage.setItem("guide", "false")
        setGuide(true)
    }

    return (
        <div onClick={handleClick} className='guide row h-75'>
            <div className='col-12 col-lg-8'>
            <img className='h-100 w-100' src={gif} alt='' />
            </div>
            <div className='col-12 col-lg-4 d-flex align-items-center'>
                <h3 className='text-white text-center'>Create you custom bracelet by dragging leaf to the bracelet area.</h3>
            </div>
        </div>
    )

}


