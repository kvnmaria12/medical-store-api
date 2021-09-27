const express = require("express");
const updateMedicineController = require("../controllers/updateMedicineController");
const deleteMedicineController = require("../controllers/deleteMedicineController");
const createMedicineController = require("../controllers/createMedicineController");
const fetchMedicineController = require("../controllers/fetchMedicineController");

const router = express.Router();

router.get(["/:id", "/"], fetchMedicineController.fetchMedicineDataWithId);
router.put("/:id", updateMedicineController.updateMedicineDataWithId);
router.delete("/:id", deleteMedicineController.deleteMedicineDataWithId);
router.post("/", createMedicineController.createMedicineDataWithId);

module.exports = router;