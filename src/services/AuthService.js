import Http from "@/models/Http";

export const login = async (payload) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/login", payload);
}

export const logout = () => {
  return Http.post("/logout");
}

export const forgotPassword = async (payload) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/forgot-password", payload);
}

export const getAuthUser = () => {
  return Http.get("/api/users/auth");
}

export const resetPassword = async (payload) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/reset-password", payload);
}

export const updatePassword = (payload) => {
  return Http.put("/user/password", payload);
}

export const registerUser = async (payload) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/register", payload);
}

export const sendVerification = (payload) => {
  return Http.post("/email/verification-notification", payload);
}

export const updateUser = (payload) => {
  return Http.put("/user/profile-information", payload);
}
