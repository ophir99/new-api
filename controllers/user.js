const User = require('./../model/user');
const jwt = require('jsonwebtoken');


exports.createUser = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    const promise = new User(user)

    promise.save().then(
        (result) => {
            res.send({ result })
        }
    )
        .catch(
            (err) => {
                res.send({ err })
            }
        )
}
exports.login = (req, res) => {
    
    User.find({
        email: req.body.email,
        password: req.body.password
    }).then(
        (result) => {

            if (result.length <= 0) {
                res.status(500).send({ err: "User not found" })
            }
            else {
                console.log("Coming to login");
                let token_ = jwt.sign({email: req.body.email}, "SECRET", {
                    expiresIn: 86400
                })
                res.send({ result, token: token_});
            }
        }
    )
        .catch(
            (err) => {
                res.send({ err })
            }
        )
}

exports.checkUser = (req, res, next)=>{
    let token = req.headers.authorization;
    let result = jwt.verify(token, "SECRET", (err, decode)=>{
        if(err) {
            console.log("ERR", err)
            res.send({msg: "Not authenticated user"})
        };
        if(!err){
            console.log("DEF", decode)
            next();
        }
    });
}


exports.checkUsers = (req, res)=>{
    console.log("Super");
    res.send({msg: "Done"});
}