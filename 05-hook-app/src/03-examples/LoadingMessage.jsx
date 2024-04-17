import React, { useLayoutEffect, useRef, useState } from 'react'

export const LoadingMessage = () => {
    const sectionRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    useLayoutEffect(() => {
        const { height, width } = (sectionRef.current.getBoundingClientRect());
        setBoxSize({ height, width })
    }, [])

    return (
        <section style={{ height: 200 }}
            className='alert alert-info text-center p-0 m-0 d-flex align-items-center justify-content-center' ref={sectionRef}>
            <h1>Cargando...</h1>
            <code>{JSON.stringify(boxSize)}</code>
        </section>
    )
}
