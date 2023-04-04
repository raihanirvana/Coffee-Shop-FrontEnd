import React, { Fragment, useEffect, useMemo, useState } from "react";
import Footer from "../../components/Footer";
import { changePass } from "../../utils/https/getUsers";
import { useNavigate } from "react-router-dom";

const changePassword = () => {
  const [isOtpTrue, setOtpTrue] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const controller = useMemo(() => new AbortController(), []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    changePass(email, otp, pass, controller)
      .then((data) => {
        console.log(data);
        setOtpTrue(true);
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
            navigate("/login");
          }}
        >
          OK
        </button>
      </div>
      <div className="mb-10 max-w-md mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
        <form {...isOtpTrue} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-gray-700 font-bold mb-2">
              OTP
            </label>
            <input
              value={otp}
              onChange={handleOtpChange}
              type="text"
              name="otp"
              id="otp"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="new-password"
              className="block text-gray-700 font-bold mb-2"
            >
              New Password
            </label>
            <input
              value={pass}
              onChange={handlePasswordChange}
              type="password"
              name="new-password"
              id="new-password"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default changePassword;
