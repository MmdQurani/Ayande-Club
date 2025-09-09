import apiClient from "./api";

export const postInviteFriend = async (data) => {
  try {
    const response = await apiClient.post("/api/SMS/InviteFirend", data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data;
    }
    throw error;
  }
};

