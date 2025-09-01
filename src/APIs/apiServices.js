import apiClient from "./api";

export const getAllActive = async () => {
  const response = await apiClient.get('/api/FrequentlyAskedQuestions/GetAllActive');
  return response.data;
}

export const getCaptcha = async () => {
  const response = await apiClient.get('/api/Captcha/Create');
  const base64 = response.data.data.file;
  const id = response.data.data.id
  const res = {
    src: `data:image/jpeg;base64,${base64}`,
    id: id
  }
  return res;
};