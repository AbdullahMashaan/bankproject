import axios from "axios";

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const response = await axios.post("register", formData);
  storeToken(data.token); 

  return response.data;
};


const login = async (userInfo) => {
  const response = await axios.post("login", userInfo);
  storeToken(data.token);

  return response.data;
};

export {register,login}