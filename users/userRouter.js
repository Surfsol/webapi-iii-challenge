const express = require('express');
const router = express.Router()
//bring in model
const userModel = require('./userDb') 
const postsModel = require('../posts/postDb')

const knex = require('../data/seeds/03-posts')


//name of user
router.post('/', validateUser, (req, res) => {
    
        userModel 
            .insert(postBody)
            .then((user => {
                res.status(201).json(user)
            }))
            .catch(error => {
                res.status(500).json({ error: "There was an error while saving the user to the database" })
            })
    }
);


// router.post('/', (req, res) => {
//     const postBody = req.body
//     if(!postBody.name){
//         res.status(400).json({ errorMessage: "Please provide name for the post." })
//     } else {
//         userModel 
//             .insert(postBody)
//             .then((user => {
//                 res.status(201).json(user)
//             }))
//             .catch(error => {
//                 res.status(500).json({ error: "There was an error while saving the user to the database" })
//             })
//     }
// });

//seems might not be included because dont see anything in db
router.post('/:id/posts', validatePost, validateUserId, (req, res) => {
    const id =  req.params.id
    const postBody = req.body
    postBody.user_id = req.params.id
    if(!id){
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    } else {
        postsModel
            .insert(postBody)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(error => {
                res.status(500).json({ error: "There was an error while saving the comment to the database" })
            })
    }
});

router.get('/', (req, res) => {
    userModel
        .get()
        .then(users => {
            res.json(users)
        })
        .catch(error =>
            res.status(500).json(error))

});

router.get('/:id', (req, res) => {
    const id = req.params.id
    if(!id){
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else {
        userModel
            .getById(id)
            .then(users => {
                res.json(users)
            })
            .catch(error => {
                res.status(500).json({ error: "The user information could not be retrieved." })
            })
    }

});

router.get('/:id/posts', validateUserId, (req, res) => {
    const id = req.params.id
    if(!id){
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else {
        userModel
            .getUserPosts(id)
            .then(posts => {
                res.json(posts)
            })
            .catch(error => {
                res.status(500).json({ error: "The user's posts could not be retrieved." })
            })
    }

});

router.delete('/:id', (req, res) => {
    const id = req.params.id
    if(!id){
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else {
        userModel
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
        userModel
            .update(id, updateBody)
            .then(users => {
                res.status(200).json(users)
            })
            .catch(error => {
                res.status(500).json({ error: "The user information could not be modified." })
            })
    }

});

//custom middleware

//need to store as req.user
function validateUserId(req, res, next) {
    const id = req.body.user_id
    if(!id){
        res.status(404).json({ message: "Invalid user" })
    } else {
        req.user = id
    }

    next()

};


function validateUser(req, res, next) {
    const postBody = req.body
    if(!postBody){
        res.status(400).json({ errorMessage: "Please provide name for the user." })
    } else if(!postBody.name){
        res.status(400).json({message: "missing required name field from middleware" })
    }

    next()
};

function validatePost(req, res, next) {
    const postBody = req.body
    if(!postBody){
        res.status(400).json({ errorMessage: "missing post data" })
    } else if (!postBody.text){
        res.status(400).json({ errorMessage: "Please provide text for the post." })
    }

    next() 
};

module.exports = router;

