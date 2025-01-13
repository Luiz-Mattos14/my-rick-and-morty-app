import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { useFavorite } from "./hocks/useFavorite";

const Header = () => {
  const router = useRouter(); // Obtemos a rota atual
  const { favorite } = useFavorite(); // Acessando o contexto de favoritos

  return (
    <>
      <header className="header container" id="header">
        <div className="container">
          <div className="logo">
            <Link href="/">
              <Image
                className="image"
                src="/logo.png"
                alt="logo"
                height={64}
                width={114}
              />
            </Link>
          </div>

          <div className="actions">
            {/* Link para a página inicial */}
            <Link
              href="/"
              className={`link link-home ${
                router.pathname === "/" ? "active" : ""
              }`}
            >
              <IoHomeSharp />
              <span>Início</span>
            </Link>

            {/* Link para a página de Favoritos com a quantidade de itens */}
            <Link
              href="/favorites"
              className={`link link-favorite ${
                router.pathname === "/favorites" ? "active" : ""
              }`}
            >
              <FaHeart />
              <span>Favoritos</span>
              {/* Exibindo a quantidade de favoritos */}
              {favorite.length > 0 && (
                <span className="favorite-count">{favorite.length}</span>
              )}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
