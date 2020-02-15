const express = require('express');
const router = express.Router();
const complete_Controller = require('../Controller/Complete_Anime')

// Client
router.get("/check_complete_main",complete_Controller.check_CompleteAnime_Main)      // => check anime complete(main)
router.get("/check_complete",complete_Controller.check_CompleteAnime)     // => check anime complete
router.get("/check_detail_complete/:anime_id/:name",complete_Controller.check_detail_CompleteAnime) // => Detail complete anime

// Developer
router.post("/add_complete/:anime_id",complete_Controller.add_CompleteAnime)    // => add anime complete url
router.get("/check_complete_developer",complete_Controller.check_complete_developer) // => check anime complete
router.put("/up_to_date_complete/:anime_id",complete_Controller.up_to_date_complete_developer)

module.exports = router;