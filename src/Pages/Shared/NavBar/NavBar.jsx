import logo from "../../../assets/logo3.png";
import ActiveLink from "./ActiveLink";

const NavBar = () => {
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/toys">All Toys</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/my-toys">My Toys</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/add-a-toy">Add A Toy</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5 p-5">
          <img src={logo} alt="website-logo"/>
          <h1 className="text-3xl md:text-6xl font-bold">Toytopia</h1>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/toys">All Toys</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/my-toys">My Toys</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/add-a-toy">Add A Toy</ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
