import { useState } from "react";
import CharacterCard from "./CharacterCard";
import {
  CharacterType,
  fetchCharactersByName,
} from "./services/servicesCharacters";

type CharacterListProps = {
  characters: CharacterType[];
};

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] =
    useState<CharacterType[]>(characters);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    try {
      const results = await fetchCharactersByName(search);
      if (results.length === 0) {
        setNotFound(true);
        setFilteredCharacters([]);
      } else {
        setNotFound(false);
        setFilteredCharacters(results);
      }
    } catch {
      setNotFound(true);
      setFilteredCharacters([]);
    }
  };

  return (
    <>
      <div className="actions">
        <div className="text">INÍCIO</div>
        <div className="search">
          <input
            type="text"
            placeholder="Digite o nome do personagem"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>

      <div className="charactersList">
        {notFound ? (
          <div className="return-filter">
            <h2>Nada foi encontrado.</h2>
            <p>Tente realizar uma nova busca.</p>
          </div>
        ) : filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    </>
  );
};

export default CharacterList;
