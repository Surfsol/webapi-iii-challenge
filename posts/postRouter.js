const express = require('express');

const router = express.Router();

const postModel = require('./postDb')

router.get('/', (req, res) => {
    postModel
        .get()
        .then(posts => {
            res.json(posts)
        })
        .catch(error =>
            res.status(500).json(error))
});

router.get('/:id', validatePostId, (req, res) => {
    const id = req.params.id
        postModel
            .getById(id)
            .then(posts => {
                res.json(posts)
            })
            .catch(error => {
                res.status(500).json({ error: "The user information could not be retrieved." })
            })
    }

);

router.delete('/:id', (req, res) => {
    const id = req.params.id
    if(!id){
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else {
        postModel
            .remove(id)
            .then(users => {
                res.json(users)
            })
            .catch(error => {
                res.status(500).json({ error: "The user could not be removed" })
            })
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const  updateBody = req.body
    if(!id){
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    } else if (!updateBody){
        res.status(400).json({ errorMessage: "Please provide name for the user." })
    } else {
        postModel
            .update(id, updateBody)
            .then(users => {
                res.status(200).json(users)
            })
            .catch(error => {
                res.status(500).json({ error: "The user information could not be modified." })
            })
    }

});

// custom middleware



function validatePostId(req, res, next) {
    const id = req.params.id
    if(!id){
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } 

    next()

};

module.exports = router;

