import Http from "@/models/Http";

const login = async (payload) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/login", payload);
}

const logout = () => {
  return Http.post("/logout");
}

const forgotPassword = async (payload) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/forgot-password", payload);
}

const getAuthUser = () => {
  return Http.get("/api/users/auth");
}

const resetPassword = async (payload) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/reset-password", payload);
}

const updatePassword = (payload) => {
  return Http.put("/user/password", payload);
}

const registerUser = async (payload) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/register", payload);
}

const sendVerification = (payload) => {
  return Http.post("/email/verification-notification", payload);
}

const updateUser = (payload) => {
  return Http.put("/user/profile-information", payload);
}

export { forgotPassword, getAuthUser, updateUser, login, logout, registerUser, resetPassword, sendVerification, updatePassword}
