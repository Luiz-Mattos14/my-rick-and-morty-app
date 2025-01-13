import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const Header = () => {
  const router = useRouter(); // Obtemos a rota atual

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
            <Link
              href="/"
              className={`link link-home ${
                router.pathname === "/" ? "active" : ""
              }`}
            >
              <IoHomeSharp />
              <span>Início</span>
            </Link>
            <Link
              href="/"
              className={`link link-favorite ${
                router.pathname === "/favorites" ? "active" : ""
              }`}
            >
              <FaHeart />
              <span> Favoritos</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
