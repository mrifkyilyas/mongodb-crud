const Model = require('../models/index')
class Controller {
    static getAll(req, res) {
        Model.findAll()
        .then(users=>{
            res.status(200).json(users)
        })
        .catch(err=>{
            res.status(401).json(err)
        })
    }

    static create(req,res){
        // res.send(req.body)
        // console.log(req.body)
        Model.create(req.body)
        .then(user=>{
            res.status(200).json(user)
        })
        .catch(err=>{
            res.status(401).json(err)
        })
    }

    static update(req,res){
        // res.send(req.body)
        // console.log(req.body)
        Model.update(req.params.id,req.body)
        .then(user=>{
            res.status(200).json(user)
        })
        .catch(err=>{
            res.status(401).json(err)
        })
    }

    static deleteOne(req,res){
        // res.send(req.body)
        // console.log(req.body)
        // let id = {_id:objectId(req.params.id)}
        Model.delete(req.params.id)
        .then(user=>{
            res.status(200).json(user)
        })
        .catch(err=>{
            res.status(401).json(err)
        })
    }






}

module.exports = Controller