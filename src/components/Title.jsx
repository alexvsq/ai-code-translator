import React from 'react'

export default function Title() {
    return (
        <header className="my-8 relative">
            <div className="flex justify-center items-center">
                <div className="relative inline-block">
                    <img src="/images/LogoIa.png" alt="logo" className=" absolute left-6 top-1/2 -translate-y-1/2 h-10 z-0 imgIaLogo " />
                    <h1 className="text-2xl font-bold text-center relative z-10 pl-8">Code Translator</h1>
                </div>
            </div>
        </header>
    )
}