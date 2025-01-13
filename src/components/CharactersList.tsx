import { useState, useEffect } from "react";
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

  const handleSearch = async (query: string) => {
    if (query.trim() === "") {
      // Reseta os resultados caso o campo esteja vazio
      setFilteredCharacters(characters);
      setNotFound(false);
      return;
    }

    try {
      const results = await fetchCharactersByName(query);
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

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch(search);
    }, 300); // Delay de 300ms para evitar chamadas excessivas

    return () => clearTimeout(delayDebounce); // Limpa o timeout para evitar buscas acumuladas
  }, [search]);

  return (
    <>
      <div className="actions-wrapper">
        <div className="title -custom">INÍCIO</div>
        <div className="search">
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={`characters-list ${!notFound ? "no-return" : ""}`}>
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
