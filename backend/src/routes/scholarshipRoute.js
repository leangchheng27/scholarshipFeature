import express from "express";
import scholarshipController from "../controllers/scholarshipController.js";

const router = express.Router();

// your routes here!
router.get('/', scholarshipController.getAll)
router.get("/:id", scholarshipController.getById);
router.post("/", scholarshipController.create);
router.put("/:id", scholarshipController.update);
router.delete("/:id", scholarshipController.delete);

export default router;