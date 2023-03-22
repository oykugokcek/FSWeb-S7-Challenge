import Restaurant from "./Restaurant";

const RestaurantList = () => {
  const restaurantList = [
    {
      image: "./Images/mcimage.jpg",
      name: "McDonalds",
      explanation: "Hamburger fln",
      deliveryTime: "20dk",
      deliveryCost: "20.00 ₺",
    },
    {
      image: "./Images/dominosimage.jpg",
      name: "Domino's Pizza",
      explanation: "Pizza, Vejeteryan Seçenekli",
      deliveryTime: "30 dk",
      deliveryCost: "60.00 ₺ ",
    },
    {
      image: "./Images/KFCimage.jpg",
      name: "KFC",
      explanation: "Tavuk",
      deliveryTime: "30dk",
      deliveryCost: "80.00 ₺",
    },
    {
      image: "./Images/lahmacun-images.jpg",
      name: "Just Pide",
      explanation: "Kebab & Turkish Pide",
      deliveryTime: "35 dk",
      deliveryCost: "80.00 ₺",
    },
    {
      image: "./Images/livaimage.jpg",
      name: "Liva",
      explanation: "Pastane & Fırın",
      deliveryTime: "70 dk",
      deliveryCost: "99.00 ₺",
    },
    {
      image: "./Images/starbucks-image.jpg",
      name: "Starbucks Coffee",
      explanation: "Kahve, Vejeteryan Seçenekli",
      deliveryTime: "30 dk ",
      deliveryCost: "60 ₺",
    },
  ];
  return (
    <div>
      <Restaurant restaurantList={restaurantList} />
    </div>
  );
};

export default RestaurantList;

{
  /* <h2 className="text-center my-8">Diğer Restoranlar</h2>
      <div className="mx-auto flex flex-col h-72 w-72 md:h-64 md:flex-row md:w-1/3 ">
        <div>
          <img className="" src={mcimage} />
          <h4 className="text-center">Mc Donalds</h4>
          <div className="mx-3">Hamburger falan</div>
          <div className="flex justify-between mx-3">
            <div>Ulaşım süresi</div>
            <div>Teslimat ücreti</div>
          </div>
        </div>
        <div>
          <img className="" src={mcimage} />
          <h4 className="text-center">Mc Donalds</h4>
          <div className="mx-3">Hamburger falan</div>
          <div className="flex justify-between mx-3">
            <div>Ulaşım süresi</div>
            <div>Teslimat ücreti</div>
          </div>
        </div>
        <div>
          <img className="" src={mcimage} />
          <h4 className="text-center">Mc Donalds</h4>
          <div className="mx-3">Hamburger falan</div>
          <div className="flex justify-between mx-3">
            <div>Ulaşım süresi</div>
            <div>Teslimat ücreti</div>
          </div>
        </div>
        <div>
          <img className="" src={mcimage} />
          <h4 className="text-center">Mc Donalds</h4>
          <div className="mx-3">Hamburger falan</div>
          <div className="flex justify-between mx-3">
            <div>Ulaşım süresi</div>
            <div>Teslimat ücreti</div>
          </div>
        </div>
        <div>
          <img className="" src={mcimage} />
          <h4 className="text-center">Mc Donalds</h4>
          <div className="mx-3">Hamburger falan</div>
          <div className="flex justify-between mx-3">
            <div>Ulaşım süresi</div>
            <div>Teslimat ücreti</div>
          </div>
        </div>
        <div>
          <img className="" src={mcimage} />
          <h4 className="text-center">Mc Donalds</h4>
          <div className="mx-3">Hamburger falan</div>
          <div className="flex justify-between mx-3">
            <div>Ulaşım süresi</div>
            <div>Teslimat ücreti</div>
          </div>
        </div>
      </div> */
}
