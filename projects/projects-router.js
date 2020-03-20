const express = require('express');

const router = express.Router()

const Projects = require('./projects-model');

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({error: "Could not get projects. Server error."})
        })
})

router.post('/', (req, res) => {
    Projects.add(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({error: "Could not post project. Server error."})
        })
})


module.exports = router;