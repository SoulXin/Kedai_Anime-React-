const express = require('express');
const router = express.Router();
const googledrive_Controller = require('../../Controller/Complete/Googledrive')

router.post("/add_googledrive/:complete_id",googledrive_Controller.add_Googledrive)    // => add url googledrive
router.get("/check_googledrive/:complete_id",googledrive_Controller.check_Googledrive)  // => take url googledrive
router.delete("/delete_googledrive/:googledrive_id",googledrive_Controller.delete_Googledrive) // => delete url googledrive
router.put("/update_googledrive/:googledrive_id",googledrive_Controller.update_Googledrive)    // => update url googledrive

module.exports = router;