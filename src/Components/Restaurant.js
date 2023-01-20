const Restaurant = ({ restaurantList }) => {
  const renderedItems = restaurantList.map((restaurant) => {
    return (
      <div className="my-5 md:px-20">
        <img className="border h-52 w-52" src={restaurant.image} />
        <h4 className="text-center">{restaurant.name}</h4>
        <div className="mx-3">{restaurant.explanation}</div>
        <div className="flex justify-between mx-3">
          <div>{restaurant.deliveryTime}</div>
          <div>{restaurant.deliveryCost}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-slate-100">
      <h2 className="text-center text-3xl pt-8 ">En sevilen restoranlar</h2>
      <div className="flex">
        <div className="mx-auto flex flex-col justify-center md:flex-row  md:flex-wrap  ">
          {renderedItems}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
// mx-auto flex flex-col h-72 w-52 md:flex-row
