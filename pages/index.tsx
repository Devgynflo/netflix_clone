import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import MovieList from "@/components/Movie/List";
import { useMoviesList } from "@/hooks/useMovieList";
import { useFavorites } from "@/hooks/useFavorites";
import { MovieInfoModal } from "@/components/Movie/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMoviesList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <MovieInfoModal
        onClose={() => {
          closeModal();
        }}
        visible={isOpen}
      />
      <Navbar />
      <Billboard />
      <div className="pb-40 flex flex-col gap-4">
        <MovieList title="Ajouts récents" data={movies} />
        <MovieList title="Ma Liste" data={favorites} />
      </div>
    </>
  );
}
