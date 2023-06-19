/**
 * server side rendering
 */
import Seo from "../components/Seo";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

/**
 * GetServerSideProps 타입을 import 해오며
   그 다음 우리가 사용할 데이터의 type을 사용하려면 InferGetServerSidePropsType
 */

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const handleClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="home" />
      {results?.map((movie: IMovieProps) => (
        <div
          onClick={() => handleClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="image"
          />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              {movie.original_title}
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          margin-top: 100px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 항상 server side rendering 하고 싶은지
// 데이터가 유효할 때 화면이 보여지게 하는게 좋은지
// loading 화면을 보여준 다음에 데이터를 받는게 좋은지

/**
 *You can use caching headers (Cache-Control) inside getServerSideProps 
  to cache dynamic responses.
 */
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: { results },
  };
}
