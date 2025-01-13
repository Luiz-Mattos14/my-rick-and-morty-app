import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { FavoriteContextProvider } from "@/components/hocks/useFavorite";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoriteContextProvider>
      <Component {...pageProps} />
    </FavoriteContextProvider>
  );
}
