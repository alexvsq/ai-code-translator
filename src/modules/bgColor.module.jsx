'use client'
import React from 'react'
import { useTranslatorAi } from '@/context/context'

export default function BgColorModule({ children }) {

    const { bgWeb } = useTranslatorAi()


    return (
        <div style={{ backgroundColor: bgWeb }} className="min-h-screen transition duration-200">
            {children}
        </div>
    )
}
