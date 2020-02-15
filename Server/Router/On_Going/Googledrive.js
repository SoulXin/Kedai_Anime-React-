const express = require('express');
const router = express.Router();
const googledrive_Controller = require('../../Controller/On_Going/Googledrive')

router.post("/add_on_going_googledrive/:anime_id/:on_going_id",googledrive_Controller.add_Googledrive)    // => add url googledrive
router.get("/check_on_going_googledrive/:anime_id",googledrive_Controller.check_Googledrive)  // => take url googledrive
router.put("/update_ongoing_googledrive/:googledrive_id",googledrive_Controller.update_Googledrive)    // => update url googledrive

module.exports = router;