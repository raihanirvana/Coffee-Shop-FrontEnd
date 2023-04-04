import React, { Fragment, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderNotLogin from "../../components/HeaderNotLogin";
import { useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../utils/https/getUsers";

const Product = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.user.data.token);
  const [searchParams, setSearchParams] = useSearchParams({
    category: "",
  });
  useEffect(() => {
    document.title = "Product";
    const fetchData = async () => {
      if (token) {
        setIsLoggedIn(true);
      }
      setLoading(true);
      setError(null);
      try {
        const data = await getProducts(searchParams.get("category"));
        setProducts(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("category")) {
      setSearchParams({ category: params.get("category") });
    }
    return () => {
      window.history.replaceState({}, "", `${window.location.pathname}`);
    };
  }, []);
  const handleProductDetail = (productId) => {
    navigate(`/productdetail/${productId}`);
  };
  const handleCategoryFilter = (category) => {
    setSearchParams({ category });
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Fragment>
      {isLoggedIn ? <Header /> : <HeaderNotLogin />}
      <main className="h-[2200px] lg:h-[1039px]">
        <section className="flex-col h-[1220px] flex lg:flex-row lg:h-[1039px]">
          <div className="flex-[1] text-center border-r border-solid border-[#9f9f9f]">
            <h3 className="text-[400%] lg:text-2xl mt-7 text-[#6a4029]">
              Promo for you
            </h3>
            <p className="text-base m-auto mt-12 w-[56%]">
              Coupons will be updated every weeks. check them out!
            </p>
            <div className="flex">
              <div className="h-[500px] w-[63%] m-auto mt-12 bg-[#ffcb65] lg:h-[472px] rounded-[20px]">
                <div className="w-32 m-auto mt-[50px] rounded-full h-32 bg-31 bg-no-repeat bg-[url('../assets/spageti.webp')] bg-test"></div>
                <h3 className="m-auto mt-[10px] w-[71%] text-2xl font-bold">
                  Beef Spaghetti 20% OFF
                </h3>
                <p className="w-[94%] m-auto mt-1 text-sm font-normal leading-4">
                  Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                </p>
                <hr className="border-[2px] border-dashed border-[#6a4029] mt-4" />
                <p className="mt-5 text-base font-normal">COUPON CODE</p>
                <p className="text-[2rem] font-bold mt-[10px]">FNPR15RG</p>
                <p className="text-sm font-normal">
                  Valid until October 10th 2020
                </p>
              </div>
              <div className="left-[360px] top-[440px] absolute lg:top-[390px] h-[400px] w-[284px] rounded-[20px] bg-black lg:left-[100px] z-[-1]"></div>
              <div className="left-[380px] top-[470px] absolute lg:top-[420px] h-[338px] w-[284px] rounded-[20px] bg-[#895537] lg:left-[110px] z-[-2]"></div>
            </div>
            <button className="p-20 rounded-[20px] border-none bg-[#6a4029] text-base font-bold text-white cursor-pointer mt-11">
              Apply Coupon
            </button>
            <div className="mt-10 ml-[30px] text-left lg:mt-28 lg:ml-14">
              <ul>
                <p className="mb-1 text-base font-bold">Terms and Condition</p>
                <li className="leading-4 text-xs">
                  1. You can only apply 1 coupon per day
                </li>
                <li className="leading-4 text-xs">2. It only for dine in</li>
                <li className="leading-4 text-xs">
                  3. Buy 1 get 1 only for new user
                </li>
                <li className="leading-4 text-xs">
                  4. Should make member card to apply coupun
                </li>
              </ul>
            </div>
          </div>
          <div className="pl-[30px] flex-[2] bg-white lg:pl-[170px]">
            <div className="barproduct">
              <ul className="mt-10 gap-14 flex lg:gap-[68px] lg:mt-7 text-[1.3rem] text-[#9f9f9f]">
                <li className="text-center w-1/4 text[1.3rem] border-b-4 border-solid border-[#6a4029] font-bold text-[#6a4029] pb-1">
                  Favorite Product
                </li>
                <li onClick={() => handleCategoryFilter("2")}>Coffee</li>
                <li onClick={() => handleCategoryFilter("3")}>Non Coffee</li>
                <li onClick={() => handleCategoryFilter("1")}>Foods</li>
                <li onClick={() => handleCategoryFilter("4")}>Add-on</li>
              </ul>
            </div>
            <div className="grid-cols-3 grid-rows-8 grid lg:grid-cols-4 lg:grid-rows-7 justify-center mt-[150px]">
              {products.map((product) => (
                <div key={product.id}>
                  <div
                    onClick={() => handleProductDetail(product.id)}
                    className="bg-white h-[212px] rounded-[30px] text-center w-[156px] drop-shadow-drop"
                  >
                    <img
                      src={product.image}
                      className="bg-no-repeat w-32 h-32 relative bottom-10 m-auto bg-32 rounded-full bg-tost"
                    />
                    <div className="relative bottom-10 text-2xl text-center w-[80%] m-auto leading-6">
                      <p>{product.product_name}</p>
                    </div>
                    <div className="priceveggie">
                      <p className="relative bottom-4 text-base font-bold text-[#6a4029]">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Product;
