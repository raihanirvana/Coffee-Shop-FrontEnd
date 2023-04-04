import React, { Fragment, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import HeaderNotLogin from "../../components/HeaderNotLogin";
import user from "../../assets/user.svg";
import place from "../../assets/place.svg";
import love from "../../assets/love.svg";
import teamwork from "../../assets/teamwork.webp";
import mapbesar from "../../assets/mapbesar.svg";
import netflix from "../../assets/netfix.png";
import reddit from "../../assets/reddit.png";
import amazon from "../../assets/amazon.png";
import discord from "../../assets/discird.png";
import spotify from "../../assets/spotify.png";
import dot from "../../assets/dot.svg";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = useSelector((state) => state.user.data.token);
  const id = useSelector((state) => state.user.data.id);
  console.log(id);

  useEffect(() => {
    document.title = "Home";
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Fragment>
      {isLoggedIn ? <Header /> : <HeaderNotLogin />}
      <main>
        <div className="h-[645px]">
          <section className="h-[645px] bg-[url('../assets/homepagebg.webp')] bg-cover bg-no-repeat bg-lghome lg:bg-home">
            <div>
              <input
                className="ml-[570px] lg:ml-[1040px] h-[60px] rounded-[30px] bg-[#efeeee] indent-12 text-base leading-[26px] w-1/5 mt-[18px]"
                type="text"
                placeholder="Search"
              />
              <p className="w-[70%] ml-[30px] text-white text-5xl font-bold leading-[70px] lg:w-[38%] lg:ml-[150px] font-rubik">
                Start Your Day with Coffee and Good Meals
              </p>
              <p className="ml-[30px] w-[70%] text-white text-xl text-justify font-rubik lg:w-[38%] lg:ml-[150px] mt-5">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>
              <button className="m-[30px] bg-[#ffba33] rounded-[10px] h-[60px] border-[#ffba33] leading-[25px] text-[#6a4029] font-bold lg:ml-[150px] mt-8 w-[18%] cursor-pointer">
                Get Started
              </button>
            </div>
          </section>
          <section className="h-[150px] top-[-70px] relative flex lg:h-[200px] bg-white drop-shadow-drop items-center rounded-[10px] w-[80%] m-auto z-10">
            <div className="ml-[30px] flex flex-[1] items-center gap-5 lg:ml-[91px] h-full">
              <img
                className="w-1/4 bg-[#ffba33] rounded-[70px] h-14 lg:w-[16%] p-[10px]"
                src={user}
                alt=""
              />
              <p className="text-[1.3rem] font-bold">
                90+ <br />
                <span className="text-[#4f5665] text-base">Staff</span>
              </p>
            </div>
            <div className="flex items-center gap-5 flex-[1] h-full w-full before:inset-1 before:w-[2px] before:bg-[#eeeff2] before:h-[70%]">
              <img
                className="w-1/4 bg-[#ffba33] rounded-[70px] h-14 lg:w-[16%] p-[10px]"
                src={place}
                alt=""
              />
              <p className="text-[1.3rem] font-bold">
                30+ <br />
                <span className="text-[#4f5665] text-base">Stores</span>
              </p>
            </div>
            <div className="flex items-center gap-5 flex-[1] h-full w-full before:inset-1 before:w-[2px] before:bg-[#eeeff2] before:h-[70%]">
              <img
                className="w-1/4 bg-[#ffba33] rounded-[70px] h-14 lg:w-[16%] p-[10px]"
                src={love}
                alt=""
              />
              <p className="text-[1.3rem] font-bold">
                800+ <br />
                <span className="text-[#4f5665] text-base">Customers</span>
              </p>
            </div>
          </section>
        </div>
        <section className="flex-col lg:flex-row h-[732.28px] flex">
          <div className="flex-[1]">
            <img
              className="ml-[100px] mt-[150px] h-[475px] lg:mt-[193px] lg:ml-[150px]"
              src={teamwork}
              alt=""
            />
          </div>
          <div className="mt-0 ml-0 lg:mt-[241px] lg:ml-[139px] flex-[1]">
            <h1 className="w-full text-center text-4xl text-[#0b132a] leading-[50px] lg:w-[67%] lg:text-left">
              We Provide Good Coffee and Healthy Meals
            </h1>
            <p className="w-[90%] lg:text-left text-center m-auto lg:m-0 text-[#4f5665] text-base leading-[30px] lg:w-[66%]">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better
            </p>
            <ul className="ml-[50px] list-none text-[#4f5665]">
              <li className="leading-[60px]">High quality beans</li>
              <li className="leading-[60px]">
                Healthy meals, you can request the ingredients
              </li>
              <li className="leading-[60px]">
                Chat with our staff to get better experience for ordering
              </li>
              <li className="leading-[60px]">
                Free member card with a minimum purchase of IDR 200.000.
              </li>
            </ul>
          </div>
        </section>
        <section className="mt-[250px] lg:mt-0 bg-[#fbfbfb]">
          <div>
            <h1 className="text-center text-4xl leading-[50px] pt-[80.72px]">
              Here is Peoples Favorite
            </h1>
            <p className="text-center lg-[30px] text-[#4f5665] mt-[19.55px]">
              Lets Choose and have a bit taste of peoples favorite. It might be
              yours too!
            </p>
          </div>
          <div className="flex mt-[90px]">
            <div className="flex-[1] ml-[174.17px]">
              <div className="h-[760px] border-2 border-solid border-[#dddddd] rounded-[10px] w-[78%]">
                <div className="bg-no-repeat w-32 h-32 m-auto bg-32 rounded-[50%] bg-tast mt-[72px] bg-[url('../assets/creamy-ice-latte.webp')]"></div>
                <h3 className="text-lg mt-[70px] text-[#0b132a] text-center font-medium">
                  Hazelnut Latte
                </h3>
                <ul className="leading-[40px] text-base text-[#4f5665] list-none mt-[30px] ml-[90px]">
                  <li>HazelnutSyrup</li>
                  <li>Vanilla Whipped Cream</li>
                  <li>Ice / Hot</li>
                  <li>Sliced Banana on Top</li>
                </ul>
                <p className="text-2xl text-center leading-[30px] font-bold text-[#0b132a] mt-[130px]">
                  IDR 25.000
                </p>
                <button className="flex justify-center items-center m-auto mt-5 lg:block border-2 border-solid border-[#ffba33] rounded-[50px] h-10 bg-white text-[#6a4029] font-bold w-1/2 lg:mt-5 lg:ml-[85px] cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
            <div className="hidden lg:flex flex-[1]">
              <div className="h-[760px] w-[76%] border-2 border-solid border-[#dddddd] rounded-[10px]">
                <div className="bg-no-repeat w-32 h-32 m-auto bg-32 rounded-[50%] bg-pinky mt-[72px] bg-[url('../assets/pinky.webp')]"></div>
                <h3 className="text-lg mt-[70px] text-[#0b132a] text-center font-medium">
                  Pinky Promise
                </h3>
                <ul className="leading-[40px] text-base text-[#4f5665] list-none mt-[30px] ml-[85px]">
                  <li>1 Shot of Coffee</li>
                  <li>Vanilla Whipped Cream</li>
                  <li>Chocolate Biscuits</li>
                  <li>Strawberry Syrup</li>
                  <li>Slice strawberry on Top</li>
                </ul>
                <p className="text-2xl text-center leading-[30px] font-bold text-[#0b132a] mt-[90px]">
                  IDR 30.000
                </p>
                <button className="border-2 border-solid border-[#ffba33] rounded-[50px] h-10 bg-white text-[#6a4029] font-bold w-1/2 mt-5 ml-[85px] cursor-pointer">
                  Select
                </button>
              </div>
            </div>
            <div className="hidden lg:flex-[1] lg:flex">
              <div className="h-[760px] w-[76%] border-2 border-solid border-[#dddddd] rounded-[10px]">
                <div className="bg-no-repeat w-32 h-32 m-auto bg-32 rounded-[50%] bg-wings mt-[72px] bg-[url('../assets/wings.webp')]"></div>
                <h3 className="text-lg mt-[70px] text-[#0b132a] text-center font-medium">
                  Chicken Wings
                </h3>
                <ul className="leading-[40px] text-base text-[#4f5665] list-none mt-[30px] ml-[85px]">
                  <li>Wings</li>
                  <li>Drum Sticks</li>
                  <li>Mayonaise and Lemon</li>
                  <li>Hot Fried</li>
                  <li>Secret Recipe</li>
                  <li>Buy 1 Get 1 only for Dine in</li>
                </ul>
                <p className="text-center text-2xl leading-[30px] font-bold text-[#0b132a] mt-[50px]">
                  IDR 30.000
                </p>
                <button className="border-2 border-solid border-[#ffba33] rounded-[50px] h-10 bg-white text-[#6a4029] font-bold w-1/2 mt-[20px] ml-[85px] cursor-pointer">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#fbfbfb] text-center">
          <div>
            <h1 className="text-[#0b132a] text-[2.5rem] leading-[50px] pt-[150px]">
              Visit Our Store in the <br />
              Spot on the Map Below
            </h1>
            <p className="text-[#4f5665] leading-[30px] mt-5 text-center">
              See our store in every city on the spot and spen your good day
              there. See <br />
              you soon!
            </p>
            <img
              className="inline-block w-[80%] lg:w-full mt-[155px]"
              src={mapbesar}
              alt=""
            />
          </div>
        </section>
        <section className="bg-[#fbfbfb] text-center">
          <h1 className="font-medium text-[2.5rem] pt-[63.5px]">Our Partner</h1>
          <div className="flex items-center">
            <img
              className="ml-[45px] mt-[47.91px] w-[14%] h-[112px] grayscale opacity-20 lg:ml-[141px]"
              src={netflix}
              alt=""
            />
            <img
              className="mt-[48.91px] w-[11%] h-[50.62px] grayscale opacity-20 ml-[64.38px]"
              src={reddit}
              alt=""
            />
            <img
              className="mt-[40px] w-[19.2%] h-[208.32px] grayscale opacity-20 ml-[3px]"
              src={amazon}
              alt=""
            />
            <img
              className="mt-[47.91px] w-[13%] h-[63.59px] grayscale opacity-20 ml-[3.62px]"
              src={discord}
              alt=""
            />
            <img
              className="mt-[47.91px] w-[12%] h-[51.34px] grayscale opacity-20 ml-[56.56px]"
              src={spotify}
              alt=""
            />
          </div>
        </section>
        <div className="h-[745px]">
          <section className="w-auto h-[745px] bg-[#fbfbfb]">
            <h1 className="w-full m-auto text-center text-4xl leading-[50px] font-medium lg:w-[33%] pt-5">
              Love by Thousands of Happy Customer
            </h1>
            <p className="w-full text-center leading-[30px] font-normal text-[#4f5665] m-auto mt-5 lg:w-[34%]">
              These are the stories our customers who have visited us with great
              pleasure
            </p>
            <div className="inline-block lg:flex mt-[60px]">
              <div className="flex-[1]">
                <div className="m-auto lg:ml-[150px] bg-white h-[230px] border-2 border-solid border-[#6a4029] rounded-[10px] w-[80%]">
                  <div className="flex">
                    <img
                      className="rounded-[50%] h-[50px] m-[30px] 2-[12.5%] mt-[30px]"
                      src="https://s3-alpha-sig.figma.com/img/7b52/c50d/64efec4c75c3e34f6408021730b20d9a?Expires=1676246400&Signature=kkcluKfneP~dcjgRFlnznMA9cYtRTOTtGi4QzQtRcFexTsOvoMoraC1ISt15vMvBQxlMmAyK~dRkW1lUDrEPLOWbBrpPtsvVVba3~HXVDFC~gbEaViz64rCKRnPoTSHLpMHDEzTUJD07wfRK0CMJEuZqiIP4EJ8-BkQXI3Jg2HoK8DANshzByuDAOj074QPibQzjIG36WtovnPb6v0vNTFYid-pSw1CUGF0b2ESxuc9MfLGsB7OlvOLKhavwHyrhevpSVBISifvSZwKzEK9DRXhdR2-z2mvloQ9h4uQtEiQZGvc9kn4yLA0eLAzy0KI5DlhnCpVR5lv4Ufz5SCN9iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                    <p className="ml-5 mt-[36.5px] font-bold">
                      Viezh Robert <br />
                      <span className="text-xs font-medium text-[#4f5665]">
                        Warsaw,Poland
                      </span>
                    </p>
                    <p className="ml-[108px] mt-[47.35px]">4.5</p>
                  </div>
                  <p className="w-[84%] ml-[30px] mt-5 text-left leading-[30px]">
                    wow... I am very happy to spend my whole day here. the Wi-fe
                    is good, and the coffe and meals tho. I like it here!! Very
                    recommended!
                  </p>
                </div>
              </div>
              <div className="flex-[1]">
                <div className="hidden bg-white h-[230px] border-2 border-solid border-[#dddddd] rounded-[10px] w-[80%] ml-[100px] lg:inline-block">
                  <div className="flex">
                    <img
                      className="rounded-[50%] h-[50px] ml-[30px] w-[12.5%] mt-[30px]"
                      src="https://s3-alpha-sig.figma.com/img/4efc/2b65/3098956f84b1822f2eb7e8ed84a31750?Expires=1676246400&Signature=eM50KeRwmfrgcw1-WWUqgLDBDCoOwMsXpTCtYTgVw6opyt6psouIhMMWan7djUqUna7hdLmXxSgr0VcEFSwq7m0MOIdYDgmQcsrvZBWzSF49kcSTk3XGcy2FROYkVXeb0l2LxALtje7uP87ZBL6~JqUA49yLnRE22cOSEA4knFgfgBWjXnM9mCd08uiWmtqaaZuM1lXH6bn5WprR6J3f6FNl59RIQ~QbR8ylXfuo9LcBmIXcCWH0wD-qhZCNj~UuGFFK4r5NaYqPniMpIVyL8t6E2lYwZXbuuqb10aya8DoFbdU3Srs~~RyilxFLqC5yj-OSysccpFlEb5m0A-FT8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                    <p className="ml-5 mt-[36.5px] font-bold">
                      Yessica Christy <br />
                      <span className="text-xs font-medium text-[#4f5665]">
                        Shanxi, China
                      </span>
                    </p>
                    <p className="ml-[108px] mt-[74.35px]">4.5</p>
                  </div>
                  <p className="w-[87%] ml-[30px] mt-5 text-left leading-[30px]">
                    I like it because I like to travel far and still can make my
                    day better just by drinking their Hazelnut Latte
                  </p>
                </div>
              </div>
              <div className="flex-[1]">
                <div className="hidden lg:inline-block bg-white h-[230px] border-2 border-solid border-[#dddddd] rounded-[10px] w-[90%] ml-[50px] border-r-0">
                  <div className="flex">
                    <img
                      className="rounded-[50%] h-[50px] ml-[30px] w-[12%] mt-[30px]"
                      src="https://s3-alpha-sig.figma.com/img/b0e0/b9a7/2a3108aed3c607327c6c1eb79c47366c?Expires=1676246400&Signature=QR3c6CDs1afabIaaAaXvkh7NSVChRSNbyNBY6Ae47KIV4ReBxc1VqzrW0MFXhsJVw7DCETiB~fxt-Zc6pm9K6Lsk9x1tGST886ftBLvMwEyes1O5zVtl4WQft9DSw0PW8o-FriQ6kK-G7lHapEBvq9LjKmdaOEu12S4Hgx34v13TnyHNJdfQ0vMVzI0iiHyk2UtLm5TK4rMNMVSsonfnX6Dran8z1R3OtLoBswqJNEC0K3P0zC38QwwJyuNsoyVEP00CnEuIdnbkMeL3zysMp-bdF5TfAKHFlV1fJMQsMqhsRS9b2XCurFvx4wqFJteTusogFMz3oI-EhArfE3LhEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                    <p className="ml-5 mt-[36.5px] font-bold">
                      Kim Young Jou <br />
                      <span className="text-xs font-medium text-[#4f5665]">
                        Seoul, South Korea
                      </span>
                    </p>
                    <p className="ml-[108px] mt-[47.35px]">4.5</p>
                  </div>
                  <p className="w-[73%] ml-[30px] mt-5 text-left leading-[30px]">
                    This is very unusual for my taste, I havent liked coffee
                    before but their coffee is the best! and yup, you have to
                    order the chicken wings, the best in town!
                  </p>
                </div>
              </div>
            </div>
            <div className="block lg:flex pl-[157px] pt-[82.5px]">
              <div className="hidden lg:flex lg:flex-[1]">
                <div className="dot1">
                  <img src={dot} alt="" />
                </div>
              </div>
              <div className="w-full lg:flex-[1]">
                <div className="mt-[-22px] ml-[300px]">
                  <button className="h-[60px] bg-white border-2 border-solid border-[#6a4029] rounded-[50%] text-[2rem] w-[15%] pb-[15px]">
                    &#8592;
                  </button>
                  <button className="h-[60px] border-2 border-solid border-[#6a4029] rounded-[50%] text-[2rem] w-[15%] pb-[15px] text-white bg-[#6a4029]">
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="relative flex h-[200px] bg-white drop-shadow-drop items-center rounded-[10px] w-[80%] m-auto z-10 top-[-100px]">
            <div className="flex-[2] ml-[70px]">
              <div className="getmember">
                <h1 className="text-[2rem] leading-[45px] font-medium w-[35%]">
                  Check our promo today!
                </h1>
                <p className="leading-[30px] text-[#4f5665] font-normal">
                  Lets see the deals and pick yours!
                </p>
              </div>
            </div>
            <div className="flex-[1]">
              <button className="bg-[#ffba33] rounded-[10px] w-[60%] h-[60px]">
                <a className="text-[#6a4029] font-bold leading-[25px]" href="">
                  See Promo
                </a>
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <HeaderNotLogin />
      <main>
        <div className="h-[645px]">
          <section className="h-[645px] bg-[url('../assets/homepagebg.webp')] bg-cover bg-no-repeat bg-lghome lg:bg-home">
            <div>
              <input
                className="ml-[570px] lg:ml-[1040px] h-[60px] rounded-[30px] bg-[#efeeee] indent-12 text-base leading-[26px] w-1/5 mt-[18px]"
                type="text"
                placeholder="Search"
              />
              <p className="w-[70%] ml-[30px] text-white text-5xl font-bold leading-[70px] lg:w-[38%] lg:ml-[150px] font-rubik">
                Start Your Day with Coffee and Good Meals
              </p>
              <p className="ml-[30px] w-[70%] text-white text-xl text-justify font-rubik lg:w-[38%] lg:ml-[150px] mt-5">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>
              <button className="m-[30px] bg-[#ffba33] rounded-[10px] h-[60px] border-[#ffba33] leading-[25px] text-[#6a4029] font-bold lg:ml-[150px] mt-8 w-[18%] cursor-pointer">
                Get Started
              </button>
            </div>
          </section>
          <section className="h-[150px] top-[-70px] relative flex lg:h-[200px] bg-white drop-shadow-drop items-center rounded-[10px] w-[80%] m-auto z-10">
            <div className="ml-[30px] flex flex-[1] items-center gap-5 lg:ml-[91px] h-full">
              <img
                className="w-1/4 bg-[#ffba33] rounded-[70px] h-14 lg:w-[16%] p-[10px]"
                src={user}
                alt=""
              />
              <p className="text-[1.3rem] font-bold">
                90+ <br />
                <span className="text-[#4f5665] text-base">Staff</span>
              </p>
            </div>
            <div className="flex items-center gap-5 flex-[1] h-full w-full before:inset-1 before:w-[2px] before:bg-[#eeeff2] before:h-[70%]">
              <img
                className="w-1/4 bg-[#ffba33] rounded-[70px] h-14 lg:w-[16%] p-[10px]"
                src={place}
                alt=""
              />
              <p className="text-[1.3rem] font-bold">
                30+ <br />
                <span className="text-[#4f5665] text-base">Stores</span>
              </p>
            </div>
            <div className="flex items-center gap-5 flex-[1] h-full w-full before:inset-1 before:w-[2px] before:bg-[#eeeff2] before:h-[70%]">
              <img
                className="w-1/4 bg-[#ffba33] rounded-[70px] h-14 lg:w-[16%] p-[10px]"
                src={love}
                alt=""
              />
              <p className="text-[1.3rem] font-bold">
                800+ <br />
                <span className="text-[#4f5665] text-base">Customers</span>
              </p>
            </div>
          </section>
        </div>
        <section className="flex-col lg:flex-row h-[732.28px] flex">
          <div className="flex-[1]">
            <img
              className="ml-[100px] mt-[150px] h-[475px] lg:mt-[193px] lg:ml-[150px]"
              src={teamwork}
              alt=""
            />
          </div>
          <div className="mt-0 ml-0 lg:mt-[241px] lg:ml-[139px] flex-[1]">
            <h1 className="w-full text-center text-4xl text-[#0b132a] leading-[50px] lg:w-[67%] lg:text-left">
              We Provide Good Coffee and Healthy Meals
            </h1>
            <p className="w-[90%] lg:text-left text-center m-auto lg:m-0 text-[#4f5665] text-base leading-[30px] lg:w-[66%]">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better
            </p>
            <ul className="ml-[50px] list-none text-[#4f5665]">
              <li className="leading-[60px]">High quality beans</li>
              <li className="leading-[60px]">
                Healthy meals, you can request the ingredients
              </li>
              <li className="leading-[60px]">
                Chat with our staff to get better experience for ordering
              </li>
              <li className="leading-[60px]">
                Free member card with a minimum purchase of IDR 200.000.
              </li>
            </ul>
          </div>
        </section>
        <section className="mt-[250px] lg:mt-0 bg-[#fbfbfb]">
          <div>
            <h1 className="text-center text-4xl leading-[50px] pt-[80.72px]">
              Here is Peoples Favorite
            </h1>
            <p className="text-center lg-[30px] text-[#4f5665] mt-[19.55px]">
              Lets Choose and have a bit taste of peoples favorite. It might be
              yours too!
            </p>
          </div>
          <div className="flex mt-[90px]">
            <div className="flex-[1] ml-[174.17px]">
              <div className="h-[760px] border-2 border-solid border-[#dddddd] rounded-[10px] w-[78%]">
                <div className="bg-no-repeat w-32 h-32 m-auto bg-32 rounded-[50%] bg-tast mt-[72px] bg-[url('../assets/creamy-ice-latte.webp')]"></div>
                <h3 className="text-lg mt-[70px] text-[#0b132a] text-center font-medium">
                  Hazelnut Latte
                </h3>
                <ul className="leading-[40px] text-base text-[#4f5665] list-none mt-[30px] ml-[90px]">
                  <li>HazelnutSyrup</li>
                  <li>Vanilla Whipped Cream</li>
                  <li>Ice / Hot</li>
                  <li>Sliced Banana on Top</li>
                </ul>
                <p className="text-2xl text-center leading-[30px] font-bold text-[#0b132a] mt-[130px]">
                  IDR 25.000
                </p>
                <button className="flex justify-center items-center m-auto mt-5 lg:block border-2 border-solid border-[#ffba33] rounded-[50px] h-10 bg-white text-[#6a4029] font-bold w-1/2 lg:mt-5 lg:ml-[85px] cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
            <div className="hidden lg:flex flex-[1]">
              <div className="h-[760px] w-[76%] border-2 border-solid border-[#dddddd] rounded-[10px]">
                <div className="bg-no-repeat w-32 h-32 m-auto bg-32 rounded-[50%] bg-pinky mt-[72px] bg-[url('../assets/pinky.webp')]"></div>
                <h3 className="text-lg mt-[70px] text-[#0b132a] text-center font-medium">
                  Pinky Promise
                </h3>
                <ul className="leading-[40px] text-base text-[#4f5665] list-none mt-[30px] ml-[85px]">
                  <li>1 Shot of Coffee</li>
                  <li>Vanilla Whipped Cream</li>
                  <li>Chocolate Biscuits</li>
                  <li>Strawberry Syrup</li>
                  <li>Slice strawberry on Top</li>
                </ul>
                <p className="text-2xl text-center leading-[30px] font-bold text-[#0b132a] mt-[90px]">
                  IDR 30.000
                </p>
                <button className="border-2 border-solid border-[#ffba33] rounded-[50px] h-10 bg-white text-[#6a4029] font-bold w-1/2 mt-5 ml-[85px] cursor-pointer">
                  Select
                </button>
              </div>
            </div>
            <div className="hidden lg:flex-[1] lg:flex">
              <div className="h-[760px] w-[76%] border-2 border-solid border-[#dddddd] rounded-[10px]">
                <div className="bg-no-repeat w-32 h-32 m-auto bg-32 rounded-[50%] bg-wings mt-[72px] bg-[url('../assets/wings.webp')]"></div>
                <h3 className="text-lg mt-[70px] text-[#0b132a] text-center font-medium">
                  Chicken Wings
                </h3>
                <ul className="leading-[40px] text-base text-[#4f5665] list-none mt-[30px] ml-[85px]">
                  <li>Wings</li>
                  <li>Drum Sticks</li>
                  <li>Mayonaise and Lemon</li>
                  <li>Hot Fried</li>
                  <li>Secret Recipe</li>
                  <li>Buy 1 Get 1 only for Dine in</li>
                </ul>
                <p className="text-center text-2xl leading-[30px] font-bold text-[#0b132a] mt-[50px]">
                  IDR 30.000
                </p>
                <button className="border-2 border-solid border-[#ffba33] rounded-[50px] h-10 bg-white text-[#6a4029] font-bold w-1/2 mt-[20px] ml-[85px] cursor-pointer">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#fbfbfb] text-center">
          <div>
            <h1 className="text-[#0b132a] text-[2.5rem] leading-[50px] pt-[150px]">
              Visit Our Store in the <br />
              Spot on the Map Below
            </h1>
            <p className="text-[#4f5665] leading-[30px] mt-5 text-center">
              See our store in every city on the spot and spen your good day
              there. See <br />
              you soon!
            </p>
            <img
              className="inline-block w-[80%] lg:w-full mt-[155px]"
              src={mapbesar}
              alt=""
            />
          </div>
        </section>
        <section className="bg-[#fbfbfb] text-center">
          <h1 className="font-medium text-[2.5rem] pt-[63.5px]">Our Partner</h1>
          <div className="flex items-center">
            <img
              className="ml-[45px] mt-[47.91px] w-[14%] h-[112px] grayscale opacity-20 lg:ml-[141px]"
              src={netflix}
              alt=""
            />
            <img
              className="mt-[48.91px] w-[11%] h-[50.62px] grayscale opacity-20 ml-[64.38px]"
              src={reddit}
              alt=""
            />
            <img
              className="mt-[40px] w-[19.2%] h-[208.32px] grayscale opacity-20 ml-[3px]"
              src={amazon}
              alt=""
            />
            <img
              className="mt-[47.91px] w-[13%] h-[63.59px] grayscale opacity-20 ml-[3.62px]"
              src={discord}
              alt=""
            />
            <img
              className="mt-[47.91px] w-[12%] h-[51.34px] grayscale opacity-20 ml-[56.56px]"
              src={spotify}
              alt=""
            />
          </div>
        </section>
        <div className="h-[745px]">
          <section className="w-auto h-[745px] bg-[#fbfbfb]">
            <h1 className="w-full m-auto text-center text-4xl leading-[50px] font-medium lg:w-[33%] pt-5">
              Love by Thousands of Happy Customer
            </h1>
            <p className="w-full text-center leading-[30px] font-normal text-[#4f5665] m-auto mt-5 lg:w-[34%]">
              These are the stories our customers who have visited us with great
              pleasure
            </p>
            <div className="inline-block lg:flex mt-[60px]">
              <div className="flex-[1]">
                <div className="m-auto lg:ml-[150px] bg-white h-[230px] border-2 border-solid border-[#6a4029] rounded-[10px] w-[80%]">
                  <div className="flex">
                    <img
                      className="rounded-[50%] h-[50px] m-[30px] 2-[12.5%] mt-[30px]"
                      src="https://s3-alpha-sig.figma.com/img/7b52/c50d/64efec4c75c3e34f6408021730b20d9a?Expires=1676246400&Signature=kkcluKfneP~dcjgRFlnznMA9cYtRTOTtGi4QzQtRcFexTsOvoMoraC1ISt15vMvBQxlMmAyK~dRkW1lUDrEPLOWbBrpPtsvVVba3~HXVDFC~gbEaViz64rCKRnPoTSHLpMHDEzTUJD07wfRK0CMJEuZqiIP4EJ8-BkQXI3Jg2HoK8DANshzByuDAOj074QPibQzjIG36WtovnPb6v0vNTFYid-pSw1CUGF0b2ESxuc9MfLGsB7OlvOLKhavwHyrhevpSVBISifvSZwKzEK9DRXhdR2-z2mvloQ9h4uQtEiQZGvc9kn4yLA0eLAzy0KI5DlhnCpVR5lv4Ufz5SCN9iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                    <p className="ml-5 mt-[36.5px] font-bold">
                      Viezh Robert <br />
                      <span className="text-xs font-medium text-[#4f5665]">
                        Warsaw,Poland
                      </span>
                    </p>
                    <p className="ml-[108px] mt-[47.35px]">4.5</p>
                  </div>
                  <p className="w-[84%] ml-[30px] mt-5 text-left leading-[30px]">
                    wow... I am very happy to spend my whole day here. the Wi-fe
                    is good, and the coffe and meals tho. I like it here!! Very
                    recommended!
                  </p>
                </div>
              </div>
              <div className="flex-[1]">
                <div className="hidden bg-white h-[230px] border-2 border-solid border-[#dddddd] rounded-[10px] w-[80%] ml-[100px] lg:inline-block">
                  <div className="flex">
                    <img
                      className="rounded-[50%] h-[50px] ml-[30px] w-[12.5%] mt-[30px]"
                      src="https://s3-alpha-sig.figma.com/img/4efc/2b65/3098956f84b1822f2eb7e8ed84a31750?Expires=1676246400&Signature=eM50KeRwmfrgcw1-WWUqgLDBDCoOwMsXpTCtYTgVw6opyt6psouIhMMWan7djUqUna7hdLmXxSgr0VcEFSwq7m0MOIdYDgmQcsrvZBWzSF49kcSTk3XGcy2FROYkVXeb0l2LxALtje7uP87ZBL6~JqUA49yLnRE22cOSEA4knFgfgBWjXnM9mCd08uiWmtqaaZuM1lXH6bn5WprR6J3f6FNl59RIQ~QbR8ylXfuo9LcBmIXcCWH0wD-qhZCNj~UuGFFK4r5NaYqPniMpIVyL8t6E2lYwZXbuuqb10aya8DoFbdU3Srs~~RyilxFLqC5yj-OSysccpFlEb5m0A-FT8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                    <p className="ml-5 mt-[36.5px] font-bold">
                      Yessica Christy <br />
                      <span className="text-xs font-medium text-[#4f5665]">
                        Shanxi, China
                      </span>
                    </p>
                    <p className="ml-[108px] mt-[74.35px]">4.5</p>
                  </div>
                  <p className="w-[87%] ml-[30px] mt-5 text-left leading-[30px]">
                    I like it because I like to travel far and still can make my
                    day better just by drinking their Hazelnut Latte
                  </p>
                </div>
              </div>
              <div className="flex-[1]">
                <div className="hidden lg:inline-block bg-white h-[230px] border-2 border-solid border-[#dddddd] rounded-[10px] w-[90%] ml-[50px] border-r-0">
                  <div className="flex">
                    <img
                      className="rounded-[50%] h-[50px] ml-[30px] w-[12%] mt-[30px]"
                      src="https://s3-alpha-sig.figma.com/img/b0e0/b9a7/2a3108aed3c607327c6c1eb79c47366c?Expires=1676246400&Signature=QR3c6CDs1afabIaaAaXvkh7NSVChRSNbyNBY6Ae47KIV4ReBxc1VqzrW0MFXhsJVw7DCETiB~fxt-Zc6pm9K6Lsk9x1tGST886ftBLvMwEyes1O5zVtl4WQft9DSw0PW8o-FriQ6kK-G7lHapEBvq9LjKmdaOEu12S4Hgx34v13TnyHNJdfQ0vMVzI0iiHyk2UtLm5TK4rMNMVSsonfnX6Dran8z1R3OtLoBswqJNEC0K3P0zC38QwwJyuNsoyVEP00CnEuIdnbkMeL3zysMp-bdF5TfAKHFlV1fJMQsMqhsRS9b2XCurFvx4wqFJteTusogFMz3oI-EhArfE3LhEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                    <p className="ml-5 mt-[36.5px] font-bold">
                      Kim Young Jou <br />
                      <span className="text-xs font-medium text-[#4f5665]">
                        Seoul, South Korea
                      </span>
                    </p>
                    <p className="ml-[108px] mt-[47.35px]">4.5</p>
                  </div>
                  <p className="w-[73%] ml-[30px] mt-5 text-left leading-[30px]">
                    This is very unusual for my taste, I havent liked coffee
                    before but their coffee is the best! and yup, you have to
                    order the chicken wings, the best in town!
                  </p>
                </div>
              </div>
            </div>
            <div className="block lg:flex pl-[157px] pt-[82.5px]">
              <div className="hidden lg:flex lg:flex-[1]">
                <div className="dot1">
                  <img src={dot} alt="" />
                </div>
              </div>
              <div className="w-full lg:flex-[1]">
                <div className="mt-[-22px] ml-[300px]">
                  <button className="h-[60px] bg-white border-2 border-solid border-[#6a4029] rounded-[50%] text-[2rem] w-[15%] pb-[15px]">
                    &#8592;
                  </button>
                  <button className="h-[60px] border-2 border-solid border-[#6a4029] rounded-[50%] text-[2rem] w-[15%] pb-[15px] text-white bg-[#6a4029]">
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="relative flex h-[200px] bg-white drop-shadow-drop items-center rounded-[10px] w-[80%] m-auto z-10 top-[-100px]">
            <div className="flex-[2] ml-[70px]">
              <div className="getmember">
                <h1 className="text-[2rem] leading-[45px] font-medium w-[35%]">
                  Check our promo today!
                </h1>
                <p className="leading-[30px] text-[#4f5665] font-normal">
                  Lets see the deals and pick yours!
                </p>
              </div>
            </div>
            <div className="flex-[1]">
              <button className="bg-[#ffba33] rounded-[10px] w-[60%] h-[60px]">
                <a className="text-[#6a4029] font-bold leading-[25px]" href="">
                  See Promo
                </a>
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
