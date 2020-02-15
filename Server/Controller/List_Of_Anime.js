const List_Of_Anime = require('../Model/List_Of_Anime')
const Complete_Anime = require('../Model/Complete_Anime')
const Googledrive = require('../Model/Complete/Googledrive')
const Zippyshare = require('../Model/Complete/Zippyshare')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Batch = require('../Model/Complete/Batch')
const On_Going_Anime = require('../Model/On_Going_Anime')
const fs = require('fs')
const On_Going_Googledrive = require('../Model/On_Going/Googledrive')
const On_Going_Zippyshare = require('../Model/On_Going/Zippyshare')

exports.add_list_of_anime = (req,res) => {
    const today = new Date();
    if(!req.files){
        List_Of_Anime.create({
            name : req.body.name,
            description : req.body.description,
            complete : req.body.complete,
            genre : req.body.genre,
            rating : req.body.rating,
            studio : req.body.studio,
            created_at : today,
            updated_at : today
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else{
        List_Of_Anime.create({
            name : req.body.name,
            image : req.files['image'][0].filename, // => its array
            image_detail : req.files['image_detail'][0].filename, // => its array
            description : req.body.description,
            genre : req.body.genre,
            complete : req.body.complete,
            rating : req.body.rating,
            studio : req.body.studio,
            created_at : today,
            updated_at : today
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }
}

exports.delete_list_of_anime = (req,res) => {
    List_Of_Anime.destroy({
        where : {
            anime_id : req.params.anime_id
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.update_list_of_anime = (req,res) => {
    if(req.files['image']){
        List_Of_Anime.update({
            name : req.body.name,
            description : req.body.description,
            genre : req.body.genre,
            rating : req.body.rating,
            studio : req.body.studio,
            image :  req.files['image'][0].filename
        },{
            where : {
                anime_id : req.params.anime_id
            }
        })
        .then(response => {
            List_Of_Anime.findOne({
                where : {
                    anime_id : req.params.anime_id
                }
            })
            .then(response => {
                res.json(response)
            })
            .catch(error => {
                res.json(error)
            })
        })
        .catch(error => {
            res.json(error)
        })
    }else if(req.files['image_detail']){
        List_Of_Anime.update({
            name : req.body.name,
            description : req.body.description,
            genre : req.body.genre,
            rating : req.body.rating,
            studio : req.body.studio,
            image_detail : req.files['image_detail'][0].filename
        },{
            where : {
                anime_id : req.params.anime_id
            }
        })
        .then(response => {
            List_Of_Anime.findOne({
                where : {
                    anime_id : req.params.anime_id
                }
            })
            .then(response => {
                res.json(response)
            })
            .catch(error => {
                res.json(error)
            })
        })
        .catch(error => {
            res.json(error)
        })
    }else{
        List_Of_Anime.update({
            name : req.body.name,
            description : req.body.description,
            genre : req.body.genre,
            rating : req.body.rating,
            studio : req.body.studio
        },{
            where : {
                anime_id : req.params.anime_id
            }
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }
}

exports.search_list_of_anime = (req,res) => {
    var name = req.params.name;
    List_Of_Anime.findAll({
        where : {
            name : {
                [Op.substring] : name,
                [Op.regexp]:'^[a-zA-Z0-9]',
                [Op.notRegexp]: '^[$&+,:;=?@#|"<>.^*()[]%!-]'
            }
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.detail_search_list_of_anime = (req,res) => {
    var name = req.params.name;
    var anime_id = req.params.anime_id;

    List_Of_Anime.findOne({
        where : {
            anime_id : anime_id,
            name : {
                [Op.substring] : name,
                [Op.regexp]:'^[a-zA-Z0-9]',
                [Op.notRegexp]: '^[$&+,:;=?@#|"<>.^*()[]%!-]'
            }
        }
    })
    .then(response => {
        if(response.complete){
            List_Of_Anime.findOne({
                where : {
                    anime_id : response.anime_id,
                    name : response.name
                },
                include : [
                    {model : Complete_Anime , as : 'Complete_Anime',
                        include : [
                                {model : Batch, as :'Batch'},
                                {model : Googledrive, as : 'Googledrive'},
                                {model : Zippyshare, as : 'Zippyshare'}
                        ]},
                ]
            })
            .then(response => {
                res.json(response)
            })
            .catch(error => {
                res.json(error)
            })
        }else{
            List_Of_Anime.findOne({
                where : {
                    anime_id : response.anime_id,
                    name : response.name
                },
                include : [
                    {model : On_Going_Anime , as : 'On_Going_Anime'},
                    {model : On_Going_Googledrive, as : 'On_Going_Googledrive'},
                    {model : On_Going_Zippyshare,as : 'On_Going_Zippyshare'}
                ]
            })
            .then(response => {
                res.json(response)
            })
            .catch(error => {
                res.json(error)
            })
        }
    })
    .catch(error => {
        res.json(error)
    })
}

exports.delete_image = (req,res) => {
    var image = req.body.image;
    var filePath = '../../Anime/Server/Uploads/Image/' + image; 

    fs.unlink(filePath,function(err){
        if(err){
            res.json(err)
        }else{
            res.status(200).json("Cover Berhasil di Hapus")
        }
    })
}

exports.delete_image_detail = (req,res) => {
    var image_detail = req.body.image_detail;
    var filePath = '../../Anime/Server/Uploads/Image/' + image_detail; 

    fs.unlink(filePath,function(err){
        if(err){
            res.json(err)
        }else{
            res.status(200).json("Detail Berhasil di Hapus")
        }
    })
}