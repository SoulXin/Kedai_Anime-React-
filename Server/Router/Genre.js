const express = require('express');
const router = express.Router();
const genre_Controller = require('../Controller/Genre')

// Client
router.post("/add_genre/:anime_id",genre_Controller.add_Genre)    // => add genre
router.get("/search_genre/:genre",genre_Controller.search_genre)    // => search genre
router.put("/update_genre/:genre/:status/:anime_id",genre_Controller.update_genre)  // => update genre

// Developer
router.get("/check_genre/:anime_id",genre_Controller.check_genre)
module.exports = router;