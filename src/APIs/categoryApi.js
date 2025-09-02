import apiClient from "./api";

export const getAllCategoriesWithProducts = async () => {
  try {
    const response = await apiClient.get("/api/Category/GetAllCategoriesWithProducts");
    return response;
  } catch (error) {
    console.error("Error fetching categories with products:", error);
    throw error;
  }
};
