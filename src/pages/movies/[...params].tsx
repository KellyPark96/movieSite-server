import { GetServerSideProps } from "next";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params, data }) {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(title);
  console.log(data);
  return (
    <div className="container">
      <Seo title={title} />
      <div className="contents">
        <div className="textbox">
          <h1 className="title">{data.original_title}</h1>
          <ul>
            <li>Rating : {data.original_language}</li>
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

export async function getServerSideProps({ params: { params } }) {
  const id = params[1];
  const data = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();
  return {
    props: { params, data },
  };
}
