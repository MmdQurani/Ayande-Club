import axios from "axios";
import apiClient from "./api";

export const getOrderTransactions = async ({
  pageSize,
  pageIndex
} = {}) => {
  try {
    const response = await apiClient.get(`/api/Order/GetAllTransactions`, {
      params: {
        pageSize,
        pageIndex
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order transactions:", error);
    throw error;
  }
};
