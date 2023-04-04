import React, { Fragment, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { checkEmail } from "../../utils/https/getUsers";

const ForgotPassword = () => {
  const [isEmailAvail, setEmailAvail] = useState(false);
  const controller = useMemo(() => new AbortController(), []);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    checkEmail(email, controller)
      .then((data) => {
        console.log(data);
        setEmailAvail(true);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setError("Email tidak terdaftar");
      });
  };
  useEffect(() => {
    document.title = "Forgot Password";
  }, []);
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
        {error && <h1>Forgot Password Tidak Berhasil</h1>}
        {error && <p>{error}</p>}
        <button
          className="bg-white shadow-2xl border border-solid border-red-300"
          id="koss"
          onClick={() => setError(null)}
        >
          OK
        </button>
      </div>
      <div
        className={`${
          success ? "inline-block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg bg-transparent z-10 `}
        id="overlay"
      ></div>
      <div
        className={`${
          success ? "inline-block" : "hidden"
        } fixed top-1/2 left-1/2 translate-x-20 bg-white shadow-sm  border border-solid border-slate-400 p-5 z-10 text-center `}
        id="myAlert"
      >
        {success && <h1>Forgot Password Berhasil</h1>}
        {success && <p>{success}</p>}
        <button
          className="bg-white shadow-2xl border border-solid border-red-300"
          id="koss"
          onClick={() => {
            setSuccess(null);
            navigate("/changepass");
          }}
        >
          OK
        </button>
      </div>
      <main className="h-[1200px] bg-[url('../assets/bgf.webp')] lg:h-[1112px] bg-cover text-center bg-[position:center_bottom,_right_0px_bottom_0px,_left_-120px_bottom_0px]">
        <p className="text-6xl leading-[90px] lg:text-[64px] pt-52 text-white lg:leading-10">
          Forgot your password?
          <br />
          <span className="text-3xl lg:text-[27px]">
            Dont worry, we got your back!
          </span>
        </p>
        <div className="flex-col text-center gap-5 lg:flex-row flex justify-center mt-32 lg:gap-12">
          <div className="w-full flex-[1] lg:flex-[2]">
            <input
              value={email}
              onChange={handleEmailChange}
              className="text-base m-auto h-[90px] w-[90%] lg:h-32 rounded-[20px] lg:text-3xl pl-10 lg:ml-[200px]"
              id="formemail"
              type="text"
              placeholder="Enter your email adress to get link"
            />
          </div>
          <form
            {...isEmailAvail}
            onSubmit={handleSubmit}
            className="w-full m-auto flex-1"
          >
            <button
              className="m-auto h-[90px] w-[90%] lg:h-32 lg:w-1/2 rounded-[20px] bg-[#ffba33] text-[2rem] hover:bg-[#ffba] hover:cursor-pointer"
              id="sendd"
            >
              Send
            </button>
          </form>
        </div>
        <p className="w-full mt-[90px] text-3xl text-white lg:w-[38%] m-auto lg:mt-[150px]">
          Click here if you didnt receive any link in 2 minutes
        </p>
        <button className="m-6 h-32 bg-[#6a4029] w-[30%] rounded-[20px] text-white text-2xl font-bold">
          Resend Link
        </button>
        <p className="mt-5 text-white text-2xl font-bold">01:54</p>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ForgotPassword;
