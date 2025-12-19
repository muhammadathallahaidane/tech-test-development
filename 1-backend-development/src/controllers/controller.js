const db = require("../models/db");

class Controller {
  static async submitData(req, res) {
    try {
      const requiredFields = ["name", "position", "salary"];
      const missingFields = requiredFields.filter((field) => !req.body[field]);

      if (missingFields.length > 0) {
        return res.status(400).json({
          message: `Data submission failed`,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        });
      }

      const dataTypeError = [];

      if (typeof req.body.name !== "string") {
        dataTypeError.push("Field 'name' must be a string");
      }

      if (typeof req.body.position !== "string") {
        dataTypeError.push("Field 'position' must be a string");
      }

      if (typeof req.body.salary !== "number") {
        dataTypeError.push("Field 'salary' must be a number");
      }

      if (dataTypeError.length > 0) {
        return res.status(400).json({
          message: `Data submission failed`,
          error: dataTypeError,
        });
      }

      const newData = {
        id: db.length + 1,
        ...req.body,
        createdAt: new Date().toISOString,
      };

      db.push(newData);

      return res.status(201).json({
        message: "Data successfully submitted",
        data: newData,
        totalData: db.length,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
