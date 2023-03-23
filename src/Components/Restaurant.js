const Restaurant = ({ restaurantList }) => {
  const renderedItems = restaurantList.map((restaurant) => {
    return (
      <div className="p-4 pt-6 bg-white flex flex-col  rounded-md border-2 border-[#5E907C] md:flex-row md:w-full md:p-1 md:pl-2 ">
        <img className="mx-auto my-auto h-52 w-52 md:w-28 md:h-28 rounded-md " src={restaurant.image} />
        <div className="md:flex md:flex-col md:gap-4 md:justify-evenly">
        <h4 className="text-center pt-4 text-lg font-semibold">{restaurant.name}</h4>
        <div className="mx-3  md:text-center">{restaurant.explanation}</div>
        <div className="flex text-left justify-between mx-3 flex-col md:pl-[560px] md:text-center">
          <div>Delivery Time: {restaurant.deliveryTime}</div>
          <div>Min cost: {restaurant.deliveryCost}</div>
        </div>
      </div>
      </div>
    );
  });
  return (
    <div className="max-w-4xl mx-auto pb-4">
      <h2 className="text-center text-xl pt-12 pb-4 md:text-left ">Most Famous Restaurants</h2>
      <div className="flex">
        <div className="  mx-auto flex flex-col gap-4 justify-center md:flex-row  md:flex-wrap  ">
          {renderedItems}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
// mx-auto flex flex-col h-72 w-52 md:flex-row
