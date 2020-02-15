const Googledrive = require('../../Model/On_Going/Googledrive')
const Anime_Download = require('../../Model/Download/Download')
const Link_Download = require('../../Model/Download/Link_Download')
const randomstring = require("randomstring");
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.add_Googledrive = (req,res) => {
    var anime_id = req.params.anime_id;
    var on_going_id = req.params.on_going_id;
    const today = new Date();
    
    var random_string_link_1 = randomstring.generate({
        length: 12,
        charset: 'alphanumeric'
    })  + Date.now() ;

    var random_string_link_2 = randomstring.generate({
        length: 11,
        charset: 'alphanumeric'
    })  + Date.now() ;

    Googledrive.create({
        anime_id : anime_id,
        on_going_id : on_going_id,
        episode : req.body.episode,
        size240 : req.body.size240,
        size360 : req.body.size360,
        size480 : req.body.size480,
        size720 : req.body.size720,
        created_at : today
    })
    .then(response_create => {
        res.json(response_create)
        // Make Unique Code
        Anime_Download.bulkCreate([
            {link_download : req.body.size240,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.size360,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.size480,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.size720,unique_string : random_string_link_1,created_at : today},
        ],{returning: true})
        .then(response => {
            // Send Unique Code to Another Db
            Link_Download.bulkCreate([
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.size240,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.size360,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.size480,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.size720,
                    created_at : today
                }
            ],{returning: true})
            .then(response => {
                Link_Download.destroy({
                    where : {
                        [Op.or] : [
                            {link_download : null},
                            {link_download : ''}
                        ]
                    }
                })
                Anime_Download.destroy({
                    where : {
                        [Op.or] : [
                            {link_download : null},
                            {link_download : ''}
                        ]
                    }
                })
            })
            .catch(error => {
                res.json(error)
            })
        })
    })
    .catch(error => {
        res.json(error)
    })
}

exports.check_Googledrive = (req,res) => {
    const anime_id = req.params.anime_id;

    Googledrive.findAll({
        where : {
            anime_id : anime_id,
        },
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
    
}

exports.update_Googledrive = (req,res) => {
    var googledrive_id = req.params.googledrive_id;
    var anime_id = req.body.anime_id;
    const today = new Date();

    var random_string_link_1 = randomstring.generate({
        length: 12,
        charset: 'alphanumeric'
    })  + Date.now() ;

    var random_string_link_2 = randomstring.generate({
        length: 11,
        charset: 'alphanumeric'
    })  + Date.now() ;

    Googledrive.update({
        size240 : req.body.size240,
        size360 : req.body.size360,
        size480 : req.body.size480,
        size720 : req.body.size720
    },{
        where : {
            googledrive_id : googledrive_id
        }
    })
    .then(response_update => {
        if(req.body.link240){
            Link_Download.destroy({
                where : {
                    link_download : req.body.link240
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.link240
                }
            })
        }else if(req.body.link360){
            Link_Download.destroy({
                where : {
                    link_download : req.body.link360
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.link360
                }
            })
        }else if(req.body.link480){
            Link_Download.destroy({
                where : {
                    link_download : req.body.link480
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.link480
                }
            })
        }else if(req.body.link720){
            Link_Download.destroy({
                where : {
                    link_download : req.body.link720
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.link720
                }
            })
        }

        Anime_Download.bulkCreate([
            {link_download : req.body.size240,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.size360,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.size480,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.size720,unique_string : random_string_link_1,created_at : today},
        ],{returning: true})
        .then(response => {
            // Send Unique Code to Another Db
            Link_Download.bulkCreate([
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.size240,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.size360,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.size480,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.size720,
                    created_at : today
                }
            ],{returning: true})
            .then(response => {
                Googledrive.findAll({
                    where : {
                        anime_id : anime_id,
                    },
                })
                .then(response => {
                    res.json(response)
                })
                .catch(error => {
                    res.json(error)
                })
                // Delete link_1 === null
                Link_Download.destroy({
                    where : {
                        link_download : null
                    }
                })
                // Delete link_download === null
                Anime_Download.destroy({
                    where : {
                        link_download : null
                    }
                })
            })
            .catch(error => {
                res.json(error)
            })
        })
    })
    .catch(error => {
        res.json(error)
    })
}