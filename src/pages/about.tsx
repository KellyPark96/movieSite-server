import Seo from "../components/Seo";

export default function About() {
  return (
    <div className="container">
      <Seo title="About" />
      <h1>About</h1>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          margin-top: 100px;
        }
      `}</style>
    </div>
  );
}
