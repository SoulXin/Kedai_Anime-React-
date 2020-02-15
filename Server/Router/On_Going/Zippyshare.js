const express = require('express');
const router = express.Router();
const zippyshare_Controller = require('../../Controller/On_Going/Zippyshare')

router.post("/add_on_going_zippyshare/:anime_id/:on_going_id",zippyshare_Controller.add_zippyshare)    // => add url zippyshare
router.get("/check_on_going_zippyshare/:anime_id",zippyshare_Controller.check_zippyshare)  // => take url zippyshare
router.put("/update_ongoing_zippyshare/:zippyshare_id",zippyshare_Controller.update_zippyshare)    // => update url zippyshare

module.exports = router;