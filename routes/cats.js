const express = require('express')
const router = express.Router()
//router is like a mini applicaiton instead of the app object

//if we wanted all of this to go through a middlware first we can use
router.use((req,res,next) => {
    console.log(req.url, '@', Date.now())
    next()
})

router
    .route('/cats')
    .get((req, res) => {
        res.send('pages for cats')
    })
    .delete((req, res) => {
        res.send('deleted')
    })




module.exports = router