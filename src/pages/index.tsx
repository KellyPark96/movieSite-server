import { useEffect, useState } from "react";
import Seo from "../components/Seo";
// const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const Home = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      // const { results } = await (
      //   await fetch(
      //     `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      //   )
      // ).json();
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  // const router = useRouter();
  // const handleClick = (id, title) => router.push(`/movies/${title}/${id}`);

  return (
    <div className="container">
      <Seo title="home" />
      <div className="active">Home</div>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="image"
          />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
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
};

// 항상 server side rendering 하고 싶은지
// 데이터가 유효할 때 화면이 보여지게 하는게 좋은지
// loading 화면을 보여준 다음에 데이터를 받는게 좋은지

export default Home;
