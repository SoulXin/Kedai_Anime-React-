const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const List_Of_Anime = require('./Model/List_Of_Anime')
const Complete_Anime = require('./Model/Complete_Anime')
const On_Going_Anime = require('./Model/On_Going_Anime')
const Genre = require('./Model/Genre')
const Googledrive = require('./Model/Complete/Googledrive')
const Zippyshare = require('./Model/Complete/Zippyshare')
const Batch = require('./Model/Complete/Batch')
const On_Going_Googledrive = require('./Model/On_Going/Googledrive')
const On_Going_Zippyshare = require('./Model/On_Going/Zippyshare')

// //Database
require('./Database/db');

// CORS
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    if(req.method === "OPTIONS"){
        res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
        return res.status(200).json({});
    }
    next();
})


//Body-Parse
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Image
app.use('/images', express.static(__dirname + '/Uploads/Image/'))

//Associations
List_Of_Anime.hasOne(Complete_Anime,{as : 'Complete_Anime',foreignKey : 'anime_id'})
List_Of_Anime.hasOne(On_Going_Anime,{as : 'On_Going_Anime',foreignKey : 'anime_id'})

List_Of_Anime.hasMany(On_Going_Googledrive,{as : 'On_Going_Googledrive',foreignKey : 'anime_id'})
List_Of_Anime.hasMany(On_Going_Zippyshare,{as : 'On_Going_Zippyshare',foreignKey : 'anime_id'})

Complete_Anime.hasOne(Batch,{as : 'Batch',foreignKey : 'complete_id'})
Complete_Anime.hasMany(Googledrive,{as : 'Googledrive',foreignKey : 'complete_id'})
Complete_Anime.hasMany(Zippyshare,{as : 'Zippyshare',foreignKey : 'complete_id'})

On_Going_Anime.hasMany(On_Going_Googledrive,{as : 'On_Going_Googledrive',foreignKey : 'on_going_id'})
On_Going_Anime.hasMany(On_Going_Zippyshare,{as : 'On_Going_Zippyshare',foreignKey : 'on_going_id'})

Genre.belongsTo(List_Of_Anime,{as : 'List_Of_Anime',foreignKey : 'anime_id'})

On_Going_Anime.belongsTo(List_Of_Anime,{as : 'List_Of_Anime',foreignKey : 'anime_id'})
Complete_Anime.belongsTo(List_Of_Anime,{as : 'List_Of_Anime',foreignKey : 'anime_id'})

//Routers
// List_Of_Anime
app.use('/anime',require('./Router/List_Of_Anime'))
// Genre
app.use('/genre',require('./Router/Genre'))
// On_Going_Anime
app.use('/ongoing',require('./Router/On_Going_Anime'))
// Complete_Anime
app.use('/complete',require('./Router/Complete_Anime'))
// Batch
app.use('/batch',require('./Router/Complete/Batch'))
// Zippyshare
app.use('/zippyshare',require('./Router/Complete/Zippyshare'))
app.use('/on_going_zippyshare',require('./Router/On_Going/Zippyshare'))
// Googledrive
app.use('/googledrive',require('./Router/Complete/Googledrive'))
app.use('/on_going_googledrive',require('./Router/On_Going/Googledrive'))
// Download
app.use('/download',require('./Router/Download'))

const PORT  = process.env.PORT || 5000;
app.listen(PORT,console.log(`SERVER ${PORT}`))