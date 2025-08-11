import apiClient from "./api";

export const getAllActive = async () => {
  const response = await apiClient.get('/FrequentlyAskedQuestions/GetAllActive');
  return response.data;
}