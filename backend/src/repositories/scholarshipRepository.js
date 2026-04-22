import Scholarship from "../models/Scholarship.js";

export const findAll = async () => {
  return await Scholarship.findAll();
};

export const findById = async (id) => {
  return await Scholarship.findByPk(id); 
};

export const create = async (data) => {
    return await Scholarship.create(data);
};

export const update = async (id, data) => {
  const scholarship = await Scholarship.findByPk(id);
    return await Scholarship.update();
};

export const remove = async (id) => {
  return await Scholarship.drop;
};