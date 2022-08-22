import { useNavigate, Link } from "react-router-dom";

const Navbar = ({searchText, setSearchText}) => {
  
  const navigate = useNavigate()

  const updateSearchText = (e) => {
    navigate('/search')
    setSearchText(e.target.value)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/nowPlaying">
                Now Playing
              </Link>
            </li>
          </ul>
          <form className="d-flex w-50" role="search">
            <input
              className="form-control me-2 flex-grow-1 "
              type="search"
              placeholder="What Movie are you looking for?"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
