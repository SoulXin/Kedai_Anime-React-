const express = require('express')
const router = express.Router()
const multer = require('multer')
const list_of_anime_Controller = require('../Controller/List_Of_Anime')


var storageImage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, __dirname + '../../Uploads/Image/')
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + '_' + file.originalname)
    }
})
var uploadImage = multer({storage : storageImage})

router.post("/add_list_of_anime",uploadImage.fields([{name : 'image' , maxCount : 1}, {name : 'image_detail' , maxCount : 1}]),list_of_anime_Controller.add_list_of_anime) // => Add New Anime
router.put("/update_list_of_anime/:anime_id",uploadImage.fields([{name : 'image' , maxCount : 1}, {name : 'image_detail' , maxCount : 1}]),list_of_anime_Controller.update_list_of_anime) // => Update Anime
router.delete("/delete_list_of_anime/:anime_id",list_of_anime_Controller.delete_list_of_anime) // => Delete Anime

router.post("/delete_image",list_of_anime_Controller.delete_image)  // => Delete Cover Anime
router.post("/delete_image_detail",list_of_anime_Controller.delete_image_detail)    // => Delete Detail Anime

router.get("/search_list_of_anime/:name",list_of_anime_Controller.search_list_of_anime) // => Search Anime
router.get("/detail_search_list_of_anime/:anime_id/:name",list_of_anime_Controller.detail_search_list_of_anime) // => detail search anime

module.exports = router;