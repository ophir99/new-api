const post = require('./../model/post');

exports.create = (req, res)=>{
    const Post = new post({
        text: req.body.text,
        date: req.body.date
    });

    Post.save()
        .then(
            (result)=>{
                res.send({result})
            }
        )
        .catch(
            (err)=>{
                res.status(500).send({err})
            }
        )
}


exports.fetchAll = (req, res)=>{
    post.find()
        .then(result => res.send({result}))
        .catch(err => res.status(500).send(err))
}