import { GetServerSideProps } from "next";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params, data }) {
  console.log(params, data);
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
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
