import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import CharacterCard from "@/components/CharacterCard";
import { useFavorite } from "@/components/hocks/useFavorite";
import Link from "next/link";

const FavoritesPage: NextPage = () => {
  const { favorite } = useFavorite();

  return (
    <>
      <Head>
        <title>Favoritos</title>
        <meta name="description" content="Seus personagens favoritos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="actions-wrapper">
          <div className="title -custom">FAVORITOS</div>
        </div>

        <div className="character-favorites container">
          {favorite.length > 0 ? (
            <div className="characters-list">
              {favorite.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          ) : (
            <div className="empty-message">
              <h2>Parece que você ainda não tem favoritos</h2>
              <p>Volte à página inicial e escolha os melhores para você.</p>

              <Link href="/" className="btn">
                Voltar ao início
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default FavoritesPage;
