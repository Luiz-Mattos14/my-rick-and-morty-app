import Image from "next/image";
import { CharacterType } from "./services/servicesCharacters";
import { FaHeart } from "react-icons/fa";

type CharacterCardProps = {
  character: CharacterType;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { id, name, species, image } = character;

  return (
    <>
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

        <div className="favorite">
          <button>
            {" "}
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
