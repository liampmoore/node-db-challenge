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

router.post('/', (req, res) => {
    Tasks.add(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({error: "Could not post task. Server error."})
        })
})


module.exports = router;