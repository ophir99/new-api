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

exports.update = (req, res)=>{
    post.update({
        _id: req.params.id
    }, {
        $set:{
            text: req.body.tweet
        }
    })
    .then(
        result => {
            res.send({result})
        }
    )
    .catch(
        err =>{
            res.status(500).send({err})
        }
    )
}

exports.delete = (req, res)=>{
    post.deleteOne({
        _id: req.params.id
    })
    .then(result => res.send({result}))
    .catch(err => res.status(500).send({err}))
}