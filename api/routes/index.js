const express = require("express");
const router = express.Router();

const usersRouter = require("../controllers/usersControllers");
const favouriteRouter = require("../controllers/favouriteControles");

router.use("/favourite", favouriteRouter);
router.use("/users", usersRouter);

module.exports = router;
