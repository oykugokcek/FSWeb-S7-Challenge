import backgroundImageForBody from "../BackgrounImage/pizzaimg.jpg";
import { FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover rounded-md max-w-5xl mx-auto mt-12 mb-6"
      style={{ backgroundImage: `url(${backgroundImageForBody})` }}
    >
      <div className="h-80 flex flex-col text-white justify-center ">
        <div className="text-center mb-2 text-xl ">
          Make your own pizza!
        </div>
        <Link
          to={`/form`}
          className="mx-auto flex items-center py-3 pr-2 border rounded-full"
        >
          <FaPizzaSlice className="mx-3" />
          Choose Toppings
        </Link>
      </div>
    </div>
  );
};

export default Body;
