const express = require('express');

const router = express.Router()

const Tasks = require('./tasks-model');

router.get('/', (req, res) => {
    Tasks.get()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({error: "Could not get tasks. Server error."})
        })
})


module.exports = router;