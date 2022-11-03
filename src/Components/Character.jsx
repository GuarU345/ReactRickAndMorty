import CharacterList from "./CharacterList"

const Character = ({ character }) => {
    return (
        <div>
            <div className="text-center p-5">
                <h3>{character.name}</h3>
                <img className="img-fluid rounded-pill" src={character.image} alt="" />
                <p>{character.origin.name}</p>
            </div>
        </div>
    )
}

export default Character