import NavVar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavVar />
      <div>{children}</div>
    </>
  );
}
