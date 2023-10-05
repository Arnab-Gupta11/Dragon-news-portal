import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Navbar = () => {
  const link = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-600 mr-5 text-lg underline" : "mr-5 text-[#706F6F] text-lg"
        }
      >
        Home
      </NavLink>
      <NavLink className="mr-5 text-[#706F6F] text-lg">About</NavLink>
      <NavLink className="mr-5 text-[#706F6F] text-lg">Career</NavLink>
    </>
  );

  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar pt-6 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {link}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">{user ? <img src={user?.photoURL} /> : <img src={avatar} />}</div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">{user && user?.displayName}</a>
              </li>
              <li>
                <Link to={"/"}>
                  <button onClick={handleLogout}>Logout</button>
                </Link>
              </li>
            </ul>
          </div>
          {user ? (
            <span></span>
          ) : (
            <Link to={"/login"} className="btn btn-neutral px-12 rounded-none py-3">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
