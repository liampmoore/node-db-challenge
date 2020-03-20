const express = require('express');

const router = express.Router()

const Resources = require('./resources-model');

router.get('/', (req, res) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({error: "Could not get resources. Server error."})
        })
})

router.post('/', (req, res) => {
    Resources.add(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({error: "Could not post resource. Server error."})
        })
})


module.exports = router;