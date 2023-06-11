import Character from "./Character";
import { useState, useEffect } from "react";

function List() {

    const [loading, setLoading] = useState(true);

    const [characters, setCharacters] = useState([]); // Empty Array will be a placeholder for characters
    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                'https://rickandmortyapi.com/api/character'
            );
            const { results } = await data.json();
            setCharacters(results);
            setLoading(false);
        }
        fetchData();
    }, [characters.length]); //The hook is only calling the logic to retrieve the data from the API when the length of the characters state changes.


    return (
        <div>
            <h2>Characters</h2>
            {loading ? (
                <div>Loading ... </div>
            ) : (
                characters.map((character) => (
                    <Character
                    key={character.id}
                    name={character.name}
                    origin={character.origin}
                    image={character.image}
                    
                    />
                ))
            )}
        </div>
        )
}

export default List;