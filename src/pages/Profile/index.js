import React, { Fragment, useState, useMemo, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { inputProfile, getProfile } from "../../utils/https/getUsers";
import { useSelector } from "react-redux";

const Profile = () => {
  const [fileLink, setFileLink] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [editModeTop, setEditModeTop] = useState(false);
  const [editModeBot, setEditModeBot] = useState(false);
  const [userData, setUserData] = useState([]);
  const controller = useMemo(() => new AbortController(), []);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [display_name, setDisplayName] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const token = useSelector((state) => state.user.data.token);
  const [isLoading, setIsLoading] = useState(true);
  const id = useSelector((state) => state.user.data.id);
  const navigate = useNavigate();

  const handleEdit = () => {
    setEditModeTop(true);
  };
  // const handlePict = (e) => {
  //   e.preventDefault();
  //   setFileLink({ file: e.target.files[0] });
  //   console.log({ file: e.target.files[0] });
  // };
  const HandleEditBot = () => {
    setEditModeBot(true);
  };
  const handlecancel = (e) => {
    e.preventDefault();
    setEditModeTop(false);
    setEditModeBot(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("persist:kopi_toko");
    window.location.reload();
  };
  useEffect(() => {
    document.title = "Profile";
    getProfile(id)
      .then((response) => {
        setUserData(response.data.data);
        setAddress(response.data.data[0].address);
        setEmail(response.data.data[0].email);
        setPhoneNumber(response.data.data[0].phone_number);
        setDisplayName(response.data.data[0].display_name);
        setFirstName(response.data.data[0].first_name);
        setLastName(response.data.data[0].last_name);
        setBirthday(response.data.data[0].birthday);
        setFileLink(response.data.data[0].image);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleEditPass = (event) => {
    event.preventDefault();
    navigate("/editpass");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    inputProfile(
      fileLink,
      id,
      token,
      email,
      phone_number,
      first_name,
      last_name,
      display_name,
      address,
      birthday,
      controller
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      {isLoading ? (
        <p>loading oi</p>
      ) : (
        <>
          <Header />
          <main className="bg-[url('../assets/bgpf.webp')] bg-cover bg-center">
            <h1 className="text-center pl-0 lg:text-left text-[2.18rem] text-white font-medium lg:pl-[152px] pt-[60px]">
              User Profile
            </h1>
            <form>
              <section className="h-[800px] flex-col flex lg:h-[358px] lg:flex-row">
                <div className="flex-[1]">
                  <div
                    className="h-[400px] w-[80%] m-auto bg-white lg:w-[61%] lg:h-full text-center border-b-[15px] border-solid border-[#6a4029] rounded-[10px] lg:ml-[152px]"
                    action=""
                  >
                    <div className="pt-12">
                      <div
                        onClick={handleEdit}
                        className="bg-[url('../assets/pen.svg')] h-12 bg-[#6a4029] absolute rounded-[50%] bg-no-repeat w-12 left-[320px] top-[400px] bg-pen"
                      ></div>
                      {/* <input
                        type="file"
                        onChange={handlePict}
                        multiple={false}
                        id="avatar"
                        name="avatar"
                        className=" rounded-md absolute inset-0  cursor-pointer z-30  opacity-0 "
                      /> */}
                      <img
                        className="m-auto h-[200px] w-[30%] lg:w-[40%] lg:h-[120px] rounded-[50%] object-cover lg:mb-[10px] object-op"
                        src={userData[0].image}
                        alt=""
                      />
                    </div>
                    <h4 className="text-xl font-bold mt-[10px]">
                      {userData[0].display_name}
                    </h4>
                    <p className="mt-[5px] text-xs text-[#4f5665]">
                      {userData[0].email}
                    </p>
                    <p className="text-base text-[#4f5665] mt-10">
                      Has been ordered 15 products
                    </p>
                  </div>
                </div>
                <div className="mt-5 w-full lg:mt-0 flex-[2]">
                  <div className="m-auto lg:m-0 bg-white w-[79%] rounded-[10px] h-[358px] border-b-[15px] border-solid border-[#6a4029]">
                    <div className="flex">
                      <h2 className="w-[79%] text-[#4f5665] mt-4 ml-[30px]">
                        Contacts
                      </h2>
                      <div
                        onClick={handleEdit}
                        className="bg-[url('../assets/pen.svg')] h-12 bg-[#6a4029] rounded-[50%] bg-no-repeat w-12 mt-4 ml-[60px] bg-pen"
                      ></div>
                    </div>
                    <>
                      <div className="flex flex-col lg:mt-5 lg:flex-row">
                        <div className="email">
                          <p className="text-[#9f9f9f] ml-[30px] text-xl">
                            Email address:
                          </p>
                          {editModeTop ? (
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-[80%] lg:w-[110%] ml-[30px] border-t-0 border-r-0 border-l-0 border-b border-solid border-black mt-[10px] text-xl"
                              type="text"
                              placeholder="Enter Your Email Address"
                            />
                          ) : (
                            <p className="w-[80%] lg:w-[110%] ml-[30px] border-t-0 border-r-0 border-l-0 border-b border-solid border-black mt-[10px] text-xl">
                              {userData[0].email}
                            </p>
                          )}
                        </div>
                        <div className="mt-[10px] lg:mt-0">
                          <p className="ml-[30px] text-[#9f9f9f] text-xl lg:ml-[90px]">
                            Mobile number:
                          </p>
                          {editModeTop ? (
                            <input
                              value={phone_number}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              className="w-[80%] lg:w-[110%] ml-[30px] lg:ml-[90px] border-t-0 border-r-0 border-l-0 border-b border-solid border-black mt-[10px] text-xl"
                              type="text"
                              placeholder="Enter Your Email Address"
                            />
                          ) : (
                            <p className="w-[80%] lg:w-[110%] ml-[30px] lg:ml-[90px] border-t-0 border-r-0 border-l-0 border-b border-solid border-black mt-[10px] text-xl">
                              {userData[0].phone_number}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="adress">
                        <p className="mt-5 lg:mt-[50px] text-[#9f9f9f] ml-[30px] text-xl">
                          Delivery adress:
                        </p>
                        {editModeTop ? (
                          <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-[80%] ml-[30px] border-t-0 border-r-0 border-l-0 border-b border-solid border-black lg:w-[36%] mt-[10px] text-xl"
                            type="text"
                            placeholder="Input Your Address"
                          />
                        ) : (
                          <p className="w-[80%] ml-[30px] border-t-0 border-r-0 border-l-0 border-b border-solid border-black lg:w-[36%] mt-[10px] text-xl">
                            {userData[0].address}
                          </p>
                        )}
                      </div>
                    </>
                  </div>
                </div>
              </section>
              <section className="h-[870px] mt-[30px] lg:h-[561px] lg:mt-20">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-[1] m-auto w-[79%] h-[100px] text-[150%] lg:ml-[168px] bg-white rounded-[10px] border-b-[15px] border-solid border-[#6a4029] lg:h-[418px] lg:w-full">
                    <div className="flex">
                      <h2 className="pt-[22px] pl-10 font-bold">Details</h2>
                      <div
                        onClick={HandleEditBot}
                        className="ml-[380px] bg-[url('../assets/pen.svg')] h-12 bg-[#6a4029] rounded-[50%] w-[47px] bg-no-repeat mt-[22px] lg:ml-[450px] bg-pen"
                      ></div>
                    </div>
                    <div className="flex mt-7 pl-10">
                      <div className="w-[36%]">
                        <p className="w-[105%] text-xl text-[#9f9f9f]">
                          Display name:
                        </p>
                        {editModeBot ? (
                          <input
                            value={display_name}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="border-t-0 border-r-0 border-l-0 border-b border-solid border-black w-[120%] mt-[10px] text-xl"
                            type="text"
                            placeholder="Input Your Display Name"
                          />
                        ) : (
                          <p className="border-t-0 border-r-0 border-l-0 border-b border-solid border-black w-[120%] mt-[10px] text-xl">
                            {userData[0].display_name}
                          </p>
                        )}
                      </div>
                      <div className="ml-[120px] lg:ml-[100px]">
                        <p className="text-xl text-[#9f9f9f]">DD/MM/YY</p>
                        {editModeBot ? (
                          <input
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            className="border-t-0 border-r-0 border-l-0 border-b border-solid border-black mt-[3px] rounded-[4px] text-xl text-[#555]"
                            type="date"
                            placeholder=""
                          />
                        ) : (
                          <p className="border-t-0 border-r-0 border-l-0 border-b border-solid border-black w-[120%] mt-[10px] text-xl">
                            {userData[0].birthday}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex mt-7 pl-10">
                      <div className="w-[36%]">
                        <p className="text-xl text-[#9f9f9f]">First name:</p>
                        {editModeBot ? (
                          <input
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border-t-0 border-r-0 border-l-0 border-b border-solid border-black w-[120%] mt-[10px] text-xl"
                            type="text"
                            placeholder="Input Your First Name"
                          />
                        ) : (
                          <p className="border-t-0 border-r-0 border-l-0 border-b border-solid border-black w-[120%] mt-[10px] text-xl">
                            {userData[0].first_name}
                          </p>
                        )}
                      </div>
                      <div className="ml-[120px] lg:ml-[100px] font-medium text-2xl leading-[50px] relative top-[-30px]">
                        <ul>
                          <li>
                            <input
                              className="border-[2px] rounded-[50%] w-5 h-5"
                              type="radio"
                              name="gender"
                            />
                            Male
                          </li>
                          <li>
                            <input
                              className="border-[2px] rounded-[50%] w-5 h-5"
                              type="radio"
                              name="gender"
                            />
                            Female
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-[30px] lg:mb-0 pl-10">
                      <p className="text-xl text-[#9f9f9f]">Last name:</p>
                      {editModeBot ? (
                        <input
                          value={last_name}
                          onChange={(e) => setLastName(e.target.value)}
                          className="border-t-0 border-r-0 border-l-0 border-b border-solid border-black w-[48%] lg:w-[44%] mt-[10px] text-xl"
                          type="text"
                          placeholder="Input Your Last Name"
                        />
                      ) : (
                        <p className="border-t-0 border-r-0 border-l-0 border-b border-solid border-black w-[48%] lg:w-[44%] mt-[10px] text-xl">
                          {userData[0].last_name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 flex-[1] text-center h-full">
                    <div className="h-full">
                      <ul className="list-none">
                        <p className="text-2xl leading-7 font-bold text-white">
                          Do you want to save the <br /> change?
                        </p>
                        <li className="mt-5">
                          <button
                            type="submit"
                            onClick={handleSubmit}
                            className="m-auto w-[90%] rounded-[20px] text-white bg-[#6a4029] text-lg font-bold p-21"
                          >
                            Save Change
                          </button>
                        </li>
                        <li className="mt-5">
                          <button
                            onClick={handlecancel}
                            className="m-auto w-[90%] rounded-[20px] text-[#6a4029] bg-[#ffba33] p-22 text-xl font-bold"
                          >
                            Cancel
                          </button>
                        </li>
                        <li className="mt-5">
                          <button
                            onClick={handleEditPass}
                            className="m-auto w-[90%] rounded-[20px] text-[#6a4029] bg-white text-xl font-bold indent-5 p-23"
                          >
                            Edit Password{" "}
                            <span className="pl-[350px]">&gt;</span>
                          </button>
                        </li>
                        <li className="mt-5">
                          <button
                            onClick={handleLogout}
                            className="m-auto w-[90%] rounded-[20px] text-[#6a4029] bg-white text-xl font-bold indent-5 p-24"
                          >
                            Log out <span className="pl-[400px]">&gt;</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </main>
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default Profile;
