import { useBillboard } from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MoviePlayButton } from "../Movie/PlayButton";
import { useCallback } from "react";
import useInfoModal from "@/hooks/useInfoModal";

export default function Billboard() {
  const { data } = useBillboard();
  const { openModal } = useInfoModal();
  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[53.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-3">
          <MoviePlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="
           bg-white
           bg-opacity-30
           text-white
           rounded-md
           py-1
           md:py-2
           px-2
           md:px-4
           w-auto 
           text-xs
           lg:text-lg
           font-semibold
           flex
           items-center
           hover:bg-opacity-20
           transition"
          >
            <AiOutlineInfoCircle className="mr-2" />
            Plus d&apos;infos
          </button>
        </div>
      </div>
    </div>
  );
}
