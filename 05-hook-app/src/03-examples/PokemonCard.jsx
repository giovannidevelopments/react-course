import React from 'react'

export const PokemonCard = ({ id, name, sprites }) => {
    return (
        <section style={{ hidde: 200 }}>
            <h1 className='text-capitalize'>#{id} - {name}</h1>

            {/* Imágenes */}
            <div>
                {
                    sprites.map(sprite => (
                        <img key={sprite} src={sprite} alt={name} />
                    ))
                }
            </div>
        </section>
    )
}


