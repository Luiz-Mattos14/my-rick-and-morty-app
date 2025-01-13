import Image from "next/image";
import { CharacterType } from "./services/servicesCharacters";
import { FaHeart } from "react-icons/fa";
import { useFavorite } from "./hocks/useFavorite";
import { useEffect } from "react";

type CharacterCardProps = {
  character: CharacterType;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { id, name, species, image } = character;
  const { favorite, addFavorite, removeFavorite } = useFavorite();

  // Verifica se o personagem está nos favoritos
  const isFavorite = favorite.some((fav) => fav.id === id);

  // Alterna entre adicionar ou remover favorito
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id); // Remove dos favoritos
    } else {
      addFavorite(character); // Adiciona aos favoritos
    }
  };

  useEffect(() => {}, [favorite]);

  return (
    <div className="characterCard" id={`${id}`}>
      <Image
        className="image"
        src={image}
        alt="Character"
        height={224}
        width={224}
      />

      <div className="name-description">
        <h3 className="name title">{name}</h3>
        <p className="species">{species}</p>
      </div>

      <div className={`favorite ${isFavorite ? "favorite-active" : ""}`}>
        <button onClick={toggleFavorite}>
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
