import axios from "axios";
import apiClient from "./api";

export const GetCurrentUserInfo = async (token) => {
  try {
    const res = await apiClient.get(`/api/User/GetCurrentUserInfo`, {
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
