/**
 * server side rendering
 */
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const handleClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="home" />
      {results?.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => handleClick(movie.id, movie.original_title)}
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
 *You can use caching headers (Cache-Control) inside getServerSideProps to cache dynamic responses.
 */
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: JSON.parse(JSON.stringify(results)),
  };
}
