import {
  findAll,
  findById,
  create,
  update,
  remove,
} from "../repositories/scholarshipRepository.js";

const scholarshipController = {
  getAll: async (req, res) => {
    try {
      const scholarships = await findAll();
      res.json(scholarships);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const scholarships = await findById(req.params.id);

      if (!scholarships) {
        return res.status(404).json({ message: "Scholarship not found" });
      }

      res.json(scholarships);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const scholarships = await create(req.body);
      res.status(201).json(scholarships);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const scholarships = await update(req.params.id, req.body);
      res.json(scholarships);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      await remove(req.params.id); 
      res.json({ message: "Scholarship deleted!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default scholarshipController;
