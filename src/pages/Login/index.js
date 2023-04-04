import React, { useState, useEffect, Fragment } from "react";
import Footer from "../../components/Footer";
import cofe from "../../assets/cofe.webp";
import bg from "../../assets/bg.webp";
import google from "../../assets/goggle.webp";
import { Link, useNavigate } from "react-router-dom";
import { usersAction } from "../../redux/slices/users";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      usersAction.storeLogin({
        email: email,
        pass: pass,
      })
    )
      .unwrap()
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Email atau password salah");
      });
  };
  return (
    <Fragment>
      <div
        className={`${
          error ? "inline-block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg bg-transparent z-10 `}
        id="overlay"
      ></div>
      <div
        className={`${
          error ? "inline-block" : "hidden"
        } fixed top-1/2 left-1/2 translate-x-20 bg-white shadow-sm  border border-solid border-slate-400 p-5 z-10 text-center `}
        id="myAlert"
      >
        {error && <h1>Login gagal</h1>}
        {error && <p>{error}</p>}
        <button
          className="bg-white shadow-2xl border border-solid border-red-300"
          id="koss"
          onClick={() => setError(null)}
        >
          OK
        </button>
      </div>
      <main className="bg-[url('../assets/bg.webp')] bg-cover h-[1230px] lg:bg-none lg:h-[68.75rem]">
        <section className="block lg:flex lg:h-[68.75rem]">
          <div className="lg:flex-1">
            <div>
              <img
                className="hidden lg:h-[68.75rem] lg:w-full lg:block"
                src={bg}
                alt=""
              />
            </div>
          </div>
          <div className="flex-1">
            <header className="pt-[50px] flex pl-[7%] lg:pt-0 lg:mt-[8%]">
              <img className="h-8 w-[4.7%]" src={cofe} alt="" />
              <h1 className="pl-[2.1%] font-rubik font-bold text-[#0B132A] text-lg">
                Coffee Shop
              </h1>
              <Link
                to="/signup"
                className="ml-[350px] font-body font-medium rounded-[50px]
                  w-1/5 h-11 lg:ml-[266px] bg-[#ffba33] text-center pt-[10px] hover:cursor-pointer
                  hover:bg-[#f7c052]"
              >
                Sign Up
              </Link>
            </header>
            <h2 className="text-[#6a4029] text-4xl font-bold text-center mt-[71px]">
              Login
            </h2>
            <form
              {...isLoggedIn}
              onSubmit={handleSubmit}
              className="text-center"
              action=""
            >
              <p className="mt-14 text-[#4f5665] text-xl text-left ml-[134px] font-bold">
                Email Adress:
              </p>
              <input
                id="formemail"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="indent-4 h-[75px] rounded-[20px] text-black text-xl mt-3 w-[66.5%] border border-gray-700 border-solid"
                placeholder="Enter Your Email"
              />
              <p className="mt-8 text-[#4f5665] text-xl text-left ml-[134px] font-bold">
                Password:
              </p>
              <input
                id="formpass"
                name="password"
                value={pass}
                onChange={handlePasswordChange}
                className="indent-4 h-[75px] rounded-[20px] text-black text-xl mt-3 w-[66.5%] border border-gray-700 border-solid"
                type="password"
                placeholder="Enter your password"
              />
              <Link
                to="/forgot"
                className="block mt-6 text-[#4f5665] text-xl text-left ml-[134px] font-bold"
                href=""
              >
                Forgot Password ?
              </Link>
              <button
                type="submit"
                className="w-[66.5%] h-[75px] rounded-[20px] bg-[#ffba33] mt-12 text-[#6a4029] text-xl font-bold hover:bg-[#f7c052] hover:cursor-pointer"
              >
                Login
              </button>
              <button className="h-[75px] bg-white shadow-lg gray-500-opacity-67 drop-shadow-lg gray-900-opacity-10 rounded-[20px] w-[66.5%] mt-6 text-center items-center text-black text-xl font-bold">
                <img className="absolute left-24 w-7 h-7" src={google} alt="" />
                Login with Google
              </button>
            </form>
          </div>
        </section>
        <section className="top-[330px] z-10 bg-white rounded-[10px] flex w-4/5 relative lg:top-[-125px] items-center h-56 m-auto">
          <div className="flex-[2] ml-[70px]">
            <div className="getmember">
              <h3 className="text-[2.18rem] w-1/2 text-[#0b132a]">
                Get your member card now!
              </h3>
              <p className="text-[#4f5665]">
                Lets join with our member and enjoy the deals.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <button className="bg-[#ffba33] rounded-[10px] w-11/12 h-[60px] text-[#6a4029] list-none font-bold hover:cursor-pointer">
              Create Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Login;
