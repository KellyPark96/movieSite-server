import Head from "next/head";

interface TitleProps {
  title: string;
}

export default function Seo({ title }: TitleProps) {
  return (
    <Head>
      <title>{title} | Movies</title>
    </Head>
  );
}
