import apiClient from "./api";

export const loginUser = async (username, password, captchaId, captchaValue) => {
  try {
    const response = await apiClient.post('/api/User/Login',
      {
        username,
        password,
        captchaId,
        captchaValue
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    // throw error;
    return error.response.data;
    // error.response?.data || error.message
  }
};