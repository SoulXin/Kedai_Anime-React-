const Download = require('../Model/Download/Download')

exports.check_download = (req,res) => {
    var link = req.params.link;
    Download.findOne({
        where : {
            link_download : link
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}