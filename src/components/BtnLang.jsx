import React from 'react'

export default function BtnLang({ title = 'Language', pressBtn = () => console.log('no function') }) {
    return (
        <button
            onClick={pressBtn}
            className='
             bg-blackIA text-whiteIA py-2 px-7 rounded-xl text-[14px] shadow-xl
             hover:scale-105 transition hover:shadow-greenIA/30 hover:text-greenIA'
        >
            {title}
        </button>
    )
}
