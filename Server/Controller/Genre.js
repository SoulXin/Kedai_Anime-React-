const Genre = require('../Model/Genre')
const List_Of_Anime = require('../Model/List_Of_Anime')

exports.add_Genre = (req,res) => {
    var anime_id = req.params.anime_id;
    Genre.findOne({
        where : {
            anime_id : anime_id
        }
    })
    .then(response => {
        if(response){
            res.status(400).json("Data sudah ada")
        }else{
            Genre.create({
                anime_id : anime_id,
                action : req.body.action,
                romance : req.body.romance,
                comedy : req.body.comedy,
                adventure : req.body.adventure,
                drama : req.body.drama,
                slice_of_life : req.body.slice_of_life,
                fantasy : req.body.fantasy,
                supernatural : req.body.supernatural,
                horor : req.body.horor,
                mystery : req.body.mystery,
                psychological : req.body.psychological,
                sci_fi : req.body.sci_fi,
                mecha : req.body.mecha,
                harem : req.body.harem,
                reverse_harem : req.body.reverse_harem,
                isekai : req.body.isekai,
                reverse_isekai : req.body.reverse_isekai,
                demons : req.body.demons,
                game : req.body.game,
                ecchi : req.body.ecchi,
                historical : req.body.historical,
                kids : req.body.kids,
                martial_art : req.body.martial_art,
                josei : req.body.josei,
                cyberpunk : req.body.cyberpunk,
                post_apocalyptic : req.body.post_apocalyptic,
                police : req.body.police,
                parody : req.body.parody,
                music : req.body.music,
                school : req.body.school,
                super_power : req.body.super_power,
                space : req.body.space,
                shounen : req.body.shounen,
                shoujo : req.body.shoujo,
                seinen : req.body.seinen,
                sports : req.body.sports,
                tragedy : req.body.tragedy,
                vampire : req.body.vampire,
                yaoi : req.body.yaoi,
                yuri : req.body.yuri,
                magic : req.body.magic,
                military : req.body.military,
            })
            .then(response => {
                res.json(response)
            })
            .catch(error => {
                res.json(error)
            })
        }
    })
}

exports.search_genre = (req,res) => {
    var genre_type = req.params.genre;
    if(genre_type === "action"){
        Genre.findAll({
            where : { action : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "romance"){
        Genre.findAll({
            where : { romance : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "comedy"){
        Genre.findAll({
            where : { comedy : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "adventure"){
        Genre.findAll({
            where : { adventure : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "drama"){
        Genre.findAll({
            where : { drama : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "slice of life"){
        Genre.findAll({
            where : { slice_of_life : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "fantasy"){
        Genre.findAll({
            where : { fantasy : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "supernatural"){
        Genre.findAll({
            where : { supernatural : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "horor"){
        Genre.findAll({
            where : { horor : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "mystery"){
        Genre.findAll({
            where : { mystery : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "psychological"){
        Genre.findAll({
            where : { psychological : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "sci fi"){
        Genre.findAll({
            where : { sci_fi : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "mecha"){
        Genre.findAll({
            where : { mecha : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "harem"){
        Genre.findAll({
            where : { harem : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "reverse harem"){
        Genre.findAll({
            where : { reverse_harem : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "isekai"){
        Genre.findAll({
            where : { isekai : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "reverse isekai"){
        Genre.findAll({
            where : { reverse_isekai : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "demons"){
        Genre.findAll({
            where : { demons : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "game"){
        Genre.findAll({
            where : { game : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "ecchi"){
        Genre.findAll({
            where : { ecchi : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "historical"){
        Genre.findAll({
            where : { historical : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "kids"){
        Genre.findAll({
            where : { kids : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "martial art"){
        Genre.findAll({
            where : { martial_art : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "josei"){
        Genre.findAll({
            where : { josei : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "cyberpunk"){
        Genre.findAll({
            where : { cyberpunk : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "post apocalyptic"){
        Genre.findAll({
            where : { post_apocalyptic : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "police"){
        Genre.findAll({
            where : { police : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "parody"){
        Genre.findAll({
            where : { parody : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "music"){
        Genre.findAll({
            where : { music : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "school"){
        Genre.findAll({
            where : { school : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "super power"){
        Genre.findAll({
            where : { super_power : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "space"){
        Genre.findAll({
            where : { space : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "shounen"){
        Genre.findAll({
            where : { shounen : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "shoujo"){
        Genre.findAll({
            where : { shoujo : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "seinen"){
        Genre.findAll({
            where : { seinen : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "sports"){
        Genre.findAll({
            where : { sports : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "tragedy"){
        Genre.findAll({
            where : { tragedy : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "vampire"){
        Genre.findAll({
            where : { vampire : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "yaoi"){
        Genre.findAll({
            where : { yaoi : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "yuri"){
        Genre.findAll({
            where : { yuri : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "magic"){
        Genre.findAll({
            where : { magic : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(genre_type === "military"){
        Genre.findAll({
            where : { military : 1},
            include : [{model : List_Of_Anime , as : 'List_Of_Anime'}]
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else{
        res.json(error)
    }
}

exports.update_genre = (req,res) => {
    var anime_id = req.params.anime_id;
    var genre = req.params.genre;
    var status = req.params.status;
    if(genre === "action"){
        Genre.update({
            action : status,
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
    }else if(genre === "romance"){
        Genre.update({
            romance : status,
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
    }else if(genre === "comedy"){
        Genre.update({
            comedy : status,
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
    }else if(genre === "adventure"){
        Genre.update({
            adventure : status,
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
    }else if(genre === "drama"){
        Genre.update({
            drama : status,
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
    }else if(genre === "slice_of_life"){
        Genre.update({
            slice_of_life : status,
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
    }else if(genre === "fantasy"){
        Genre.update({
            fantasy : status,
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
    }else if(genre === "supernatural"){
        Genre.update({
            supernatural : status,
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
    }else if(genre === "horor"){
        Genre.update({
            horor : status,
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
    }else if(genre === "mystery"){
        Genre.update({
            mystery : status,
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
    }else if(genre === "psychological"){
        Genre.update({
            psychological : status,
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
    }else if(genre === "sci_fi"){
        Genre.update({
            sci_fi : status,
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
    }else if(genre === "mecha"){
        Genre.update({
            mecha : status,
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
    }else if(genre === "harem"){
        Genre.update({
            harem : status,
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
    }else if(genre === "reverse_harem"){
        Genre.update({
            reverse_harem : status,
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
    }else if(genre === "isekai"){
        Genre.update({
            isekai : status,
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
    }else if(genre === "reverse_isekai"){
        Genre.update({
            reverse_isekai : status,
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
    }else if(genre === "demons"){
        Genre.update({
            demons : status,
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
    }else if(genre === "game"){
        Genre.update({
            game : status,
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
    }else if(genre === "ecchi"){
        Genre.update({
            ecchi : status,
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
    }else if(genre === "historical"){
        Genre.update({
            historical : status,
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
    }else if(genre === "kids"){
        Genre.update({
            kids : status,
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
    }else if(genre === "martial_art"){
        Genre.update({
            martial_art : status,
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
    }else if(genre === "josei"){
        Genre.update({
            josei : status,
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
    }else if(genre === "cyberpunk"){
        Genre.update({
            cyberpunk : status,
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
    }else if(genre === "post_apocalyptic"){
        Genre.update({
            post_apocalyptic : status,
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
    }else if(genre === "police"){
        Genre.update({
            police : status,
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
    }else if(genre === "parody"){
        Genre.update({
            parody : status,
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
    }else if(genre === "music"){
        Genre.update({
            music : status,
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
    }else if(genre === "school"){
        Genre.update({
            school : status,
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
    }else if(genre === "super_power"){
        Genre.update({
            super_power : status,
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
    }else if(genre === "space"){
        Genre.update({
            space : status,
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
    }else if(genre === "shounen"){
        Genre.update({
            shounen : status,
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
    }else if(genre === "shoujo"){
        Genre.update({
            shoujo : status,
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
    }else if(genre === "seinen"){
        Genre.update({
            seinen : status,
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
    }else if(genre === "sports"){
        Genre.update({
            sports : status,
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
    }else if(genre === "tragedy"){
        Genre.update({
            tragedy : status,
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
    }else if(genre === "vampire"){
        Genre.update({
            vampire : status,
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
    }else if(genre === "yaoi"){
        Genre.update({
            yaoi : status,
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
    }else if(genre === "yuri"){
        Genre.update({
            yuri : status,
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
    }else if(genre === "magic"){
        Genre.update({
            magic : status,
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
    }else if(genre === "military"){
        Genre.update({
            military : status,
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


}

exports.check_genre = (req,res) => {
    var anime_id = req.params.anime_id;

    Genre.findOne({
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