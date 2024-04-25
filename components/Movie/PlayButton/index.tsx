import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface Props {
  movieId: string;
}

export function MoviePlayButton({ movieId }: Props) {
  const router = useRouter();

  return (
    <button
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-neutral-300 transition"
      onClick={() => router.push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill size={30} className="mr-1" />
      Play
    </button>
  );
}
