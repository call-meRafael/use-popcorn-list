import { LogoPopcorn } from "./common/logo.jsx";
export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <LogoPopcorn size={48} />
        <h1>Popcorn</h1>
      </div>
    </nav>
  );
};
