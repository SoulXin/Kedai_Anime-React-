const express = require('express');
const router = express.Router();
const batch_Controller = require('../../Controller/Complete/Batch')

router.post("/add_batch/:complete_id",batch_Controller.add_Batch)    // => add batch anime complete url
router.get("/check_batch/:complete_id",batch_Controller.check_batch)  // => check batch anime complete url
router.put("/update_batch/:complete_id",batch_Controller.update_Batch)    // => update batch anime complete url

module.exports = router;