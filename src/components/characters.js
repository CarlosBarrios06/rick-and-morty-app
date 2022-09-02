import React from 'react'

export default function Characters(props) {
    const { characters, setCharacters } = props;
    const resetCharacters = () => {
       setCharacters(null)
    }
    return (
        <div className='characters'>
            <h1>Characters</h1>
            <span className='back-home' onClick={resetCharacters}>Volver al Home</span>
            <div className='container-characters'>
                {characters.map((character, index) => (
                    <div className='character-container' key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        {/* //     <p>{character.name}</p> */}
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                            {character.status === 'Alive' ? (
                                <>
                                <span className='alive'></span>
                                Alive
                                </>
                            ) : (
                                <>
                                <sapn className="dead"></sapn>
                                Dead
                                </>
                            )}
                            </h6>
                            <p className='text-grey'><span>Episodios</span></p>
                            <span>{character.episode.length}</span>
                            <p>
                                <span className='text-grey'>Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>

                ))}
            </div>
            <span className='back-home' onClick={resetCharacters}>Volver al Home</span>
        </div>

    )
}
