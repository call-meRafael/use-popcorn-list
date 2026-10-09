import { LogoPopcorn } from "./common/logo.jsx";
export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <LogoPopcorn size={48} className="logo-icon"/>
        <div>
          <span className="header-title-alt">use</span>
          <h1 className="header-title">Popcorn</h1>
        </div>
       
      </div>
    </nav>
  );
};
