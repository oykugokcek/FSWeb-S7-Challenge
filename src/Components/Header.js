import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-100 ">
      <p className="text-center border border-slate-300 ">Restaurant</p>
      <div className="border border-slate-300 flex justify-evenly px-36 h-32 flex-col items-center md:flex-row md:justify-between md:h-16 ">
        <div>Restaurant Name</div>
        <nav className="flex flex-col md:flex-row ">
          <Link className="border px-5" to={`/`}>
            Home
          </Link>
          <Link className="border px-5" to={`/help`}>
            Help
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
