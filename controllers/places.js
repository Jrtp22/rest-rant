const router = require('express').Router()

router.get('/', (req, res) => {
    res.send(' all the places')
})

module.exports = router
