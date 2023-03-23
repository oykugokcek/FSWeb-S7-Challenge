import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#5E907C]">
    <div className="max-w-5xl mx-auto text-center ">
      <p className="p-2 text-white ">Restaurant</p>
      <div className="flex flex-col gap-8 pb-6 md:flex-row md:justify-between">
        <Link className=" font-bold text-[#861411] text-2xl" to={`/`}><span className="text-white " >Sate</span>Starve</Link>
        <nav className="flex flex-col items-center gap-5 md:flex-row text-white font-medium text-xl">
          <Link className="border px-5 w-24 rounded-full" to={`/`}>
            Home
          </Link>
          <Link className="border px-5 w-24 rounded-full" to={`/help`}>
            Help
          </Link>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Header;
