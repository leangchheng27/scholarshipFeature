import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Scholarship = sequelize.define(
  "Scholarship",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.ENUM("cambodia", "abroad"),
      defaultValue: "cambodia",
    },
    funded_by: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "scholarships",
    timestamps: false,
  },
)

export default Scholarship; 