const Comment = require("../models").Comment

const getAllComments = (req, res) => {
    console.log(req.body)
    Comment.findAll()
    .then(comments => {
        res.json(comments)
    })
}

const addComment = (req, res) => {
    Comment.create(req.body)
    .then(newComment => {
        res.json(newComment)
    })
}

module.exports = {
    addComment,
    getAllComments
}