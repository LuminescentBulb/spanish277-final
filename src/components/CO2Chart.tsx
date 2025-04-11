'use client'

import { useEffect } from 'react'

export default function CO2Chart() {
    useEffect(() => {
        // Check if script already exists
        if (document.getElementById('co2-widget-script')) return

        const script = document.createElement('script')
        script.src = 'https://www.climatelevels.org/graphs/js/co2.php?theme=default&pid=2degreesinstitute'
        script.async = true
        script.id = 'co2-widget-script'
        document.getElementById('co2-widget-container')?.appendChild(script)
    }, [])

    return (
        <section className="my-12">
            <h2 className="text-xl font-bold uppercase mb-4 text-gray-800">Concentración Global de CO₂</h2>
            <div id="co2-widget-container" className="w-full h-[500px]" />

            {/* 📝 Footer Caption */}
            <figcaption className="mt-3 text-sm italic text-center text-gray-600 max-w-2xl mx-auto">
                Esta gráfica interactiva muestra las concentraciones de dióxido de carbono en la atmósfera a lo largo del tiempo,
                combinando datos de núcleos de hielo y mediciones modernas. Fuente:{' '}
                <a
                    href="https://www.co2levels.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                >
                    CO2Levels.org
                </a>
            </figcaption>
        </section>
    )
}
