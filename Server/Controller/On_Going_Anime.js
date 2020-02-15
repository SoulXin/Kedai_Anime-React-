const On_Going_Anime = require('../Model/On_Going_Anime')
const List_Of_Anime = require('../Model/List_Of_Anime')
const Complete_Anime = require('../Model/Complete_Anime')
const On_Going_Googledrive = require('../Model/On_Going/Googledrive')
const On_Going_Zippyshare = require('../Model/On_Going/Zippyshare')

exports.add_OnGoingAnime = (req,res) => {
    var anime_id = req.params.anime_id;
    const today = new Date();
    
    On_Going_Anime.create({
        anime_id : anime_id,
        episode : req.body.episode,
        created_at : today
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.check_OnGoingAnime_Main = (req,res) => {
    On_Going_Anime.findAll({
        limit : 8,
        include : [
            {model : List_Of_Anime,as : 'List_Of_Anime'},
            {model : On_Going_Googledrive,as : 'On_Going_Googledrive'}
        ],
        order : [['created_at','DESC']]
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.check_OnGoingAnime = (req,res) => {
    On_Going_Anime.findAll({
        include : [{model : List_Of_Anime,as : 'List_Of_Anime'}],
        order : [['created_at','DESC']]
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.check_detail_OnGoingAnime = (req,res) => {
    var anime_id = req.params.anime_id;
    var name = req.params.name;

    List_Of_Anime.findOne({
        where : {
            anime_id : anime_id,
            name : name
        },
        include : [
            {model : On_Going_Anime , as : 'On_Going_Anime',
                include : [
                    {model : On_Going_Googledrive, as : 'On_Going_Googledrive'},
                    {model : On_Going_Zippyshare, as : 'On_Going_Zippyshare'}
                ]
            },
        ]
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.carousel_OnGoingAnime = (req,res) => {
    var anime_id = req.params.anime_id;
    On_Going_Anime.findAll({
        where : {
            anime_id : anime_id
        },
        include : [{model : List_Of_Anime,as : 'List_Of_Anime'}]
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.check_ongoing_developer = (req,res) => {
    List_Of_Anime.findAll({
        where : {
            complete : 0
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.check_detail_OnGoingAnime_client = (req,res) => {
    var anime_id = req.params.anime_id;
    var name = req.params.name;
    var on_going_id = req.params.on_going_id;

    List_Of_Anime.findOne({
        where : {
            anime_id : anime_id,
            name : name
        },
        include : [
            {model : On_Going_Anime , as : 'On_Going_Anime',where : {on_going_id : on_going_id}},
            {model : On_Going_Googledrive, as : 'On_Going_Googledrive',where : {on_going_id : on_going_id}},
            {model : On_Going_Zippyshare, as : 'On_Going_Zippyshare',where : {on_going_id : on_going_id}}
        ]
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.delete_on_going = (req,res) => {
    var on_going_id = req.params.on_going_id;

    On_Going_Anime.destroy({
        where : {
            on_going_id : on_going_id
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.change_to_complete_anime = (req,res) => {
    var anime_id = req.params.anime_id;
    const today = new Date();

    On_Going_Anime.destroy({
        where : {
            anime_id : anime_id
        }
    })
    .then(response => {
        // List Of Anime
        List_Of_Anime.update({
            complete : 1
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

        // Complete Anime
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
    })
    .catch(error => {
        res.json(error)
    })

}