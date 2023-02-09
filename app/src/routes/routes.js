const express = require("express");
const createController = require("../controller/create")
const readController = require("../controller/read");
const updateController = require("../controller/update")


const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Hello World !!")
})

router.post("/create", createController.create);
router.get("/read", readController.read);
router.post("/update", updateController.update);

module.exports = router;