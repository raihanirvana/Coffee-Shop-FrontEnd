import axios from "axios";
const API_URL = `${process.env.REACT_APP_LOCAL_HOST}`;

export const login = (email, pass) => {
  const body = {
    email: email,
    pass: pass,
  };
  const url = `${API_URL}/auth`;
  return axios.post(url, body);
};

export const register = (email, pass, phone_number, controller) => {
  const body = {
    email: email,
    pass: pass,
    phone_number: phone_number,
  };
  const url = `${API_URL}/auth/register`;
  return axios.post(url, body, {
    signal: controller.signal,
  });
};

export const checkEmail = (email, controller) => {
  const body = {
    email: email,
  };
  const url = `${API_URL}/auth/forgotpass`;
  return axios.post(url, body, {
    signal: controller.signal,
  });
};

export const changePass = (email, otp, newPass) => {
  const body = {
    email: email,
    otp: otp,
    newPass: newPass,
  };
  const url = `${API_URL}/auth/changepassforgot`;
  return axios.patch(url, body);
};

export const inputProfile = (
  id,
  token,
  email,
  phone_number,
  first_name,
  last_name,
  display_name,
  address,
  birthday
) => {
  const body = {
    email: email,
    phone_number: phone_number,
    first_name: first_name,
    last_name: last_name,
    display_name: display_name,
    address: address,
    birthday: birthday,
  };
  const url = `${API_URL}/users/updateUser/${id}`;
  return axios.patch(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const transaction = (
  id,
  token,
  note,
  status_id,
  promo_id,
  payment_id,
  delivery_id,
  transaction_id,
  product_id,
  size_id,
  qty,
  subtotal
) => {
  const body = {
    note: note,
    status_id: status_id,
    promo_id: promo_id,
    payment_id: payment_id,
    delivery_id: delivery_id,
    transaction_id: transaction_id,
    product_id: product_id,
    size_id: size_id,
    qty: qty,
    subtotal: subtotal,
  };
  const url = `http://localhost:8080/transactions/${id}`;
  return axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getProfile = (id) => {
  const url = `${API_URL}/users?userId=${id}`;
  return axios.get(url);
};

export const editPassword = (id, token, oldPass, newPassword) => {
  const body = {
    id: id,
    token: token,
    oldPass: oldPass,
    newPassword: newPassword,
  };
  const url = "http://localhost:8080/auth";
  return axios.patch(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProducts = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/product?category=${category}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};
