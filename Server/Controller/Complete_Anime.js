const Complete_Anime = require('../Model/Complete_Anime')
const List_Of_Anime = require('../Model/List_Of_Anime')
const Batch = require('../Model/Complete/Batch')
const Googledrive = require('../Model/Complete/Googledrive')
const Zippyshare = require('../Model/Complete/Zippyshare')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.add_CompleteAnime = (req,res) => {
    var anime_id = req.params.anime_id;
    const today = new Date();
    
    Complete_Anime.create({
        anime_id : anime_id,
        created_at : today
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}



exports.check_CompleteAnime = (req,res) => {
    Complete_Anime.findAll({
        include : [{model : List_Of_Anime,as : 'List_Of_Anime'},{model : Batch,as : 'Batch'}],
        order : [['created_at','DESC']]
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.check_CompleteAnime_Main = (req,res) => {
    Complete_Anime.findAll({
        limit : 8,
        include : [{model : List_Of_Anime,as : 'List_Of_Anime'},{model : Batch,as : 'Batch'}],
        order : [['created_at','DESC']]
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.check_detail_CompleteAnime = (req,res) => {
    var anime_id = req.params.anime_id;
    var name = req.params.name;
    List_Of_Anime.findOne({
        where : {
            anime_id : anime_id,
            name : name
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
}

exports.check_complete_developer = (req,res) => {
    List_Of_Anime.findAll({
        where : {
            complete : 1
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.up_to_date_complete_developer = (req,res) => {
    var anime_id = req.params.anime_id;
    const today = new Date();
    
    Complete_Anime.update({
        created_at : today
    },{
        where : {
            anime_id : anime_id
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}