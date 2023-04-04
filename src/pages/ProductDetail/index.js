import React, { Fragment, useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import cofe from "../../assets/cofeee.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qty, setQty] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    document.title = "ProductDetail";
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(
          `http://localhost:8080/productdetail/${id}`
        );
        setProduct(data.data[0]);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleQtyChange = (e) => {
    setQty(parseInt(e.target.value));
  };

  const handleIncrementQty = () => {
    setQty(qty + 1);
  };

  const handleDecrementQty = () => {
    setQty(qty - 1);
    if (qty === 1) {
      return setQty(1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Fragment>
      <Header />
      <main className="h-[2600px] lg:h-[1204px] bg-[#ededed]">
        <div className="topandmid">
          <div className="flex-col flex lg:flex-row">
            <div className="m-auto flex-[1] lg:ml-[150px]">
              <div className="mainleft">
                <p className="font-normal text-xl text-[#4f5665] mt-[52px]">
                  Favorite & Promo{" "}
                  <span className="font-bold text-[#6a4029]">
                    &gt; {product.product_name}
                  </span>
                </p>
                <img
                  className="w-full rounded-full h-[500px] mt-24"
                  src={product.image}
                  alt=""
                />
                <h1 className="text-center mt-11 text-[4rem] leading-[52.5px] font-medium">
                  {product.product_name} <br />
                  <span className="text-[2rem]">{product.price}</span>
                </h1>
                <ul className="text-center">
                  <li>
                    <button className="bg-[#6a4029] mt-11 h-[85px] w-[90%] rounded-[20px] text-2xl text-white font-bold border-none">
                      Add to Cart
                    </button>
                  </li>
                  <li>
                    <button className="bg-[#ffba33] mt-6 h-[85px] w-[90%] rounded-[20px] text-2xl font-bold text-[#6a4029] border-none">
                      Ask a Staff
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-[2]">
              <div className="mainright">
                <div className="h-[800px] bg-white lg:h-[702px] w-[74.3%] mt-[71px] rounded-[10px] ml-[94px]">
                  <p className="ml-[84px] pt-[81px] text-2xl text-[#6a4029] w-[49%] tracking-[1px]">
                    Delivery only on
                    <span className="font-bold">
                      Monday to friday <span className="text-xl">at</span> 1 - 7
                      pm
                    </span>
                  </p>
                  <p className="mt-11 ml-[84px] text-[#6a4029] text-2xl w-[72%] ">
                    {product.description}
                  </p>
                  <p className="text-center mt-[50px] font-bold text-2xl">
                    Choose a size
                  </p>
                  <button className="ml-[163px] h-[70px] w-[10%] rounded-[70px] text-3xl border-none cursor-pointer mt-[42px] bg-[#ffba33]">
                    R
                  </button>
                  <button className="ml-[57px] h-[70px] w-[10%] rounded-[70px] text-3xl border-none cursor-pointer mt-[42px] bg-[#ffba33]">
                    L
                  </button>
                  <button className="ml-[74px] h-[70px] w-[10%] rounded-[70px] text-3xl border-none cursor-pointer mt-[42px] bg-[#ffba33]">
                    XL
                  </button>
                </div>
                <p className="text-xl font-bold leading-8 text-center mt-[46px]">
                  Choose Delivery Methods
                </p>
                <div className="flex mt-7 justify-center gap-[50px]">
                  <button className="text-white bg-[#6a4029] rounded-[10px] p-3 w-[12.2%] text-center border-none">
                    Dine in
                  </button>
                  <button className="text-[#9f9f9f] bg-[#f4f4f8] rounded-[10px] p-3 w-[17%] text-center border-none h-12 cursor-pointer">
                    Door Delivery
                  </button>
                  <button className="text-[#9f9f9f] bg-[#f4f4f8] rounded-[10px] p-3 w-[14%] text-center border-none h-12 cursor-pointer">
                    Pick Up
                  </button>
                </div>
                <label className="text-xl ml-[210px]" htmlFor="username">
                  Set time :
                </label>
                <input
                  className="mt-[50px] border-t-0 border-l-0 border-r-0 bg-[#ededed] border-b border-solid border-[#9f9f9f] ml-7 w-[30%]"
                  type="text"
                  name=""
                  id="username"
                  placeholder="Enter the time you’ll arrived"
                />
              </div>
            </div>
          </div>
          <div className="flex-col gap-[50px] lg:gap-0 lg:flex-row flex relative top-10">
            <div className="flex-[2]">
              <div className="m-auto flex h-[168px] bg-white items-center w-[76.3%] lg:ml-52 rounded-[20px]">
                <img
                  className="h-[100px] w-[13.6%] rounded-full ml-11"
                  src={cofe}
                  alt=""
                />
                <p className="m-14 text-2xl w-full">
                  COLD BREW <br />
                  <span className="text-xl">
                    xl (Large) <br />
                    xl (Regular)
                  </span>
                  <br />
                </p>
                <div className="flex w-full">
                  <button
                    onClick={handleDecrementQty}
                    className="h-10 text-2xl rounded-full w-[13%] border-none bg-but"
                  >
                    -
                  </button>
                  <p
                    value={qty}
                    onChange={handleQtyChange}
                    className="text-2xl ml-12"
                  >
                    {qty}
                  </p>
                  <button
                    onClick={handleIncrementQty}
                    className="h-10 text-2xl rounded-full w-[13%] border-none ml-[40px] bg-but"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-[1]">
              <button className="w-[90%] h-[100px] lg:h-[168px] bg-[#ffba33] text-black text-2xl rounded-[20px] ml-[30px] lg:w-[52.7%]">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ProductDetail;
