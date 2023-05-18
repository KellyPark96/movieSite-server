import Seo from "../../components/Seo";

interface IMovieProps {
  adult: boolean;
  backdrop_path: string;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      original_country: string;
    }
  ];
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
}

interface IGetServerSideProps {
  params: string | string[];
  data: IMovieProps;
}

export default function Detail({ params, data }: IGetServerSideProps) {
  const title = params[0];
  return (
    <div className="container">
      <Seo title={title} />
      <div className="contents">
        <div className="textbox">
          <h1 className="title">{data.original_title}</h1>
          <ul>
            <li>Overview : {data.overview}</li>
            <li>
              Genres :
              <ul>
                {data.genres &&
                  data.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          margin-top: 100px;
        }
        .contents {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 32px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          /* z-index: 8; */
        }
        .posterImage {
          height: 345px;
        }

        .textbox {
          padding: 0 16px 0 0;
          width: 300px;
          height: 345px;
        }
        .title {
          font-weight: bold;
          font-size: 28px;
          color: #972d2d;
        }
        .textbox ul {
          font-size: 18px;
          color: #972d2d;
          padding: 0 0 0 20px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}

interface IServerSideParamsProps {
  params: {
    params: string | string[];
  };
}

export async function getServerSideProps({
  params: { params },
}: IServerSideParamsProps) {
  const id = params[1];
  const data = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();
  return {
    props: { params, data },
  };
}
