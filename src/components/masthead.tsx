'use client'

import Link from 'next/link'
import { useMemo } from 'react'

export function Masthead() {
    // Compute the formatted date
    const formattedDate = useMemo(() => {
        const today = new Date().toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        return today.charAt(0).toUpperCase() + today.slice(1)
    }, [])

    return (
        <header className="bg-white text-black border-b-2 border-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
            <a href="/">
            <h1 className="text-6xl md:text-8xl font-bold text-center tracking-tighter">
                Mi Periódico
            </h1>
            </a>
            <div className="flex justify-between items-center mt-2 text-sm pt-2">
                <p className="font-bold">{formattedDate}</p>
                <p className="italic">Noticias hechas por estudiantes</p>
                <p className="font-bold">Edición Digital</p>
            </div>
            </div>
        </header>
    )
}
