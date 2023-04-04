import React, { Component, Fragment } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import veggie from "../../assets/veggie-tomato-mix.webp";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `History`;
  }
  render() {
    return (
      <Fragment>
        <Header />
        <main className="h-[750px] lg:h-[1103px] bg-cover bg-no-repeat bg-[url('../assets/bghc.webp')] bg-histo">
          <header>
            <h2 className="text-white text-[2.5rem] text-center w-[45%] m-auto pt-[107px] drop-shadow-drop">
              Lets see what you have bought!
              <br />
              <span className="text-xl text-white">
                Long press to delete item
              </span>
            </h2>
          </header>
          <div className="grid grid-cols-20 grid-rows-10 mt-[82px] lg:grid-cols-21 lg:grid-rows-9 justify-center">
            <div className="border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered</p>
              </div>
            </div>
            <div className="border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
            <div className="hidden border border-solid border-black text-center text-xl font-bold w-[394px] h-[126px] bg-white rounded-[20px] lg:flex cursor-pointer">
              <div className="m-auto flex-[0.3]">
                <img className="w-full" src={veggie} alt="" />
              </div>
              <div className="flex-[1] mt-3 text-left pl-5">
                <h3 className="text-2xl font-bold">Veggie tomato mix</h3>
                <p className="text-[#6a4029] text-xl">IDR 34.000</p>
                <p className="text-[#6a4029] text-xl">Delivered to Table 4</p>
              </div>
            </div>
          </div>
          <div className="text-center block lg:hidden">
            <button className="mr-[30px] w-[15%] rounded-[10%] h-[50px] bg-[#6a4029] text-white border-none">
              &gt;
            </button>
            <button className="w-[15%] rounded-[10%] h-[50px] bg-[#6a4029] text-white border-none">
              &gt;
            </button>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default History;
