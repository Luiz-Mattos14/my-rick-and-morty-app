export type CharacterType = {
  id: number;
  name: string;
  species: string;
  image: string;
};

export const fetchCharacters = async (): Promise<CharacterType[]> => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error(`Erro ao buscar personagens: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro na fetch:", error);
    return [];
  }
};

export const fetchCharactersByName = async (
  name: string
): Promise<CharacterType[]> => {
  try {
    const url = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
      name
    )}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return [];
  }
};
