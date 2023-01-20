import backgroundImageForBody from "../BackgrounImage/pizzaimg.jpg";
import { FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${backgroundImageForBody})` }}
    >
      <div className="h-80 flex flex-col text-white justify-center content-start md:mr-80 ">
        <div className="text-center mb-2 text-xl ">
          Kendi pizzanı kendin yarat
        </div>
        <Link
          to={`/form`}
          className="mx-auto flex items-center py-3 pr-2 border rounded-full"
        >
          <FaPizzaSlice className="mx-3" />
          Malzemeleri seç
        </Link>
      </div>
    </div>
  );
};

export default Body;
