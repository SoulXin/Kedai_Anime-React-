const express = require('express');
const router = express.Router();
const zippyshare_Controller = require('../../Controller/Complete/Zippyshare')

router.post("/add_zippyshare/:complete_id",zippyshare_Controller.add_zippyshare)    // => add url zippyshare
router.get("/check_zippyshare/:complete_id",zippyshare_Controller.check_zippyshare)  // => take url zippyshare
router.delete("/delete_zippyshare/:zippyshare_id",zippyshare_Controller.delete_zippyshare)  // => delete url zippyshare
router.put("/update_zippyshare/:zippyshare_id",zippyshare_Controller.update_zippyshare)    // => update url zippyshare

module.exports = router;