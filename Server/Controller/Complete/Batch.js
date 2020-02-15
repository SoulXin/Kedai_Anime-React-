const Batch = require('../../Model/Complete/Batch')
const Anime_Download = require('../../Model/Download/Download')
const Link_Download = require('../../Model/Download/Link_Download')
const randomstring = require("randomstring");
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.add_Batch = (req,res) => {
    var complete_id = req.params.complete_id;
    Batch.create({
        complete_id : complete_id,
        gd_size240 : req.body.gd_size240,
        gd_size360 : req.body.gd_size360,
        gd_size480 : req.body.gd_size480,
        gd_size720 : req.body.gd_size720,
        zs_size240 : req.body.zs_size240,
        zs_size360 : req.body.zs_size360,
        zs_size480 : req.body.zs_size480,
        zs_size720 : req.body.zs_size720
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.update_Batch = (req,res) => {
    var complete_id = req.params.complete_id;
    const today = new Date();
    var random_string_link_1 = randomstring.generate({
        length: 12,
        charset: 'alphanumeric'
    })  + Date.now();

    var random_string_link_2 = randomstring.generate({
        length: 11,
        charset: 'alphanumeric'
    })  + Date.now();
    Batch.update({
        gd_size240 : req.body.gd_size240,
        gd_size360 : req.body.gd_size360,
        gd_size480 : req.body.gd_size480,
        gd_size720 : req.body.gd_size720,
        zs_size240 : req.body.zs_size240,
        zs_size360 : req.body.zs_size360,
        zs_size480 : req.body.zs_size480,
        zs_size720 : req.body.zs_size720
    },{
        where : {
            complete_id : complete_id
        }
    })
    .then(response => {
        if(req.body.gd_link240){
            Link_Download.destroy({
                where : {
                    link_download : req.body.gd_link240
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.gd_link240
                }
            })
        }else if(req.body.gd_link360){
            Link_Download.destroy({
                where : {
                    link_download : req.body.gd_link360
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.gd_link360
                }
            })
        }else if(req.body.gd_link480){
            Link_Download.destroy({
                where : {
                    link_download : req.body.gd_link480
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.gd_link480
                }
            })
        }else if(req.body.gd_link720){
            Link_Download.destroy({
                where : {
                    link_download : req.body.gd_link720
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.gd_link720
                }
            })
        }else if(req.body.zs_link240){
            Link_Download.destroy({
                where : {
                    link_download : req.body.zs_link240
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.zs_link240
                }
            })
        }else if(req.body.zs_link360){
            Link_Download.destroy({
                where : {
                    link_download : req.body.zs_link360
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.zs_link360
                }
            })
        }else if(req.body.zs_link480){
            Link_Download.destroy({
                where : {
                    link_download : req.body.zs_link480
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.zs_link480
                }
            })
        }else if(req.body.zs_link720){
            Link_Download.destroy({
                where : {
                    link_download : req.body.zs_link720
                }
            })
            Anime_Download.destroy({
                where : {
                    link_download : req.body.zs_link720
                }
            })
        }

        Anime_Download.bulkCreate([
            {link_download : req.body.gd_size240,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.gd_size360,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.gd_size480,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.gd_size720,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.zs_size240,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.zs_size360,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.zs_size480,unique_string : random_string_link_1,created_at : today},
            {link_download : req.body.zs_size720,unique_string : random_string_link_1,created_at : today},
        ],{returning: true})
        .then(response => {
            // Send Unique Code to Another Db
            Link_Download.bulkCreate([
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.gd_size240,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.gd_size360,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.gd_size480,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.gd_size720,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.zs_size240,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.zs_size360,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.zs_size480,
                    created_at : today
                },
                {
                    link_1 : random_string_link_1,
                    link_2 : random_string_link_2,
                    link_download : req.body.zs_size720,
                    created_at : today
                }
            ],{returning: true})
            .then(response => {
                Batch.findOne({
                    where : {
                        complete_id : complete_id
                    }
                })
                .then(response => {
                    res.json(response)
                })
                .catch(error => {
                    res.json(error)
                })
                Link_Download.destroy({
                    where : {
                        link_download : null
                    }
                })
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

exports.check_batch = (req,res) => {
    var complete_id = req.params.complete_id;

    Batch.findOne({
        where : {
            complete_id : complete_id
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}