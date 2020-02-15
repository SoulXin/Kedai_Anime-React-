const express = require('express');
const router = express.Router();
const ongoing_Controller = require('../Controller/On_Going_Anime')

// Client
router.get("/check_ongoing_main",ongoing_Controller.check_OnGoingAnime_Main)     // => check anime ongoing(Main)
router.get("/check_ongoing",ongoing_Controller.check_OnGoingAnime)  // => check anime ongoing
router.get("/carousel_on_going/:anime_id",ongoing_Controller.carousel_OnGoingAnime) // => carousel in on going anime(detail)
router.get("/check_detail_ongoing_client/:anime_id/:name/:on_going_id",ongoing_Controller.check_detail_OnGoingAnime_client) // => check detai anime ongoing

// Developer
router.post("/add_ongoing/:anime_id",ongoing_Controller.add_OnGoingAnime)    // => add anime ongoing url
router.get("/check_ongoing_developer",ongoing_Controller.check_ongoing_developer) // => check anime ongoing
router.get("/check_detail_ongoing/:anime_id/:name",ongoing_Controller.check_detail_OnGoingAnime) // => check detail anime ongoing
router.delete("/delete_on_going/:on_going_id",ongoing_Controller.delete_on_going) // => delete anime on going (LINK)
router.delete("/change_to_complete_anime/:anime_id",ongoing_Controller.change_to_complete_anime) // => delete from on going and remove to complete anime

module.exports = router;