const express = require("express");
const medicineController = require("../controllers/updateMedicineController");
const medicineController = require("../controllers/deleteMedicineController");
const medicineController = require("../controllers/createMedicineController");
const medicineController = require("../controllers/fetchMedicineController");

const router = express.Router();
router.get(["/:id", "/"], medicineController.fetchMedicineDataWithId);
const router = express.Router();
router.put("/:id", medicineController.updateMedicineDataWithId);
const router = express.Router();
router.delete("/:id", medicineController.deleteMedicineDataWithId);
const router = express.Router();
router.post("/", medicineController.createMedicineDataWithId);

module.exports = router;