const express = require('express');

const router = express.Router()

const Resources = require('./resources-model');

router.get('/', (req, res) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({error: "Could not get resources. Server error."})
        })
})


module.exports = router;