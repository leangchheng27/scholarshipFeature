import API from "../services/api.js";

export const getScholarships = async () => {
  const response = await API.get("/scholarships");
  return response.data;
};

export const getScholarshipById = async (id) => {
  const response = await API.get(`/scholarships/${id}`);
  return response.data;
};

export const createScholarship = async (data) => {
  const response = await API.post("/scholarships");
  return response.data;
};

export const updateScholarship = async (id, data) => {
  const response = await API.put("/scholarships/${id}");
  return response.data;
};

export const deleteScholarship = async (id) => {
  const response = await API.delete("/scholarships/${id}");
  return response.data;
};
