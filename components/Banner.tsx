import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modelState";
import { baseUrl } from "../constants/movies";
import { Movie } from "../typings";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);

  return (
    <div
      className="flex flex-col space-y-2 py-16 md:space-y-4
    lg:h-[75vh] lg:justify-end lg:pb-12"
    >
      <div className="absolute top-0 left-0 h-[95vh] w-[98.75vw] -z-10">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="movie poster"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p
        className="max-w-xs text-shadow-md text-xs md:max-w-md md:text-md
      lg:max-w-lg lg:text-lg"
      >
        {movie?.overview
          ? movie?.overview.length > 200
            ? movie?.overview.slice(0, 200) + "..."
            : movie?.overview
          : null}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setShowModal(true);
            setCurrentMovie(movie);
          }}
        >
          More info
        </button>
      </div>
    </div>
  );
}

export default Banner;
