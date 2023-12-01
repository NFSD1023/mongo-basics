const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.addUser);
router.get("/list", userController.getAllUsers);

module.exports = router;
