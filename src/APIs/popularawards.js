import apiClient from "./api";

export const GetAllPopularAwards = async (token) => {
  try {
    const res = await apiClient.get(`/api/Product/GetAllPopularAwards`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching current user info:", err);
    throw err;
  }
};


// res.data.data.items