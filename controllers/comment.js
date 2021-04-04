const Comment = require("../models").Comment

const addComment = (req, res) => {
    Comment.create(req.body)
    .then(newComment => {
        res.json(newComment)
    })
}

module.exports = {
    addComment
}