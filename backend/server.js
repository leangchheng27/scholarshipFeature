import "dotenv/config";
import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import config from "./src/config/config.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import scholarshipRoutes from "./src/routes/scholarshipRoute.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/scholarships", scholarshipRoutes);

// error handler 
app.use(errorHandler);

(async () => {
  try {
    await sequelize.sync();
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT} 🚀`);
    });
  } catch (error) {
    process.exit(1);
  }
})();
