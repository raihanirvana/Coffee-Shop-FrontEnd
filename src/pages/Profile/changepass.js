import React, { Fragment, useState } from "react";
import { editPassword } from "../../utils/https/getUsers";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
const EditPassword = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [message, setMessage] = useState("");
  const token = useSelector((state) => state.user.data.token);
  const id = useSelector((state) => state.user.data.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    editPassword(id, token, oldPass, newPass)
      .then((response) => {
        setMessage(response.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Edit Password</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label
              htmlFor="oldPass"
              className="block text-gray-700 font-bold mb-2"
            >
              Old Password
            </label>
            <input
              type="password"
              name="oldPass"
              id="oldPass"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPass"
              className="block text-gray-700 font-bold mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              name="newPass"
              id="newPass"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
      <Footer />
    </Fragment>
  );
};
export default EditPassword;
