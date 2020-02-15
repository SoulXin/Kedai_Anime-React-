const Zippyshare = require('../../Model/Complete/Zippyshare')
const Anime_Download = require('../../Model/Download/Download')
const Link_Download = require('../../Model/Download/Link_Download')
const randomstring = require("randomstring");

exports.add_zippyshare = (req,res) => {
    var complete_id = req.params.complete_id;
    var random_string_link_1 = randomstring.generate({
        length: 12,
        charset: 'alphanumeric'
    })  + Date.now() ;

    var random_string_link_2 = randomstring.generate({
        length: 11,
        charset: 'alphanumeric'
    })  + Date.now() ;
    const today = new Date();

    Zippyshare.create({
        complete_id : complete_id,
        episode : req.body.episode,
        size240 : req.body.size240,
        size360 : req.body.size360,
        size480 : req.body.size480,
        size720 : req.body.size720
    })
    .then(response => {
        res.json(response)
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

exports.check_zippyshare = (req,res) => {
    const complete_id = req.params.complete_id
    // const size = req.params.size
    Zippyshare.findAll({
        where : {
            complete_id : complete_id,
        },
        // attributes: [size]
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
    
}

exports.update_zippyshare = (req,res) => {
    var zippyshare_id = req.params.zippyshare_id;
    var complete_id = req.body.complete_id;
    const today = new Date();
    var random_string_link_1 = randomstring.generate({
        length: 12,
        charset: 'alphanumeric'
    })  + Date.now();

    var random_string_link_2 = randomstring.generate({
        length: 11,
        charset: 'alphanumeric'
    })  + Date.now();

    Zippyshare.update({
        size240 : req.body.size240,
        size360 : req.body.size360,
        size480 : req.body.size480,
        size720 : req.body.size720
    },{
        where : {
            zippyshare_id : zippyshare_id
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
                Zippyshare.findAll({
                    where : {
                        complete_id : complete_id,
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

exports.delete_zippyshare = (req,res) => {
    const zippyshare_id = req.params.zippyshare_id;

    Zippyshare.destroy({
        where : {
            zippyshare_id : zippyshare_id
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}